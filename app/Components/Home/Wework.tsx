import { motion } from "framer-motion";

const Wework = () => {
    return (
        <section className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
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
                        className="max-w-4xl text-sm text-white mx-auto mt-4 sm:text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        We work with a small number of executives each month to implement the 90 Day Unlock Your Dream Career program. If you're interested, we'll call you. Just pick a date and time that works for you below:
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
                            className="px-6 py-3 text-xs sm:text-base font-bold text-center text-[#cc1f23]  bg-white  rounded-xl "
                        >
                            BOOK A FREE CAREER STRATEGY CALL
                        </a>
                    </motion.div>

                    <motion.p
                        className="max-w-4xl text-sm text-white mx-auto mt-4 sm:text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                    >
                        (spaces extremely limited)
                    </motion.p>
                </div>
            </motion.div>
        </section>
    );
};

export default Wework;
