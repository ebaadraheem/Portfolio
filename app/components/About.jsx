"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const topOffset = aboutSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (topOffset < windowHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="about"
      className="p-6 flex flex-col items-center justify-center min-h-screen"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
      <motion.p
        className="text-xl md:text-2xl my-6 text-center max-w-7xl"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        I am a highly versatile Full-Stack Engineer specializing in 
        <strong>AI/LLM Integration</strong> and high-performance solutions. I am certified with <strong>Azure 
        AZ-204: Developing Solutions for Microsoft Azure</strong> and hold a <strong>Machine Learning 
        Specialization</strong>, demonstrating expertise in both cloud architecture and data 
        systems. My core proficiency spans the <strong>MERN stack</strong>, <strong>Next.js</strong>, and 
        building AI agents (LangGraph). I focus on scalable architectures, utilize 
        services like <strong>Azure Functions</strong> for serverless logic, and am proficient with 
        diverse databases including <strong>PostgreSQL</strong>.
      </motion.p>
      <h2 className="text-3xl md:text-4xl font-bold my-4">Skills and Tools</h2>

      <div className="my-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Core Front-End */}
        <div className="flex flex-col items-center">
          <img src="/html.svg" alt="HTML" className="w-16 h-16" />
          <span className="mt-2">HTML</span>
        </div>
        <div className="flex flex-col items-center">
          <img src="/css.svg" alt="CSS" className="w-16 h-16" />
          <span className="mt-2">CSS</span>
        </div>
        <div className="flex flex-col items-center">
          <img src="/javascript.svg" alt="JavaScript" className="w-16 h-16" />
          <span className="mt-2">JavaScript</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/tailwindCSS.png"
            alt="Tailwind CSS"
            className="w-16 h-16"
          />
          <span className="mt-2">Tailwind CSS</span>
        </div>

        {/* Frameworks & Runtime */}
        <div className="flex flex-col items-center">
          <img src="/react.svg" alt="React.js" className="w-16 h-16" />
          <span className="mt-2">React.js</span>
        </div>
        <div className="flex flex-col items-center">
          <img src="/next.png" alt="Next.js" className="w-16 h-16 " />
          <span className="mt-2">Next.js</span>
        </div>
        <div className="flex flex-col items-center">
          <img src="/react.svg" alt="React Native" className="w-16 h-16" />
          <span className="mt-2">React-Native</span>
        </div>
        <div className="flex flex-col items-center">
          <img src="/nodeJS.png" alt="Node.js" className="w-16 h-16" />
          <span className="mt-2">Node.js</span>
        </div>

        {/* Backend & Databases */}
        <div className="flex flex-col items-center">
          <img src="/express.png" alt="Express.js" className="w-16 h-16" />
          <span className="mt-2">Express.js</span>
        </div>
        <div className="flex flex-col items-center">
          <img src="/mongoDB.png" alt="MongoDB" className="w-16 " />
          <span className="mt-2">MongoDB</span>
        </div>
        <div className="flex flex-col items-center ">
          <img src="/PostgreSQL.png" alt="PostgreSQL" className="w-16 " />
          <span className="mt-2">PostgreSQL</span>
        </div>
        <div className="flex flex-col items-center">
          <img src="/Stripe.png" alt="Stripe" className="w-16 h-16" />
          <span className="mt-2">Stripe</span>
        </div>

        {/* Cloud & Dev Tools (New Section) */}
        <div className="flex flex-col items-center">
          {/* Custom badge to represent AZ-204 Certification */}
          <img src="/az-204.png" alt="Azure Certificate" className="w-16 h-16" />
          <span className="mt-2">AZ-204 CERTIFIED</span>
        </div>
        <div className="flex flex-col items-center">
          {/* Custom badge to represent Azure Services */}
          <img src="/azure.png" alt="Azure" className="w-16 h-16" />
          <span className="mt-2">Cloud Services</span>
        </div>
        <div className="flex flex-col items-center ">
          <img src="/firebase.svg" alt="Firebase" className="w-16 h-16" />
          <span className="mt-2">Firebase</span>
        </div>
        <div className="flex flex-col items-center ">
          <img src="/docker.png" alt="Docker" className=" h-16 w-16" />
          <span className="mt-2 ">Docker</span>
        </div>
      </div>
      <p className="text-lg md:text-xl my-4 text-center max-w-7xl">
        For a more detailed overview, please feel free to check the tools that
        were used on a per-project basis:
      </p>
    </section>
  );
};

export default About;
