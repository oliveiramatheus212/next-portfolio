"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
          gsap.set(child, { opacity: 0, x: 50 });
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

      if (formRef.current) {
        const children = Array.from(formRef.current.children) as HTMLElement[];
        children.forEach((child, index) => {
          gsap.set(child, { opacity: 0, x: -50 });
          gsap.to(child, {
            opacity: 1,
            x: 0,
            scrollTrigger: {
              trigger: formRef.current,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de envio do formulário
    console.log("Formulário enviado:", formData);
    alert("Mensagem enviada! (Funcionalidade em desenvolvimento)");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-b from-gray-900 to-gray-950"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Entre em Contato
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div ref={contentRef}>
            <h3 className="text-2xl font-semibold mb-6 text-gray-100">
              Vamos conversar?
            </h3>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Estou sempre aberto a novas oportunidades e projetos interessantes. 
              Se você tem uma ideia ou projeto em mente, adoraria ouvir sobre isso!
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-200">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span>contato@matheusoliveira.dev</span>
              </div>
              <div className="flex items-center gap-4 text-gray-200">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span>Campo Grande, MS - Brasil</span>
              </div>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-200 mb-2"
              >
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-200 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-200 mb-2"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                placeholder="Sua mensagem..."
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white hover:scale-105 transition-transform shadow-lg shadow-purple-500/50"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
