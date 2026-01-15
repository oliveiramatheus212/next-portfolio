"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.set(titleRef.current, { opacity: 0, y: 50 });
        gsap.to(titleRef.current, {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
          },
        });
      }

      if (contentRef.current) {
        const children = Array.from(contentRef.current.children) as HTMLElement[];
        children.forEach((child, index) => {
          gsap.set(child, { opacity: 0, x: -50 });
          gsap.to(child, {
            opacity: 1,
            x: 0,
            scrollTrigger: {
              trigger: contentRef.current,
              start: `top ${80 - index * 10}%`,
              end: `top ${20 - index * 10}%`,
              scrub: 1,
            },
          });
        });
      }

      if (skillsRef.current) {
        const children = Array.from(skillsRef.current.children) as HTMLElement[];
        children.forEach((child, index) => {
          gsap.set(child, { opacity: 0, scale: 0.8 });
          gsap.to(child, {
            opacity: 1,
            scale: 1,
            scrollTrigger: {
              trigger: skillsRef.current,
              start: `top ${80 - index * 5}%`,
              end: `top ${20 - index * 5}%`,
              scrub: 1,
            },
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "GSAP",
    "JavaScript",
    "HTML/CSS",
    "Git",
    "REST APIs",
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-b from-gray-950 to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Sobre Mim
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div ref={contentRef}>
            <p className="text-lg text-gray-200 mb-6 leading-relaxed">
              Olá! Sou <span className="text-blue-400 font-semibold">Matheus Oliveira</span>, 
              um engenheiro de software apaixonado por criar experiências digitais incríveis.
            </p>
            <p className="text-lg text-gray-200 mb-6 leading-relaxed">
              Graduado pela <span className="text-purple-400 font-semibold">Universidade Federal de Mato Grosso do Sul (UFMS)</span>, 
              tenho experiência como desenvolvedor full-stack, com foco especial em front-end.
            </p>
            <p className="text-lg text-gray-200 mb-6 leading-relaxed">
              Minha paixão está em transformar ideias em interfaces elegantes e funcionais, 
              utilizando as mais modernas tecnologias e melhores práticas de desenvolvimento.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              Estou sempre em busca de novos desafios e oportunidades para crescer profissionalmente, 
              especialmente na área de desenvolvimento front-end.
            </p>
          </div>

          <div ref={skillsRef}>
            <h3 className="text-2xl font-semibold mb-6 text-gray-100">
              Tecnologias & Ferramentas
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-lg text-gray-100 hover:scale-110 transition-transform cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
