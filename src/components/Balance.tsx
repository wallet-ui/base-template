"use client";

import { IconExclamationmarkTriangle } from 'symbols-react';
import { address } from '@solana/web3.js';
import type { UiWalletAccount } from '@wallet-standard/react';
import { useContext, useMemo } from 'react';
import useSWRSubscription from 'swr/subscription';

import { ChainContext } from '../context/ChainContext';
import { RpcContext } from '../context/RpcContext';
import { getErrorMessage } from '../errors';
import { balanceSubscribe } from '../functions/balance';
import { ErrorDialog } from './ErrorDialog';

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

type Props = Readonly<{
    account: UiWalletAccount;
}>;

const seenErrors = new WeakSet();

export function Balance({ account }: Props) {
    const { chain } = useContext(ChainContext);
    const { rpc, rpcSubscriptions } = useContext(RpcContext);
    const subscribe = useMemo(() => balanceSubscribe.bind(null, rpc, rpcSubscriptions), [rpc, rpcSubscriptions]);
    const { data: lamports, error } = useSWRSubscription({ address: address(account.address), chain }, subscribe);

    if (error && !seenErrors.has(error)) {
        return (
            <>
                <ErrorDialog
                    error={error}
                    key={`${account.address}:${chain}`}
                    onClose={() => {
                        seenErrors.add(error);
                    }}
                    title="Failed to fetch account balance"
                />
                <HoverCard>
                    <HoverCardTrigger>
                        <IconExclamationmarkTriangle
                            className="h-4 w-4 fill-destructive"
                        />
                    </HoverCardTrigger>
                    <HoverCardContent>
                        Could not fetch balance: {getErrorMessage(error, 'Unknown reason')}
                    </HoverCardContent>
                </HoverCard>
            </>
        );
    } else if (lamports == null) {
        return <span className="text-muted-foreground">&ndash;</span>;
    } else {
        const formattedSolValue = new Intl.NumberFormat(undefined, { maximumFractionDigits: 5 }).format(
            // @ts-expect-error This format string is 100% allowed now.
            `${lamports}E-9`,
        );
        return <span className="text-foreground">{`${formattedSolValue} \u25CE`}</span>;
    }
}