'use client';

import { motion } from "framer-motion";

export default function Clientswho() {

    const benefits = [
        "Having a clear path to follow and not feeling stuck anymore.",
        "Having a sharper mind and higher energy.",
        "Making the decisions that serve them the best.",
        "Not feeling a burden anymore and having a lightness.",
        "More conscious and feeling more appreciated.",
        "They get promoted and earn more money.",
        "They work to live and feel less stressed.",
        "They take their business to next level and get more clients.",
        "They get more quality time with loved ones and restore their relationships.",
    ];

    return (
        <section className="pb-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 mt-10">
                <div className="mb-16 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="mb-4 text-2xl font-bold tracking-tight sm:leading-16 text-gray-800 sm:text-4xl lg:text-5xl"
                    >
                        Clients who work with me end up:
                    </motion.h1>

                    {/* Benefits Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="max-w-6xl mx-auto mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        {benefits.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl border-2 border-red-100 p-4 cursor-pointer 
                                           transition-colors duration-300 ease-in-out hover:bg-[#cc1f23] hover:text-white text-left"
                            >
                                <p className="text-gray-900 text-base transition-colors duration-300 ease-in-out hover:text-white">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </motion.div>

                    {/* Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                        className="mt-8"
                    >
                        <a
                            href=""
                            className="inline-block px-6 py-3 text-base font-bold text-center text-white bg-[#cc1f23] rounded-xl transform transition-transform duration-300 hover:scale-105"
                        >
                            BOOK A FREE STRATEGY CALL
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
