import React from 'react';
import { IconCircleHexagongridFill } from 'symbols-react';

const SpinningLoader: React.FC = () => {
    return (
        <div className="flex justify-center items-center">
            <IconCircleHexagongridFill className="w-12 h-12 fill-black/30 animate-spin" />
        </div>
    );
};

export default SpinningLoader;