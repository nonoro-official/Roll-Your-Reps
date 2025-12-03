import * as React from "react";
import { useState } from "react";
import "./index.css"
import "./data/benefitData.ts"
import "./types/index.ts"
import Sidebar from "./components/Sidebar.tsx";
import NavBar from "./components/NavBar.tsx";
import Exercise from "./pages/Exercise.tsx";
import type {BenefitTabType, BenefitType, MascotType, SectionType} from "./types";
import {MascotExercises} from "./data/exerciseData.ts";
import Home from "./pages/Home.tsx";
import Facts from "./pages/Facts.tsx";
import Resources from "./pages/Resources.tsx";

const App: React.FC = () => {
    const [selectedMascot, setSelectedMascot] = useState<MascotType | null>(null);
    const [currentSection, setCurrentSection] = useState<SectionType>('home');
    const [currentBenefitTab, setCurrentBenefitTab] = useState<BenefitTabType>('physical');
    const [currentBenefit, setCurrentBenefit] = useState<BenefitType>('strength');
    const [exerciseText, setExerciseText] = useState<string>('Click on me to get an exercise!');
    const [hasEquipment, setHasEquipment] = useState<boolean>(true);
    const [userName, setUserName] = useState<string>('');

    const handleMascotClick = (type: MascotType): void => {
        setSelectedMascot(type);
        generateExercise(type);
    };

    const generateExercise = (MascotType: MascotType): void => {
        if (!MascotType) return;

        const exerciseList = hasEquipment
            ? MascotExercises[MascotType].withEquipment
            : MascotExercises[MascotType].noEquipment;

        const randomExercise = exerciseList[Math.floor(Math.random() * exerciseList.length)];
        const randomCount = Math.floor(Math.random() * 20) + 5;

        setExerciseText(`${randomExercise} ${randomCount} times with me!`);
    };

    return (
        <div className="flex h-screen bg-blue-100">
            <Sidebar currentSection={currentSection} setCurrentSection={setCurrentSection} />
            <NavBar currentSection={currentSection} setCurrentSection={setCurrentSection} />

            <div className="flex-1 p-8 overflow-y-auto">
                {currentSection === 'home' && (
                    <Home
                        userName={userName}
                        setUserName={setUserName}
                        setCurrentSection={setCurrentSection}
                    />
                )}
                {currentSection === 'exercise' && (
                    <Exercise
                        selectedMascot={selectedMascot}
                        setSelectedMascot={setSelectedMascot}
                        exerciseText={exerciseText}
                        hasEquipment={hasEquipment}
                        setHasEquipment={setHasEquipment}
                        onMascotClick={handleMascotClick}
                        onGenerateExercise={generateExercise}
                    />
                )}
                {currentSection === 'facts' && (
                    <Facts
                        currentBenefitTab={currentBenefitTab}
                        setCurrentBenefitTab={setCurrentBenefitTab}
                        currentBenefit={currentBenefit}
                        setCurrentBenefit={setCurrentBenefit}
                    />
                )}
                {currentSection === 'resources' && <Resources />}
            </div>
        </div>
    );
};

export default App;