'use client';


import { useEffect, useState } from "react";
import Image from "next/image";

import Header from "./Components/Header";
import Hero from "./Components/Pages/Hero";
import Client from "./Components/Pages/Client";
import Unlock from "./Components/Pages/Unlock";
import How from "./Components/Pages/How";
import Work from "./Components/Pages/Wework";
import Putitall from "./Components/Pages/Putitall";
import Blog from "./Components/Pages/Blog";
import SocialFloatingButtons from "./Components/Contact";
export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          {/* Logo animation */}
          <div className="animate-fade-in">
            <Image
              src="/logo.png" // Replace with your logo path
              alt="Logo"
              width={120}
              height={120}
              className="animate-scale-up"
            />
          </div>
          {/* Tailwind animation classes */}
          <style jsx global>{`
            .animate-fade-in {
              animation: fadeIn 1.5s ease-in;
            }
            .animate-scale-up {
              animation: scaleUp 2s cubic-bezier(0.4, 0, 0.2, 1);
            }
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes scaleUp {
              0% { transform: scale(0.7); }
              100% { transform: scale(1); }
            }
          `}</style>
        </div>
      ) : (
        <>
          <Header />
          <Hero />
          <Client />

          <Unlock />
          <Work />
          <How />
          <Putitall />
          <Blog />
          <SocialFloatingButtons />
        </>
      )}
    </>
  );
}