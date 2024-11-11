import '@radix-ui/themes/styles.css'
import './globals.css'

import { Theme } from '@radix-ui/themes'
import { type Metadata } from 'next'

import { Nav } from '@/components/Nav'
import { ChainContextProvider } from '@/context/ChainContextProvider'
import { RpcContextProvider } from '@/context/RpcContextProvider'
import { SelectedWalletAccountContextProvider } from '@/context/SelectedWalletAccountContextProvider'

export const metadata: Metadata = {
  title: 'Wallet App',
  description: 'Wallet connection and transaction management'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Theme>
          <ChainContextProvider>
            <SelectedWalletAccountContextProvider>
              <RpcContextProvider>
                <Nav />
                {children}
              </RpcContextProvider>
            </SelectedWalletAccountContextProvider>
          </ChainContextProvider>
        </Theme>
      </body>
    </html>
  )
}