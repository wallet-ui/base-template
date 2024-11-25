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
  const { chain, chains, setChain } = useSolanaChain()

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
          {chains.map(item => (
            <DropdownMenuRadioItem key={item.chain} value={item.chain} disabled={item.chain === chain.chain}>
              {item.displayName}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}