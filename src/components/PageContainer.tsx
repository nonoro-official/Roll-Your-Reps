import * as React from "react";
import type {BenefitTabType, BenefitType} from "../types";

interface PageContainerProps {
    children: React.ReactNode;
    showTabs?: boolean;
    currentBenefitTab?: BenefitTabType;
    setCurrentBenefitTab?: (tab: BenefitTabType) => void;
    setCurrentBenefit?: (benefit: BenefitType) => void;
}

const PageContainer: React.FC<PageContainerProps> = ({
                                                         children,
                                                         showTabs = false,
                                                         currentBenefitTab,
                                                         setCurrentBenefitTab,
                                                         setCurrentBenefit
                                                     }) => (
    <div className="bg-white border border-gray-300 rounded-lg shadow-lg max-w-4xl mx-auto">
        <div className="flex items-center gap-2 p-3 border-b border-gray-300">
            <div className="w-3 h-3 rounded-full border border-gray-500 bg-white"></div>
            <div className="w-3 h-3 rounded-full border border-gray-500 bg-white"></div>
            <div className="w-3 h-3 rounded-full border border-gray-500 bg-white"></div>

            {showTabs && currentBenefitTab && setCurrentBenefitTab && setCurrentBenefit && (
                <div className="flex gap-4 ml-auto">
                    <button
                        className={`px-8 py-1 text-base font-medium transition-colors ${currentBenefitTab === 'physical' ? 'text-indigo-500' : 'text-gray-600 hover:text-gray-800'}`}
                        onClick={() => {
                            setCurrentBenefitTab('physical');
                            setCurrentBenefit('bone');
                        }}
                    >
                        Physical
                    </button>
                    <button
                        className={`px-8 py-1 text-base font-medium transition-colors ${currentBenefitTab === 'mental' ? 'text-indigo-500' : 'text-gray-600 hover:text-gray-800'}`}
                        onClick={() => {
                            setCurrentBenefitTab('mental');
                            setCurrentBenefit('mood');
                        }}
                    >
                        Mental
                    </button>
                    <button
                        className={`px-8 py-1 text-base font-medium transition-colors ${currentBenefitTab === 'social' ? 'text-indigo-500' : 'text-gray-600 hover:text-gray-800'}`}
                        onClick={() => {
                            setCurrentBenefitTab('social');
                            setCurrentBenefit('teamwork');
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

export default PageContainer;