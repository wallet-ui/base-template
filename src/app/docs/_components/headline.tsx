import React from 'react';

interface HeadlineProps {
    children: React.ReactNode;
}

export const Headline: React.FC<HeadlineProps> = ({ children }) => {
    return (
        <span className="text-2xl font-bold">
            {children}
        </span>
    );
};