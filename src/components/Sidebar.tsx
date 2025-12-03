import * as React from "react";
import type {SectionType} from "../types";
import logo from "../assets/logo.png"
import barbell from "../assets/barbell.png"
import idea from "../assets/idea.png"
import resource from "../assets/resource.png"

const items = [
    { id: "home", label: "Home", icon: logo },
    { id: "exercise", label: "Exercise!", icon: barbell },
    { id: "Benefits", label: "Fun Benefits", icon: idea },
    { id: "resources", label: "Resources", icon: resource },
]

interface SidebarProps {
    currentSection: SectionType;
    setCurrentSection: (section: SectionType) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentSection, setCurrentSection }) => (
    <div className="hidden md:flex flex-col gap-6 p-4
      bg-white/70 backdrop-blur-xl border border-white/30 rounded-2xl shadow-xl">
        {items.map((item) => {
            const active = currentSection === item.id;

            return (
                <div
                    key={item.id}
                    onClick={() => setCurrentSection(item.id as SectionType)}
                    className="relative group flex flex-col items-center gap-2 cursor-pointer transition-all duration-300"
                >
                    {/* Active dot indicator on top */}
                    {active && (
                        <div className="absolute -top-1 w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
                    )}

                    <div
                        className={`
                w-14 h-14 flex items-center justify-center transition-all duration-300
                ${active ? "scale-110" : "scale-100 filter opacity-70 group-hover:opacity-90"}
              `}
                    >
                        <img src={item.icon} alt={item.label} className="w-12 h-12 object-contain" />
                    </div>

                    <div
                        className={`
                text-xs font-medium text-center transition-all duration-300
                ${active ? "text-indigo-500" : "text-gray-500 group-hover:text-gray-900"}
              `}
                    >
                        {item.label}
                    </div>
                </div>
            );
        })}
    </div>
);

export default Sidebar;