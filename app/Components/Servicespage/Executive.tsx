import { motion } from "framer-motion";

export default function Executive() {
    return (
        <section className="px-4 mx-auto max-w-7xl mt-12 sm:mt-[5rem]">
            {/* Flex Layout for Text + Image */}
            <div className="flex flex-col-reverse lg:flex-row-reverse items-center lg:items-start gap-12 lg:gap-20">
                {/* TEXT SECTION */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1 }}
                    className="w-full lg:w-1/2 text-gray-900"
                >
                    <h1 className="mb-5 text-4xl font-extrabold text-gray-900 leading-tight">
                        Executive Coaching - For Corporate Leaders & Teams
                    </h1>
                    <p className="text-base font-medium text-gray-500 leading-relaxed mb-5">
                        With the ongoing changes in the job marketplace, the increased volatility and uncertainty, and the high demand for talent, organizations are more than ever in need to increase their leadership effectiveness, drive performance, and put more effort into retaining their talent.
                    </p>
                    <p className="text-base font-medium text-gray-500 leading-relaxed mb-12">
                        We collaborate with organizations that support the increasing demand for personal and professional development. We focus on providing customized, scalable executive coaching that delivers growth for everyone, and supports individual leaders, their teams and the entire organization.
                    </p>
                    <a
                        href=""
                        className="px-6 py-3 text-base font-bold text-center text-white bg-[#cc1f23] hover:scale-105 rounded-xl"
                    >
                        CONNECT WITH US
                    </a>
                </motion.div>

                {/* IMAGE SECTION */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1 }}
                    className="w-full lg:w-1/2 flex justify-center sm:pt-8"
                >
                    <img
                        src="/Servicesimg/hX1gIqzLSGixu0TfBuV5_Executives.jpg"
                        alt="Executives"
                        width={150}
                        height={150}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-auto rounded-lg"
                    />
                </motion.div>
            </div>
        </section>
    );
}
