"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Spline from "@splinetool/react-spline";
import { useEffect } from "react";
import Lenis from "lenis";
import Studies from "@/components/Studies";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  })
  return (
    <>
    

      <main >
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
    </>
  );
}