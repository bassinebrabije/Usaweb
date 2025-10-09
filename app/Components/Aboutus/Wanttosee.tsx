"use client";

import { motion } from "framer-motion";

const Wanttosee = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-20">
            <motion.div
                className="rounded-2xl p-8 text-center bg-[#cc1f23] relative shadow-lg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
                }}
            >
                <div className="relative z-10 max-w-5xl mx-auto">
                    <motion.h1
                        className="max-w-4xl text-2xl sm:text-3xl font-bold text-white mx-auto mt-4"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 } },
                        }}
                    >
                        Discover the 5 secrets to unlock your dream career
                    </motion.h1>

                    <motion.div
                        className="mt-10 mb-5"
                        variants={{
                            hidden: { opacity: 0, scale: 0.9 },
                            visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.4 } },
                        }}
                    >
                        <a
                            href="#book-demo"
                            className="px-6 py-3 text-xs sm:text-base font-bold text-center text-[#cc1f23] bg-white rounded-xl uppercase hover:scale-105 transition-transform duration-300 block w-fit mx-auto"
                        >
                            Discover the 5 secrets to unlock your dream career
                        </a>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Wanttosee;
