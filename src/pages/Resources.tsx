import PageContainer from "../components/PageContainer.tsx";
import * as React from "react";
import type {ResourceItem} from "../types";

const Resources: React.FC = () => {
    const resources: ResourceItem[] = [
        {
            icon: '🏃‍♂️',
            title: 'Getting Started',
            description: 'New to exercise? Start with just 10 minutes a day and gradually increase. Remember, any movement is better than none!'
        },
        {
            icon: '🧘‍♀️',
            title: 'Stretching Guide',
            description: 'Always warm up before exercising and cool down after. Stretching helps prevent injuries and improves flexibility.'
        },
        {
            icon: '💧',
            title: 'Stay Hydrated',
            description: 'Drink water before, during, and after your workout. Proper hydration is key to peak performance!'
        },
        {
            icon: '🍎',
            title: 'Nutrition Tips',
            description: 'Fuel your body with healthy foods. A balanced diet supports your fitness goals and overall health.'
        },
        {
            icon: '😴',
            title: 'Rest & Recovery',
            description: 'Your body needs time to recover. Make sure to get enough sleep and take rest days when needed.'
        },
        {
            icon: '👥',
            title: 'Find a Buddy',
            description: 'Exercise with friends or family! Having a workout partner makes exercise more fun and keeps you motivated.'
        }
    ];

    return (
        <PageContainer>
            <div className="p-10">
                <h2 className="text-3xl font-semibold mb-8 text-gray-800">Helpful Resources</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {resources.map((resource, index) => (
                        <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                            <h3 className="text-lg font-semibold mb-3 text-gray-800">
                                {resource.icon} {resource.title}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {resource.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </PageContainer>
    );
};

export default Resources;
