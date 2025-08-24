"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Spline from "@splinetool/react-spline";
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
    // Loader simple: siempre 1 segundo, sin depender de Spline
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

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
        <div className="fixed inset-0 z-0">
          <Spline scene="https://prod.spline.design/s1LZnF4LD6iKRAAn/scene.splinecode" />
        </div>
        <Header />
        <Hero />
        <AboutMe />
        <Experience />
        <Projects />
        <Studies />
        <Contact />
      </main>
      
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out forwards;
        }
      `}</style>
    </>
  );
}