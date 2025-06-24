
'use client';

import React from 'react';
import { motion } from 'framer-motion';

function Clients() {
  const clientLogos = [
    '/axess.webp',
    '/beaver.webp',
    '/goc.webp',
    '/nmelss.webp',
    '/safe.webp',
    '/shoghi.webp',
    '/unissi.webp',
    '/b.webp',
    '/v2sk.webp',
    '/abhith.webp',
    '/integrity.jpg',
    '/cbs.webp',
  ];

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  return (
    <section
      id="clients"
      className="relative w-full min-h-screen bg-transparent py-8 md:py-16 px-4 md:px-8 lg:px-12 font-roboto text-gray-100"
    >
      <div className="mx-auto text-center relative z-10">
           <h2 className="text-xl mt-0 md:mt-2 md:text-3xl font-medium text-left md:px-10 px-2 text-slate-300 mb-2 md:mb-8 md:leading-4 leading-normal">
        Clients
      </h2>
      <h2 className="text-3xl md:text-5xl mt-2  font-bold text-left  md:px-10 px-2 text-slate-300  mb-8 leading-normal md:leading-4">
        Brands we work with <span className="text-[#92ff4b] [text-shadow:_0_0_10px_rgba(146,255,75,0.7)] inline-flex items-center">
          <svg
            className="w-8 h-8 ml-2 z-10"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 4l8 9h-6v8h-4v-9H4l8-8z" transform="rotate(-135 12 12)" />
          </svg>
        </span>
      </h2>
      </div>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 relative z-10 w-full mx-auto px-2 md:px-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {clientLogos.map((logo, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-700"
            variants={cardVariants}
            whileHover={{ y: -5 }}
          >
            <img
              src={logo}
              alt={`${logo.split('/')[1].replace('.webp', '')} logo`}
              className="h-20 w-20 md:h-28 md:w-28 object-contain"
              loading="lazy"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Clients;
