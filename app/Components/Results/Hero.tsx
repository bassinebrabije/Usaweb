import { motion } from "framer-motion";

export default function Results() {
    return (
        <section className="px-4 mx-auto max-w-7xl mt-[9rem] sm:mt-[11rem]">

            {/* Flex Layout for Text + Image */}
            <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
                {/* TEXT SECTION */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="w-full lg:w-1/2 text-gray-900"
                >
                    <h1 className="mb-10 text-4xl sm:text-6xl font-extrabold text-gray-900 leading-tight">
                        Career & Executive Coaching  - Client testimonials
                    </h1>
                    <p className="text-base text-gray-500 font-medium leading-relaxed mb-4">

                    </p>
                    <p className="text-base mb-12 text-gray-500 font-medium leading-relaxed">
                        Get ready to be inspired to level up your career and unleash your full potential. Our clients work at Fortune 500 and leading institutions.
                    </p>
                    <a
                        href=""
                        className="inline-block px-6 py-3 text-base font-bold text-center text-white bg-[#cc1f23] rounded-xl transform transition-transform duration-300 hover:scale-105"
                    >
                        5 SECRETS TO UNLOCK YOUR DREAM CAREER
                    </a>

                </motion.div>

                {/* IMAGE SECTION */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="w-full lg:w-1/2 flex justify-center"
                >
                    <img
                        src="Aboutus/sliderimg/3.jpg"
                        alt='Dr. Loubna Erraji'
                        width={150}
                        height={150}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-auto rounded-lg"
                    />
                </motion.div>
            </div>
        </section>
    );
}
