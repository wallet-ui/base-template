"use client";

import React, { useMemo, Suspense } from 'react';
import { usePathname } from 'next/navigation';
import { docsConfig } from '@/config/docs';
import DocLayout from '@/app/docs/_components/DocLayout';
import SpinningLoader from '@/app/docs/_components/SpinningLoader';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { IconChevronForward, IconChevronBackward } from 'symbols-react';
import { allDocs } from 'content-collections';

interface Doc {
    content: string;
    title: string;
    description?: string;
    _meta: {
        filePath: string;
    };
}

const DocPage = () => {
    const pathname = usePathname();

    const pathSegments = useMemo(() => pathname.split('/').filter(Boolean), [pathname]);
    const slugArray = useMemo(() => pathname.split('/').filter(Boolean), [pathname]);
    const slugPath = useMemo(() => `/${slugArray.join('/')}`, [slugArray]);

    const docItem = useMemo(() => 
        docsConfig.sidebarNav
            .flatMap(section => section.items)
            .find(item => item.href === slugPath), 
        [slugPath]
    );

    const prevItem = useMemo(() => 
        docsConfig.sidebarNav
            .flatMap(section => section.items)
            .find(item => item.href === docItem?.prev), 
        [docItem]
    );

    const nextItem = useMemo(() => 
        docsConfig.sidebarNav
            .flatMap(section => section.items)
            .find(item => item.href === docItem?.next), 
        [docItem]
    );

    const DocContent = useMemo(() => {
        if (!docItem?.mdPath) return null;
        
        const content = allDocs.find((doc: Doc) => 
            doc._meta.filePath === docItem.mdPath
        );
        
        return content;
    }, [docItem]);

    return (
        <DocLayout pathSegments={pathSegments}>
            <Suspense fallback={<SpinningLoader />}>
                <div className="container max-w-4xl mx-auto py-6 px-4">
                    {DocContent && (
                        <article className="prose dark:prose-invert max-w-none
                            prose-headings:scroll-mt-20
                            prose-headings:font-heading
                            prose-h1:text-4xl prose-h1:font-bold
                            prose-h2:text-3xl prose-h2:font-semibold prose-h2:border-b prose-h2:pb-2
                            prose-h3:text-2xl prose-h3:font-medium
                            prose-p:text-base prose-p:leading-7
                            prose-li:text-base prose-li:leading-7
                            prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md
                            prose-pre:bg-muted prose-pre:p-4 prose-pre:rounded-lg
                            prose-img:rounded-lg
                            prose-a:text-primary hover:prose-a:opacity-80">
                            <h1>{DocContent.title}</h1>
                            <div dangerouslySetInnerHTML={{ __html: DocContent.content }} />
                        </article>
                    )}
                </div>
            </Suspense>
            <div className="flex justify-between mt-4 px-1">
                {prevItem?.href && (
                    <Link href={prevItem.href}>
                        <Button variant="outline" className="w-full rounded-xl group flex flex-row gap-x-2"><IconChevronBackward className="w-3 h-3 fill-primary/50 group-hover:fill-primary" /> {prevItem.title}</Button>
                    </Link>
                )}
                {nextItem?.href && (
                    <Link href={nextItem.href}>
                        <Button variant="outline" className="w-full group rounded-xl flex flex-row gap-x-2">{nextItem.title} <IconChevronForward className="w-3 h-3 fill-primary/50 group-hover:fill-primary" /></Button>
                    </Link>
                )}
            </div>
        </DocLayout>
    );
};

export default React.memo(DocPage);
