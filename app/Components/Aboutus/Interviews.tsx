// components/FeatureGrid.js
import Image from "next/image";
import { motion } from "framer-motion";

const features = [
    { imgSrc: "/Aboutus/Interviewslogos/ColumbiaUniversity.png", alt: "Columbia University Logo" },
    { imgSrc: "/Aboutus/Interviewslogos/rBUSINESS.png", alt: "rBUSINESS Logo" },
    { imgSrc: "/Aboutus/Interviewslogos/TheStateUniversityofNewJersey.png", alt: "The State University of New Jersey Logo" },
    { imgSrc: "/Aboutus/Interviewslogos/ICFPCC.png", alt: "ICFPCC Logo" },
];

export default function Interviews() {
    return (
        <section className="container mx-auto py-12 max-w-5xl">
            {/* Animate entire grid as one block */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}>
                <div
                    className="grid gap-6 grid-cols-2 md:grid-cols-4 place-items-center"

                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center justify-center rounded-lg p-6 w-full"
                            whileHover={{ scale: 1.05 }} // hover effect for the card
                        >
                            {/* Inner logo animation */}
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="w-32 h-32 mb-4 flex items-center justify-center"
                            >
                                <Image
                                    src={feature.imgSrc}
                                    alt={feature.alt}
                                    width={128}
                                    height={128}
                                    className="object-contain"
                                />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Button animation */}
                <div
                    className="flex justify-center mt-8"
                >
                    <a
                        href=""
                        className="px-6 py-3 text-base font-bold text-center text-white bg-[#cc1f23] hover:scale-105 rounded-xl transition-transform"
                    >
                        CORPORATIONS - LEARN MORE
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
