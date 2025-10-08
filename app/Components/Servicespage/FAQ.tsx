"use client";
import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "How do I Prepare for my Individual Coaching Session?",
        answer: `You will have access to my online course that includes videos and frameworks to help you prepare for both individual and group coaching calls. The modules cover 12 weeks of training and counseling to get you ready for our coaching sessions.

During our calls, we will discuss your weekly wins, challenges, achievements, and goals to set the tone for your next steps.`,
    },
    {
        question: "What Does Career Coaching Include?",
        answer: `Career coaching includes:
- Online Coaching Support
- Individual One-on-One Coaching Private Sessions
- Group Coaching & Training Private Sessions
- Access to Online Modules
- Mindset Coaching & Personality Assessments
- Value Proposition & Positioning
- Career Planning Worksheets
- Executive Resume & LinkedIn Profile
- Networking Strategy
- Cover Letters
- Interview Preparation (as needed)`,
    },
    {
        question: "How Long is a Career Coaching Session?",
        answer: `The individual coaching sessions are 60 minutes.
The group coaching and training calls are 60-90 minutes.`,
    },
    {
        question: "Coaching Services Investment",
        answer: "To inquire about the investment in Career coaching, Executive Coaching, Workshops, please connect with us.",
    },
    {
        question: "LEADERSHIP PROGRAMS INCLUDE...",
        answer: `
- Leading high-performing & collaborative teams.
- Goal setting and productivity improvement.
- Aligning personal values with company culture.
- Coaching skills for leaders.
- Executive presence.`,
    },
];

const FAQAccordion: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const renderAnswer = (text: string): React.ReactNode[] => {
        const lines = text.split("\n");
        const elements: React.ReactNode[] = [];
        let listItems: string[] = [];

        lines.forEach((line, idx) => {
            if (line.trim().startsWith("-")) {
                listItems.push(line.replace(/^- /, ""));
            } else {
                if (listItems.length > 0) {
                    elements.push(
                        <ul key={`ul-${idx}`} className="list-disc list-inside mb-2">
                            {listItems.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    );
                    listItems = [];
                }
                if (line.trim() !== "") {
                    elements.push(
                        <p key={`p-${idx}`} className="mb-2">
                            {line}
                        </p>
                    );
                }
            }
        });

        if (listItems.length > 0) {
            elements.push(
                <ul key="ul-last" className="list-disc list-inside mb-2">
                    {listItems.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            );
        }

        return elements;
    };

    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-x-16 gap-y-10 xl:gap-28 max-lg:max-w-2xl mx-auto max-w-full">
                    {/* Left Image */}
                    <div className="w-full lg:w-1/2  hidden sm:block">
                        <Image
                            src="/Servicesimg/1696230182.png"
                            alt="FAQ section"
                            width={600}
                            height={500}
                            className="w-full rounded-xl object-cover"
                        />
                    </div>

                    {/* Right FAQ */}
                    <div className="w-full lg:w-1/2">
                        <div className="lg:max-w-xl">


                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <div
                                        key={index}
                                        className={`border border-gray-200 rounded-xl overflow-hidden  transition-all duration-300 ${openIndex === index ? "bg-gray-50" : "bg-white"
                                            }`}
                                    >
                                        <button
                                            onClick={() => toggle(index)}
                                            className="w-full flex justify-between    items-center px-6 py-5 text-left"
                                        >
                                            <span className="text-lg font-semibold text-gray-900">
                                                {faq.question}
                                            </span>
                                            <ChevronDownIcon
                                                className={`w-6 h-6 text-[#cc1f23] transition-transform duration-300 ${openIndex === index ? "rotate-180 " : ""
                                                    }`}
                                            />
                                        </button>
                                        {openIndex === index && (
                                            <div className="px-6 pb-6 text-gray-700">
                                                {renderAnswer(faq.answer)}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQAccordion;
