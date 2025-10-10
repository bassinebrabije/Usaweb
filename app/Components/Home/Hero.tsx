import { motion } from "framer-motion";

export default function Home() {
    return (
        <section className="px-4 mx-auto max-w-7xl mt-[9rem] sm:mt-[11rem] text-center">
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-block px-1 py-1 mb-2 sm:mb-5 text-gray-900"
            >
                <span className="text-base text-gray-900 font-bold">
                    On-Demand Transformative Executive and Career Coaching
                </span>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="mb-10 text-3xl sm:text-6xl font-extrabold text-gray-900 leading-tight "
            >
                Empowering Leaders.<br />
                Elevating Performance.<br />
                Driving Results.
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.4 }}
                className="flex justify-center mb-8"
            >
                <a
                    href=""
                    className="px-6 py-3 text-base font-bold text-center text-white bg-[#cc1f23] hover:scale-105 rounded-xl"
                >
                    CORPORATIONS - LEARN MORE
                </a>
            </motion.div>

            <motion.img
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.6 }}
                className="w-full max-w-4xl mx-auto mt-12 border border-gray-300 rounded-3xl object-cover h-[250px] sm:h-[400px] md:h-[500px]"
                src="home/usabg.png"
                alt="Coaching illustration"
            />
        </section>
    );
}
