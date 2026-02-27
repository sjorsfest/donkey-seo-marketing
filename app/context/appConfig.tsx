"use client"

import { createContext, useContext, type ReactNode } from "react"

interface AppConfig {
  appUrl: string
}

const AppConfigContext = createContext<AppConfig | null>(null)
const ABSOLUTE_SCHEME_PATTERN = /^[a-z][a-z\d+\-.]*:/i

function normalizeAppUrl(appUrl: string): string {
  const trimmed = appUrl.trim()
  if (!trimmed) return trimmed

  if (ABSOLUTE_SCHEME_PATTERN.test(trimmed) || trimmed.startsWith("//")) {
    return trimmed
  }

  return `https://${trimmed.replace(/^\/+/, "")}`
}

export function AppConfigProvider({
  children,
  appUrl,
}: {
  children: ReactNode
  appUrl: string
}) {
  return (
    <AppConfigContext.Provider value={{ appUrl: normalizeAppUrl(appUrl) }}>
      {children}
    </AppConfigContext.Provider>
  )
}

export function useAppConfig() {
  const context = useContext(AppConfigContext)
  if (!context) {
    throw new Error("useAppConfig must be used within an AppConfigProvider")
  }
  return context
}
