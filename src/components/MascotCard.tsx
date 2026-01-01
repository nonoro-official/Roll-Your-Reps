import * as React from "react";
import { useState } from "react";

interface MascotCardProps {
    name: string;
    image?: string; // optional image
    onClick: () => void;
    className?: string; // allow parent to pass sizing
}

const MascotCard: React.FC<MascotCardProps> = ({ name, image, onClick, className }) => {
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

            <img
                src={image}
                alt={name}
                className={`mx-auto ${className || "w-32 h-32"}`}
            />

            <div className="text-center mt-2 text-sm font-medium">{name}</div>
        </div>
    );
};

export default MascotCard;
