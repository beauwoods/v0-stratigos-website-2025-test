import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Analytics from "./components/Analytics"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Stratigos Security - Cybersecurity On Budget, On Time, Without Disruption",
  description:
    "Meet your cybersecurity and regulatory needs faster and with less cost through expert guidance. Specializing in medical device security, FDA compliance, and business-focused cybersecurity solutions.",
  keywords:
    "cybersecurity consulting, medical device security, FDA cybersecurity, penetration testing, security assessment, compliance consulting",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>
          <Analytics />
          {children}
        </Suspense>
      </body>
    </html>
  )
}
