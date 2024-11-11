"use client"

import { useContext, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { SelectedWalletAccountContext } from '@/context/SelectedWalletAccountContext'

export function WalletGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [selectedWalletAccount] = useContext(SelectedWalletAccountContext)

  useEffect(() => {
    if (!selectedWalletAccount) {
      router.replace('/')
    }
  }, [selectedWalletAccount, router])

  if (!selectedWalletAccount) return null

  return children
}