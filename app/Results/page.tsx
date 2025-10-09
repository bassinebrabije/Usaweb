
"use client";

import React from "react";
import Hero from "../Components/Results/Hero";
import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";
import Client from "../Components/Results/Client";
import Clientswhowork from "../Components/Results/Clientswhowork";
import Testimonials1 from "../Components/Results/Testimonials1";
import Testimonials2 from "../Components/Results/Testimonials2";

const Results = () => {
    return (
        < >
            <Header />
            <Hero />
            <Client />
            <Testimonials1 />
            <Clientswhowork />
            <Testimonials2 />
            <Footer />
        </>
    );
};

export default Results;
