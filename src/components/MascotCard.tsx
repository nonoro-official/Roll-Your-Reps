import * as React from "react";
import { useState } from "react";
import type { MascotType } from "../types";

interface MascotCardProps {
    type: MascotType;
    emoji: string;
    name: string;
    onClick: () => void;
}

const MascotCard: React.FC<MascotCardProps> = ({ type, emoji, name, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    // Example: different border color per mascot type
    const borderColor = type === 'cat' ? 'border-pink-400'
        : type === 'rabbit' ? 'border-purple-400'
            : 'border-yellow-600';

    return (
        <div
            className={`cursor-pointer transition-transform hover:scale-110 relative border-4 rounded-xl ${borderColor}`}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Arrow above */}
            <div
                className={`absolute -top-16 left-1/2 -translate-x-1/2 text-5xl transition-all duration-300 ${
                    isHovered ? 'opacity-100 -translate-y-2' : 'opacity-0 translate-y-0'
                }`}
            >
                ⬇️
            </div>

            <div className="text-8xl">{emoji}</div>
            <div className="text-center mt-2 text-sm font-medium">{name}</div>
        </div>
    );
};

export default MascotCard;
