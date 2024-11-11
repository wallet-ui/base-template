"use client";

import { useContext } from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { ChainContext } from '../context/ChainContext';
import { ConnectWalletMenu } from './ConnectWalletMenu';
import { SignInMenu } from './SignInMenu';
import { ModeToggle } from './ui/theme-toggle';

export function Nav() {
  const { displayName: currentChainName, chain, setChain } = useContext(ChainContext);
  
  const currentChainBadge = (
    <Badge variant="outline" className="align-middle">
      {currentChainName}
    </Badge>
  );

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-between px-4">
        <div className="flex flex-1">
          <h1 className="text-xl font-semibold sm:text-2xl truncate">
            Solana React App{' '}
            {setChain ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="inline-flex items-center gap-1">
                  {currentChainBadge}
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuRadioGroup
                    value={chain}
                    onValueChange={(value) => {
                      setChain(value as 'solana:${string}');
                    }}
                  >
                    {process.env.REACT_EXAMPLE_APP_ENABLE_MAINNET === 'true' && (
                      <DropdownMenuRadioItem value="solana:mainnet">
                        Mainnet Beta
                      </DropdownMenuRadioItem>
                    )}
                    <DropdownMenuRadioItem value="solana:devnet">
                      Devnet
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="solana:testnet">
                      Testnet
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              currentChainBadge
            )}
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <ConnectWalletMenu>Connect Wallet</ConnectWalletMenu>
          <SignInMenu>Sign In</SignInMenu>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}