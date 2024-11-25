"use client"

import { useSolanaWallet } from '@/solana';
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export function WalletGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [selectedWalletAccount] = useSolanaWallet()

  useEffect(() => {
    if (!selectedWalletAccount) {
      router.replace('/')
    }
  }, [selectedWalletAccount, router])

  if (!selectedWalletAccount) return null

  return children
}