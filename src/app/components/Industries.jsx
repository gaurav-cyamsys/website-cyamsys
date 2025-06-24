
"use client";

import React from "react";
import { motion } from "framer-motion";

function Industries() {
  const industries = [
    {
      name: "Healthcare and Medical",
      icon: "🏥",
      projects: [
        { title: "Telemedicine App", desc: "Launched June 2025, connects patients with doctors remotely.", image: "/placeholder/health.jpg" },
        { title: "Medical IoT System", desc: "Deployed June 2025, real-time patient monitoring solutions.", image: "/placeholder/iot.jpg" },
      ],
    },
    {
      name: "Industrial Automation",
      icon: "🏭",
      projects: [
        { title: "Smart Factory System", desc: "Released May 2025, optimizes production lines.", image: "/placeholder/automation.jpg" },
        { title: "Robotic Assembly Line", desc: "Updated June 2025, enhances manufacturing efficiency.", image: "/placeholder/robot.jpg" },
      ],
    },
    {
      name: "Waste Management",
      icon: "♻️",
      projects: [
        { title: "Smart Waste Collection", desc: "Launched April 2025, AI-driven waste optimization.", image: "/placeholder/waste.jpg" },
        { title: "Recycling Tracker", desc: "Deployed June 2025, monitors recycling processes.", image: "/placeholder/recycle.jpg" },
      ],
    },
    {
      name: "Water and Utilities",
      icon: "💧",
      projects: [
        { title: "Smart Water Grid", desc: "Released May 2025, improves water distribution.", image: "/placeholder/water.jpg" },
        { title: "Utility Monitoring", desc: "Updated June 2025, real-time energy management.", image: "/placeholder/utility.jpg" },
      ],
    },
    { 
  name: "Power and Energy", 
  icon: "⚡️", 
  projects: [
    { title: "Smart Water Grid", desc: "Released May 2025, improves water distribution.", image: "/placeholder/water.jpg" },
    { title: "Utility Monitoring", desc: "Updated June 2025, real-time energy management.", image: "/placeholder/utility.jpg" },
  ] 
}
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section
      className=" w-full h-fit  bg-transparent py-16 px-4 md:px-8 lg:px-12 font-roboto text-gray-100 z-10"
    >
      <div className="relative z-10">
        <h2 className="text-3xl md:text-5xl mt-2 font-bold text-left md:px-10 px-2 text-slate-300 mb-8 leading-tight">
          Industries We <span className="text-[#92ff4b]">Transform</span>
        </h2>
        <p className="text-gray-300 text-lg md:text-xl md:px-10 px-2 mx-auto mb-14 leading-relaxed">
          Explore our impactful projects that are driving innovation and delivering tangible results across diverse industry sectors.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 md:px-10 px-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {industries.map((industry, index) => (
          <div key={index}>
            <motion.div
              className="bg-black/50 backdrop-blur-sm p-7 rounded-xl shadow-lg border border-gray-700 flex flex-col items-center text-center"
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              <div className="text-5xl mb-4 p-3 bg-[#92ff4b]/20 rounded-full">
                {industry.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-roboto tracking-wide">
                {industry.name}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Contact us to explore our innovative projects in {industry.name}.
              </p>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default Industries;
