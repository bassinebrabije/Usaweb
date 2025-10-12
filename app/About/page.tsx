
"use client";

import React from "react";

import Aboutdr from "../Components/Aboutus/about";
import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";

import Sliderimg from "../Components/Aboutus/sliderimg";
import Interviews from "../Components/Aboutus/Interviews";
import Book from "../Components/Aboutus/book";
import Howigot from "../Components/Aboutus/Howigot";
import Wanttosee from "../Components/Aboutus/Wanttosee";
import SocialFloatingButtons from "../Components/Contact";
import Hero from "../Components/Aboutus/Hero";

const About = () => {
    return (
        < >
            <Header />
            <Hero />
            <Aboutdr />
            <Sliderimg />
            <Interviews />
            <Book />
            <Howigot />
            <Wanttosee />
            <SocialFloatingButtons />
            <Footer />
        </>
    );
};

export default About;
