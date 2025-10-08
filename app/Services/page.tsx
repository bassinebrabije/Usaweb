
"use client";

import React from "react";
import Header from "../Components/Servicespage/Hero";
import Hero from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";
import IndividualCareer from "../Components/Servicespage/IndividualCareer";
import Executive from "../Components/Servicespage/Executive";
import Business from "../Components/Servicespage/Business";
import Wanttolearn from "../Components/Servicespage/Wanttolearn";
import FAQ from "../Components/Servicespage/FAQ";
const About = () => {
    return (
        < >
            <Header />
            <Hero />
            <IndividualCareer />
            <Executive />
            <Business />
            <Wanttolearn />
            <FAQ />
            <Footer />
        </>
    );
};

export default About;
