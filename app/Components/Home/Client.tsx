'use client';

import { motion } from "framer-motion";

export default function TrustedBy() {
    const logos = [
        { src: "/OurClient/AbbVie-logo.png", alt: "AbbVie – Global Biopharmaceutical Company" },
        { src: "/OurClient/HarvardMedicalSchool.png", alt: "Harvard Medical School – Leading Medical Education Institution" },
        { src: "/OurClient/um6p.png", alt: "Mohammed VI Polytechnic University – Higher Education and Research" },
        { src: "/OurClient/Merck.png", alt: "Merck – Life Sciences and Healthcare Company" },
        { src: "/OurClient/Attijariwafabank.png", alt: "Attijariwafa Bank – Banking and Financial Services" },
        { src: "/OurClient/bristol-myers-squibb.png", alt: "Bristol Myers Squibb – Biopharmaceuticals and Oncology" },
        { src: "/OurClient/banquepopulaire.png", alt: "Banque Populaire – Retail Banking Institution" },
        { src: "/OurClient/cigna.png", alt: "Cigna – Health Insurance and Services" },
        { src: "/OurClient/alkermes.png", alt: "Alkermes – Pharmaceutical Research Company" },
        { src: "/OurClient/allergan.png", alt: "Allergan – Global Pharmaceutical Company" },
        { src: "/OurClient/Amicus.png", alt: "Amicus Therapeutics – Biotechnology and Rare Diseases" },
        { src: "/OurClient/eisai.png", alt: "Eisai – Human Health Care Pharmaceutical Company" },
        { src: "/OurClient/Mallinckrodt.png", alt: "Mallinckrodt Pharmaceuticals – Specialty Pharmaceuticals" },
        { src: "/OurClient/weill.png", alt: "Weill Cornell Medicine – Medical Education and Research" },
        { src: "/OurClient/rutgers-university.png", alt: "Rutgers University – Leading Research University" },
        { src: "/OurClient/Rwj.png", alt: "RWJ Barnabas Health – Healthcare Network" },
        { src: "/OurClient/johns.png", alt: "Johns Hopkins – Research and Medical Institution" },
        { src: "/OurClient/hackensack.png", alt: "Hackensack Meridian Health – Healthcare Organization" },
        { src: "/OurClient/Fresenius_Medical_Care_logo.png", alt: "Fresenius Medical Care – Dialysis and Healthcare Services" },
        { src: "/OurClient/PM_Pediatric.png", alt: "PM Pediatrics – Pediatric Urgent Care" },
        { src: "/OurClient/Catalent.png", alt: "Catalent – Pharmaceutical Manufacturing Solutions" },
        { src: "/OurClient/Virtua.png", alt: "Virtua Health – Healthcare and Hospital Services" },
        { src: "/OurClient/idcare.png", alt: "ID Care – Infectious Disease Specialists" },
    ];

    // Double the logos for continuous loop effect
    const repeatedLogos = [...logos, ...logos];

    return (
        <section
            id="trusted-by"
            aria-label="Trusted by leading global organizations and institutions"
            className="relative flex flex-col items-center pt-10 sm:pt-20 mb-10 overflow-hidden"
        >
            {/* Section heading for SEO */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center hidden"
            >
                Trusted by Global Leaders and Institutions
            </motion.h2>

            {/* Description paragraph */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-center text-base sm:text-lg text-gray-600 mb-10 sm:mb-12 w-auto px-4 max-w-3xl"
            >
                Our clients are directors, VPs, senior leaders, and executives in all industries <strong> pharma,
                    healthcare, life sciences, higher education, banking, telecommunications, </strong> and more..
                driving growth through high-performing teams and cultures.
            </motion.p>

            {/* Logo marquee wrapper */}
            <div className="w-full max-w-6xl overflow-hidden relative">
                <motion.div
                    className="flex items-center gap-8"
                    style={{ width: "max-content" }}
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 60, // ⏳ Smooth speed
                        ease: "linear",
                    }}
                    role="list"
                    aria-label="Logos of trusted client organizations"
                >
                    {repeatedLogos.map((logo, idx) => (
                        <motion.div
                            key={idx}
                            className="flex items-center justify-center px-4 sm:px-6"
                            whileHover={{ scale: 1.05 }}
                        >
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                width={150}
                                height={150}
                                loading="lazy"
                                decoding="async"
                                className="h-auto w-auto max-h-[40px] sm:max-h-[50px] object-contain grayscale hover:grayscale-0 transition duration-300"
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Optional subtle gradient fade on edges for aesthetic */}
                <div className="pointer-events-none absolute top-0 left-0 w-24 sm:w-40 h-full bg-gradient-to-r from-white to-transparent" />
                <div className="pointer-events-none absolute top-0 right-0 w-24 sm:w-40 h-full bg-gradient-to-l from-white to-transparent" />
            </div>
        </section>
    );
}
