import * as React from "react";
import PageContainer from "../components/PageContainer.tsx";
import type { MascotType } from "../types";
import MascotCard from "../components/MascotCard.tsx";
import happyKitty from '../../public/happy-kitty.png';
import kitty from '../../public/kitty.png';
import staticBunny from '../../public/static-bunny.png';
import bunny from '../../public/bunny.png';
import staticBear from '../../public/static-bear.png';
import bear from '../../public/bear.png';

interface ExercisePageProps {
    selectedMascot: MascotType | null;
    setSelectedMascot: (Mascot: MascotType | null) => void;
    exerciseText: string;
    hasEquipment: boolean;
    setHasEquipment: (has: boolean) => void;
    onMascotClick: (type: MascotType) => void;
    onGenerateExercise: (type: MascotType) => void;
}

const mascotImages: Record<MascotType, { idle: string; active: string }> = {
    cat: { idle: happyKitty, active: kitty },
    rabbit: { idle: staticBunny, active: bunny },
    bear: { idle: staticBear, active: bear }
};

const Exercise: React.FC<ExercisePageProps> = ({
                                                   selectedMascot,
                                                   setSelectedMascot,
                                                   exerciseText,
                                                   hasEquipment,
                                                   setHasEquipment,
                                                   onMascotClick,
                                                   onGenerateExercise
                                               }) => ( <PageContainer> <div className="p-6 sm:p-10">
        {!selectedMascot && (
            <div className="text-center text-lg sm:text-xl mt-6">
                Pick a Mascot to exercise with!
            </div>
        )}

        <br/>

    {!selectedMascot ? ( <div className="text-center"> <div className="flex flex-wrap justify-center items-end gap-6 sm:gap-10 my-16">
            {/* Cat */}
            <MascotCard
                type="cat"
                name="Kitty"
                onClick={() => onMascotClick('cat')}
                image={selectedMascot === 'cat' ? mascotImages.cat.active : mascotImages.cat.idle}
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
            />

            {/* Rabbit */}
            <MascotCard
                type="rabbit"
                name="Bunny"
                onClick={() => onMascotClick('rabbit')}
                image={selectedMascot === 'rabbit' ? mascotImages.rabbit.active : mascotImages.rabbit.idle}
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
            />

            {/* Bear */}
            <MascotCard
                type="bear"
                name="Bear"
                onClick={() => onMascotClick('bear')}
                image={selectedMascot === 'bear' ? mascotImages.bear.active : mascotImages.bear.idle}
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
            />
        </div>
        </div>
    ) : (
        <div className="text-center">
            {/* Speech Bubble */}
            <div className="relative bg-white border-2 border-gray-800 rounded-3xl px-4 sm:px-8 py-4 sm:py-5 max-w-xs sm:max-w-sm mx-auto mb-6 sm:mb-8">
                <div className="text-sm sm:text-lg">{exerciseText}</div>
                <div className="absolute -bottom-5 right-12 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[20px] border-t-gray-800"></div>
                <div className="absolute -bottom-4 right-[50px] w-0 h-0 border-l-[13px] border-l-transparent border-r-[13px] border-r-transparent border-t-[18px] border-t-white z-10"></div>
            </div>

            {/* Mascot Image */}
            <div
                className="my-6 sm:my-10 cursor-pointer transition-transform hover:scale-105 inline-block"
                onClick={() => onGenerateExercise(selectedMascot!)}
            >
                <img
                    src={
                        selectedMascot === 'cat' ? mascotImages.cat.active :
                            selectedMascot === 'rabbit' ? mascotImages.rabbit.active :
                                selectedMascot === 'bear' ? mascotImages.bear.active :
                                    ''
                    }
                    alt={selectedMascot || ''}
                    className="w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 mx-auto"
                />
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                    className="bg-white border-2 border-gray-800 rounded-lg px-6 py-3 text-sm sm:text-base font-medium cursor-pointer transition-all hover:bg-gray-100"
                    onClick={() => setSelectedMascot(null)}
                >
                    ← Go Back
                </button>

                <button
                    className={`border-2 rounded-lg px-6 py-3 text-sm sm:text-base font-medium cursor-pointer transition-all ${
                        hasEquipment
                            ? 'bg-indigo-500 text-white border-indigo-500 hover:bg-indigo-600'
                            : 'bg-orange-500 text-white border-orange-500 hover:bg-orange-600'
                    }`}
                    onClick={() => {
                        setHasEquipment(!hasEquipment);
                        onGenerateExercise(selectedMascot!);
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
