"use client";

import { IconExclamationmarkTriangle } from 'symbols-react';
import React from 'react';
import type { FallbackProps } from 'react-error-boundary';

import { Alert, AlertDescription } from '@/components/ui/alert';
import { getWalletErrorMessage } from './wallet/get-wallet-error-message';
import { cn } from '@/lib/utils';

type Props = React.ComponentProps<typeof Alert> & FallbackProps;

export function FeatureNotSupportedCallout({
  error,
  className,
  ...props
}: Props) {
  return (
    <Alert 
      variant="default" 
      className={cn("flex-grow", className)} 
      {...props}
    >
      <IconExclamationmarkTriangle className="h-4 w-4" />
      <AlertDescription>
        {getWalletErrorMessage(error, 'This account does not support this feature')}
      </AlertDescription>
    </Alert>
  );
}