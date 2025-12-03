import * as React from "react";
import type {BenefitTabType, BenefitType} from "../types";
import PageContainer from "../components/PageContainer.tsx";
import {benefitInfo, benefitMascots, benefitsByTab} from "../data/benefitData.ts";

interface FactsPageProps {
    currentBenefitTab: BenefitTabType;
    setCurrentBenefitTab: (tab: BenefitTabType) => void;
    currentBenefit: BenefitType;
    setCurrentBenefit: (benefit: BenefitType) => void;
}

const renderMascot = (mascot: string) => {
    const isImage = mascot.endsWith('.png') || mascot.startsWith('/');

    return isImage ? (<img src={mascot}/>) : (<div>{mascot}</div>);
};

const Facts: React.FC<FactsPageProps> = ({
                                             currentBenefitTab,
                                             setCurrentBenefitTab,
                                             currentBenefit,
                                             setCurrentBenefit,
                                         }) => {
    const [mobileDropdownOpen, setMobileDropdownOpen] = React.useState(true);

    return (
        <PageContainer
            showTabs={true}
            currentBenefitTab={currentBenefitTab}
            setCurrentBenefitTab={setCurrentBenefitTab}
            setCurrentBenefit={setCurrentBenefit}
        >
            <div className="p-4 sm:p-10">
                {/* Desktop buttons */}
                <div className="hidden sm:flex flex-wrap gap-3 mb-8 justify-center">
                    {benefitsByTab[currentBenefitTab].map((benefit) => (
                        <button
                            key={benefit}
                            className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                                currentBenefit === benefit
                                    ? "bg-indigo-500 text-white border-2 border-indigo-500"
                                    : "bg-gray-100 text-gray-600 border-2 border-gray-300 hover:bg-gray-200"
                            }`}
                            onClick={() => setCurrentBenefit(benefit)}
                        >
                            {benefit.charAt(0).toUpperCase() + benefit.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Mobile Tab Navbar */}
                <div className="sm:hidden flex flex-row justify-around mb-2 bg-indigo-50 rounded-lg p-1">
                    {(['physical', 'mental', 'social'] as BenefitTabType[]).map((tabName) => (
                        <button
                            key={tabName}
                            className={`flex-1 py-2 text-center text-sm font-medium rounded-lg transition-colors ${
                                currentBenefitTab === tabName ? "bg-indigo-500 text-white" : "text-gray-700 hover:bg-indigo-200"
                            }`}
                            onClick={() => {
                                setCurrentBenefitTab(tabName);
                                // Set default benefit for each tab
                                if (tabName === 'physical') setCurrentBenefit('strength');
                                if (tabName === 'mental') setCurrentBenefit('mood');
                                if (tabName === 'social') setCurrentBenefit('communication');
                                setMobileDropdownOpen(true); // always open dropdown
                            }}
                        >
                            {tabName.charAt(0).toUpperCase() + tabName.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Mobile Benefit Dropdown */}
                {mobileDropdownOpen && (
                    <div className="sm:hidden mb-6">
                        <select
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            value={currentBenefit}
                            onChange={(e) => {
                                setCurrentBenefit(e.target.value as BenefitType);
                            }}
                        >
                            {benefitsByTab[currentBenefitTab].map((benefit) => (
                                <option key={benefit} value={benefit}>
                                    {benefit.charAt(0).toUpperCase() + benefit.slice(1)}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                {/* Benefit Content */}
                <div className="bg-gray-50 w-full p-2 sm:p-6 rounded-lg">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                        {benefitInfo[currentBenefit].title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        {benefitInfo[currentBenefit].description}
                    </p>
                </div>

                <br />

                <div className="flex justify-center gap-16 mb-4">
                    <div className="w-48 h-48 sm:w-56 sm:h-56 flex-shrink-0">
                        {renderMascot(benefitMascots[currentBenefit][0])}
                    </div>
                </div>
            </div>
        </PageContainer>
    );
};

export default Facts;