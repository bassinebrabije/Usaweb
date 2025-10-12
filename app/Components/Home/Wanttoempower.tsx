"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Wanttoempower = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-15">
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
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        NOT SURE WHERE TO START?
                    </motion.h1>
                    {/* CTA Button */}
                    <motion.div
                        className="flex justify-center mt-10"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: 0.5, duration: 0.5 }}

                    >
                        <Link
                            href="/Results"
                            aria-label="CONNECT WITH US"
                            className="px-6 py-3 text-base font-bold text-center text-[#cc1f23] bg-white hover:scale-105 transition-transform rounded-xl focus:outline-none "
                        >
                            CONNECT WITH US
                        </Link>

                    </motion.div>
                </div>
            </motion.div >
        </section >
    );
};

export default Wanttoempower;
