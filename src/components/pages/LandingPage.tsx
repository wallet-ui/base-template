"use client"

import { useContext, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { SelectedWalletAccountContext } from '@/context/SelectedWalletAccountContext'

export function LandingPage() {
  const router = useRouter()
  const [selectedWalletAccount] = useContext(SelectedWalletAccountContext)

  useEffect(() => {
    if (selectedWalletAccount) {
      router.replace('/dashboard')
    }
  }, [selectedWalletAccount, router])

  return (
    <div className="flex flex-col bg-background items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-4xl font-bold tracking-tight">
        Welcome to Solana dApp
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Connect your wallet to get started with Solana transactions
      </p>
    </div>
  )
}