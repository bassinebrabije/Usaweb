
"use client";

import React from "react";
import Hero from "../Components/Home/Hero";
import Client from "../Components/Home/Client";
import Unlock from "../Components/Home/Unlock";
import How from "../Components/Home/How";
import Putitall from "../Components/Home/Putitall";
import Blog from "../Components/Home/Blog";
import Wanttoempower from "../Components/Home/Wanttoempower";
import Weworkwith from "../Components/Home/Weworkwith";
import Message from "../Components/Message";
import Testimonial from "../Components/Home/Testimonial";
import SocialFloatingButtons from "../Components/Contact";
import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";



const Home = () => {
    return (
        < >
            <Header />
            <Hero />
            <Client />
            <Unlock />
            <How />
            <Putitall />
            <Blog />
            <Wanttoempower />
            <Testimonial />
            <Weworkwith />
            <SocialFloatingButtons />
            {/* <Message /> */}
            <Footer />
        </>
    );
};

export default Home;
