"use client";
import React, { useState } from "react";


function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., API call)
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
      title: "Email",
      description: "Our friendly team is here to help.",
      value: "hi@cyamsys.com",
      href: "mailto:hi@cyamsys.com",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
      title: "Office",
      description: "Come say hello at our office HQ.",
      value: "B-18, Sector 69, Noida, Chotpur, Uttar Pradesh 201301",
      href: "https://www.google.com/maps/place/CYAMSYS+TECHNOLOGIES+PRIVATE+LIMITED/@28.613093,77.3931703,18z/data=!4m6!3m5!1s0x390cfb8133eba5a9:0xb19d402f1f3553a3!8m2!3d28.6130907!4d77.3944363!16s%2Fg%2F11rfrsvzlr?authuser=0&entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
      title: "Phone",
      description: "Mon-Fri from 9am to 6pm.",
      value: "+91-9871496333",
      href: "tel:+91-9871496333",
    },
  ];
  return (
    <section className="bg-white relative md:pt-16 pt-8 px-3 md:px-6 py-5 md:py-10 font-roboto">
      <h2 className="text-xl mt-2 md:text-3xl font-medium text-left px-5 md:px-10 text-gray-800 mb-4 leading-snug md:leading-6">
        Let's Talk
      </h2>
      <h2 className="text-2xl md:text-5xl mt-2 font-bold text-left px-5 md:px-10 text-gray-800 mb-8 leading-snug md:leading-6">
        Have something in mind? Let's Connect <span className="text-[#92ff4b] [text-shadow:_0_0_10px_rgba(146,255,75,0.7)] inline-flex items-center">
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
      <div className="w-full flex flex-col snap-mandatory  py-10 px-3 lg:px-12 overflow-hidden">
        <section className="scroll-snap-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg shadow-md border border-gray-200">
                  <span className="p-3 bg-gray-100 rounded-full">{item.icon}</span>
                  <div>
                    <h2 className="text-base md:text-xl font-semibold text-gray-800">{item.title}</h2>
                    <p className="text-gray-600 mt-1 md:text-lg text-xs">{item.description}</p>
                    {item.href ? (
                      <a href={item.href} className="text-blue-600 md:text-lg text-xs mt-1 hover:underline">{item.value}</a>
                    ) : (
                      <p className="text-blue-600 text-sm mt-1">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md border border-gray-200">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="firstName" className="text-gray-800 font-roboto text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  />
                </div>
                
                <div className="flex flex-col space-y-2">
                  <label htmlFor="email" className="text-gray-800 font-roboto text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="message" className="text-gray-800 font-roboto text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none transition-all duration-300"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-br from-zinc-900 to-zinc-900 text-white rounded-md py-2 font-roboto font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] hover:scale-105 transition-transform duration-300"
                >
                  Send →
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Contact;