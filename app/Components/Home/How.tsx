'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react"; // ✅ close icon
import steps from './steps.json';

export default function How() {
    const [open, setOpen] = useState(false);
    const [activeStep, setActiveStep] = useState<number | null>(null);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (open) {
            // Save the current scroll position
            const scrollY = window.scrollY;
            document.body.style.position = "fixed";
            document.body.style.top = `-${scrollY}px`;
            document.body.style.left = "0";
            document.body.style.right = "0";
        } else {
            // Restore scroll position
            const scrollY = document.body.style.top;
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.left = "";
            document.body.style.right = "";
            window.scrollTo(0, parseInt(scrollY || "0") * -1);
        }
    }, [open]);


    const handleOpen = (idx: number) => {
        setActiveStep(idx);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setActiveStep(null);
    };

    return (
        <section className="pb-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 mt-10">
                <div className="mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="mb-4 text-2xl font-bold tracking-tight sm:leading-16 text-gray-800 sm:text-4xl lg:text-5xl"
                    >
                        How "Unlock Your Dream Career" <br /> program can help :
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-900 sm:text-xl"
                    >
                        The program is based on a <span className="text-[#cc1f23] font-bold">6-step</span> method used by high-achieving executives to define, plan, and attract their <span className="text-[#cc1f23] font-bold">next career opportunities.</span>
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-900 sm:text-xl pt-3.5"
                    >
                        Get <span className="text-[#cc1f23] font-bold">seen and recognized</span> as an impact-driving thought leader, while <span className="text-[#cc1f23] font-bold">earning 20% more</span>.
                    </motion.p>
                </div>

                {/* Step grid */}
                <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.3 + idx * 0.1 }}
                            onClick={() => handleOpen(idx)}
                            className="relative group p-8 transition-transform duration-300 bg-white rounded-xl border-2 border-red-100 md:hover:scale-110 cursor-pointer overflow-hidden"
                        >
                            <div className="relative z-10 flex flex-col items-center">
                                <div className="flex items-center justify-center w-16 h-16 mb-6 text-[#cc1f23] rounded-full transition-colors duration-300 group-hover:bg-[#cc1f23] group-hover:text-white">
                                    <span className="text-3xl font-bold transition-colors duration-300 group-hover:text-white">
                                        {idx + 1}
                                    </span>
                                </div>
                                <h3 className="mb-3 text-xl font-semibold text-gray-800 transition-colors duration-300 group-hover:text-white">
                                    {step.title}
                                </h3>
                            </div>
                            <div className="absolute inset-0 bg-[#cc1f23] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl z-0"></div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {open && activeStep !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
                        onClick={handleClose}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="relative bg-white rounded-xl shadow-2xl w-full max-w-7xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* ✅ Close button */}
                            <button
                                onClick={handleClose}
                                aria-label="Close"
                                className="absolute top-4 right-4 sm:top-2 sm:right-2 z-50  p-2 rounded-full  transition-colors cursor-pointer "
                            >
                                <X className="w-6 h-6 text-gray-700" />
                            </button>
                            {/* Left side */}
                            <div className="md:w-1/2 p-6 border-b md:border-b-0 md:border-r border-gray-200 flex-shrink-0 flex flex-col">
                                <h3 className="mb-4 text-xl font-semibold text-[#cc1f23]">
                                    Step {activeStep + 1} : {steps[activeStep].title}
                                </h3>
                                <div className="aspect-video w-full rounded-lg overflow-hidden mb-4">
                                    <iframe
                                        src={steps[activeStep].videoUrl}
                                        title="YouTube video"
                                        frameBorder={0}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full"
                                    ></iframe>
                                </div>
                                {steps[activeStep].imgUrl && (
                                    <img
                                        src={steps[activeStep].imgUrl}
                                        alt="Step illustration"
                                        className="w-[15rem] sm:w-[40rem] rounded-lg mt-4 mx-auto"
                                    />
                                )}
                            </div>
                            {/* Right side */}
                            <div className="md:w-1/2 p-6 overflow-y-auto max-h-[90vh] flex flex-col">
                                <h4 className="mb-3 text-lg font-semibold text-gray-800">{steps[activeStep].detailsTitle}</h4>
                                <p className="mb-4 text-gray-700 text-sm sm:text-base whitespace-pre-line">
                                    {steps[activeStep].detailsText}
                                </p>
                                {steps[activeStep].Testimonialtext && (
                                    <div className="p-4 rounded-2xl mt-2 border border-gray-200">
                                        <figure className="md:flex max-w-5xl rounded-xl overflow-hidden items-center">
                                            <img
                                                className="w-20 h-20 md:w-32 md:h-32 object-cover rounded-full mx-auto md:mx-0"
                                                src={steps[activeStep].Testimonialimg}
                                                alt={steps[activeStep].Testimonialname}
                                            />
                                            <div className="pt-4 md:pt-0 md:pl-6 text-center md:text-left flex flex-col justify-center space-y-2 md:w-3/4">
                                                <blockquote className="w-full">
                                                    <p className="text-sm sm:text-base font-medium text-gray-800">
                                                        {steps[activeStep].Testimonialtext}
                                                    </p>
                                                </blockquote>
                                                <figcaption className="font-medium">
                                                    <div className="text-gray-700 text-sm">{steps[activeStep].Testimonialname}</div>
                                                    <div className="text-gray-700 text-xs">{steps[activeStep].Testimonialjob}</div>
                                                </figcaption>
                                            </div>
                                        </figure>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}