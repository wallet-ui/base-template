import { cn } from "@/lib/utils";
import React from 'react';

type Props = Readonly<{
  children: React.ReactNode;
  label: React.ReactNode;
  className?: string;
}>;

export function FeaturePanel({ children, label, className }: Props) {
  return (
    <div className={cn("flex flex-col sm:flex-row sm:items-center gap-2 py-4", className)}>
      <div className="min-w-32 font-medium text-sm text-muted-foreground">
        {label}
      </div>
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}