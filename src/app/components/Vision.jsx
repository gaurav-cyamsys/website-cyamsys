"use client";
import React from 'react';
import { HeroHighlight } from './ui/hero-highlight';
import { motion, AnimatePresence } from 'framer-motion';
import { FlipWords } from './ui/flip-words';
import { useInView } from 'react-intersection-observer';

function Vision() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once when the component comes into view
    threshold: 0.3, // Trigger when 30% of the component is visible
  });

  // Split the static part of the text into words for animation
  const text = "Building a smarter world by combining the power of electronics and AI to solve complex problems with";
  const words = text.split(' ');

  // Animation variants for the container (staggering children)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between each word's animation
      },
    },
  };

  // Animation variants for each word
  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
  };

  return (
    <HeroHighlight containerClassName="min-h-screen sticky top-0 py-10">
      <div ref={ref}>
        <motion.h1
          className="text-2xl px-4 font-roboto md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              style={{ display: 'inline-block', marginRight: '0.25em' }}
            >
              {word}
            </motion.span>
          ))}
          <motion.span
            variants={wordVariants}
            style={{ display: 'inline-block' }}
          >
            <FlipWords words={['intelligent', 'scalable']} />
          </motion.span>
          <motion.span
            variants={wordVariants}
            style={{ display: 'inline-block', marginLeft: '0.25em' }}
          >
            solutions.
          </motion.span>
        </motion.h1>
      </div>
    </HeroHighlight>
  );
}

export default Vision;