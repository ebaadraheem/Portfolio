"use client"
import React from 'react'

const Navbar = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <header className=" flex justify-between items-center py-6 px-4 sm:p-6 ">
            <div className="sm:text-2xl text-xl max-sm:hidden text-green-400 font-bold">Ebaad Raheem</div>
            <div className=" sm:hidden  text-green-400 " >
                <svg className="w-10 h-10" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                    <rect fill="none" height="256" width="256" />
                    <path d="M83,112h90l22.6-60.3a4,4,0,0,1,7.6.4l27.4,102.5a8.2,8.2,0,0,1-3.2,8.6l-94.8,65.6a8.1,8.1,0,0,1-9.2,0L28.6,163.2a8.2,8.2,0,0,1-3.2-8.6L52.8,52.1a4,4,0,0,1,7.6-.4Z" fill="currentColor" />
                </svg>

            </div>
            <nav className=' flex text-lg'>
                <div onClick={() => scrollToSection('about')} className="ml-6 hover:opacity-70 transition-all cursor-pointer">About</div>
                <div onClick={() => scrollToSection('projects')} className="ml-6 hover:opacity-70 transition-all cursor-pointer">Projects</div>
                <a href="mailto:ebaadraheem20@gmail.com" className="ml-6 hover:opacity-70 transition-all cursor-pointer">Contact</a>
            </nav>
        </header>
    )
}

export default Navbar
