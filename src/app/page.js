
import Image from "next/image";
import Hero from "./components/Hero";
import { Services } from "./components/Services";
import About from "./components/About";
import Navbar from "./components/Navbar";
import {Products}  from "./components/Products";
import Clients from "./components/Clients";
import Vision from "./components/Vision";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Industries from "./components/Industries";




export default function Home() {
  return (
 <div className="bg-black relative w-full overflow-x-hidden overflow-y-auto md:overflow-x-hidden h-screen">
        <Navbar />
      <section id="hero" className="sticky top-0 w-full h-screen overflow-hidden">
        <Hero />
      </section>
      <section id="services">
        <Services />
      </section>
       <section id="about" className="relative w-full h-fit md:min-h-screen">
        <About />
      </section>
      <section id="products" className="relative w-full min-h-screen">
        <Products />
      </section>
      <div className="relative bg-black">
        <div
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(circle at top left, #92ff4b80, transparent 50%), radial-gradient(circle at bottom right, #4b92ff80, transparent 50%)',
          }}
        ></div>
        <div className="absolute inset-0 z-0 bg-dots-pattern opacity-10"></div>
        <section id="clients">
          <Clients />
        </section>
        <section id="industries">
          {/* Increased height to allow for more scroll before next section */}
          <div className="relative top-0 ">
            <Industries />
          </div>
        </section>
      </div>
      <section id="vision" className="sticky top-0">
        <Vision />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="footer">
        <Footer />
      </section>
      {/* WhatsApp Floating Icon */}
      <a
        href="https://wa.me/9871496333?text=Hello!%20I'd%20like%20to%20get%20in%20touch."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-10 right-6 z-[100] w-12 h-12 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:bg-[#1DA851] "
        aria-label="Contact us on WhatsApp"
      >
        <img src="/whatsapp.png"/>
      </a>
    </div>
  );
}
