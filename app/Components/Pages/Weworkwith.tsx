import { motion } from "framer-motion";

export default function Weworkwith() {
    return (
        <div className="relative flex flex-col items-center max-w-screen-xl px-10 mx-auto md:flex-row sm:px-6  ">
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
                        WE WORK WITH...
                    </h2>
                    <div className="mt-8 sm:flex md:mt-10">
                        <a
                            href=""
                            className="px-6 py-3 text-xs sm:text-base  font-bold text-center text-white bg-red-600 rounded-xl "
                        >
                            CHECK IF THIS IS FOR YOU & HOW WE CAN HELP
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
                            src="/KsLgZTWfRGGGWbxk5ojN_ZAVSoDiKRWmrxQJ7evlA_UV9A0389r.jpg"
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