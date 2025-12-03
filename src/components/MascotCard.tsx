import * as React from "react";
import { useState } from "react";
import type {MascotType} from "../types";

interface MascotCardProps {
    type: MascotType;
    name: string;
    image?: string; // optional image
    onClick: () => void;
}

const MascotCard: React.FC<MascotCardProps> = ({ name, image, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`cursor-pointer transition-transform hover:scale-110 relative`}
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

            {/* Render image if provided, else fallback to emoji */}
            <img src={image} alt={name} className="w-32 h-32 mx-auto" />

            <div className="text-center mt-2 text-sm font-medium">{name}</div>
        </div>
    );
};


export default MascotCard;
