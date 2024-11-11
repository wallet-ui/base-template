"use client"

import { useContext, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { SelectedWalletAccountContext } from '@/context/SelectedWalletAccountContext'
import { AnimatedText } from '../ui/animated-text'
import { IconSailboatFill } from 'symbols-react'
import { CopyText } from '../ui/copy-text'
//import GithubStarsButton from '../GithubStarsButton'

export function LandingPage() {
  const router = useRouter()
  const [selectedWalletAccount] = useContext(SelectedWalletAccountContext)

  useEffect(() => {
    if (selectedWalletAccount) {
      router.replace('/dashboard')
    }
  }, [selectedWalletAccount, router])

  return (
    <div className="flex flex-col items-center justify-center mx-auto h-[calc(100vh-100px)] px-4 text-center">
      <div className="inline-flex ring-1 ring-foreground/10 bg-foreground/5 rounded-2xl p-2 px-4 gap-2 mb-8">
        <IconSailboatFill className="w-[16px] h-[16px] fill-foreground/50" />
        <h2 className="text-[12px] line-height-[16px] font-semibold tracking-tight text-foreground/70 font-mono">
          Start Shipping Now
        </h2>
      </div>
      <h1 className="font-mono text-5xl z-10 text-center leading-tight">
        <AnimatedText text="Production Ready Solana Starter" />
      </h1>
      <p className="mt-4 text-xl text-muted-foreground font-sans w-[650px]">
        Next 15, TurboPack, Tanstack Query, Tailwind, Shadcn UI, Solana 2.0, Wallet Standard, Plausible analytics, and fully open-source.
      </p>
      <div className="mt-10 mb-8">
        <CopyText value="bunx degit stevesarmiento/solana-starter my-solana-app" />
      </div>
      {/* <div className="flex items-center justify-center gap-x-4">
        <GithubStarsButton />
      </div> */}
    </div>
  )
}