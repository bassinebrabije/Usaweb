'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Together = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2, duration: 0.5 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const items = [
        { icon: "/icons/clarity.png", title: "Gaining Clarity" },
        { icon: "/icons/decisionmaking.png", title: "Making Decisions" },
        { icon: "/icons/handshake.png", title: "Getting Offers" },
        { icon: "/icons/earnings.png", title: "Earning More" },
    ];

    return (
        <section
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20"
            aria-label="Career Clarity and Leadership Coaching Section"
        >
            <motion.div
                className="rounded-2xl p-8 text-center sm:p-16 md:px-24 md:py-20 lg:px-28 bg-cover bg-center relative"
                style={{
                    backgroundImage:
                        "url('https://i.ibb.co/V0dcDxgT/RD30b-VRqe-Vv6l69-XPx-Xg-CL9z-CSxj-Tn2-Vx-W97-AANg-file.jpg')",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>

                <div className="relative z-10 max-w-5xl mx-auto">
                    {/* Main headline */}
                    <header>
                        <motion.h1
                            className="font-display text-2xl font-bold tracking-tight text-white sm:text-4xl"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={{
                                hidden: { opacity: 0, y: -20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                            }}
                        >
                            Put all of this together, and you’ll feel clear, confident, and in
                            control — ready to lead with impact and shape a career that truly
                            reflects your potential.
                        </motion.h1>

                        <motion.p
                            className="max-w-4xl text-sm sm:text-lg text-white mx-auto mt-4"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1, transition: { delay: 0.3, duration: 0.8 } },
                            }}
                        >
                            Say goodbye to feeling stuck, not knowing what to do, and not being visible.
                            Start attracting the right opportunities within 3 months.
                        </motion.p>
                    </header>

                    {/* Icon Grid */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 text-center"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {items.map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="flex flex-col items-center text-white"
                                variants={itemVariants}
                            >
                                <div className="mb-4">
                                    <Image
                                        src={item.icon}
                                        alt={`${item.title} icon`}
                                        width={64}
                                        height={64}
                                        className="object-contain"
                                    />
                                </div>
                                <h2 className="font-semibold text-lg">{item.title}</h2>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="flex justify-center mt-12">
                        <Link
                            href="https://calendly.com/loubnaerraji/strategy-call?month=2025-10"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Schedule a strategy call for career coaching"
                            className="px-6 py-3 text-base font-bold text-center text-white bg-[#cc1f23] hover:scale-105 transition-transform rounded-xl focus:outline-none"
                        >
                            Connect With Us
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Together;
