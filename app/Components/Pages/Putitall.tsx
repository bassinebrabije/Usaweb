import { motion } from "framer-motion";

const Together = () => {
    // Variants for the container
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Stagger the icons
                duration: 0.5,
            },
        },
    };

    // Variants for each item
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <motion.div
                className="rounded-2xl p-8 text-center sm:p-16 md:px-24 md:py-20 lg:px-28 bg-cover bg-center relative"
                style={{
                    backgroundImage:
                        "url('https://i.ibb.co/V0dcDxgT/RD30b-VRqe-Vv6l69-XPx-Xg-CL9z-CSxj-Tn2-Vx-W97-AANg-file.jpg')",
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                {/* Optional overlay */}
                <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>

                <div className="relative z-10 max-w-5xl mx-auto">
                    <motion.h2
                        className="font-display text-2xl font-bold tracking-tight text-white sm:text-4xl"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Put it all together and feel fulfilled and empowered to level up your career: get seen, recognized, & earn 20% more.
                    </motion.h2>
                    <motion.p
                        className="max-w-4xl text-sm text-white mx-auto mt-4 sm:text-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        Say goodbye to feeling stuck, not knowing what to do, and not being visible. Simply by using these steps to attract the right opportunities to you, within 3 months you could be…
                    </motion.p>

                    {/* Grid of icons */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 text-center"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {[
                            { icon: "💡", title: "Gaining Clarity" },
                            { icon: "📈", title: "Making Decisions" },
                            { icon: "🤝", title: "Getting Offers" },
                            { icon: "💰", title: "Earning More" },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="flex flex-col items-center text-white"
                                variants={itemVariants}
                            >
                                <div className="text-5xl mb-4">{item.icon}</div>
                                <h3 className="font-semibold text-lg">{item.title}</h3>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Together;
