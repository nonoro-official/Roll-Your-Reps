import * as React from "react";
import type { BenefitTabType, BenefitType, SectionType } from "../types";

interface PageContainerProps {
    children: React.ReactNode;
    showTabs?: boolean;
    currentBenefitTab?: BenefitTabType;
    setCurrentBenefitTab?: (tab: BenefitTabType) => void;
    setCurrentBenefit?: (benefit: BenefitType) => void;

    showSectionTabs?: boolean;
    currentSection?: SectionType;
    setCurrentSection?: (section: SectionType) => void;
}

const PageContainer: React.FC<PageContainerProps> = ({
                                                         children,
                                                         showTabs = false,
                                                         currentBenefitTab,
                                                         setCurrentBenefitTab,
                                                         setCurrentBenefit
                                                     }) => {

    const [activeTab, setActiveTab] = React.useState<"home" | "advocacy">("home");

    return (
        <div className="bg-white border border-gray-300 rounded-lg shadow-lg max-w-4xl mx-auto">

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 p-3 border-b border-gray-300">

                {/* Dots */}
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full border border-gray-500 bg-white"></div>
                    <div className="w-3 h-3 rounded-full border border-gray-500 bg-white"></div>
                    <div className="w-3 h-3 rounded-full border border-gray-500 bg-white"></div>
                </div>

                {/* Home + Advocacy Tabs */}
                <div className="flex gap-3 ml-2">
                    <button
                        className={`
                            px-3 py-1 rounded-md font-medium transition-all
                            ${activeTab === "home"
                            ? "text-indigo-500"
                            : "text-gray-600 hover:text-gray-800"}
                        `}
                        onClick={() => setActiveTab("home")}
                    >
                        Home
                    </button>

                    <button
                        className={`
                            px-3 py-1 rounded-md font-medium transition-all
                            ${activeTab === "advocacy"
                            ? "text-indigo-500"
                            : "text-gray-600 hover:text-gray-800"}
                        `}
                        onClick={() => setActiveTab("advocacy")}
                    >
                        Advocacy
                    </button>
                </div>

                {/* Benefit Tabs (unchanged) */}
                {showTabs && currentBenefitTab && setCurrentBenefitTab && setCurrentBenefit && (
                    <div className="flex flex-wrap gap-3 sm:ml-4 mt-2 sm:mt-0">
                        <button
                            className={`px-4 py-1 text-sm sm:text-base font-medium transition-colors ${
                                currentBenefitTab === 'physical'
                                    ? 'text-indigo-500'
                                    : 'text-gray-600 hover:text-gray-800'
                            }`}
                            onClick={() => {
                                setCurrentBenefitTab('physical');
                                setCurrentBenefit('strength');
                            }}
                        >
                            Physical
                        </button>

                        <button
                            className={`px-4 py-1 text-sm sm:text-base font-medium transition-colors ${
                                currentBenefitTab === 'mental'
                                    ? 'text-indigo-500'
                                    : 'text-gray-600 hover:text-gray-800'
                            }`}
                            onClick={() => {
                                setCurrentBenefitTab('mental');
                                setCurrentBenefit('mood');
                            }}
                        >
                            Mental
                        </button>

                        <button
                            className={`px-4 py-1 text-sm sm:text-base font-medium transition-colors ${
                                currentBenefitTab === 'social'
                                    ? 'text-indigo-500'
                                    : 'text-gray-600 hover:text-gray-800'
                            }`}
                            onClick={() => {
                                setCurrentBenefitTab('social');
                                setCurrentBenefit('communication');
                            }}
                        >
                            Social
                        </button>
                    </div>
                )}
            </div>

            {children}
        </div>
    );
};

export default PageContainer;
