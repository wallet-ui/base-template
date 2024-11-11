import './globals.css'
import { type Metadata } from 'next'
import { Providers } from '@/components/providers/Providers'
import { Nav } from '@/components/Nav'
import { ThemeProvider } from '@/components/ui/theme-provicer'
import PlausibleProvider from 'next-plausible'
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: 'Solana dApp',
  description: 'Solana Wallet and Transaction Management'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <PlausibleProvider domain="url goes here" />
      </head>
      <body>
        <ThemeProvider>
          <Providers>
            <Nav />
            {children}
          </Providers>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}