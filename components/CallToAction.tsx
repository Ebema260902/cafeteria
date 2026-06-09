"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const hours = [
  { day: "Lunes – Viernes", time: "7:00am – 7:00pm" },
  { day: "Sábado",          time: "8:00am – 8:00pm" },
  { day: "Domingo",         time: "9:00am – 5:00pm" },
];

export default function CallToAction() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="cta" ref={ref} className="relative py-20 md:py-28 overflow-hidden bg-[#FFFAF8]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dusty/40 to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-12 blur-3xl"
          style={{ background: "radial-gradient(ellipse, #FFD6E0 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT — Café image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Decorative background */}
            <div className="absolute -inset-3 rounded-[44px] opacity-20"
              style={{ background: "linear-gradient(135deg, #FFD6E0 0%, #F4B8CA 100%)" }} />

            {/* Image */}
            <div className="relative rounded-[36px] overflow-hidden shadow-[0_24px_64px_rgba(194,107,133,0.22)] aspect-[4/5]">
              <Image
                src="/images/lugar25.webp"
                alt="Interior Andrea's Bakery Palmares"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-berry/30 via-transparent to-transparent" />
            </div>

            {/* Floating open hours badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-5 -right-5 glass-pink rounded-3xl px-5 py-4 shadow-pink-lg border border-white/60"
            >
              <p className="font-inter text-[10px] tracking-widest uppercase text-mauve mb-1">Horario hoy</p>
              <p className="font-playfair text-lg font-bold text-[#2D1020]">7am – 7pm</p>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-inter text-[10px] text-emerald-600 font-semibold">Abierto ahora</span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Label */}
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-dusty" />
              <span className="font-dancing text-xl text-mauve">Te esperamos</span>
            </div>

            {/* Headline */}
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-5xl text-[#2D1020] leading-[1.05] mb-4">
              ¿Lista para tu<br />
              <span className="italic text-mauve">momento especial</span>?
            </h2>

            <p className="font-inter text-sm text-[#7A4558] leading-relaxed mb-9 max-w-sm">
              Solo tenés que llegar. Acá te esperamos con el mejor café, los postres más lindos de Palmares
              y un ambiente que te va a enamorar desde que entrés.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="https://wa.me/50660860935"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2 justify-center"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Escribinos al WhatsApp
              </a>
              <a
                href="tel:24521357"
                className="btn-secondary flex items-center gap-2 justify-center"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.12 19.79 19.79 0 01.5 4.5 2 2 0 012.41 2.5h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 10a16 16 0 006.09 6.09l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                Llamanos: 2452-1357
              </a>
            </div>

            {/* Info cards */}
            <div className="space-y-3">
              {/* Horarios */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-petal/40">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">🕐</span>
                  <h4 className="font-playfair text-base text-[#2D1020]">Horarios</h4>
                </div>
                <div className="space-y-1.5">
                  {hours.map((h) => (
                    <div key={h.day} className="flex justify-between items-center">
                      <span className="font-inter text-xs text-[#7A4558]">{h.day}</span>
                      <span className="font-inter text-xs font-semibold text-mauve">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {/* Ubicación */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-petal/40">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-base">📍</span>
                    <h4 className="font-playfair text-base text-[#2D1020]">Ubicación</h4>
                  </div>
                  <p className="font-inter text-xs text-[#7A4558] leading-relaxed">
                    Palmares, Alajuela<br />Costa Rica
                  </p>
                  <a
                    href="https://www.google.com/maps/search/Andrea's+Bakery+Palmares+Costa+Rica"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-2 text-xs text-mauve hover:text-berry transition-colors font-medium"
                  >
                    Ver en mapa →
                  </a>
                </div>

                {/* Contacto */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-petal/40">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-base">💬</span>
                    <h4 className="font-playfair text-base text-[#2D1020]">Contacto</h4>
                  </div>
                  <div className="space-y-1.5">
                    <a href="tel:24521357" className="flex items-center gap-1.5 font-inter text-xs text-[#7A4558] hover:text-mauve transition-colors">
                      <span>📞</span> 2452-1357
                    </a>
                    <a href="https://wa.me/50660860935" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 font-inter text-xs text-[#7A4558] hover:text-mauve transition-colors">
                      <span>📱</span> 60860935
                    </a>
                    <a href="https://www.instagram.com/cafeteria_andreasbakery" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 font-inter text-xs text-[#7A4558] hover:text-mauve transition-colors">
                      <span>📸</span> @andreasbakery
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
