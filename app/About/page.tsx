
"use client";

import React from "react";
import Header from "../Components/Aboutus/Hero";
import Hero from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";
import Sliderimg from "../Components/Aboutus/sliderimg";
import Interviews from "../Components/Aboutus/Interviews";
import Book from "../Components/Aboutus/book";
import Howigot from "../Components/Aboutus/Howigot";
import Wanttosee from "../Components/Aboutus/Wanttosee";
const About = () => {
    return (
        < >
            <Header />
            <Hero />
            <Sliderimg />
            <Interviews />
            <Book />
            <Howigot />
            <Wanttosee />
            <Footer />
        </>
    );
};

export default About;
