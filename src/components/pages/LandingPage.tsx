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
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <h1 className="text-5xl tracking-tight font-sans font-bold">
            Production Ready Solana Starter
        </h1>
        <p className="mt-4 text-xl text-muted-foreground font-mono">
            Connect your wallet to see the dashboard
        </p>
    </div>
  )
}