import React, { useEffect, useState } from 'react';
import { IconArrowUpForward, IconStarFill } from 'symbols-react';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';
import { AnimatedText } from '@/components/ui/animated-text'
const GithubStarsButton = () => {
    const [stars, setStars] = useState<number | null>(null);

    useEffect(() => {
        const fetchStars = async () => {
            try {
                const response = await fetch('https://api.github.com/repos/stevesarmiento/solana-starter');
                const data = await response.json();
                setStars(data.stargazers_count);
            } catch (error) {
                console.error('Error fetching GitHub stars:', error);
            }
        };

        fetchStars();
    }, []);

    return (
        <TooltipProvider>
            <Tooltip delayDuration={0}>
                <TooltipTrigger>
                    <span 
                        onClick={() => window.open('https://github.com/stevesarmiento/solana-starter', '_blank')} 
                        className="group p-1 px-4 flex items-center justify-center gap-x-2 cursor-pointer border rounded-md hover:bg-accent"
                    >
                        {stars !== null ? (
                            <span className="text-white text-md font-lores-bold">
                                <AnimatedText text={stars.toString()} />
                            </span>
                        ) : (
                            <span className="text-white text-md font-lores-bold">Loading...</span>
                        )}      
                        <IconStarFill className="fill-yellow-300 w-4 h-4" />
                    </span>
                </TooltipTrigger>
                <TooltipContent side="right" className="inline-flex items-center gap-x-2 bg-background font-mono text-white">
                    Github
                    <IconArrowUpForward className="w-2 h-2 fill-foreground/50" />
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

export default GithubStarsButton;