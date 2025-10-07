import { motion } from "framer-motion";

export default function Howigot() {
    return (
        <section className="relative flex flex-col items-center max-w-7xl px-5 mx-auto md:flex-row sm:px-6  ">
            {/* Right Image */}
            <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1 }}
                className="flex items-center py-5 md:w-1/2   "
            >
                <div className="relative w-full p-3 rounded md:p-8">
                    <div className="rounded-lg bg-white text-black w-full">
                        <img
                            src="Aboutus/Dr.LoubnaErrajii.jpg"
                            alt='Dr. Loubna Erraji'
                            width={150}
                            height={150}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                </div>
            </motion.div>
            {/* Left Content */}
            <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1 }}
                className="flex items-center py-10 md:w-1/2 sm:pl-5"
            >
                <div className="text-left">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-800 leading-[3rem] ">
                        How i got unstuck and found my way to fulfillment
                    </h1>
                    <p className="mt-4 text-base  text-gray-500">
                        I switched careers many times and juggled work and family responsibilities for two decades. I felt exhausted, drained, short of patience, confused, and resistant to ask for help. I thought that if I did, this would mean that I had failed as a mother and as a working professional.
                    </p>
                    <p className="mt-4 text-base  text-gray-500">
                        I kept pushing myself to be a “superwoman” who had to always figure things out by herself and thought that things would somehow get resolved on their own. From the outside, everything looked perfect.                    </p>
                    <p className="mt-4 text-base  text-gray-500">
                        Nobody knew how much I was suffering inside. Nobody knew how misaligned I felt.

                    </p>
                    <p className="mt-4 text-base  text-gray-500">
                        In the search of worthiness, I kept accumulating degrees and telling myself that I had to be grateful for everything. I resented my jobs. My personal life went down the drain. I had no control over my emotions. And I still thought I had to keep “fighting”.

                    </p>
                    <p className="mt-4 text-base  text-gray-500">
                        I had no idea how to soul search and align better with my values. I had no idea about my purpose in life.


                    </p>
                    <p className="mt-4 text-base  text-gray-500">
                        I had no guidance and no clarity. I was searching for fulfillment in the wrong places.
                    </p>
                    <div className="mt-8 sm:flex md:mt-10">
                        <a
                            href=""
                            className="px-6 py-3 text-xs sm:text-base  font-bold text-center text-white bg-[#cc1f23] hover:scale-105 rounded-xl "
                        >
                            Step into your next level of leadership and life.
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}