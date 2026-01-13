"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mainRef.current) {
      const children = Array.from(mainRef.current.children);
      
      // Define estado inicial invisível
      gsap.set(children, { opacity: 0, y: 50 });
      
      // Anima para visível
      gsap.to(children, {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <div ref={mainRef} className="overflow-hidden">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
