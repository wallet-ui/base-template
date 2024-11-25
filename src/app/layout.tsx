import './globals.css'
import { type Metadata } from 'next'
import { geistSans, geistMono } from '@/lib/fonts'
import { Nav } from '@/components/Nav'
import { ThemeProvider } from '@/components/ui/theme-provicer'
import { CHAIN_CONFIG_DEVNET, CHAIN_CONFIG_LOCAL, CHAIN_CONFIG_TESTNET, SolanaProvider } from '@/solana';
import PlausibleProvider from 'next-plausible'
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Next Solana Starter",
  description: "Production Ready Solana Starter",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <PlausibleProvider domain="url goes here" />
      </head>
      <body>
        <ThemeProvider>
          <SolanaProvider chains={[CHAIN_CONFIG_DEVNET, CHAIN_CONFIG_LOCAL, CHAIN_CONFIG_TESTNET]}>
            <Nav/>
            {children}
          </SolanaProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}