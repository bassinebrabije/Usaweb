
"use client";

import React from "react";
import Hero from "../Components/Results/Hero";
import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";
import Client from "../Components/Home/Client";
import Clientswhowork from "../Components/Results/Clientswhowork";
import Testimonials1 from "../Components/Results/Testimonials1";
import Testimonials2 from "../Components/Results/Testimonials2";
import SocialFloatingButtons from "../Components/Contact";
import Clientswho from "../Components/Results/Clientswho";

const Results = () => {
    return (
        < >
            <Header />
            <Hero />
            <Client />
            <Testimonials1 />
            <Clientswhowork />
            <Testimonials2 />
            <Clientswho />
            <SocialFloatingButtons />
            <Footer />
        </>
    );
};

export default Results;
