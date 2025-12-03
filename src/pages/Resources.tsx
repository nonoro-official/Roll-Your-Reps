
import * as React from "react";
import PageContainer from "../components/PageContainer.tsx";
import {exerciseGuides, generalResources, workoutRoutines, workoutVideos} from "../data/resourceData.ts";

const Resources: React.FC = () => {
    return (
        <PageContainer>
            <div className="p-10 space-y-12">

                {/* Helpful Resources */}
                <section>
                    <h2 className="text-3xl font-semibold mb-6 text-gray-800">Helpful Resources</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {generalResources.map((res, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                                <h3 className="text-lg font-semibold mb-2">
                                    {res.icon} {res.title}
                                </h3>
                                <p className="text-sm text-gray-600">{res.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Exercise Guides */}
                <section>
                    <h2 className="text-3xl font-semibold mb-6 text-gray-800">Exercise Guides</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {exerciseGuides.map((guide, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 space-y-3">

                                {/* Title */}
                                <h3 className="text-lg font-semibold mb-2">{guide.title}</h3>

                                {/* For exercises with "howTo" steps */}
                                {guide.howTo && (
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-700 mb-1">How to do it:</h4>
                                        <ul className="list-disc ml-5 text-sm text-gray-600 space-y-1">
                                            {guide.howTo.map((step, i) => <li key={i}>{step}</li>)}
                                        </ul>
                                    </div>
                                )}

                                {/* For warm-ups or stretches with "ideas" */}
                                {guide.ideas && (
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-700 mb-1">Ideas:</h4>
                                        <ul className="list-disc ml-5 text-sm text-gray-600 space-y-1">
                                            {guide.ideas.map((idea, i) => <li key={i}>{idea}</li>)}
                                        </ul>
                                    </div>
                                )}

                                {/* Tips */}
                                {guide.tips && (
                                    <p className="text-sm text-gray-600">
                                        <span className="font-semibold">Tips:</span> {guide.tips}
                                    </p>
                                )}

                                {/* Goal */}
                                {guide.goal && (
                                    <p className="text-sm text-gray-600">
                                        <span className="font-semibold">Goal:</span> {guide.goal}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Workout Routines */}
                <section>
                    <h2 className="text-3xl font-semibold mb-6 text-gray-800">Workout Routines</h2>
                    <div className="space-y-6">
                        {workoutRoutines.map((routine, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                                <h3 className="text-lg font-semibold mb-3">{routine.name}</h3>
                                <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
                                    {routine.items.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Workout Videos */}
                <section>
                    <h2 className="text-3xl font-semibold mb-6 text-gray-800">Workout Videos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {workoutVideos.map((video, index) => (
                            <a
                                key={index}
                                href={video.url}
                                target="_blank"
                                className="bg-white p-6 rounded-lg border border-gray-200 hover:bg-gray-100 transition"
                            >
                                <h3 className="text-lg font-semibold">{video.title}</h3>
                                <p className="text-xs text-blue-600 mt-1">Watch Video →</p>
                            </a>
                        ))}
                    </div>
                </section>

            </div>
        </PageContainer>
    );
};

export default Resources;
