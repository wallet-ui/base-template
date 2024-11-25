"use client";

import { UiWalletAccount } from '@wallet-standard/react';
import { Button } from "@/components/ui/button";
import { WalletAccountIcon } from './wallet-account-icon';
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { DialogTrigger } from "@/components/ui/dialog";

interface WalletTriggerProps {
    selectedWalletAccount: UiWalletAccount | undefined;
    children: React.ReactNode;
    type: "dialog" | "dropdown";
}

export function WalletTrigger({ selectedWalletAccount, children, type }: WalletTriggerProps) {
    const TriggerComponent = type === "dialog" ? DialogTrigger : DropdownMenuTrigger;
    
    return (
        <TriggerComponent asChild>
            <Button variant="outline" className="gap-2">
                {selectedWalletAccount ? (
                    <>
                        <WalletAccountIcon className="w-4 h-4" account={selectedWalletAccount} />
                        <span>{selectedWalletAccount.address.slice(0, 8)}</span>
                        <ChevronDownIcon className="h-4 w-4" />
                    </>
                ) : (
                    children
                )}
            </Button>
        </TriggerComponent>
    );
}