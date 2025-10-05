import { motion } from "framer-motion";

const Wanttoempower = () => {
    return (
        <section className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8 mb-15">
            <motion.div
                className="rounded-2xl p-8 text-center bg-[#cc1f23] relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                {/* Optional overlay if needed */}
                {/* <div className="absolute inset-0 bg-black/10 rounded-2xl"></div> */}

                <div className="relative z-10 max-w-5xl mx-auto">
                    <motion.h1
                        className="max-w-4xl text-base text-white mx-auto mt-4 font-extrabold sm:text-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        WANT TO EMPOWER YOUR TEAMS?

                    </motion.h1>
                    <motion.h1
                        className="max-w-4xl text-base text-white mx-auto mt-4 font-extrabold sm:text-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >  NOT SURE WHERE TO START?

                    </motion.h1>

                    {/* CTA Button */}
                    <motion.div
                        className="mt-10 mb-10"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <a
                            href="#book-demo"
                            className="px-6 py-3 text-xs sm:text-base font-bold text-center text-[#cc1f23] bg-white rounded-xl mb-"
                        >
                            CORPORATIONS - CONNECT WITH US
                        </a>
                    </motion.div>

                </div>
            </motion.div>
        </section>
    );
};

export default Wanttoempower;
