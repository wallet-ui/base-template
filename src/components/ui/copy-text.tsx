"use client";

import { IconCheckmark, IconSquare } from "symbols-react";
import { useState } from "react";
import { useCopyToClipboard } from "usehooks-ts";

export function CopyText({ value }: { value: string }) {
  const [, copy] = useCopyToClipboard();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    copy(value);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      type="button"
      className="font-mono text-[#878787] text-xs md:text-sm p-4 rounded-full border border-border transition-colors flex items-center gap-2 bg-background"
    >
      <span>{value}</span>
      {copied ? (
        <IconCheckmark className="size-3.5" />
      ) : (
        <IconSquare className="size-3.5" />
      )}
    </button>
  );
}