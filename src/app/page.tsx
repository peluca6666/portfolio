"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import { useEffect, useState } from "react";
import Lenis from "lenis";
import Studies from "@/components/Studies";


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-cyan-400/20 border-t-cyan-400 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      <main className="opacity-0 animate-fadeIn">
        <div className="fixed inset-0 z-0 overflow-hidden">
  <video 
    autoPlay 
    muted 
    loop 
    playsInline
    className="w-full h-full object-cover brightness-[0.4] contrast-125"
  >
    <source src="/videos/olas.mp4" type="video/mp4" />
  </video>
</div>
        <Header />
        <Hero />
        <AboutMe />
        <Experience />
        <Projects />
        <Studies />
        <Contact />
      </main>
      
     
    </>
  );
}