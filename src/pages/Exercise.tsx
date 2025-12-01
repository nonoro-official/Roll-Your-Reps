import * as React from "react";

import PageContainer from "../components/PageContainer.tsx";
import type {MascotType} from "../types";
import MascotCard from "../components/MascotCard.tsx";

interface ExercisePageProps {
    selectedMascot: MascotType | null;
    setSelectedMascot: (Mascot: MascotType | null) => void;
    exerciseText: string;
    hasEquipment: boolean;
    setHasEquipment: (has: boolean) => void;
    onMascotClick: (type: MascotType) => void;
    onGenerateExercise: (type: MascotType) => void;
}

const Exercise: React.FC<ExercisePageProps> = ({
                                                       selectedMascot,
                                                       setSelectedMascot,
                                                       exerciseText,
                                                       hasEquipment,
                                                       setHasEquipment,
                                                       onMascotClick,
                                                       onGenerateExercise
                                                   }) => (
    <PageContainer>
        <div className="p-10">
            {!selectedMascot ? (
                <div className="text-center">
                    <div className="flex justify-center items-end gap-10 my-20">
                        <MascotCard
                            type="cat"
                            emoji="🐱"
                            name="Kitty"
                            onClick={() => onMascotClick('cat')}
                        />

                        <MascotCard
                            type="rabbit"
                            emoji="🐰"
                            name="Bunny"
                            onClick={() => onMascotClick('rabbit')}
                        />

                        <MascotCard
                            type="bear"
                            emoji="🐻"
                            name="Bear"
                            onClick={() => onMascotClick('bear')}
                        />
                    </div>
                    <div className="text-xl mt-8">Pick a Mascot to exercise with!</div>
                </div>
            ) : (
                <div className="text-center">
                    <div className="relative bg-white border-2 border-gray-800 rounded-3xl px-8 py-5 max-w-sm mx-auto mb-8">
                        <div className="text-lg">{exerciseText}</div>
                        <div className="absolute -bottom-5 right-12 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[20px] border-t-gray-800"></div>
                        <div className="absolute -bottom-4 right-[50px] w-0 h-0 border-l-[13px] border-l-transparent border-r-[13px] border-r-transparent border-t-[18px] border-t-white z-10"></div>
                    </div>

                    <div
                        className="my-10 cursor-pointer transition-transform hover:scale-105 inline-block"
                        onClick={() => onGenerateExercise(selectedMascot)}
                    >
                        <div className="text-9xl">
                            {selectedMascot === 'cat' && '🐱'}
                            {selectedMascot === 'rabbit' && '🐰'}
                            {selectedMascot === 'bear' && '🐻'}
                        </div>
                    </div>

                    <div className="flex gap-4 justify-center">
                        <button
                            className="bg-white border-2 border-gray-800 rounded-lg px-6 py-3 text-sm font-medium cursor-pointer transition-all hover:bg-gray-100"
                            onClick={() => setSelectedMascot(null)}
                        >
                            ← Go Back
                        </button>

                        <button
                            className={`border-2 rounded-lg px-6 py-3 text-sm font-medium cursor-pointer transition-all ${
                                hasEquipment
                                    ? 'bg-indigo-500 text-white border-indigo-500 hover:bg-indigo-600'
                                    : 'bg-orange-500 text-white border-orange-500 hover:bg-orange-600'
                            }`}
                            onClick={() => {
                                setHasEquipment(!hasEquipment);
                                onGenerateExercise(selectedMascot);
                            }}
                        >
                            {hasEquipment ? '🏋️ Has Equipment' : '🙌 No Equipment'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    </PageContainer>
);

export default Exercise;