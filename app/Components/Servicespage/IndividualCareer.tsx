"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const IndividualCareer = () => {
    // Variants for the container
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                duration: 0.5,
            },
        },
    };

    // Variants for each item
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };



    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 pt-20">
            <motion.div
                className="rounded-2xl p-8 text-center sm:p-16 md:px-24 md:py-20 lg:px-28 bg-cover bg-center relative"
                style={{
                    backgroundImage:
                        "url('https://i.ibb.co/V0dcDxgT/RD30b-VRqe-Vv6l69-XPx-Xg-CL9z-CSxj-Tn2-Vx-W97-AANg-file.jpg')",
                }}
            >
                {/* Optional overlay */}
                <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>

                <div className="relative z-10 max-w-5xl mx-auto">
                    {/* Heading */}
                    <motion.h2
                        className="font-display text-2xl font-bold tracking-tight text-white sm:text-4xl"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={{
                            hidden: { opacity: 0, y: -20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                        }}
                    >
                        Individual Career Coaching

                    </motion.h2>

                    {/* Paragraph */}
                    <motion.p
                        className="max-w-4xl text-sm text-white mx-auto mt-4 sm:text-lg"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { delay: 0.3, duration: 0.8 } },
                        }}
                    >
                        Are you a high-achiever in career transition?
                    </motion.p>

                    <motion.p
                        className="max-w-4xl text-sm text-white mx-auto mt-4 sm:text-lg"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { delay: 0.3, duration: 0.8 } },
                        }}
                    >
                        Do you feel stuck and not sure which direction to take next ?
                        I CAN HELP YOU...

                    </motion.p>

                </div>
            </motion.div>
        </section>
    );
};

export default IndividualCareer;
