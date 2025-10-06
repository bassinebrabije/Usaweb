'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Homee from "./Home/page";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  /* if (showSplash) {
     return (
       <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
   
         <div className="animate-fade-in">
           <Image
             src="/logo.png" // Replace with your logo path
             alt="Logo"
             width={120}
             height={120}
             className="animate-scale-up"
           />
         </div>
  
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
     );
   }
   */
  return (
    <>
      <Homee />
    </>
  );
}
