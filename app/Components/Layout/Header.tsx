"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/logo.png";

export default function Header() {
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState(false);
    const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
    const [activeNav, setActiveNav] = useState("Home");

    useEffect(() => {
        const handleScroll = () => setScroll(window.scrollY > 50);
        const handleResize = () => setIsMobileOrTablet(window.innerWidth <= 768);

        handleResize();
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <header
            className={`w-full fixed top-0 left-0 z-50 transition-colors duration-300 border-b border-black/8 ${isMobileOrTablet
                ? "bg-white  backdrop-blur-lg"
                : scroll
                    ? "bg-white backdrop-blur-lg"
                    : "bg-transparent"
                }`}
        >
            <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                <div className="p-4 flex flex-row items-center justify-between">
                    <Link href="/">
                        <Image
                            src={logo}
                            alt="logo"
                            width={64}
                            height={64}
                            priority
                        />
                    </Link>
                    <button
                        className="md:hidden rounded-lg focus:outline-none"
                        onClick={() => setOpen(!open)}
                    >
                        <svg fill="#DC2626" viewBox="0 0 20 20" className="w-6 h-6">
                            <path
                                className={!open ? "block" : "hidden"}
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            />
                            <path
                                className={open ? "block" : "hidden"}
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>

                {/* Nav Links */}
                <nav
                    className={`flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row ${open ? "flex" : "hidden"
                        }`}
                >
                    {[
                        { name: "Home", path: "/" },
                        { name: "About Us", path: "/about" },
                        { name: "Services", path: "/#Services" },
                        { name: "Results", path: "/#Results" },
                        { name: "Contact Us", path: "/#Contact Us" },
                    ].map((section) => (
                        <Link
                            key={section.name}
                            href={section.path}
                            scroll={false}
                            className={`px-4 py-2 mt-2 tracking-wider text-sm cursor-pointer rounded-lg md:mt-0 md:ml-4 hover:bg-[#cc1f23] hover:text-white ${activeNav === section.name
                                ? "bg-[#cc1f23] text-white"
                                : "text-black"
                                }`}
                            onClick={() => {
                                setActiveNav(section.name);
                                setOpen(false);
                            }}
                        >
                            {section.name}
                        </Link>
                    ))}
                </nav>

            </div>
        </header>
    );
}
