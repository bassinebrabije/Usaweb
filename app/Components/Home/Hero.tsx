import { motion } from "framer-motion";

export default function Home() {
    return (
        <section className="px-4 mx-auto max-w-7xl lg:text-center mt-[9rem] sm:mt-[11rem] ">
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center justify-between px-1 py-1 mb-2 sm:mb-8 text-gray-900"
            >
                <span className="text-base text-gray-900 font-bold">
                    On-Demand Executive & Career Coaching For Biotech, Pharma, Life Sciences Leaders
                </span>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="mb-4 text-3xl sm:text-6xl font-extrabold text-gray-900 xl:px-36 lg:mb-7 leading-tight"
            >
                We Help You Level Up Your Career & Reach Your Full Potential
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                className="mb-10 text-base font-normal text-gray-500 lg:text-center lg:px-24 xl:px-60"
            >
                Individuals & Teams: Get Practical tools & frameworks to enhance
                your mindset & perform  <br /> at full potential.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.4 }}
                className="flex flex-col mb-8 md:flex-row lg:justify-center"
            >
                <a
                    href=""
                    className="px-6 py-3 text-base font-bold text-center text-white bg-[#cc1f23] hover:scale-105 rounded-xl "
                >
                    CORPORATIONS - LEARN MORE
                </a>
            </motion.div>
            <motion.iframe
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.6 }}
                className="relative w-full max-w-4xl mx-auto mt-12 border border-gray-300 shadow-2xl rounded-3xl lg:mt-16 h-[500px] yt-video"
                src="https://www.youtube.com/embed/LmnluYPT4e8?si=IHpzOswuwpgR03g2&amp;controls=0"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></motion.iframe>
        </section>
    );
}