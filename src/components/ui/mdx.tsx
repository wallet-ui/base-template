"use client";

import { useMemo } from 'react';

interface MdxProps {
  code: string;
  components?: Record<string, React.ComponentType>;
}

export function Mdx({ code }: MdxProps) {
  const content = useMemo(() => {
    try {
      return JSON.parse(code);
    } catch {
      return code;
    }
  }, [code]);

  return (
    <div 
      className="prose prose-neutral dark:prose-invert"
      dangerouslySetInnerHTML={{ __html: content }} 
    />
  );
}