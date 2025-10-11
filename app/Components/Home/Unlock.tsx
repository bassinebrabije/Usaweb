import { motion } from "framer-motion";
import Image from "next/image";

export default function Unlock() {
    return (
        <section className="relative flex flex-col items-center max-w-7xl px-5 mx-auto mt-20 sm:px-6">

            {/* Section Title */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="text-left sm:text-center w-full sm:px-5 max-w-5xl"
            >
                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
                    Unlock the leader within - we're here to help you reach your goals.
                </h2>
            </motion.div>

            {/* Content Wrapper (Text + Image) */}
            <div className="flex flex-col items-center md:flex-row w-full">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1 }}
                    className="flex items-center py-10 md:w-1/2 sm:pl-5"
                >
                    <div className="text-left">
                        <p className="mt-4 text-base text-gray-500">
                            Our executive and career coaching empowers you to think boldly, lead strategically, and achieve what once felt out of reach.
                        </p>
                        <p className="mt-4 text-base text-gray-500">
                            <span className="font-bold text-[#cc1f23]">Since 2016</span>, we've guided hundreds of professionals through meaningful growth and lasting transformation.
                        </p>
                        <p className="mt-4 text-base text-gray-500">
                            We believe you already have the capacity to perform at a higher level—our role is to help you access it. Through personalized coaching, we empower clients to:
                        </p>
                        <p className="mt-4 text-base text-gray-500">
                            Through personalized coaching, we empower clients to :
                        </p>
                        <ul className="mt-6 space-y-3 text-gray-500 list-disc list-inside font-medium">
                            <li>Lead confidently, build strong teams, and drive lasting change</li>
                            <li>Decide faster and navigate career transitions with ease</li>
                            <li>Break free from stagnation and own your career path</li>
                        </ul>
                        <div className="mt-8 sm:flex md:mt-10">
                            <a
                                href="https://calendly.com/loubnaerraji/strategy-call?month=2025-10" target="_blank" rel="noopener noreferrer"
                                className="px-6 py-3 text-xs sm:text-base font-bold text-center text-white bg-[#cc1f23] hover:scale-105 rounded-xl"
                            >
                                Step into your next level of leadership and life.
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1 }}
                    className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10"
                >
                    <div className="relative w-full p-3 rounded md:p-8">
                        <div className="rounded-lg bg-white text-black w-full">
                            <Image
                                src="/Home/Dr.LoubnaErrajii.png"
                                alt="Dr. Loubna Erraji"
                                width={400}
                                height={600}
                                className="w-full h-auto rounded-lg"
                                priority={true}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
