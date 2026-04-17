import { useEffect, useRef } from "react";
import Particles from "react-tsparticles";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sections from "./components/Sections";
import Partners from "./components/Partners";
import ROISection from "./components/ROISection";
import Solutions from "./components/Solutions";
import Methodology from "./components/Methodology";
import DiagnosticIA from "./components/DiagnosticIA";
import Consulting from "./components/Consulting";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import PrivacySecurity from "./components/PrivacySecurity";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  const glowRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (glowRef.current) {
        glowRef.current.style.left = e.clientX + "px";
        glowRef.current.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="relative overflow-hidden">

      {/* 🌌 PARTICLES BACKGROUND */}
      <Particles
        className="fixed inset-0 -z-20"
        options={{
          fpsLimit: 60,
          particles: {
            number: { value: 60 },
            color: { value: "#00e3fd" },
            links: {
              enable: true,
              color: "#00e3fd",
              distance: 120,
              opacity: 0.2,
            },
            move: {
              enable: true,
              speed: 0.6,
            },
            opacity: { value: 0.3 },
            size: { value: 2 },
          },
        }}
      />

      {/* ✨ CURSOR GLOW */}
      <div
        ref={glowRef}
        className="fixed w-[400px] h-[400px] pointer-events-none z-0 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,227,253,0.15), transparent 70%)",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* GRID (já existente) */}
      <div className="fixed inset-0 grid-pattern pointer-events-none z-0" />

      {/* APP */}
      <div id="top">
        <Navbar />
      </div>

      <main className="relative z-10 pt-32">
        {/* 1. Headline — impacto direto */}
        <Hero />
        {/* 2. Resultado + público */}
        <ROISection />
        {/* 3. Prova / autoridade */}
        <Partners />
        {/* 4. Cases e números */}
        <DiagnosticIA />
        {/* 5 & 6. Problema — mostrar que entende o cliente */}
        <Sections />
        {/* 7. Solução — oferta */}
        <Solutions />
        <Consulting />
        {/* 8. Benefícios claros — metodologia */}
        <Methodology />
        {/* Autoridade + confiança */}
        <About />
        <PrivacySecurity />
        {/* 9. Depoimentos */}
        <Testimonials />
        {/* 10. CTA final */}
        <CTA />
      </main>

      <Footer />

      <WhatsAppFloat />
    </div>
  );
}