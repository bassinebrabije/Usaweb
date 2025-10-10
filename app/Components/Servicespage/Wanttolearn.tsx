"use client";

import { motion } from "framer-motion";

const Wanttolearn = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
            <motion.div
                className="rounded-2xl p-8 text-center bg-[#cc1f23] relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1 }}
            >
                <div className="relative z-10 max-w-5xl mx-auto">
                    <motion.h1
                        className="max-w-4xl text-2xl text-white mx-auto mt-4 sm:text-3xl font-bold"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        Want to learn more?

                    </motion.h1>

                    <motion.h1
                        className="max-w-4xl text-2xl text-white mx-auto mt-4 sm:text-3xl font-bold"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Want to reinvent yourself & make impactful changes in your
                        career & life?
                    </motion.h1>

                    {/* CTA Button */}
                    <motion.div
                        className="mt-10 mb-5"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <a
                            href="#book-demo"
                            className="px-6 py-3 text-xs sm:text-base font-bold text-center text-[#cc1f23]  bg-white uppercase hover:scale-105  transition-transform duration-300 block w-fit mx-auto rounded-xl"
                        >

                            CONNECT WITH US
                        </a>

                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Wanttolearn;
