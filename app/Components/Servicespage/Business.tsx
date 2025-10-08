import { motion } from "framer-motion";

export default function Executive() {
    // Variants for text elements
    const textVariants = {
        hidden: { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    };

    // Variant for image
    const imageVariants = {
        hidden: { opacity: 0, x: 40 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    };

    return (
        <section className="px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl mt-16 sm:mt-[8rem]">
            {/* Flex Layout for Text + Image */}
            <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
                {/* TEXT SECTION */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="w-full lg:w-1/2 text-gray-900 space-y-6"
                >
                    <motion.h1 variants={textVariants} className="mb-5 text-4xl font-extrabold text-gray-900 leading-tight">
                        Business Coaching
                    </motion.h1>
                    <motion.p variants={textVariants} className="text-base font-medium text-gray-500 leading-relaxed mb-6 sm:mb-5">
                        Are you a high-achiever with an entrepreneurial drive, thinking about transitioning from your corporate job to start your own business OR taking your business to the next level?
                    </motion.p>
                    <motion.p variants={textVariants} className="text-base font-medium text-gray-500 leading-relaxed mb-6 sm:mb-5">
                        I WILL HELP YOU:
                    </motion.p>
                    <motion.ul variants={textVariants} className="space-y-3 text-gray-500 list-disc list-inside mb-12">
                        <li>Explore new and innovative ideas and perspectives.</li>
                        <li>Identify your niche and target audience.</li>
                        <li>Discuss your business strategy and plan.</li>
                        <li>Define a clear brand identity & messaging.</li>
                        <li>Gain confidence and follow your dreams & business goals.</li>
                    </motion.ul>

                    <motion.a
                        variants={textVariants}
                        href="#"
                        className="px-6 py-3 text-base font-bold text-center text-white bg-[#cc1f23] hover:scale-105 transition-transform rounded-xl"
                    >
                        FIND OUT MORE
                    </motion.a>
                </motion.div>

                {/* IMAGE SECTION */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={imageVariants}
                    className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-6 lg:mb-0"
                >
                    <img
                        src="/Servicesimg/GyBVHEn7QseQmkio3boR_career-executive-business-coaching-counseling-mentoring-in-new-jersey-usa_0002.jpg"
                        alt="Business Coaching"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-auto rounded-lg object-cover"
                    />
                </motion.div>
            </div>
        </section>
    );
}
