import { motion } from "framer-motion";
import Image from "next/image";

export default function Weworkwith() {
    return (
        <section className="relative flex flex-col items-center max-w-screen-xl px-5 mx-auto md:flex-row sm:px-6">
            {/* Left Content */}
            <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1 }}
                className="flex items-center py-10 md:w-1/2 sm:pl-5"
            >
                <div className="text-left">
                    <h1 className="text-4xl font-extrabold mb-6 tracking-tight text-gray-800 leading-none">
                        WE WORK WITH...
                    </h1>

                    <h2 className="text-4xl font-extrabold leading-tight text-gray-800">
                        INDIVIDUALS. ORGANIZATIONS. UNIVERSITIES. TRADE ASSOCIATIONS.
                    </h2>

                    <div className="mt-8 sm:flex md:mt-10">
                        <a
                            href="#"
                            className="px-6 py-3 text-xs sm:text-base font-bold text-center text-white bg-[#cc1f23] hover:scale-105 rounded-xl"
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
                        <Image
                            src="/home/bEthJ6MKQ86bybqNFwoB_Profpic.png"
                            alt="Professional Profile"
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
