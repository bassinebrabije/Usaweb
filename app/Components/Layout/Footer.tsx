"use client";

import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/logo.png";

export default function Footer() {
    const currentYear = new Date().getFullYear(); // get current year

    return (
        <footer className="mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8">
            <div className="border-t border-slate-900/5 py-10">
                {/* Center the logo */}
                <div className="flex justify-center">
                    <Link href="/">
                        <Image
                            src={logo}
                            alt="logo"
                            width={64}
                            height={64}
                            priority
                        />
                    </Link>
                </div>

                <p className="mt-5 text-center text-sm leading-6 text-slate-500">
                    © {currentYear} Advancis Consulting. All rights reserved.
                </p>
                <div className="mt-8 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700">
                    {/* Use href instead of to */}
                    <Link href="/Terms">Terms</Link>
                    <div className="h-4 w-px bg-slate-500/20"></div>
                    <Link href="/">Powered by Brabije Yassine</Link>
                </div>
            </div>
        </footer>
    );
}
