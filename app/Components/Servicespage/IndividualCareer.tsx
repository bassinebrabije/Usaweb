"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const IndividualCareer = () => {
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
        <section className="max-w-7xl mx-auto px-4  mt-16 ">
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 rounded-2xl p-8 sm:p-12 md:p-16 bg-[#cc1f23] text-white shadow-lg"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* Left Column - Text Content */}
                <div className="space-y-5">
                    <h2
                        className="font-display text-3xl sm:text-4xl font-bold"

                    >
                        Individual Career Coaching
                    </h2>

                    <p
                        className="text-base sm:text-lg leading-relaxed"

                    >
                        Are you a high-achiever in career transition?
                    </p>

                    <p
                        className="text-base sm:text-lg leading-relaxed"

                    >
                        Do you feel stuck and not sure which direction to take next?
                    </p>

                    <p
                        className="text-lg sm:text-xl font-semibold mt-6"

                    >
                        I CAN HELP YOU...
                    </p>

                    <motion.ul className="list-disc list-inside space-y-3 mt-4 text-base sm:text-lg">
                        <li>Identify what sabotages your career growth and advancement.</li>
                        <li>Manage your stress, build new habits, and stop feeling stuck and burned out.</li>
                        <li>Set a clear vision and a detailed career roadmap to achieve your greatness.</li>
                        <li>Develop a successful transition strategy to support your advancement.</li>
                    </motion.ul>
                    <div className="mt-10 mb-10" >
                        <a
                            href=""
                            className="inline-block px-6 py-3 text-base font-bold text-center text-[#cc1f23]  bg-white  rounded-xl transform transition-transform duration-300 hover:scale-105"
                        >
                            BOOK A CAREER CLARITY CALL
                        </a>
                    </div>
                </div>

                {/* Right Column - Image */}
                <motion.div
                    className="flex justify-center md:justify-end hidden sm:block pl-16"
                >
                    <Image
                        src="/Servicesimg/meeting.png"
                        alt="meeting"
                        width={500}
                        height={400}
                        className="rounded-2xl shadow-xl object-cover"
                    />
                </motion.div>
            </motion.div>

        </section>
    );
};

export default IndividualCareer;
