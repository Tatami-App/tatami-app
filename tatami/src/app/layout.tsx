import type React from "react"
import type { Metadata } from "next"
import { Inter, Oswald } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const oswald = Oswald({ subsets: ["latin"], variable: "--font-display" })

export const metadata: Metadata = {
  title: "TATAMI - Gestión de Academias",
  description: "Sistema de gestión para academias de MMA, Muay Thai, Boxeo y BJJ",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${oswald.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
