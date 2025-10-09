"use client";

import { motion } from "framer-motion";

const Clientswhowork = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, duration: 0.5 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section className="max-w-5xl mx-auto px-4 mt-16 text-center">
            <motion.div
                className="rounded-2xl p-8 sm:p-12 md:p-16 bg-[#cc1f23] text-white shadow-lg"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.h2
                    variants={itemVariants}
                    className="font-display text-3xl sm:text-4xl font-bold mb-8"
                >
                    CLIENTS WHO WORK WITH US END UP...
                </motion.h2>

                <motion.ul
                    variants={itemVariants}
                    className="list-none space-y-4 text-base sm:text-lg leading-relaxed"
                >
                    <li>Feeling more empowered and more in control of their career advancement.</li>
                    <li>Swiftly navigating the cultural challenges and the role of women in leadership roles.</li>
                    <li>Having a very clear picture of who they are, their core values, and what they bring to the table.</li>
                    <li>Increasing and expanding their professional network and gaining more visibility and traction.</li>
                    <li>Shifting their perspective and identifying what's important to them.</li>
                    <li>Having a sense of freedom and a clear plan to propel them forward.</li>
                    <li>Reconnecting with their self-worth, and feeling more valued and appreciated.</li>
                    <li>Gaining more clarity, keeping a positive mindset, and becoming sharper.</li>
                    <li>Able to articulate crisply their value proposition & positioning statement.</li>
                    <li>Focusing on all areas of life to create a better work-life balance.</li>
                    <li>Getting offers within or outside of their company and earning at least 20% more.</li>
                </motion.ul>

                <div className="mt-10">
                    <a
                        href="#book-demo"
                        className="px-6 py-3 text-xs sm:text-base font-bold text-[#cc1f23] bg-white rounded-xl inline-block"
                    >
                        CONNECT HERE
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Clientswhowork;
