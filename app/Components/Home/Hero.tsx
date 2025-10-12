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
                <div
                    className="inline-block px-1 py-1 mb-2 sm:mb-5 text-gray-900"
                >
                    <h2 className="text-base text-gray-900 font-bold">
                        On-Demand Transformative Executive and Career Coaching
                    </h2>
                </div>

                {/* Main headline */}
                <h1
                    className="mb-8 text-3xl sm:text-6xl font-extrabold text-gray-900 leading-tight"
                >
                    Empowering Leaders.
                    <br />
                    Elevating Performance.
                    <br />
                    Driving Results.
                </h1>
                <p
                    className="inline-block px-1 py-1 sm:mb-10 text-gray-500 font-bold text-base"
                >
                    When the stakes are high, your growth can’t wait.
                </p>
                {/* CTA button */}
                <div
                    className="flex justify-center mb-8"
                >
                    <Link
                        href="/Results"
                        aria-label="See What’s Possible: Success Stories"
                        className="px-6 py-3 text-base font-bold text-center text-white bg-[#cc1f23] hover:scale-105 transition-transform rounded-xl focus:outline-none "
                    >
                        See What’s Possible: Success Stories
                    </Link>
                </div>
            </motion.header>

            {/* Hero image */}
            <motion.figure
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.6 }}
                className="w-full max-w-4xl mx-auto mt-12"
            >
                <img
                    src="Home/Herobg.png"
                    alt="Executive and career coaching for leaders"
                    loading="lazy"
                    className="w-full border border-gray-300 rounded-3xl object-cover h-[250px] sm:h-[400px] md:h-[500px]"
                />
            </motion.figure>
        </section>
    );
}
