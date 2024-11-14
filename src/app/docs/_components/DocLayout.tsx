import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

interface DocLayoutProps {
    children: React.ReactNode;
    pathSegments: string[];
}

const DocLayout: React.FC<DocLayoutProps> = ({ children, pathSegments }) => {
    return (
        <div className="relative flex flex-col h-full border-l-2 border-primary/10">
            <div className="sticky top-12 z-10 bg-background/10 h-12 py-8 px-6 backdrop-blur-xl">
                 <Breadcrumb>
                    <BreadcrumbList>
                        {pathSegments.map((segment, index) => {
                            const href = '/' + pathSegments.slice(0, index + 1).join('/');
                            return (
                                <React.Fragment key={index}>
                                    <BreadcrumbItem className="group">
                                        <BreadcrumbLink href={href}>
                                            <span className="text-primary/50 group-hover:text-primary transition-colors duration-150 ease-in-out">{segment}</span>
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    {index < pathSegments.length - 1 && <BreadcrumbSeparator />}
                                </React.Fragment>
                            );
                        })}
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <ScrollArea className="h-full pt-6 px-6 lg:pt-12">
                {children}
            </ScrollArea>
        </div>
    );
};

export default DocLayout;