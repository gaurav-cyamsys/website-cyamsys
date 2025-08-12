"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export function FocusCards({ cards, heading }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div className="relative w-full bg-white">
      {/* Fixed Heading */}
      <div className="sticky top-0 z-50 pt-8 md:pt-16 pb-6 md:pb-12 bg-white">
        <h2 className="text-4xl md:text-6xl font-bold text-center px-10 text-slate-800">
          {heading}
        </h2>
      </div>

      {/* Cards Container */}
      <div 
        ref={containerRef} 
        className="relative" 
        
      >
        {cards.map((card, index) => {
          // Calculate progress for each card
          const start = index / cards.length;
          const end = (index + 1) / cards.length;
          
          const cardProgress = useTransform(
            scrollYProgress,
            [start, end],
            [0, 1]
          );

          // Animation values
          const scale = useTransform(cardProgress, [0, 1], [1, 0.96]);
          const opacity = useTransform(cardProgress, [0, 0.9, 1], [1, 1, 0.7]);
          const y = useTransform(cardProgress, [0, 1], [0, 30]);

          // Z-index management
          const zIndex = index;

          // Alternate layout direction
          const isEven = index % 2 === 0;
          const textOrder = isEven ? "md:order-1" : "md:order-2";
          const imageOrder = isEven ? "md:order-2" : "md:order-1";

          return (
            <motion.div
              key={index}
              className="sticky top-8 md:top-16 h-screen overflow-hidden w-full flex items-center justify-center"
              style={{
                scale,
                opacity,
                y,
                zIndex
              }}
            >
              {/* Background with subtle gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50" />
              
              {/* Glow effect behind cards */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-gradient-radial from-blue-100/30 via-transparent to-transparent" />
              </div>

              <div className="h-full w-full flex flex-col md:flex-row items-center justify-evenly px-8 md:px-20 gap-2 md:gap-12 relative z-10">
                {/* Text Content */}
                <div className={`w-full md:w-1/2 ${textOrder} space-y-1`}>
                  {/* Premium Product Number */}
                  <motion.div
                    className="text-6xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
                    style={{
                      opacity: useTransform(cardProgress, [0, 0.5], [1, 0]),
                      y: useTransform(cardProgress, [0, 0.5], [0, -40])
                    }}
                  >
                    #{index + 1}
                  </motion.div>

                  <motion.h3 
                    className="text-2xl md:text-4xl font-bold text-gray-900"
                    style={{
                      opacity: useTransform(cardProgress, [0, 0.5], [1, 0]),
                      y: useTransform(cardProgress, [0, 0.5], [0, -20])
                    }}
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p 
                    className="text-sm md:text-xl text-gray-600 leading-relaxed max-w-2xl"
                    style={{
                      opacity: useTransform(cardProgress, [0, 0.5], [1, 0]),
                      y: useTransform(cardProgress, [0, 0.5], [0, -10])
                    }}
                  >
                    {card.description}
                  </motion.p>
                </div>

                {/* Image */}
                  {card.src !== '/3.webp' && card.src !== '/6.webp' && (
                <div className={`w-full md:w-1/2 ${imageOrder}`}>
                  <motion.div
                    className="relative w-full h-[300px] md:h-[600px] overflow-hidden rounded-3xl shadow-2xl border-8 border-white"
                    style={{
                      scale: useTransform(cardProgress, [0, 1], [1, 0.92]),
                      rotate: useTransform(cardProgress, [0, 1], [0, isEven ? -1 : 1])
                    }}
                  >
                  
  <img
    src={card.src}
    alt={card.title}
    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
  />

                    
                    {/* Premium overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
                    {/* Reflection effect */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white/30 to-transparent" />
                  </motion.div>
                </div>
                )
}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation dots (premium style) */}

    </div>
  );
}