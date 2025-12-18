import type { Metadata } from "next"
import { Inter, Oswald } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const oswald = Oswald({ subsets: ["latin"], variable: "--font-display" })

export const metadata: Metadata = {
    title: "TATAMI",
    description: "Plataforma de gestión para academias de artes marciales",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es">
            <body className={`${inter.variable} ${oswald.variable} font-sans antialiased`}>
                {children}
            </body>
        </html>
    )
}
