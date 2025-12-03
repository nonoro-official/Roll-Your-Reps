import * as React from "react";
import type {BenefitTabType, BenefitType} from "../types";

interface PageContainerProps {
    children: React.ReactNode;
    showTabs?: boolean;
    currentBenefitTab?: BenefitTabType;
    setCurrentBenefitTab?: (tab: BenefitTabType) => void;
    setCurrentBenefit?: (benefit: BenefitType) => void;
    showHomeAdvocacyTabs?: boolean;
}

const PageContainer: React.FC<PageContainerProps> = ({
                                                         children,
                                                         showTabs = false,
                                                         currentBenefitTab,
                                                         setCurrentBenefitTab,
                                                         setCurrentBenefit,
                                                         showHomeAdvocacyTabs = false
                                                     }) => {
    const [activeHomeTab, setActiveHomeTab] = React.useState<"home" | "advocacy">("home");

    return (
        <div className="bg-white border border-gray-300 rounded-lg shadow-lg max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 p-3 border-b border-gray-300">
                {/* Dots */}
                <div className="flex gap-2 mb-2 sm:mb-0">
                    <div className="w-3 h-3 rounded-full border border-gray-500 bg-white"></div>
                    <div className="w-3 h-3 rounded-full border border-gray-500 bg-white"></div>
                    <div className="w-3 h-3 rounded-full border border-gray-500 bg-white"></div>
                </div>

                {/* Home/Advocacy Tabs */}
                {showHomeAdvocacyTabs && (
                    <>
                        <div className="hidden sm:flex flex-row gap-4 ml-4 w-auto">
                            <button
                                className={`px-4 py-1 text-sm sm:text-base font-medium transition-colors ${activeHomeTab === 'home' ? 'text-indigo-500' : 'text-gray-600 hover:text-gray-800'}`}
                                onClick={() => setActiveHomeTab('home')}
                            >
                                Home
                            </button>
                            <button
                                className={`px-4 py-1 text-sm sm:text-base font-medium transition-colors ${activeHomeTab === 'advocacy' ? 'text-indigo-500' : 'text-gray-600 hover:text-gray-800'}`}
                                onClick={() => setActiveHomeTab('advocacy')}
                            >
                                Advocacy
                            </button>
                        </div>
                    </>
                )}

                {/* Physical/Mental/Social Tabs for Facts page */}
                {showTabs && currentBenefitTab && setCurrentBenefitTab && setCurrentBenefit && (
                    <>
                        <div className="hidden sm:flex flex-row gap-4 ml-4 w-auto">
                            <button
                                className={`px-4 py-1 text-sm sm:text-base font-medium transition-colors ${currentBenefitTab === 'physical' ? 'text-indigo-500' : 'text-gray-600 hover:text-gray-800'}`}
                                onClick={() => {
                                    setCurrentBenefitTab('physical');
                                    setCurrentBenefit('strength');
                                }}
                            >
                                Physical
                            </button>
                            <button
                                className={`px-4 py-1 text-sm sm:text-base font-medium transition-colors ${currentBenefitTab === 'mental' ? 'text-indigo-500' : 'text-gray-600 hover:text-gray-800'}`}
                                onClick={() => {
                                    setCurrentBenefitTab('mental');
                                    setCurrentBenefit('mood');
                                }}
                            >
                                Mental
                            </button>
                            <button
                                className={`px-4 py-1 text-sm sm:text-base font-medium transition-colors ${currentBenefitTab === 'social' ? 'text-indigo-500' : 'text-gray-600 hover:text-gray-800'}`}
                                onClick={() => {
                                    setCurrentBenefitTab('social');
                                    setCurrentBenefit('communication');
                                }}
                            >
                                Social
                            </button>
                        </div>
                    </>
                )}

            </div>

            {children}
        </div>
    );
};

export default PageContainer;