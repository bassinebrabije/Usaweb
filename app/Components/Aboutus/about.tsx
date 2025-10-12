import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="px-4 mx-auto max-w-7xl mt-[9rem] sm:mt-[8rem]">
            {/* Flex Layout for Text + Image */}
            <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
                {/* TEXT SECTION */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }} // triggers when 30% in view
                    className="w-full lg:w-1/2 text-gray-900"
                >
                    <h1 className="mb-10 text-3xl sm:text-6xl font-extrabold text-gray-900 leading-tight">
                        DR. LOUBNA ERRAJI'S BIO
                    </h1>
                    <p className="text-base text-gray-500 font-medium leading-relaxed mb-4">
                        is an internationally recognized leadership expert, certified professional coach{" "}
                        <strong>(PCC – ICF)</strong>, and the Founder & CEO of Advancis Consulting
                        and NeuroStrategix. With over 20 years of global experience, she brings a unique blend of
                        expertise in strategic consulting, executive coaching, higher education, and the life
                        sciences.
                    </p>
                    <p className="text-base text-gray-500 font-medium leading-relaxed mb-4">
                        Holding a PhD in Pharmacology, postdoctoral training in Neuroscience from Columbia
                        University, and an MBA from Rutgers Business School, Dr. Erraji has collaborated with
                        top-tier institutions and Fortune 500 companies such as Pfizer, IBM, Deloitte, and JP
                        Morgan across North America, Europe, North Africa, and the Middle East.
                    </p>
                    <p className="text-base text-gray-500 font-medium leading-relaxed mb-4">
                        Her proprietary AAA Method™—Awareness, Alignment, and Advancement—blends neuroscience
                        with strategic insight to help leaders and organizations unlock their full potential.
                    </p>
                    <p className="text-base text-gray-500 font-medium leading-relaxed mb-4">
                        In addition to her corporate and academic roles, Dr. Erraji is a passionate advocate for
                        youth and women’s empowerment. She serves as Vice President of Project Soar{" "}
                        <strong>(Morocco)</strong>, contributes to entrepreneurship initiatives in Africa, and
                        has held academic appointments at prestigious institutions including Columbia University
                        and Rutgers.
                    </p>
                    <p className="text-base text-gray-500 font-medium leading-relaxed">
                        Fluent in four languages and based between New York and Casablanca, she brings a rich
                        multicultural perspective to her work. As the author of Career Reinventors, she provides
                        practical guidance for professionals navigating career transitions, and is a sought-after
                        speaker on leadership, resilience, and transformation.
                    </p>
                </motion.div>

                {/* IMAGE SECTION */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="w-full lg:w-1/2 flex justify-center sm:mt-5"
                >
                    <img
                        src="Aboutus/LoubnaErraji-A.jpg"
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
