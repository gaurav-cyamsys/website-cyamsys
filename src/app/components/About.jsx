'use client';

import React, { useEffect } from 'react';

function About() {
  useEffect(() => {
    const video = document.querySelector('#about-video');
    video?.addEventListener('error', (e) => {
      console.error('About video failed to load:', e);
    });
    video?.addEventListener('loadeddata', () => {
      console.log('About video loaded successfully');
    });
  }, []);

  return (
    <section className="sticky top-0 w-full h-fit py-5 md:h-screen  bg-black">
      <div className="relative w-full aspect-video">
      {/* Video Background */}
      <video
          id="about-video"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata" // ✅ Prevents eager bandwidth drain
          poster="/WebsiteContent/about-fallback-image.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover border-none"
      >
        <source src="/WebsiteContent/We_don’t_just_build_products.mp4" type="video/mp4" />
        <source src="/WebsiteContent/We_don’t_just_build_products.avi" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better text readability */}

    </div>
    </section>
  );
}

export default About;