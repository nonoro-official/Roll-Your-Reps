import * as React from "react";
import type {SectionType} from "../types";
import PageContainer from "../components/PageContainer.tsx";
import logo from "../assets/logo.png";

interface HomePageProps {
    setCurrentSection: (section: SectionType) => void;
}

const Home: React.FC<HomePageProps> = ({setCurrentSection}) => ( <PageContainer> <div className="px-4 py-8 sm:px-8 sm:py-16 text-center"> <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-gray-800 flex flex-col sm:flex-row items-center justify-center gap-4"> <img src={logo} alt="Logo" className="w-24 h-24 sm:w-32 sm:h-32 object-contain"/>
    Roll Your Reps! </h1> <p className="text-lg sm:text-2xl text-gray-600 mb-8">
    Your fun, interactive way to stay active, stay strong, and level up your fitness — one roll at a
    time! </p>

    <div className="flex flex-wrap justify-center gap-4 sm:gap-8 my-12">
        <img
            src="src/assets/happy-kitty.png"
            alt="kitty"
            className="w-32 h-32 stagger-1"
        />
        <img
            src="src/assets/static-bunny.png"
            alt="bunny"
            className="w-32 h-32 stagger-2"
        />
        <img
            src="src/assets/static-bear.png"
            alt="bear"
            className="w-32 h-32 stagger-3"
        />
    </div>

    <div className="bg-blue-50 rounded-lg p-6 sm:p-8 mb-8 max-w-xl sm:max-w-2xl mx-auto text-left sm:text-center">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">Welcome!</h2>
        <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-4">
            Choose your mascot, roll for your reps, and complete the exercise it gives you.
            Every roll helps you build a healthier lifestyle while keeping fitness simple and engaging.
        </p>
        <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-4">
            Pick a mascot. Roll the number. Do your reps.
        </p>
        <p className="text-sm sm:text-lg text-gray-700 leading-relaxed">Start your fitness journey now!</p>
    </div>

    <button
        className="bg-indigo-500 text-white text-base sm:text-xl font-semibold px-8 sm:px-12 py-3 sm:py-4 rounded-lg hover:bg-indigo-600 transition-all transform hover:scale-105 shadow-lg mb-8"
        onClick={() => setCurrentSection('exercise')}
    >
        Start Exercising! 🚀
    </button>

    <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-xl sm:max-w-2xl mx-auto">
        <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
            <div className="text-3xl mb-2">💪</div>
            <p className="text-sm text-gray-700">Fun Exercises</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
            <div className="text-3xl mb-2">✨</div>
            <p className="text-sm text-gray-700">Learn Benefits</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
            <div className="text-3xl mb-2">🎯</div>
            <p className="text-sm text-gray-700">Stay Motivated</p>
        </div>
    </div>
</div>
</PageContainer>

);

export default Home;
