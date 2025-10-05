import { motion } from "framer-motion";

export default function Unlock() {
    return (
        <div className="relative flex flex-col items-center max-w-7xl px-5 mx-auto md:flex-row sm:px-6  ">
            {/* Left Content */}
            <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1 }}
                className="flex items-center py-10 md:w-1/2 sm:pl-5"
            >
                <div className="text-left">
                    <h2 className="text-4xl font-extrabold tracking-tight text-gray-800 leading-none ">
                        UNLOCK YOUR <span className="font-bold text-[#cc1f23]">DREAM CAREER</span>
                    </h2>
                    <p className="mt-4 text-xl font-semibold text-gray-500">
                        The 90-Day Career Advancement Framework
                    </p>
                    <p className="mt-4 text-base  text-gray-500">
                        Welcome to Unlock Your Dream Career, an on-demand and customized executive coaching program for biopharma, healthcare, and life science executives who want to build successful careers & empower their teams.
                    </p>
                    <p className="mt-4 text-xl text-gray-700  l font-medium">
                        I help Biopharma, Healthcare, & Life Science Executives <span className="font-bold text-[#cc1f23]">GET PROMOTED</span> and <span className="font-bold text-[#cc1f23]">EARN 20% MORE IN 90 DAYS</span>.
                    </p>
                    <ul className="mt-6 space-y-3 text-gray-600 list-disc list-inside">
                        <li>Sick and tired of not being PROMOTED?</li>
                        <li>Feeling stuck and not sure how to maximize your impact?</li>
                        <li>Feeling underpaid and overworked?</li>
                        <li>
                            Craving more visibility and looking for a proven system to get great
                            job offers in the biopharma, healthcare, life science industry?
                        </li>
                    </ul>
                    <div className="mt-8 sm:flex md:mt-10">
                        <a
                            href=""
                            className="px-6 py-3 text-xs sm:text-base  font-bold text-center text-white bg-[#cc1f23] rounded-xl "
                        >
                            BOOK A FREE CAREER STRATEGY CALL
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
                        <img
                            src="/gEthJ6MKQ86bybqNFwoB_Profpic.png"
                            alt='KsLgZTWfRGGGWbxk5ojN_ZAVSoDiKRWmrxQJ7evlA_UV9A0389r'
                            width={150}
                            height={150}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}