"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const vibes = [
  { emoji: "🌸", label: "Ambiente coquette" },
  { emoji: "☕", label: "Café de autor" },
  { emoji: "📸", label: "Fotografiable" },
  { emoji: "🎀", label: "Rincones románticos" },
  { emoji: "✨", label: "Momentos únicos" },
  { emoji: "🌿", label: "Ingredientes frescos" },
];

export default function AmbienteSection() {
  const sectionRef = useRef(null);
  const inView     = useInView(sectionRef, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section
      ref={sectionRef}
      id="ambiente"
      className="relative py-32 overflow-hidden"
      style={{ background: "#100408" }}
    >
      {/* Ambient radial glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(ellipse, #8B2252 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] rounded-full opacity-15 blur-3xl"
          style={{ background: "radial-gradient(ellipse, #C26B85 0%, transparent 70%)" }} />
      </div>

      {/* Subtle dot pattern */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, rgba(244,184,202,0.08) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      {/* Animated rings */}
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-mauve/10"
            style={{
              width:  `${200 + i * 140}px`,
              height: `${200 + i * 140}px`,
              top:    `${15 + i * 8}%`,
              right:  `${-4 + i * 4}%`,
            }}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 35 + i * 8, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Quote block */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="h-px w-14 bg-gradient-to-r from-transparent to-mauve/40" />
            <span className="font-playfair italic text-lg text-mauve/60 font-normal">La experiencia</span>
            <div className="h-px w-14 bg-gradient-to-l from-transparent to-mauve/40" />
          </div>

          {/* Large quote mark */}
          <div className="font-playfair text-[120px] leading-none text-mauve/10 select-none -mb-10 pointer-events-none">
            &ldquo;
          </div>

          <p className="font-dancing text-3xl md:text-4xl lg:text-5xl text-white/90 leading-tight mb-6 drop-shadow-lg max-w-3xl mx-auto">
            La felicidad se sirve en una taza rosada con espuma de leche y mucho amor.
          </p>
          <p className="font-inter text-xs tracking-[0.3em] uppercase text-mauve/50">— Andrea&apos;s Bakery</p>
        </motion.div>

        {/* Vibe pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-20"
        >
          {vibes.map((vibe, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + i * 0.08 }}
              whileHover={{ scale: 1.06, y: -3 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full cursor-default"
              style={{
                background: "rgba(194,107,133,0.12)",
                border: "1px solid rgba(194,107,133,0.25)",
              }}
            >
              <span className="text-lg">{vibe.emoji}</span>
              <span className="font-inter text-xs tracking-wide text-white/80 font-medium">{vibe.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Workshop + Social cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* Workshop */}
          <div
            className="rounded-4xl p-10 text-center relative overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(194,107,133,0.20)",
            }}
          >
            {/* Corner glow */}
            <div className="absolute top-0 right-0 w-48 h-48 opacity-10 blur-2xl rounded-full"
              style={{ background: "radial-gradient(circle, #C26B85, transparent)" }} />

            <div className="text-5xl mb-5">🎨</div>
            <h3 className="font-playfair text-3xl text-white mb-2">Workshop Creativo</h3>
            <p className="font-dancing text-xl text-mauve/80 mb-4">Crea tu propio lienzo</p>
            <p className="font-inter text-sm text-white/55 leading-relaxed mb-7 max-w-xs mx-auto">
              Una tarde única pintando tu lienzo con materiales incluidos. Bebida de bienvenida o tarde de café completa. Cupos limitados.
            </p>

            <div className="space-y-2.5 mb-8">
              {[
                { label: "Bebida + Workshop",        price: "₡10.000" },
                { label: "Tarde de Café + Workshop", price: "₡15.000" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-2xl px-4 py-3"
                  style={{ background: "rgba(194,107,133,0.10)", border: "1px solid rgba(194,107,133,0.15)" }}
                >
                  <span className="font-inter text-xs text-white/65">{item.label}</span>
                  <span className="font-playfair font-bold text-white">{item.price}</span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/50660860935"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-full bg-mauve text-white font-inter text-xs tracking-widest uppercase hover:bg-berry transition-colors duration-300 font-semibold"
            >
              Info: 60860935
            </a>
          </div>

          {/* Comunidad */}
          <div
            className="rounded-4xl p-10 flex flex-col justify-between relative overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(194,107,133,0.20)",
            }}
          >
            <div className="absolute bottom-0 left-0 w-48 h-48 opacity-10 blur-2xl rounded-full"
              style={{ background: "radial-gradient(circle, #8B2252, transparent)" }} />

            <div>
              <h3 className="font-playfair text-3xl text-white mb-2">Nuestra Comunidad</h3>
              <p className="font-dancing text-xl text-mauve/80 mb-8">Únete a nuestra familia</p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { n: "5K+",   l: "En Instagram" },
                  { n: "2.3K",  l: "Publicaciones" },
                  { n: "4 ★",   l: "Google" },
                  { n: "CR",    l: "Palmares" },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="rounded-2xl p-4 text-center"
                    style={{ background: "rgba(194,107,133,0.08)", border: "1px solid rgba(194,107,133,0.15)" }}
                  >
                    <p className="font-playfair text-2xl font-bold text-white">{s.n}</p>
                    <p className="font-inter text-[10px] tracking-wider uppercase text-white/45">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <a
                href="https://www.instagram.com/cafeteria_andreasbakery"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-3 rounded-full bg-mauve text-white font-inter text-xs tracking-widest uppercase hover:bg-berry transition-colors duration-300 font-semibold"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Seguir en Instagram
              </a>
              <a
                href="https://wa.me/50660860935"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-3 rounded-full font-inter text-xs tracking-widest uppercase transition-all duration-300 text-white/70 hover:text-white"
                style={{ border: "1px solid rgba(194,107,133,0.25)" }}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp: 60860935
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
