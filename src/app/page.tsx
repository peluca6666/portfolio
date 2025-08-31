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
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  // Precargar el video
  useEffect(() => {
    const video = document.createElement('video');
    video.src = '/videos/olas.mp4';
    video.muted = true;
    video.playsInline = true;
    
    const handleCanPlay = () => {
      setVideoLoaded(true);
      // Esperar un mínimo de tiempo para el loader (opcional)
      setTimeout(() => {
        setIsLoading(false);
      }, 800); // Tiempo mínimo para mostrar el loader
    };

    video.addEventListener('canplaythrough', handleCanPlay);
    video.load();

    return () => {
      video.removeEventListener('canplaythrough', handleCanPlay);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-cyan-400/20 border-t-cyan-400 rounded-full animate-spin"></div>
        {/* Opcional: mostrar progreso */}
        <div className="absolute bottom-10 text-cyan-400 text-sm">
          {videoLoaded ? 'Preparando experiencia...' : 'Cargando...'}
        </div>
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
            onLoadedData={() => console.log('Video loaded')} // Para debugging
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