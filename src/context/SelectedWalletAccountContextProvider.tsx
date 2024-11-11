"use client";

import {
    getUiWalletAccountStorageKey,
    UiWallet,
    UiWalletAccount,
    uiWalletAccountBelongsToUiWallet,
    uiWalletAccountsAreSame,
    useWallets,
} from '@wallet-standard/react';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { useEffect, useMemo, type Dispatch, type SetStateAction } from 'react';
import { SelectedWalletAccountContext, SelectedWalletAccountState } from './SelectedWalletAccountContext';

const STORAGE_KEY = 'solana-wallet-standard-example-react:selected-wallet-and-address';

function getSavedWalletAccount(wallets: readonly UiWallet[], savedKey: string | null): UiWalletAccount | undefined {
    if (!savedKey) return undefined;
    
    const [savedWalletName, savedAccountAddress] = savedKey.split(':');
    if (!savedWalletName || !savedAccountAddress) return undefined;
    
    for (const wallet of wallets) {
        if (wallet.name === savedWalletName) {
            for (const account of wallet.accounts) {
                if (account.address === savedAccountAddress) {
                    return account;
                }
            }
        }
    }
    return undefined;
}

export function SelectedWalletAccountContextProvider({ children }: { children: React.ReactNode }) {
    const wallets = useWallets();
    const [storedKey, setStoredKey] = useLocalStorage<string | null>(STORAGE_KEY, null);
    const [selectedWalletAccount, setSelectedWalletAccount] = useLocalStorage<SelectedWalletAccountState>(
        'selected-wallet-account',
        undefined
    );

    // Initialize or update wallet account based on stored key
    useEffect(() => {
        const savedAccount = getSavedWalletAccount(wallets, storedKey);
        if (savedAccount && (!selectedWalletAccount || 
            !uiWalletAccountsAreSame(savedAccount, selectedWalletAccount))) {
            setSelectedWalletAccount(savedAccount);
        }
    }, [wallets, storedKey, selectedWalletAccount, setSelectedWalletAccount]);

    // Find current wallet account
    const walletAccount = useMemo(() => {
        if (!selectedWalletAccount) return undefined;

        for (const uiWallet of wallets) {
            // Try to find exact match
            for (const uiWalletAccount of uiWallet.accounts) {
                if (uiWalletAccountsAreSame(selectedWalletAccount, uiWalletAccount)) {
                    return uiWalletAccount;
                }
            }
            // Fallback to first account of same wallet
            if (uiWalletAccountBelongsToUiWallet(selectedWalletAccount, uiWallet) && 
                uiWallet.accounts[0]) {
                return uiWallet.accounts[0];
            }
        }
        return undefined;
    }, [selectedWalletAccount, wallets]);

    // Clear selection if wallet disconnected
    useEffect(() => {
        if (selectedWalletAccount && !walletAccount) {
            setSelectedWalletAccount(undefined);
            setStoredKey(null);
        }
    }, [selectedWalletAccount, walletAccount, setSelectedWalletAccount, setStoredKey]);

    // Update handler for wallet account selection
    const handleSetWalletAccount: Dispatch<SetStateAction<SelectedWalletAccountState>> = useMemo(() => {
        return (value: SetStateAction<SelectedWalletAccountState>) => {
            const newAccount = typeof value === 'function' 
                ? value(selectedWalletAccount) 
                : value;
            
            setSelectedWalletAccount(newAccount);
            
            if (newAccount) {
                const accountKey = getUiWalletAccountStorageKey(newAccount);
                setStoredKey(accountKey);
            } else {
                setStoredKey(null);
            }
        };
    }, [selectedWalletAccount, setSelectedWalletAccount, setStoredKey]);

    return (
        <SelectedWalletAccountContext.Provider
            value={[walletAccount, handleSetWalletAccount] as const}
        >
            {children}
        </SelectedWalletAccountContext.Provider>
    );
}