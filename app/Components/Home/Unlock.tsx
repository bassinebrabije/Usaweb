import { motion } from "framer-motion";
import Image from "next/image";

export default function Unlock() {
    return (
        <section className="relative flex flex-col items-center max-w-7xl px-5 mx-auto md:flex-row sm:px-6">

            {/* Left Content */}
            <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1 }}
                className="flex items-center py-10 md:w-1/2 sm:pl-5"
            >
                <div className="text-left">
                    <h1 className="text-2xl font-extrabold tracking-tight text-gray-800 leading-[2rem]">
                        Unlock the leader within—our executive and career coaching empowers you to think boldly, lead strategically, and achieve what once felt out of reach.
                    </h1>
                    <p className="mt-4 text-base text-gray-500">
                        Lead with purpose. Think strategically. Achieve more than you thought possible—with coaching that transforms careers, teams, and entire organizations.
                    </p>
                    <p className="mt-4 text-base text-gray-500">
                        We specialize in executive and career coaching that helps leaders, teams, and organizations unlock their full potential. Whether you're looking to enhance leadership skills, sharpen strategic thinking, or improve decision-making capabilities, our mission is simple:
                    </p>
                    <h2 className="text-2xl mt-4 font-extrabold tracking-tight text-gray-800 leading-[2rem]">
                        We have one goal: helping you achieve yours.
                    </h2>
                    <p className="mt-4 text-base text-gray-500">
                        <span className="font-bold text-[#cc1f23]">Since 2016</span>, we've guided hundreds of professionals through meaningful growth and lasting transformation.
                    </p>
                    <p className="mt-4 text-base text-gray-500">
                        We believe you already have the capacity to perform at a higher level—our role is to help you access it. Through personalized coaching, we empower clients to:
                    </p>
                    <ul className="mt-6 space-y-3 text-gray-500 list-disc list-inside">
                        <li>Lead with clarity and confidence</li>
                        <li>Make smarter, faster decisions</li>
                        <li>Navigate career transitions effectively</li>
                        <li>Build high-performing teams</li>
                        <li>Drive sustainable change</li>
                    </ul>
                    <div className="mt-8 sm:flex md:mt-10">
                        <a
                            href="#"
                            className="px-6 py-3 text-xs sm:text-base font-bold text-center text-white bg-[#cc1f23] hover:scale-105 rounded-xl"
                        >
                            Step into your next level of leadership and life.
                        </a>
                    </div>
                </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1 }}
                className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10"
            >
                <div className="relative w-full p-3 rounded md:p-8">
                    <div className="rounded-lg bg-white text-black w-full">
                        <Image
                            src="/Home/Dr.LoubnaErraji.png" // note the leading slash
                            alt="Dr. Loubna Erraji"
                            width={600}
                            height={600}
                            className="w-full h-auto rounded-lg"
                            priority={true}
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
