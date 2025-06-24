"use client";

import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const navItems = [
    { name: "SERVICES", sectionId: "services" },
    { name: "INSIDE US", sectionId: "about" },
    { name: "PRODUCT", sectionId: "products" },
    { name: "CLIENTS", sectionId: "clients" },
    { name: "INDUSTRIES", sectionId: "industries" },
    { name: "VISION", sectionId: "vision" },
    { name: "CONTACT", sectionId: "contact" },
  ];

  return (
    <>
      <style jsx global>{`
        @keyframes borderPulse {
          0% { opacity: 0.3; }
          50% { opacity: 0.8; }
          100% { opacity: 0.3; }
        }
        .mobile-menu {
          transition: all 0.3s ease-out;
          transform-origin: top right;
        }
      `}</style>

      <nav className="fixed top-0 left-0 w-full max-w-full bg-black z-50 flex items-center justify-between px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-2 shadow-lg overflow-x-hidden box-border group">
        {/* Subtle animated bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#92ff4b] to-transparent opacity-30 group-hover:opacity-80 transition-opacity duration-300" />
        
        {/* Pulsing dot indicator */}
        <div className="absolute bottom-0 left-1/2 h-[2px] w-8 bg-[#92ff4b] transform -translate-x-1/2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ animation: "borderPulse 2s infinite" }} />

        <div className="text-gray-100 text-xl sm:text-2xl font-roboto flex items-center shrink-0">
          <img
            className="w-16 h-12 sm:w-18 sm:h-12 md:w-20 md:h-16 object-contain"
            src="/WebsiteContent/logo.png"
            alt="Logo"
          />
        </div>

        <div className="md:hidden z-50">
          <button
            onClick={toggleMenu}
            className="text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#92ff4b] rounded p-1 transition-all"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`mobile-menu fixed top-0 right-0 h-screen w-3/4 bg-black/95 backdrop-blur-sm z-40 pt-20 px-6 ${
            isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          } md:hidden`}
        >
          <div className="flex flex-col space-y-6 mt-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.sectionId}`}
                onClick={(e) => handleScroll(e, item.sectionId)}
                className="text-gray-200 hover:text-[#92ff4b] text-lg font-share-tech transition-colors duration-200 py-3 border-b border-gray-800"
                aria-label={`Navigate to ${item.name.toLowerCase()} section`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:space-x-2 lg:space-x-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.sectionId}`}
              onClick={(e) => handleScroll(e, item.sectionId)}
              className="text-gray-200 hover:text-[#92ff4b] text-xs sm:text-sm md:text-base font-share-tech bg-transparent rounded-full px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 inline-block transition-all duration-200 focus:ring-2 focus:ring-[#92ff4b] focus:outline-none whitespace-nowrap relative group/navitem"
              aria-label={`Navigate to ${item.name.toLowerCase()} section`}
            >
              {item.name}
              <span className="absolute bottom-0 left-1/2 h-[1px] w-0 group-hover/navitem:w-full bg-[#92ff4b] transform -translate-x-1/2 transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Overlay for mobile */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-30 md:hidden" 
            onClick={toggleMenu}
          />
        )}
      </nav>
    </>
  );
}

export default Navbar;