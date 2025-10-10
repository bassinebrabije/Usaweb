
"use client";

import React from "react";

import Hero from "../Components/Servicespage/Hero";
import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";


import IndividualCareer from "../Components/Servicespage/IndividualCareer";
import Executive from "../Components/Servicespage/Executive";
import Business from "../Components/Servicespage/Business";
import Wanttolearn from "../Components/Servicespage/Wanttolearn";
import FAQ from "../Components/Servicespage/FAQ";
import SocialFloatingButtons from "../Components/Contact";


const Services = () => {
    return (
        < >
            <Header />
            <Hero />
            <IndividualCareer />
            <Executive />
            <Business />
            <Wanttolearn />
            <FAQ />
            <SocialFloatingButtons />
            <Footer />
        </>
    );
};

export default Services;
