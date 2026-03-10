import { useEffect, useState } from "react";

const WIDGET_BASE_URL = "https://app.donkey.support";
const WIDGET_IDLE_DELAY_MS = 8000;

interface SupportWidgetProps {
  /** Your unique account ID from Donkey Support */
  accountId: string;
  /** Visitor's email address for identification */
  email?: string;
  /** Visitor's display name */
  name?: string;
  /** Custom data to attach to the conversation (e.g. userId, plan) */
  metadata?: Record<string, any>;
  /** Signed metadata JWT for verified context */
  metadataToken?: string;
  /** Set to true to hide the floating button and control the widget programmatically */
  controlledByHost?: boolean;
  /** When controlledByHost is true, use this to open/close the widget */
  widgetIsOpen?: boolean;
}

export function SupportWidget({
  accountId,
  email,
  name,
  metadata,
  metadataToken,
  controlledByHost,
  widgetIsOpen,
}: SupportWidgetProps) {
  const [shouldLoadScript, setShouldLoadScript] = useState(false);

  useEffect(() => {
    if (controlledByHost && (window as any).SupportWidget) {
      (window as any).SupportWidget.widgetIsOpen = widgetIsOpen;
    }
  }, [controlledByHost, widgetIsOpen]);

  useEffect(() => {
    (window as any).SupportWidget = {
      accountId,
      email,
      name,
      metadata,
      metadataToken,
      controlledByHost,
      widgetIsOpen,
    };

  }, [accountId, email, name, metadata, metadataToken, controlledByHost, widgetIsOpen]);

  useEffect(() => {
    if (shouldLoadScript) return;

    if (controlledByHost || widgetIsOpen) {
      setShouldLoadScript(true);
      return;
    }

    const triggerLoad = () => {
      setShouldLoadScript(true);
    };

    const timeoutId = window.setTimeout(triggerLoad, WIDGET_IDLE_DELAY_MS);

    window.addEventListener("pointerdown", triggerLoad, { once: true, passive: true });
    window.addEventListener("keydown", triggerLoad, { once: true });
    window.addEventListener("scroll", triggerLoad, { once: true, passive: true });
    window.addEventListener("touchstart", triggerLoad, { once: true, passive: true });

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener("pointerdown", triggerLoad);
      window.removeEventListener("keydown", triggerLoad);
      window.removeEventListener("scroll", triggerLoad);
      window.removeEventListener("touchstart", triggerLoad);
    };
  }, [controlledByHost, shouldLoadScript, widgetIsOpen]);

  useEffect(() => {
    if (!shouldLoadScript) return;

    const scriptId = "support-widget-loader";
    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = WIDGET_BASE_URL + "/widget/loader.js";
    script.async = true;
    document.body.appendChild(script);
  }, [shouldLoadScript]);

  return null;
}
