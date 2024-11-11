import '@radix-ui/themes/styles.css'
import './globals.css'
import { Theme } from '@radix-ui/themes'
import { type Metadata } from 'next'
import { Providers } from '@/components/providers/Providers'
import { Nav } from '@/components/Nav'

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
      <body>
        <Theme>
          <Providers>
            <Nav />
            {children}
          </Providers>
        </Theme>
      </body>
    </html>
  )
}