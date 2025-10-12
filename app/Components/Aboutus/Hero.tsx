'use client';

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
    return (
        <section
            id="executive-career-coaching"
            className="px-4 mx-auto max-w-7xl mt-[9rem] sm:mt-[11rem] text-center"
            aria-label="On-Demand Executive and Career Coaching"
        >
            {/* Intro line */}
            <motion.header initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}>
                {/* Main headline */}
                <h1
                    className="mb-5 text-3xl sm:text-6xl font-extrabold text-gray-900 leading-tight"
                >
                    CAREER REINVENTORS
                </h1>
                <p
                    className="inline-block px-1 py-1  text-gray-500 font-bold text-base max-w-3xl"
                >
                    By Dr. Loubna Erraji is a transformative guide for
                    professionals ready to break free from stagnation and take bold steps toward meaningful
                    career change. Using her proven and proprietary AAA Method™ —Awareness,
                    Alignment, and Advancement— this book offers practical strategies to help
                    you get unstuck, build confidence, and unlock your full potential.
                </p>
            </motion.header>

            {/* Hero image */}
            <motion.figure
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.6 }}
                className="w-full max-w-4xl mx-auto mt-12"
            >
                <img
                    src="Aboutus/Book_Mockup_2.png"
                    alt="Executive and career coaching for leaders"
                    loading="lazy"
                    className="w-full border border-gray-300 rounded-3xl object-cover h-[250px] sm:h-[400px] md:h-[500px]"
                />
            </motion.figure>
        </section>
    );
}
