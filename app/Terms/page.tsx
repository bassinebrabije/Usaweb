'use client';

import React from "react";
import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";
import SocialFloatingButtons from "../Components/Contact";

const TermsOfService = () => {
    const today = new Date();

    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    return (
        <>
            <Header />
            <div className=" text-black mb-[5rem] px-4 mx-auto max-w-7xl lg:text-left mt-[9rem] sm:mt-[11rem]">
                <div className="container mx-auto px-4 py-8">
                    {/* <p className="mb-4">Effective Date: 2024-7-15</p> */}

                    <div className="w-full flex">
                        <h1 className="text-3xl font-bold mb-4 text-[#cc1f23]">
                            Terms
                        </h1>
                    </div>

                    <p className="mb-4 text-base">
                        PLEASE READ THESE TERMS OF USE CAREFULLY BEFORE USING THIS WEBSITE.
                        By using this website, you signify your consent to these terms of use.
                        If you do not agree to these Terms of Use, please do not use the website.
                    </p>

                    <p className="mb-4 text-base">
                        Your access to and use of this website, as well as all related websites
                        operated by ADVANCIS CONSULTING, LLC (which includes ADVANCIS CONSULTING,
                        among others) (collectively the “Site”) is subject to the following terms
                        and conditions (“Terms of Use”) and all applicable laws. By accessing
                        and browsing the Site, you accept, without limitation or qualification,
                        the Terms of Use and acknowledge that any other agreements between you
                        and the Site are superseded and of no force or effect.
                    </p>

                    <div className="pb-5">
                        <h2 className="font-bold text-[#cc1f23]">General Terms</h2>
                        <br />
                        <ul className="list-disc pl-5 space-y-4">
                            <li className="text-base">
                                By accessing this website, you agree to be bound by these terms of
                                service, all applicable laws and regulations, and agree that you are
                                responsible for compliance with any applicable local laws. If you do
                                not agree with any of these terms, you are prohibited from using or
                                accessing this site. The materials contained in this website are
                                protected by applicable copyright and trademark law.
                            </li>
                            <li className="text-base">
                                We reserve the right to change these terms of service at any time
                                without notice. By using this website you are agreeing to be bound
                                by the then current version of these terms of service. Any updates
                                you will be notified via email.
                            </li>
                        </ul>
                    </div>

                    <div className="pb-5">
                        <h2 className="font-bold text-[#cc1f23]">Detailed Terms</h2>
                        <br />
                        <p className="text-base">
                            1. You agree that the Site itself, as well as all content, videos, training
                            materials, products, services and/or other materials, (collectively the
                            “Content”) are maintained for your personal use and information by
                            ADVANCIS CONSULTING, LLC, (the “Company”) and are the property of the
                            Company and/or its third party providers. You agree that such Company
                            Content shall include all proprietary videos, HTML/CSS, Javascript,
                            graphics, voice, and sound recordings, artwork, photos, documents, and
                            text as well as all other materials included in the Site, excluding only
                            the materials you provide...
                        </p>
                        {/* Add the remaining terms in the same <p> structure */}
                    </div>

                    <p className="text-sm mt-8">
                        Last Updated:  {month}/{day}/{year}
                    </p>
                </div>
            </div>
            <SocialFloatingButtons />
            <Footer />
        </>
    );
};

export default TermsOfService;
