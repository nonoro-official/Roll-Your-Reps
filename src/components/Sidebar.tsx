import * as React from "react";
import type {SectionType} from "../types";
import logo from "../assets/logo.png"
import barbell from "../assets/barbell.png"
import idea from "../assets/idea.png"
import resource from "../assets/resource.png"

interface SidebarProps {
    currentSection: SectionType;
    setCurrentSection: (section: SectionType) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentSection, setCurrentSection }) => (
    <div className="w-32 bg-white shadow-lg flex flex-col gap-4 p-4">
        <div
            className={`flex flex-col items-center gap-2 p-4 rounded-lg cursor-pointer transition-all ${currentSection === 'home' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
            onClick={() => setCurrentSection('home')}
        >
            <div className="w-14 h-14 flex items-center justify-center text-2xl">
                <img src={logo} alt="Logo" className="w-32" />
            </div>
            <div className="text-xs font-medium text-center">Home</div>
        </div>

        <div
            className={`flex flex-col items-center gap-2 p-4 rounded-lg cursor-pointer transition-all ${currentSection === 'exercise' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
            onClick={() => setCurrentSection('exercise')}
        >
            <div className="w-14 h-14 flex items-center justify-center text-2xl">
                <img src={barbell} alt="Exercise" className="w-32" />
            </div>
            <div className="text-xs font-medium text-center">Exercise!</div>
        </div>

        <div
            className={`flex flex-col items-center gap-2 p-4 rounded-lg cursor-pointer transition-all ${currentSection === 'facts' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
            onClick={() => setCurrentSection('facts')}
        >
            <div className="w-14 h-14 flex items-center justify-center text-2xl">
                <img src={idea} alt="Fun Facts" className="w-32" />
            </div>
            <div className="text-xs font-medium text-center">Fun Facts</div>
        </div>

        <div
            className={`flex flex-col items-center gap-2 p-4 rounded-lg cursor-pointer transition-all ${currentSection === 'resources' ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
            onClick={() => setCurrentSection('resources')}
        >
            <div className="w-14 h-14 flex items-center justify-center text-2xl">
                <img src={resource} alt="Resource" className="w-32" />
            </div>
            <div className="text-xs font-medium text-center">Resources</div>
        </div>
    </div>
);

export default Sidebar;