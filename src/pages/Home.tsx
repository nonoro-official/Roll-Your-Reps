import * as React from "react";
import type {SectionType} from "../types";
import PageContainer from "../components/PageContainer.tsx";
import logo from "../assets/logo.png";

interface HomePageProps {
    userName: string;
    setUserName: (name: string) => void;
    setCurrentSection: (section: SectionType) => void;
}

const Home: React.FC<HomePageProps> = ({userName, setUserName, setCurrentSection}) => (
    <PageContainer>
        <div className="p-16 text-center">
            <h1 className="text-6xl font-bold mb-6 text-gray-800 flex items-center justify-center gap-4">
                <img src={logo} alt="Logo" className="w-32 h-32 object-contain"/>
                Roll Your Reps!
            </h1>
            <p className="text-2xl text-gray-600 mb-8">
                Your fun companion for staying active and healthy!
            </p>

            <div className="flex justify-center gap-8 my-12">
                <div className="text-7xl animate-bounce">🐱</div>
                <div className="text-7xl animate-bounce delay-100">🐰</div>
                <div className="text-7xl animate-bounce delay-200">🐻</div>
            </div>

            <div className="bg-blue-50 rounded-lg p-8 mb-8 max-w-2xl mx-auto">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Welcome!</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Get ready to exercise with your favorite animal companions!
                    Choose a buddy, get personalized workouts, and learn about the
                    amazing benefits of staying active.
                </p>

                <div className="flex gap-4 justify-center items-center mb-4">
                    <input
                        type="text"
                        placeholder="Enter your name (optional)"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="border-2 border-gray-300 rounded-lg px-4 py-2 text-lg focus:border-blue-500 focus:outline-none"
                    />
                </div>
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