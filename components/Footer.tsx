"use client";

import { motion } from "framer-motion";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotras", href: "#experiencia" },
  { label: "Menú", href: "#productos" },
  { label: "Galería", href: "#galeria" },
  { label: "Workshops", href: "#ambiente" },
  { label: "Contacto", href: "#cta" },
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#3d1a24] to-[#1a0a10] text-white overflow-hidden">
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12 fill-cream">
          <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,15 1440,30 L1440,0 L0,0 Z" />
        </svg>
      </div>

      {/* Decorative dots */}
      <div className="absolute inset-0 pointer-events-none opacity-5"
        style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />

      {/* Floating elements */}
      <div className="absolute top-16 left-8 text-dusty text-3xl opacity-20">✿</div>
      <div className="absolute top-16 right-8 text-petal text-2xl opacity-20">♡</div>

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-10">
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-dusty to-mauve flex items-center justify-center shadow-pink">
                <span className="text-white text-xl">✿</span>
              </div>
              <div>
                <p className="font-dancing text-2xl text-petal">Andrea&apos;s</p>
                <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-white/40">Bakery · Cafetería</p>
              </div>
            </div>
            <p className="font-inter text-sm text-white/50 leading-relaxed mb-6">
              Un espacio donde cada visita es una experiencia de ensueño. Brunch, cafés especiales y pasteles artesanales en el corazón de Palmares.
            </p>
            <div className="flex gap-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/cafeteria_andreasbakery"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-dusty/20 hover:border-dusty transition-all duration-300 group"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 text-white/60 group-hover:text-dusty transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/50660860935"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-dusty/20 hover:border-dusty transition-all duration-300 group"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 text-white/60 group-hover:text-dusty transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-playfair text-lg text-dusty mb-6">Navegación</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-inter text-sm text-white/50 hover:text-dusty transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-dusty/0 group-hover:bg-dusty/60 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair text-lg text-dusty mb-6">Encuéntranos</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-dusty mt-0.5">📍</span>
                <div>
                  <p className="font-inter text-sm text-white/70">Palmares, Alajuela</p>
                  <p className="font-inter text-xs text-white/40">Costa Rica · 20701</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-dusty">📞</span>
                <a href="tel:24521357" className="font-inter text-sm text-white/70 hover:text-dusty transition-colors">
                  2452-1357
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-dusty">📱</span>
                <a href="https://wa.me/50660860935" target="_blank" rel="noopener noreferrer" className="font-inter text-sm text-white/70 hover:text-dusty transition-colors">
                  60860935
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-dusty">📸</span>
                <a href="https://www.instagram.com/cafeteria_andreasbakery" target="_blank" rel="noopener noreferrer" className="font-inter text-sm text-white/70 hover:text-dusty transition-colors">
                  @cafeteria_andreasbakery
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Pink divider */}
        <div className="pink-divider opacity-20 mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-white/30 tracking-wide">
            © {new Date().getFullYear()} Andrea&apos;s Bakery · Todos los derechos reservados
          </p>
          <div className="flex items-center gap-2">
            <span className="font-dancing text-base text-dusty/60">happiness</span>
            <span className="text-dusty/40">♡</span>
            <span className="font-inter text-[10px] text-white/20 tracking-widest uppercase">Palmares, CR</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
