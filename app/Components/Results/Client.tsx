import { motion } from "framer-motion";

export default function TrustedBy() {
    const logos = [
        { src: "/OurClient/AbbVie-logo.png", alt: "AbbVie-logo" },
        { src: "/OurClient/HarvardMedicalSchool.png", alt: "HarvardMedicalSchool" },
        { src: "/OurClient/um6p.png", alt: "um6p" },
        { src: "/OurClient/Merck.png", alt: "Merck" },
        { src: "/OurClient/Attijariwafabank.png", alt: "Attijariwafabank" },
        { src: "/OurClient/bristol-myers-squibb.png", alt: "bristol-myers-squibb" },
        { src: "/OurClient/banquepopulaire.png", alt: "banquepopulaire" },
        { src: "/OurClient/cigna.png", alt: "cigna" },
        { src: "/OurClient/alkermes.png", alt: "alkermes" },
        { src: "/OurClient/allergan.png", alt: "allergan" },
        { src: "/OurClient/Amicus.png", alt: "Amicus" },
        { src: "/OurClient/eisai.png", alt: "eisai" },
        { src: "/OurClient/Mallinckrodt.png", alt: "Mallinckrodt" },
        { src: "/OurClient/weill.png", alt: "weill" },
        { src: "/OurClient/rutgers-university.png", alt: "rutgers-university" },
        { src: "/OurClient/Rwj.png", alt: "Rwj" },
        { src: "/OurClient/johns.png", alt: "johns" },
        { src: "/OurClient/hackensack.png", alt: "hackensack" },
        { src: "/OurClient/Fresenius_Medical_Care_logo.png", alt: "Fresenius_Medical_Care_logo" },
        { src: "/OurClient/PM_Pediatric.png", alt: "PM_Pediatric" },
        { src: "/OurClient/Catalent.png", alt: "Catalent" },
        { src: "/OurClient/Virtua.png", alt: "Virtua" },
        { src: "/OurClient/idcare.png", alt: "idcare" },
    ];

    // Duplicate logos for seamless infinite effect
    const allLogos = [...logos, ...logos];

    return (
        <section className="relative pt-10 sm:pt-20 flex flex-col items-center mb-5">
            <p className="text-center text-base text-[#6b7280] mb-10 sm:mb-12 w-auto px-4 max-w-3xl">
                Our clients are directors, VPs, senior leaders, and executives in all industries
                (pharma, healthcare, life sciences, higher education, banking, telecommunications, etc.)
                driving growth through high-performing teams and cultures.
            </p>
            <div className="max-w-6xl w-full overflow-hidden ">
                <motion.div
                    className="flex items-center" // center vertically
                    style={{ width: "max-content" }}
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 80,
                        ease: "linear",
                    }}
                >
                    {allLogos.map((logo, idx) => (
                        <div key={idx} className="px-4 flex items-center cursor-pointer"> {/* use px-4 instead of pl-8 */}
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                width={150}
                                height={150}
                                loading="lazy"
                                decoding="async"
                                className="h-auto  sm:filter sm:grayscale hover:grayscale-0 transition duration-300"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>

    );
}