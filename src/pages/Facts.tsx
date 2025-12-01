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

const Facts: React.FC<FactsPageProps> = ({
                                                 currentBenefitTab,
                                                 setCurrentBenefitTab,
                                                 currentBenefit,
                                                 setCurrentBenefit
                                             }) => (
    <PageContainer
        showTabs={true}
        currentBenefitTab={currentBenefitTab}
        setCurrentBenefitTab={setCurrentBenefitTab}
        setCurrentBenefit={setCurrentBenefit}
    >
        <div className="p-10">
            <div className="flex flex-wrap gap-3 mb-8">
                {benefitsByTab[currentBenefitTab].map(benefit => (
                    <button
                        key={benefit}
                        className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                            currentBenefit === benefit
                                ? 'bg-indigo-500 text-white border-2 border-indigo-500'
                                : 'bg-gray-100 text-gray-600 border-2 border-gray-300 hover:bg-gray-200'
                        }`}
                        onClick={() => setCurrentBenefit(benefit)}
                    >
                        {benefit.charAt(0).toUpperCase() + benefit.slice(1)}
                    </button>
                ))}
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                    {benefitInfo[currentBenefit].title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                    {benefitInfo[currentBenefit].description}
                </p>
            </div>

            <div className="text-center mt-10">
                <div className="flex justify-center gap-16 mb-4">
                    <div className="text-6xl">{benefitMascots[currentBenefit][0]}</div>
                    <div className="text-6xl">{benefitMascots[currentBenefit][1]}</div>
                </div>
                <p className="text-sm text-gray-500">Mascots talking about {benefitInfo[currentBenefit].title}</p>
            </div>
        </div>
    </PageContainer>
);

export default Facts;