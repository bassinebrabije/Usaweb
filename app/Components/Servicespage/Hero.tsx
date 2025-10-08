import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="px-4 mx-auto max-w-7xl mt-[9rem] sm:mt-[11rem]">
            {/* Flex Layout for Text + Image */}
            <div className="flex flex-col-reverse lg:flex-row-reverse items-center lg:items-start gap-12 lg:gap-20">
                {/* TEXT SECTION */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="w-full lg:w-1/2 text-gray-900 sm:pt-6"
                >
                    <h1 className="mb-5 text-3xl  font-extrabold text-gray-900 leading-tight">
                        The Coaching You Need To :
                    </h1>
                    <h2 className="mb-5 text-3xl   font-extrabold text-gray-900 leading-tight">
                        Level Up Your Career.
                    </h2>
                    <h3 className="mb-12 text-3xl   font-extrabold text-gray-900 leading-tight">
                        Empower Your Teams.
                    </h3>

                    <p className="text-2xl sm:text-3xl font-medium text-gray-900 leading-relaxed mb-12">
                        Are you feeling stuck and not sure what to do next to keep advancing in your career?
                    </p>
                    <p className="text-2xl sm:text-3xl  font-medium text-gray-900 leading-relaxed mb-12">
                        Are you struggling to build high-performing teams and retain your best talent?
                    </p>
                    <a
                        href=""
                        className="px-6 py-3 text-base font-bold text-center text-white bg-[#cc1f23] hover:scale-105 rounded-xl"
                    >
                        Career assessment worksheet
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
                        src="/Servicesimg/Dr.LoubnaErraji.png"
                        alt="Dr. Loubna Erraji"
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
