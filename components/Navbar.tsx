"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Inicio",        href: "#inicio" },
  { label: "Quiénes somos", href: "#quienes" },
  { label: "Menú",          href: "#productos" },
  { label: "Galería",       href: "#galeria" },
  { label: "Contacto",      href: "#cta" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/96 backdrop-blur-md border-b border-petal/25 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-screen-2xl mx-auto w-full px-10 lg:px-16 flex items-center justify-between gap-8">

          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group flex-shrink-0">
            <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300 ${
              scrolled ? "bg-mauve" : "bg-white/15 border border-white/35"
            }`}>
              <span className="text-white text-base leading-none">✿</span>
            </div>
            <div className="flex flex-col leading-none gap-0.5">
              <span className={`font-dancing text-[22px] leading-none transition-colors duration-300 ${
                scrolled ? "text-mauve" : "text-white"
              }`}>
                Andrea&apos;s
              </span>
              <span className={`font-inter text-[9px] font-medium tracking-[0.3em] uppercase transition-colors duration-300 ${
                scrolled ? "text-[#8B5567]" : "text-white/60"
              }`}>
                Bakery · Palmares
              </span>
            </div>
          </a>

          {/* Desktop nav links — centered */}
          <nav className="hidden lg:flex items-center gap-9 flex-1 justify-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-inter text-[13px] font-medium tracking-wide transition-colors duration-300 ${
                  scrolled
                    ? "text-[#3d1a24] hover:text-mauve"
                    : "text-white/85 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-5 flex-shrink-0">
            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col justify-center gap-[5px] w-9 h-9"
              aria-label="Abrir menú"
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`block h-[1.5px] rounded-full transition-all duration-300 ${
                    scrolled ? "bg-[#2D1020]" : "bg-white"
                  } ${
                    i === 0 ? `w-6 origin-center ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}` :
                    i === 1 ? `w-4 ${menuOpen ? "opacity-0 scale-x-0" : ""}` :
                    `w-6 origin-center ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`
                  }`}
                />
              ))}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-[#FFFAF8] flex flex-col pt-28 px-8 pb-10"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-7 w-10 h-10 flex items-center justify-center text-[#2D1020] font-light text-2xl"
              aria-label="Cerrar"
            >
              ✕
            </button>

            <div className="flex flex-col gap-0">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.055, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="font-playfair text-[2.6rem] font-light text-[#2D1020] hover:text-mauve transition-colors duration-300 py-4 border-b border-petal/40 leading-tight"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-auto"
            >
              <a
                href="https://wa.me/50660860935"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-4 rounded-full bg-mauve text-white font-inter text-[13px] font-medium tracking-widest uppercase hover:bg-berry transition-colors duration-300"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Pedir por WhatsApp
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
