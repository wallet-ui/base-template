"use client"

import { ChainContextProvider } from '@/context/ChainContextProvider'
import { RpcContextProvider } from '@/context/RpcContextProvider'
import { SelectedWalletAccountContextProvider } from '@/context/SelectedWalletAccountContextProvider'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChainContextProvider>
      <SelectedWalletAccountContextProvider>
        <RpcContextProvider>
          {children}
        </RpcContextProvider>
      </SelectedWalletAccountContextProvider>
    </ChainContextProvider>
  )
}