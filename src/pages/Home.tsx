import * as React from "react";
import type {SectionType} from "../types";
import PageContainer from "../components/PageContainer.tsx";
import logo from "../assets/logo.png";

interface HomePageProps {
    setCurrentSection: (section: SectionType) => void;
}

const Home: React.FC<HomePageProps> = ({setCurrentSection}) => (
    <PageContainer>
        <div className="p-16 text-center">
            <h1 className="text-6xl font-bold mb-6 text-gray-800 flex items-center justify-center gap-4">
                <img src={logo} alt="Logo" className="w-32 h-32 object-contain"/>
                Roll Your Reps!
            </h1>
            <p className="text-2xl text-gray-600 mb-8">
                Your fun, interactive way to stay active, stay strong, and level up your fitness — one roll at a
                time!
            </p>

            <div className="flex justify-center gap-8 my-12">
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


            <div className="bg-blue-50 rounded-lg p-8 mb-8 max-w-2xl mx-auto">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Welcome!</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Get ready to exercise with your favorite animal companions!
                    Choose a buddy, get personalized workouts, and learn about the
                    amazing benefits of staying active.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">Choose your mascot, roll for your reps, and complete the exercise it gives you.
                    Every roll helps you build a healthier lifestyle while keeping fitness simple and engaging.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">Start your fitness journey now!</p>
            </div>

            <button
                className="bg-indigo-500 text-white text-xl font-semibold px-12 py-4 rounded-lg hover:bg-indigo-600 transition-all transform hover:scale-105 shadow-lg"
                onClick={() => setCurrentSection('exercise')}
            >
                Start Exercising! 🚀
            </button>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-3xl mb-2">💪</div>
                    <p className="text-sm text-gray-700">Fun Exercises</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-3xl mb-2">✨</div>
                    <p className="text-sm text-gray-700">Learn Benefits</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-3xl mb-2">🎯</div>
                    <p className="text-sm text-gray-700">Stay Motivated</p>
                </div>
            </div>
        </div>
    </PageContainer>
);

export default Home;