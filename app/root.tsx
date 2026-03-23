import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { SupportWidget } from "./components/supportWidget/supportWidget";
import { AppConfigProvider } from "./context/appConfig";
import type { Route } from "./+types/root";
import "./app.css";
import { Analytics } from "@vercel/analytics/react"
import { BRAND_LOGO_URL, buildOrganizationJsonLd } from "./lib/seo";
import { getAllPublishedArticles } from "./lib/blog-data.server";

export async function loader() {
  const latestPosts = await getAllPublishedArticles(5);
  return {
    appUrl: process.env.APP_URL ?? "",
    latestPosts,
  };
}


export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap",
  },
  { rel: "icon", type: "image/png", href: "/favicon-32x32.png" },
  { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
  { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    ...buildOrganizationJsonLd(),
    logo: {
      "@type": "ImageObject",
      url: BRAND_LOGO_URL,
    },
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="logo" content={BRAND_LOGO_URL} />
        <meta property="og:logo" content={BRAND_LOGO_URL} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Analytics />
        <SupportWidget accountId="cmko8jp0i0000lo09ghgzcul5" />
        <Scripts />
      </body>
    </html>
  );
}

export default function App({ loaderData }: Route.ComponentProps) {
  return (
    <AppConfigProvider appUrl={loaderData.appUrl}>
      <Outlet />
    </AppConfigProvider>
  )
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
