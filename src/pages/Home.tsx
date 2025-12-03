import * as React from "react";
import type {SectionType} from "../types";
import PageContainer from "../components/PageContainer.tsx";
import logo from "../assets/logo.png";
import happyKitty from '../assets/happy-kitty.png';
import staticBunny from '../assets/static-bunny.png';
import staticBear from '../assets/static-bear.png';

interface HomePageProps {
    userName: string;
    setUserName: (name: string) => void;
    setCurrentSection: (section: SectionType) => void;
}

const Home: React.FC<HomePageProps> = ({setCurrentSection}) => {
    const [activeTab, setActiveTab] = React.useState<"home" | "about">("home");

    return (
        <PageContainer
            showHomeAdvocacyTabs={true}
            activeHomeTab={activeTab}
            setActiveHomeTab={setActiveTab}
        >
            <div className="px-4 py-8 sm:px-8 sm:py-16 text-center">
                {/* Mobile Tab Navbar */}
                <div className="sm:hidden flex flex-row justify-around mb-6 bg-indigo-50 rounded-lg p-1">
                    <button
                        className={`flex-1 py-2 text-center text-sm font-medium rounded-lg transition-colors ${
                            activeTab === "home" ? "bg-indigo-500 text-white" : "text-gray-700 hover:bg-indigo-200"
                        }`}
                        onClick={() => setActiveTab("home")}
                    >
                        Home
                    </button>
                    <button
                        className={`flex-1 py-2 text-center text-sm font-medium rounded-lg transition-colors ${
                            activeTab === "about" ? "bg-indigo-500 text-white" : "text-gray-700 hover:bg-indigo-200"
                        }`}
                        onClick={() => setActiveTab("about")}
                    >
                        About
                    </button>
                </div>

                {activeTab === "home" ? (
                    <>
                        <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-gray-800 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <img src={logo} alt="Logo" className="w-24 h-24 sm:w-32 sm:h-32 object-contain"/>
                            Roll Your Reps!
                        </h1>
                        <p className="text-lg sm:text-2xl text-gray-600 mb-8">
                            Your fun, interactive way to stay active, stay strong, and level up your fitness — one roll at a time!
                        </p>

                        <div className="flex flex-wrap justify-center items-end gap-6 sm:gap-10 my-12">
                            <img
                                src={happyKitty}
                                alt="kitty"
                                className="w-32 h-32 stagger-1"
                            />
                            <img
                                src={staticBunny}
                                alt="bunny"
                                className="w-32 h-32 stagger-2"
                            />
                            <img
                                src={staticBear}
                                alt="bear"
                                className="w-32 h-32 stagger-3"
                            />
                        </div>

                        <div className="bg-blue-50 rounded-lg p-6 sm:p-8 mb-8 max-w-xl sm:max-w-2xl mx-auto text-left sm:text-center">
                            <h2 className="text-center sm:text-2xl font-semibold mb-4 text-gray-800">Welcome!</h2>
                            <p className="text-center sm:text-lg text-gray-700 leading-relaxed mb-4">
                                Choose your mascot, roll for your reps, and complete the exercise it gives you.
                                Every roll helps you build a healthier lifestyle while keeping fitness simple and engaging.
                            </p>
                            <p className="text-center sm:text-lg text-gray-700 leading-relaxed mb-4">
                                Pick a mascot. Roll the number. Do your reps.
                            </p>
                            <p className="text-center sm:text-lg text-gray-700 leading-relaxed">Start your fitness journey now!</p>
                        </div>

                        <button
                            className="bg-indigo-500 text-white text-base sm:text-xl font-semibold px-8 sm:px-12 py-3 sm:py-4 rounded-lg hover:bg-indigo-600 transition-all transform hover:scale-105 shadow-lg mb-8"
                            onClick={() => setCurrentSection('exercise')}
                        >
                            Start Exercising! 🚀
                        </button>
                    </>
                ) : (
                    <div className="max-w-3xl mx-auto text-left space-y-6">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-800 text-center">
                            About Roll Your Reps
                        </h1>
                        <div className="bg-blue-50 rounded-lg p-6 sm:p-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800">About Us</h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                <b>Roll Your Reps</b> is a student-led project that promotes physical fitness through a simple,
                                gamified system. We believe that exercise doesn’t have to be complicated - a few minutes a day can make a big
                                difference.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Our goal is to encourage students and young adults to stay active, reduce sedentary time, and
                                build sustainable fitness habits. With fun mascots and randomized reps, you get a fresh workout
                                every time.
                            </p>
                        </div>


                        <div className="bg-blue-50 rounded-lg p-6 sm:p-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Advocacy</h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                Physical fitness improves your body, mind, and overall well-being. With Roll Your Reps, we aim
                                to make fitness more approachable and enjoyable, especially for students with busy schedules.
                                Our mission is to reduce sedentary behavior and inspire the habit of moving every day even in
                                small ways.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-6 sm:p-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800">How It Works</h2>
                            <ol className="list-decimal list-inside text-lg text-gray-700 leading-relaxed mb-4 space-y-2">
                                <li>
                                    <strong>Choose a Mascot:</strong> Each mascot is linked to a specific exercise or activity.
                                </li>
                                <li>
                                    <strong>Click the Mascot:</strong> The mascot generates a random number of reps.
                                </li>
                                <li>
                                    <strong>Change Equipment Setting:</strong> Toggle the button if you have or don't have equipment.
                                </li>
                                <li>
                                    <strong>Do the Exercise:</strong> Do the required amount of reps.
                                </li>
                                <li>
                                    <strong>Repeat as Much as You Want:</strong> You can do multiple rolls for a full mini-workout.
                                </li>
                            </ol>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Whether you have equipment or not, Roll Your Reps adapts to your situation and keeps your workouts fresh and exciting. Start small, build momentum, and watch yourself grow stronger every day!
                            </p>
                        </div>


                        <div className="bg-indigo-50 rounded-lg p-6 sm:p-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Why Exercise Matters</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Regular physical activity improves your physical health, boosts your mental wellbeing,
                                and enhances your social connections. From building strength and improving heart health
                                to reducing stress and increasing focus, the benefits of exercise extend to every aspect
                                of your life. Explore our Benefits section to learn more!
                            </p>
                        </div>
                    </div>
                )}
            </div>

            <br/>
        </PageContainer>
    );
};

export default Home;