'use client';

import React, { useEffect, useState } from 'react';
import { ContainerTextFlip } from './ui/container-text-flip';
import { PointerHighlight } from './ui/pointer-highlight';

function Hero() {


  const scrollToNextSection = () => {
    const nextSection = document.getElementById('next-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="sticky top-0 w-full h-screen overflow-hidden bg-gray-900 font-share-tech-mono">
      
       {/* <video
       preload="metadata"
        playsInline
        muted
        autoPlay
        loop
        poster="/fallback.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover blur-sm"
       >
          <source src="/WebsiteContent/Landing_page_bckground.mp4" type="video/mp4" />
          <source src="/WebsiteContent/Landing_page_bckground.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video> */}
        <img  className="absolute top-0 left-0 w-full h-full object-cover blur-sm" src='/WebsiteContent/Landing_page_bckground-gif.gif'/>
      

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-45"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-300 md:leading-tight leading-normal">
          Empowering Innovation with Smart{" "}
          <ContainerTextFlip words={["Hardware", "Devices", "Systems", "Technology"]} /> <br /> and Intelligent Solutions
        </h1>
        <hr className="w-24 border-t-2 border-white my-6" />
        <h2 className="text-lg md:text-2xl lg:text-3xl w-2/3 text-center font-medium text-slate-300">
          Bringing ideas to life with seamless{" "}
          <span className="text-[#92ff4b] font-bold">Hardware</span> and {" "}
         
            <span className="relative z-10 text-[#92ff4b] font-bold">Software</span>
         {" "}
          integration.
        </h2>
      </div>

      {/* Downward Broad Arrow */}
      <button
        onClick={scrollToNextSection}
        className="absolute lg:bottom-20 xl:bottom-20  md:bottom-20 bottom-20 left-1/2 transform -translate-x-1/2 z-20 inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        aria-label="Explore Us"
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-2 text-base font-medium text-white backdrop-blur-3xl font-share-tech-mono">
          Explore Us
        </span>
      </button>
    </section>
  );
}

export default Hero;
