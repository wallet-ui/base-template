"use client";

import { useSolanaChain } from '@/solana';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function ChainSelector() {
  const { chain, setChain } = useSolanaChain()

  const currentChainBadge = (
    <Button variant="outline">
      {chain.displayName}
    </Button>
  );

  if (!setChain) {
    return currentChainBadge;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="inline-flex items-center gap-1">
        {currentChainBadge}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup
          value={chain.chain}
          onValueChange={(value) => {
            setChain(value as `solana:${string}`);
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
  );
}