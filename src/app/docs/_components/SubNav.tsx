"use client";

import React from 'react';
import Link from 'next/link';
import {
    IconBooksVerticalFill,
    IconPhotoOnRectangleAngled,
    IconRectangle3GroupFill,
} from 'symbols-react';

const SubNav: React.FC = () => {

    return (
        <section className="sticky backdrop-blur-md bg-white/80 top-0 flex justify-between w-full h-12 items-center gap-x-2 border-b z-20">
            <div className="hidden flex-col justify-start w-full gap-x-8 text-lg font-medium md:flex md:flex-row md:items-center md:text-sm max-w-7xl mx-auto">
                <Link
                    href="/dashboard/docs/introduction"
                    className="group flex items-center gap-x-2 text-sm font-semibold text-black/70 hover:text-black transition-all duration-150 ease-in-out active:scale-95"
                >
                    <IconBooksVerticalFill className="w-[16px] h-[16px] fill-black/50 group-hover:fill-black/80" />
                    <span className="text-black/70 group-hover:text-black">Documentation</span>
                </Link>
                <Link
                    href="/dashboard/playground"
                    className="group flex items-center gap-x-2 text-sm font-semibold text-black/70 hover:text-black transition-all duration-150 ease-in-out active:scale-95"
                >
                    <IconPhotoOnRectangleAngled className="w-[16px] h-[16px] fill-black/50 group-hover:fill-black/80" />
                    <span className="text-black/70 group-hover:text-black">Playground</span>
                 </Link>
                 <Link
                    href="/dashboard/blocks"
                    className="group flex items-center gap-x-2 text-sm font-semibold text-black/70 hover:text-black transition-all duration-150 ease-in-out active:scale-95"
                >
                    <IconRectangle3GroupFill className="w-[16px] h-[16px] fill-black/50 group-hover:fill-black/80" />
                    <span className="text-black/70 group-hover:text-black">Blocks</span>
                </Link>
            </div>
        </section>
    );
};

export default SubNav;