import { motion } from "framer-motion";

export default function Hero() {
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
                    <h1 className="mb-10 text-3xl sm:text-6xl font-extrabold text-gray-900 leading-tight ">    DR. LOUBNA   ERRAJI'S BIO</h1>
                    <p className="text-base  text-gray-500 font-medium leading-relaxed mb-4">
                        Dr. Erraji is a neuroscientist, adjunct Professor, author, motivational speaker, and an ICF-certified Executive Coach with 20+ years of global & extensive experience encompassing research, teaching, consulting, advising, and coaching executives.
                    </p>
                    <p className="text-base    text-gray-500 font-medium leading-relaxed mb-4">
                        Based out of New York City / New Jersey and frequently traveling abroad, her work has spanned the globe across the USA, Europe, and Africa. Her clients are leaders at Fortune 500 companies in healthcare, banking, technology, and more, working for the likes of Merck, BMS, AbbVie, UBS, Prudential, IBM, Deloitte, to name a few.
                    </p>
                    <p className="text-base   text-gray-500 font-medium leading-relaxed mb-4">
                        Dr. Erraji offers that missing ingredient that executives need to keep advancing their career, operating at full potential and empowering their teams.
                    </p>
                    <p className="text-base  text-gray-500 font-medium leading-relaxed mb-4">
                        She earned a Ph.D. at René Descartes University, Paris, France, in Pharmacology, an MBA in Pharmaceutical Management and Marketing at Rutgers University, Newark, and did her post-doctorate training in Neuroscience and Genomics at Columbia University, NY.
                    </p>
                    <p className="text-base  text-gray-500 font-medium leading-relaxed">
                        Being a career switcher and an ambitious professional herself, Loubna is known to work best with other ambitious and high-achieving professionals who are committed to their success no matter what and want to take their next steps with confidence.
                    </p>

                </motion.div>

                {/* IMAGE SECTION */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="w-full lg:w-1/2 flex justify-center "
                >
                    <img
                        src="Aboutus/Dr.LoubnaErraji.jpg"
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
