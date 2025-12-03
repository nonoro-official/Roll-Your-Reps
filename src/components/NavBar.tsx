import * as React from "react";
import type {SectionType} from "../types";
import logo from "../assets/logo.png"
import barbell from "../assets/barbell.png"
import idea from "../assets/idea.png"
import resource from "../assets/resource.png"

const navItems = [
    { key: "home", label: "Home", icon: logo },
    { key: "exercise", label: "Exercise", icon: barbell },
    { key: "Benefits", label: "Benefits", icon: idea },
    { key: "resources", label: "Resources", icon: resource },
];

interface NavBarProps {
    currentSection: SectionType;
    setCurrentSection: (section: SectionType) => void;
}

const NavBar: React.FC<NavBarProps> = ({ currentSection, setCurrentSection }) => (
    <div className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2
                    bg-white/70 backdrop-blur-xl border border-white/40
                    shadow-xl rounded-2xl px-5 py-3 flex justify-between gap-6 w-[90%] max-w-[450px] z-50">

        {navItems.map(item => (
            <button
                key={item.key}
                onClick={() => setCurrentSection(item.key as SectionType)}
                className="flex flex-col items-center relative group"
            >
                <img
                    src={item.icon}
                    className={`w-7 h-7 transition-all ${
                        currentSection === item.key ? "scale-110" : "opacity-70 group-hover:opacity-90"
                    }`}
                />
                <span
                    className={`text-[10px] mt-1 transition-all ${
                        currentSection === item.key ? "text-indigo-600 font-semibold" : "text-gray-500"
                    }`}
                >
                    {item.label}
                </span>

                {currentSection === item.key && (
                    <div className="absolute -top-2 w-2 h-2 bg-indigo-500 rounded-full"></div>
                )}
            </button>
        ))}
    </div>
);

export default NavBar;