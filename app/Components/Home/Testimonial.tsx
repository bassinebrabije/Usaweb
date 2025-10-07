'use client';

import { useRef } from "react";

const teamMembers = [
    {
        name: "David Forren",
        role: "Founder / CEO",
        media: "/Testimonial/1.mp4",
        type: "video",
    },
    {
        name: "Amil Evara",
        role: "UI/UX Designer",
        media: "/Testimonial/1.mp4",
        type: "video",
    },
    {
        name: "Ebele Egbuna",
        role: "Support Consultant",
        media: "/Testimonial/1.mp4",
        type: "video",
    },
    {
        name: "Ebele Egbuna",
        role: "Support Consultant",
        media: "/Testimonial/1.mp4",
        type: "video",
    },
];

export default function TeamSection() {
    const videoRefs = useRef<HTMLVideoElement[]>([]);

    const handleVideoClick = (index: number) => {
        const currentVideo = videoRefs.current[index];
        if (!currentVideo) return;

        // Pause all other videos
        videoRefs.current.forEach((video, i) => {
            if (video && i !== index) video.pause();
        });

        // Play/pause clicked video
        currentVideo.paused ? currentVideo.play() : currentVideo.pause();
    };

    return (
        <div className="max-w-7xl px-4 py-5 sm:px-6  mx-auto">
            {/* Title */}
            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                <h2 className="text-4xl font-bold tracking-tight sm:leading-16 text-gray-800 sm:text-4xl lg:text-5xl">
                    What my clients say
                </h2>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12">
                {teamMembers.map((member, index) => (
                    <div key={index} className="text-center">
                        <div
                            className="mx-auto w-60 h-[480px] rounded-xl overflow-hidden cursor-pointer relative"
                            onClick={() => member.type === "video" && handleVideoClick(index)}
                        >
                            {member.type === "image" ? (
                                <img
                                    src={member.media}
                                    alt={member.name}
                                    className="object-cover w-full h-full"
                                />
                            ) : (
                                <video
                                    ref={(el) => {
                                        if (el) videoRefs.current[index] = el;
                                    }}
                                    src={member.media}
                                    className="object-cover w-full h-full"
                                    loop
                                    controls
                                />
                            )}
                        </div>
                        <div className="mt-8 sm:mt-10">
                            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
                                {member.name}
                            </h3>
                            <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
                                {member.role}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Button */}
            <div className="mt-12 text-center">
                <a
                    href=""
                    className="px-6 py-3 text-base font-bold text-center text-white bg-[#cc1f23] hover:scale-105 transition-transform rounded-xl inline-block"
                >
                    READ MORE SUCCESS STORIES
                </a>
            </div>
        </div>
    );
}
