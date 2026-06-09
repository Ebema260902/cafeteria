"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    icon: "✿",
    title: "Ambiente Romántico",
    desc: "Cada rincón fue diseñado para que te enamorés. Luz cálida, detalles florales y esa vibra pink que te hace querer quedarte toda la tarde.",
  },
  {
    icon: "☕",
    title: "Sabores Artesanales",
    desc: "Recetas propias, ingredientes frescos del día. Desde pancakes esponjosos hasta pasteles que son pura obra de arte.",
  },
  {
    icon: "✨",
    title: "Rincones Fotografiables",
    desc: "Venís a comer y te vas con el carrete lleno de recuerdos. Cada mesa, cada detalle, pensado para que quede perfecto en tu foto.",
  },
];

export default function QuienesSomos() {
  const ref       = useRef(null);
  const inView    = useInView(ref, { once: true, margin: "-80px" });
  const imgRef    = useRef(null);
  const imgInView = useInView(imgRef, { once: true, margin: "-60px" });

  return (
    <section id="quienes" className="relative py-24 md:py-32 overflow-hidden" style={{ background: "#FFF0F3" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dusty/40 to-transparent" />

      {/* Blob decorativo */}
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #FFD6E0 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Encabezado */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-playfair italic text-xl text-mauve/65 block mb-3 font-normal">Detrás del mostrador</span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-[#2D1020] leading-tight">
            Quiénes <span className="italic text-mauve">somos</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-px w-14 bg-gradient-to-r from-transparent to-dusty" />
            <span className="text-dusty">✿</span>
            <div className="h-px w-14 bg-gradient-to-l from-transparent to-dusty" />
          </div>
        </motion.div>

        {/* Foto + texto — dos columnas */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">

          {/* Foto de la dueña */}
          <motion.div
            ref={imgRef}
            initial={{ opacity: 0, x: -40 }}
            animate={imgInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Marco decorativo desplazado */}
            <div className="absolute -top-4 -left-4 w-full h-full rounded-4xl border-2 border-petal/50 z-0 pointer-events-none" />

            <div className="relative z-10 rounded-4xl overflow-hidden shadow-pink-lg" style={{ aspectRatio: "4/5" }}>
              <Image
                src="https://images.unsplash.com/photo-1564498659566-cc4eccb7d6bb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Andrea, fundadora de Andrea's Bakery"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Degradado inferior que da profundidad */}
              <div className="absolute inset-0 bg-gradient-to-t from-berry/40 via-transparent to-transparent" />

              {/* Nombre sobre la foto */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-dancing text-3xl text-white drop-shadow-lg">Andrea Rivera</p>
                <p className="font-inter text-xs tracking-widest uppercase text-white/70">Fundadora &amp; Pastelera</p>
              </div>
            </div>

            {/* Badge flotante */}
            <div className="absolute -bottom-5 -right-4 z-20 bg-white rounded-3xl px-5 py-4 shadow-pink-lg border border-petal/40">
              <p className="font-dancing text-xl text-mauve leading-tight">Con amor</p>
              <p className="font-playfair text-2xl font-bold text-berry leading-tight">desde Palmares</p>
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={imgInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-playfair italic text-xl text-mauve font-normal mb-5">Hola, soy Andrea</p>

            <p className="font-inter text-[#3d1a24] text-base leading-relaxed mb-5">
              Empecé Andrea&apos;s Bakery con una sola idea: crear un espacio donde cada persona
              que entrara se sintiera especial. Un lugar donde el café sabe diferente, los pasteles
              son obras de arte y cada rincón invita a quedarse.
            </p>
            <p className="font-inter text-[#6B3A50] text-base leading-relaxed mb-8">
              Lo que comenzó como una pasión por la repostería se convirtió en la cafetería más
              querida de Palmares. Aquí todo es hecho con las manos, con recetas propias y con
              muchísimo amor. Cada pastel que sale de mi cocina lleva un pedacito de mí.
            </p>

            {/* Mini stats */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {[
                { n: "5K+",  l: "En Instagram" },
                { n: "100%", l: "Artesanal" },
                { n: "♡",    l: "Con amor" },
              ].map((s) => (
                <div key={s.l} className="text-center p-4 rounded-2xl bg-blush/50 border border-petal/40">
                  <p className="font-playfair text-2xl font-bold text-berry">{s.n}</p>
                  <p className="font-inter text-[10px] tracking-wider uppercase text-[#8B5567]">{s.l}</p>
                </div>
              ))}
            </div>

            <a
              href="https://www.instagram.com/cafeteria_andreasbakery"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-mauve text-white font-inter text-xs tracking-widest uppercase hover:bg-berry transition-colors duration-300"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Seguirnos en Instagram
            </a>
          </motion.div>
        </div>

        {/* Tres pilares */}
        <div className="grid md:grid-cols-3 gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.12 }}
              className="group p-7 rounded-4xl border border-petal/50 bg-white/60 hover:shadow-pink hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-mauve flex items-center justify-center text-xl text-white mb-5 group-hover:bg-berry transition-colors duration-300">
                {p.icon}
              </div>
              <h3 className="font-playfair text-xl text-[#2D1020] mb-2">{p.title}</h3>
              <p className="font-inter text-sm text-[#7A4558] leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
