import * as React from "react";
import {lazy, Suspense, useState} from "react";
import { Oval } from "react-loader-spinner";
import "./index.css"
import Sidebar from "./components/Sidebar.tsx";
import NavBar from "./components/NavBar.tsx";
import type {BenefitTabType, BenefitType, MascotType, SectionType} from "./types";
import {MascotExercises} from "./data/exerciseData.ts";

const Home = lazy(() => import("./pages/Home"));
const Exercise = lazy(() => import("./pages/Exercise"));
const Benefits = lazy(() => import("./pages/Benefits"));
const Resources = lazy(() => import("./pages/Resources"));

const MIN_REPS = 5;
const MAX_REPS = 25;

const App: React.FC = () => {
    const [selectedMascot, setSelectedMascot] = useState<MascotType | null>(null);
    const [currentSection, setCurrentSection] = useState<SectionType>('home');
    const [currentBenefitTab, setCurrentBenefitTab] = useState<BenefitTabType>('physical');
    const [currentBenefit, setCurrentBenefit] = useState<BenefitType>('strength');
    const [exerciseText, setExerciseText] = useState<string>('Click on me to get an exercise!');
    const [hasEquipment, setHasEquipment] = useState<boolean>(true);
    const [userName, setUserName] = useState<string>('');
    const [loading] = useState(true);

    const handleMascotClick = (type: MascotType): void => {
        setSelectedMascot(type);
        generateExercise(type);
    };

    const generateExercise = (mascotType: MascotType): void => {
        if (!mascotType) return;

        const exerciseList = hasEquipment
            ? MascotExercises[mascotType].withEquipment
            : MascotExercises[mascotType].noEquipment;

        const randomExercise = exerciseList[Math.floor(Math.random() * exerciseList.length)];
        const randomCount = Math.floor(Math.random() * (MAX_REPS - MIN_REPS)) + MIN_REPS;

        setExerciseText(`${randomExercise} ${randomCount} times with me!`);
    };

    return (
        <div className="flex h-screen bg-blue-100">
            <Sidebar currentSection={currentSection} setCurrentSection={setCurrentSection}/>
            <NavBar currentSection={currentSection} setCurrentSection={setCurrentSection}/>

            <div className="flex-1 p-8 overflow-y-auto">
                <Suspense fallback={<div className="flex items-center justify-center h-screen"><Oval
                    height="80"
                    width="80"
                    color="#6366f1"
                    ariaLabel="oval-loading"
                    visible={loading}
                    secondaryColor="#6366f1"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                /></div>}>
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
                    {currentSection === 'benefits' && (
                        <Benefits
                            currentBenefitTab={currentBenefitTab}
                            setCurrentBenefitTab={setCurrentBenefitTab}
                            currentBenefit={currentBenefit}
                            setCurrentBenefit={setCurrentBenefit}
                        />
                    )}
                    {currentSection === 'resources' && <Resources/>}
                </Suspense>
            </div>
        </div>
    );
};

export default App;