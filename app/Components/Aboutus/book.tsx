"use client";

import { motion } from "framer-motion";

const Book = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 ">
            <motion.div
                className="rounded-2xl p-4 md:p-8 bg-[#cc1f23] sm:h-[28rem] relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1 }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2  items-center max-w-5xl mx-auto">
                    {/* Left Image */}
                    <motion.div
                        className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden flex items-center justify-center"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src="Aboutus/book/6YYvVXQFQ7CgZBWJP43U_Untitled_design_26.webp"
                            alt="Left Image"
                            className=" h-full object-contain"
                        />
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden flex items-center justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <img
                            src="Aboutus/book/rMVIxXbfQgSGlpBA0M5Q_contentbook.webp"
                            alt="Right Image"
                            className=" object-contain rounded-xl"
                        />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Book;
