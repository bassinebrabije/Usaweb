'use client';

import { useState } from "react";
import { Play } from "lucide-react"; // nice minimal play icon
import { motion } from "framer-motion"; // ✅ add framer motion

const teamMembers = [
    {
        name: "Shruti Goel",
        role: "",
        media: "https://streamable.com/e/hk245z",
        cover: "/Testimonial/COVER.png",
    },
    {
        name: "Othmane Andaloussi",
        role: "CEO Xerus Group",
        media: "https://streamable.com/e/i5w6yk",
        cover: "/Testimonial/COVER.png",
    },
    {
        name: "Daniela Koumides",
        role: "MBA",
        media: "https://streamable.com/e/r7krs3",
        cover: "/Testimonial/COVER.png",
    },
    {
        name: "Marisela Riveros",
        role: "MBA",
        media: "https://streamable.com/e/6cpxrq",
        cover: "/Testimonial/COVER.png",
    },
];

export default function TeamSection() {
    const [activeVideo, setActiveVideo] = useState<number | null>(null);

    return (
        <div className="max-w-7xl px-4 py-5 sm:px-6 mx-auto">
            {/* Title */}
            <motion.div
                className="max-w-2xl mx-auto text-center mb-10 lg:mb-14"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <h2 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-4xl lg:text-5xl">
                    What my clients say
                </h2>
            </motion.div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12">
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: index * 0.1 }}
                        className="text-center"
                    >
                        <div className="relative mx-auto aspect-[9/16] w-full max-w-[300px] rounded-2xl overflow-hidden cursor-pointer">
                            {activeVideo === index ? (
                                <iframe
                                    src={`${member.media}?autoplay=1`}
                                    className="absolute top-0 left-0 w-full h-full"
                                    allow="autoplay; fullscreen"
                                    allowFullScreen
                                    frameBorder="0"
                                />
                            ) : (
                                <button
                                    onClick={() => setActiveVideo(index)}
                                    className="absolute inset-0 w-full h-full flex items-center justify-center group"
                                >
                                    <img
                                        src={member.cover}
                                        alt={`${member.name} video cover`}
                                        className="w-full h-full object-cover group-hover:opacity-80 transition"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-white/70 p-4 rounded-full shadow-lg group-hover:bg-white transition">
                                            <Play className="w-8 h-8 text-gray-800" />
                                        </div>
                                    </div>
                                </button>
                            )}
                        </div>

                        {/* Name and Role */}
                        <div className="mt-4 sm:mt-6">
                            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
                                {member.name}
                            </h3>
                            {member.role && (
                                <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
                                    {member.role}
                                </p>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
