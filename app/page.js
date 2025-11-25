"use client";
import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Head from "next/head";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        const topOffset = projectsSection.getBoundingClientRect().top;
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

  // Separate animation for the first two projects (SnapMart & SkillMorph)
  const isSnapMartVisible = isVisible;
  const isSkillMorphVisible = isVisible;
  const isOtherVisible = isVisible;

  // --- SnapMart Project Card Content ---
  const SnapMartCard = (
    <motion.div
      className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow relative"
      initial={{ opacity: 0, y: 50 }}
      animate={
        isSkillMorphVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
      }
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <h3 className="text-xl font-semibold mb-2 text-green-400">
        SnapMart (Point-of-Sale & Cloud-Native Backend)
      </h3>
      <div className="text-gray-300 pb-4 mb-4">
        <p className="text-lg mb-4">
          SnapMart is a comprehensive MERN-stack POS system engineered with a
          robust, scalable Azure cloud backend, demonstrating advanced
          cloud-native development and deployment techniques.
        </p>

        <h2 className="text-xl font-bold mb-2 text-green-400">
          Key Cloud & Backend Features:
        </h2>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">
            <strong className=" ">Serverless Image Optimization:</strong>{" "}
            Utilized Azure Functions triggered by new uploads and Azure Queue
            Storage for reliable messaging, decoupling the image optimization
            workflow from the main application to ensure high performance.
          </li>
          <li className="mb-2">
            <strong className=" ">Cloud Data Management:</strong> Implemented
            Azure CosmosDB (MongoDB API) for flexible data storage and Azure
            Blob Storage for scalable, cost-efficient media asset storage.
          </li>
          <li className="mb-2">
            <strong className=" ">Containerized Deployment:</strong> Packaged
            the MERN server into a container for deployment on Azure Container
            Apps and the frontend on Azure App Service, utilizing Docker Hub for
            image repositories.
          </li>
        </ul>

        <h2 className="text-xl font-bold mb-2 text-green-400">Tech Stack:</h2>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">MERN Stack, Azure Functions</li>
          <li className="mb-2">
            Azure CosmosDB, Azure Container Apps, Azure App Service
          </li>
          <li className="mb-2">Azure Queues, Docker Hub, Azure Blob Storage</li>
        </ul>

        <h2 className="text-xl font-bold mb-2 text-green-400">
          Testing Account
        </h2>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Email: test@gmail.com</li>
          <li className="mb-2">Password: test@me</li>
        </ul>
      </div>

      <div className="absolute bottom-0 left-0 w-full px-6 py-4 flex justify-between">
        <a
          target="_blank"
          href="https://snapmart-frontend-b2hbajcjczfcbvct.centralindia-01.azurewebsites.net/"
          className="text-green-400 transition-all hover:text-green-600"
        >
          Live Site
        </a>
        <a
          target="_blank"
          href="https://github.com/ebaadraheem/Snapmart_Frontend"
          className="text-green-400 transition-all hover:text-green-600"
        >
          GitHub
        </a>
      </div>
    </motion.div>
  );

  // --- SkillMorph Card (Enhanced Content) ---
  const SkillMorphCard = (
    <motion.div
      className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow relative"
      initial={{ opacity: 0, y: 50 }}
      animate={
        isSkillMorphVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
      }
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <h3 className="text-xl font-semibold mb-2 text-green-400">
        SkillMorph: AI-Powered Course Platform & Agent Architecture
      </h3>
      <div className="text-gray-300 pb-4 mb-4">
        <p className="text-lg mb-4">
          SkillMorph is an advanced e-learning platform integrating a specialized 
          AI conversational agent with a transactional backend, showcasing 
          expertise in AI orchestration, secure payments, and scalable data management.
        </p>

        <h2 className="text-xl font-bold mb-2 text-green-400">Key AI & Architectural Features:</h2>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">
            <strong className=" ">Intelligent AI Assistant:</strong> Deployed a powerful conversational agent built using LangGraph (Node.js) to handle complex, multi-step queries about the course catalog, pricing, and availability.
          </li>
          <li className="mb-2">
            <strong className=" ">Tool-Calling & Data Synthesis:</strong> The AI utilizes Function/Tool Calling to query the live PostgreSQL database (via REST APIs) for accurate course information, demonstrating expertise in productionizing AI agents that require external data. 
          </li>
          <li className="mb-2">
            <strong className=" ">Advanced FinTech Integration:</strong> Implemented Stripe Connect to manage secure platform-to-seller payments, instructor onboarding, and automated revenue payouts.
          </li>
          <li className="mb-2">
            <strong className="">Full-Stack Core:</strong> Built the Instructor Dashboard, lecture management system, and custom authentication on React/Node.js/PostgreSQL.
          </li>
        </ul>

        <h2 className="text-xl font-bold mb-2 text-green-400">Tech Stack:</h2>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">PostgreSQL, Express.js, React, Node.js</li>
          <li className="mb-2">LangGraph, Google Gemini API (Agent Orchestration)</li>
          <li className="mb-2">Stripe API (Connected Accounts), Zustand, Cloudinary</li>
        </ul>
        <h2 className="text-xl font-bold mb-2 text-green-400">
          Testing Account
        </h2>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Email: ebaadraheem20@gmail.com</li>
          <li className="mb-2">Password: 123</li>
        </ul>
      </div>

      <div className="absolute bottom-0 left-0 w-full px-6 py-4 flex justify-between">
        <a
          target="_blank"
          href="https://skillmorph.vercel.app/"
          className="text-green-400 transition-all hover:text-green-600"
        >
          Live Site
        </a>
        <a
          target="_blank"
          href="https://github.com/ebaadraheem/SkillMorph_Frontend.git"
          className="text-green-400 transition-all hover:text-green-600"
        >
          GitHub
        </a>
      </div>
    </motion.div>
  );

  return (
    <>
      <Head>
        <title>Ebaad Raheem | Full Stack Developer</title>
        <meta
          name="description"
          content="AZ-204 Certified Full-Stack Developer specializing in MERN, Next.js, and complex cloud architecture. Expertise in Azure Functions, CosmosDB, Container Apps, and Stripe payments (Connect/API)."
        />
        <meta
          name="keywords"
          content="Full Stack Developer, MERN Stack, Next.js, React Native, Stripe, Azure, Cloud, PostgreSQL"
        />
      </Head>

      <div className="bg-black text-white min-h-screen">
        <Navbar />
        <main>
          {/* Introduction Section */}
          <section className="flex flex-col mt-6 sm:mt-10 p-2  items-center justify-center min-h-[70vh]">
            <h1 className="text-4xl md:text-6xl font-bold text-center">
              Hello, I am <span className="text-green-400">Ebaad Raheem</span>,
              an{" "}
              <span className="text-green-400">
                AI Focused Full-Stack Engineer
              </span>{" "}
              specializing in building <strong>Agentic Systems</strong> and
              high-performance <strong>Modern Cloud Architectures</strong>.
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-xl md:text-2xl text-center"
            >
              <p className="  p-4">
                My focus is on engineering robust and resilient applications,
                proven by delivering complex solutions like the design of <strong>AI agents</strong>, <strong>serverless microservices</strong>, and secure
                implementation of <strong>transaction systems</strong>.
              </p>
            </motion.div>
            <motion.a
              target="blank"
              href="https://wa.me/+923265545081?text="
              className="mt-8 mx-3 px-6 py-3 border border-green-400 rounded-lg text-green-400 hover:bg-green-400 hover:text-black transition-all inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="inline-block text-center">
                Get in touch through Whatsapp!
              </span>
            </motion.a>
          </section>

          <About />

          <section
            id="projects"
            className="p-6 flex flex-col justify-center items-center"
          >
            <h2 className="text-4xl md:text-5xl text-center font-bold mb-12">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1600px] gap-6 ">
              
              {/* Project 1 - SkillMorph */}
              {SkillMorphCard}

              {/* Project 2 - SnapMart */}
              {SnapMartCard}

              {/* Project 3 (ShopSphere) */}
              <motion.div
                className="bg-gray-800 p-6 relative rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isOtherVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-green-400">
                  ShopSphere (E-commerce Web Application)
                </h3>
                <div className="text-gray-300 pb-4 mb-4">
                  <p className="text-lg mb-4">
                    ShopSphere is a complete eCommerce web application built
                    using the MERN stack. It features a user-friendly interface
                    with comprehensive functionalities for users and
                    administrators.
                  </p>

                  <h2 className="text-xl font-bold mb-2 text-green-400">
                    Key Features:
                  </h2>
                  <ul className="list-disc pl-6 mb-4">
                    <li className="mb-2">
                      <strong>User Experience & Discovery:</strong>
                      <ul className="list-disc pl-4 mt-2">
                        <li>
                          Secure User Authentication and Registration powered by
                          Firebase.
                        </li>
                        <li>
                          Favorites Section for quick item access and organized
                          Category Browsing.
                        </li>
                      </ul>
                    </li>
                    <li className="mb-2">
                      <strong>E-commerce Core & Transactions:</strong>
                      <ul className="list-disc pl-4 mt-2">
                        <li>
                          Debit Card payment processing integrated via Stripe.
                        </li>
                        <li>
                          Comprehensive Order Management system for smooth
                          transactions.
                        </li>
                      </ul>
                    </li>
                    <li className="mb-2">
                      <strong>Administration & Operations:</strong>
                      <ul className="list-disc pl-4 mt-2">
                        <li>
                          Full Admin Dashboard for efficient management of
                          posts, products, and customer orders.
                        </li>
                      </ul>
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold mb-2 text-green-400">
                    Tech Stack:
                  </h2>
                  <ul className="list-disc pl-6 mb-4">
                    <li className="mb-2">
                      MERN Stack (MongoDB, Express, React, Node.js)
                    </li>
                    <li className="mb-2">Firebase Authentication, Stripe</li>
                    <li className="mb-2">
                      AWS S3 for media storage, Tailwind CSS for styling
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold mb-2 text-green-400">
                    Testing Account
                  </h2>
                  <ul className="list-disc pl-6 mb-4">
                    <li className="mb-2">Email: admin@gmail.com</li>
                    <li className="mb-2">Password: 12345678</li>
                  </ul>
                </div>

                <div className="absolute bottom-0 left-0 w-full px-6 py-4 flex justify-between">
                  <a
                    target="_blank"
                    href="https://shopsphere-olive.vercel.app/"
                    className="text-green-400 transition-all hover:text-green-600"
                  >
                    Live Site
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/ebaadraheem/Shopsphere_Frontend.git"
                    className="text-green-400 transition-all hover:text-green-600"
                  >
                    GitHub
                  </a>
                </div>
              </motion.div>

              {/* Project 4 (RecipeApp) */}
              <motion.div
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow relative"
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isOtherVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-green-400">
                  RecipeApp (React Native Mobile)
                </h3>
                <div className="text-gray-300 pb-4 mb-4">
                  <p className="text-lg mb-4">
                    RecipeApp is a versatile mobile application built with React
                    Native and Expo, designed to provide a seamless experience
                    for recipe enthusiasts. It offers functionalities to browse,
                    manage, and save recipes, featuring user authentication
                    through Firebase and a well-organized state management
                    system.
                  </p>

                  <h2 className="text-xl font-bold mb-2 text-green-400">
                    Key Features:
                  </h2>
                  <ul className="list-disc pl-6 mb-4">
                    <li className="mb-2">
                      <strong>Recipe Management:</strong> Browse, manage, and
                      save your favorite recipes with ease.
                    </li>
                    <li className="mb-2">
                      <strong>Filter by Difficulty:</strong> Use the settings to
                      filter recipes by easy, medium, or difficult.
                    </li>
                    <li className="mb-2">
                      <strong>Authentication:</strong> Secure login and
                      registration using Email/Password and Google through
                      Firebase.
                    </li>
                    <li className="mb-2">
                      <strong>State Management:</strong> Manage application
                      state efficiently using Zustand.
                    </li>
                    <li className="mb-2">
                      <strong>Admin Access:</strong> Special admin features to
                      add or delete recipe categories.
                    </li>
                  </ul>

                  <h2 className="text-xl font-bold mb-2 text-green-400">
                    Tech Stack:
                  </h2>
                  <ul className="list-disc pl-6 mb-4">
                    <li className="mb-2">
                      React Native, Expo for building a smooth mobile experience
                    </li>
                    <li className="mb-2">Firebase, Zustand</li>
                    <li className="mb-2">Node.js (Express.js), MongoDB</li>
                  </ul>
                   <h2 className="text-xl font-bold mb-2 text-green-400">
                    Testing Account
                  </h2>
                  <ul className="list-disc pl-6 mb-4">
                    <li className="mb-2">Email: admin@gmail.com</li>
                    <li className="mb-2">Password: 123456</li>
                  </ul>
                </div>

                <div className="absolute bottom-0 left-0 w-full px-6 py-4 flex justify-between">
                  <a
                    target="_blank"
                    href="https://drive.google.com/file/d/1_-zATl_JNZKY9KPhvew5SdiCtvu51vVh/view?usp=drivesdk"
                    className="text-green-400 transition-all hover:text-green-600"
                  >
                    Download APK
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/ebaadraheem/RecipeApp_Frontend.git"
                    className="text-green-400 transition-all hover:text-green-600"
                  >
                    GitHub
                  </a>
                </div>
              </motion.div>
            </div>
          </section>

          <Footer />
        </main>
      </div>
    </>
  );
}
