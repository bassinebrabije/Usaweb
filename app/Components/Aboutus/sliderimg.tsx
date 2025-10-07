"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

const images = [
    "/Aboutus/sliderimg/1.png",
    "/Aboutus/sliderimg/2.png",
    "/Aboutus/sliderimg/3.jpg",
    "/Aboutus/sliderimg/4.png",
    "/Aboutus/sliderimg/5.webp",
    "/Aboutus/sliderimg/6.jpg",
];

export default function ImageCarousel() {
    const controls = useAnimation();
    const carouselRef = useRef<HTMLDivElement>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Auto slide effect (only on desktop)
    useEffect(() => {
        let currentX = 0;
        const slide = async () => {
            const carouselWidth = carouselRef.current?.scrollWidth || 0;
            const viewportWidth = carouselRef.current?.offsetWidth || 0;
            const maxScroll = carouselWidth - viewportWidth;

            currentX -= 300;
            if (Math.abs(currentX) > maxScroll) currentX = 0;

            await controls.start({
                x: currentX,
                transition: { duration: 0.8, ease: "easeInOut" },
            });
        };

        // Only enable auto-slide on large screens
        if (window.innerWidth >= 768) {
            const interval = setInterval(slide, 3000);
            return () => clearInterval(interval);
        }
    }, [controls]);

    return (
        <section className="flex flex-col items-center justify-center max-w-7xl mx-auto p-6 mt-16">

            {/* Carousel */}
            <div className="overflow-hidden w-full max-w-7xl mx-auto">
                <motion.div
                    ref={carouselRef}
                    className="hidden md:flex gap-4 cursor-grab active:cursor-grabbing"
                    drag="x"
                    dragConstraints={{ left: -1000, right: 0 }}
                    animate={controls}
                >
                    {/* Desktop flex layout */}
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="relative flex-shrink-0 w-1/4 h-64 rounded-xl overflow-hidden"
                            onClick={() => setSelectedImage(src)}
                        >
                            <Image
                                src={src}
                                alt={`Slide ${index + 1}`}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                                priority={index < 4}
                            />
                        </div>
                    ))}
                </motion.div>

                {/* Mobile grid layout */}
                <div className="grid grid-cols-2 gap-4 md:hidden">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="relative w-full h-48 rounded-xl overflow-hidden"
                            onClick={() => setSelectedImage(src)}
                        >
                            <Image
                                src={src}
                                alt={`Slide ${index + 1}`}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                                priority={index < 4}
                            />
                        </div>
                    ))}
                </div>
            </div>
            {/* Image Preview Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        onTouchStart={() => setSelectedImage(null)}
                    >
                        <motion.div
                            className="relative w-11/12 max-w-4xl h-[80vh]"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                            onTouchStart={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage}
                                alt="Preview"
                                fill
                                className="object-contain rounded-lg"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
