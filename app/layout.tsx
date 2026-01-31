import React from "react"
import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif"
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: 'Adorne Semijoias | Elegância que brilha em você',
  description: 'Descubra semijoias exclusivas com banho de ouro 18k. Anéis, brincos, colares e pulseiras para realçar sua beleza. Compre pelo WhatsApp.',
  keywords: ['semijoias', 'joias', 'brincos', 'colares', 'anéis', 'pulseiras', 'ouro 18k', 'antialérgico'],
  openGraph: {
    title: 'Adorne Semijoias | Elegância que brilha em você',
    description: 'Semijoias exclusivas com banho de ouro 18k. Compre pelo WhatsApp.',
    type: 'website',
    locale: 'pt_BR',
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} ${cormorant.variable} font-sans antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
