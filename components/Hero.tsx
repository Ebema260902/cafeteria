"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY    = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="inicio" ref={ref} className="relative min-h-screen overflow-hidden">

      {/* Background image */}
      <motion.div style={{ y: imgY }} className="absolute inset-0 scale-105">
        <Image
          src="/images/lugar.webp"
          alt="Interior Andrea's Bakery"
          fill
          quality={90}
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#12040A]/85 via-[#12040A]/50 to-[#12040A]/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#12040A]/60 via-transparent to-[#12040A]/25" />

      {/* Content — flex column distributing top block and bottom stats */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-screen-2xl mx-auto w-full px-10 lg:px-16 min-h-screen flex flex-col justify-between pt-32 pb-12"
      >
        {/* Top block */}
        <div className="max-w-2xl lg:max-w-3xl mt-auto mb-auto pt-10">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="h-px w-10 bg-dusty/50" />
            <span className="font-inter text-[11px] font-medium tracking-[0.4em] uppercase text-white/55">
              Palmares · Costa Rica
            </span>
          </motion.div>

          {/* Heading — 2 lines */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-playfair font-light mb-8"
            style={{ lineHeight: 1.05 }}
          >
            {/* Line 1: Donde cada momento */}
            <span className="block text-[clamp(2.8rem,6vw,5.5rem)]">
              <span className="text-white">Donde cada </span>
              <span className="italic text-dusty">momento,</span>
            </span>
            {/* Line 2: sabe a felicidad */}
            <span className="block text-[clamp(2.8rem,6vw,5.5rem)]">
              <span className="text-white">sabe a </span>
              <span className="font-dancing text-[#F2A0B8] not-italic" style={{ fontSize: "0.92em" }}>felicidad</span>
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="font-inter text-[12px] text-white/50 tracking-[0.22em] uppercase mb-10 font-light"
          >
            Brunch · Cafés Especiales · Pasteles Artesanales
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#productos"
              className="inline-flex items-center justify-center gap-2 px-9 py-3.5 rounded-full bg-mauve text-white font-inter text-[12px] font-medium tracking-[0.15em] uppercase hover:bg-berry transition-colors duration-300"
            >
              Ver Menú →
            </a>
            <a
              href="#cta"
              className="inline-flex items-center justify-center gap-2 px-9 py-3.5 rounded-full border border-white/30 text-white font-inter text-[12px] font-medium tracking-[0.15em] uppercase hover:border-white/55 hover:bg-white/8 transition-all duration-300 backdrop-blur-[2px]"
            >
              Cómo llegar
            </a>
          </motion.div>
        </div>

        {/* Bottom stats strip — distributed horizontally */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex items-center gap-10 sm:gap-16 pt-6 border-t border-white/10"
        >
          {[
            { n: "5K+",  l: "En Instagram" },
            { n: "4 ★",  l: "Google Reviews" },
            { n: "100%", l: "Artesanal" },
          ].map((s) => (
            <div key={s.l} className="flex items-baseline gap-3">
              <p className="font-playfair text-[1.6rem] font-semibold text-white leading-none">{s.n}</p>
              <p className="font-inter text-[10px] font-light tracking-[0.2em] uppercase text-white/40">{s.l}</p>
            </div>
          ))}

          {/* Scroll hint — moved inline with stats on desktop */}
          <div className="hidden lg:flex items-center gap-3 ml-auto">
            <span className="font-inter text-[9px] font-light tracking-[0.4em] text-white/30 uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="w-4 h-7 rounded-full border border-white/20 flex items-start justify-center pt-1"
            >
              <div className="w-0.5 h-1.5 rounded-full bg-white/30" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Subtle fade */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#FFF0F3]/50 to-transparent pointer-events-none" />
    </section>
  );
}
