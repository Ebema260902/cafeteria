"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const galleryItems = [
  { id: 1, label: "Pastel buttercream de rosas",    tag: "Pasteles",    tall: true,  src: "/images/lugar19.webp" },
  { id: 2, label: "Café 'Lindo Día'",               tag: "Cafés",       tall: false, src: "/images/lugar15.webp" },
  { id: 3, label: "Árbol y pájaro rosado",          tag: "Ambiente",    tall: false, src: "/images/lugar21.webp" },
  { id: 4, label: "Frappuccino especial",           tag: "Bebidas",     tall: false, src: "/images/lugar12.webp" },
  { id: 5, label: "Escalera y cabina rosa",         tag: "Rincones",    tall: true,  src: "/images/lugar26.webp" },
  { id: 6, label: "Avocado toast artesanal",        tag: "Brunch",      tall: false, src: "/images/lugar6.webp"  },
  { id: 7, label: "Interior del café",              tag: "Ambiente",    tall: false, src: "/images/lugar2.webp"  },
  { id: 8, label: "Crepe de chocolate con fresas",  tag: "Postres",     tall: false, src: "/images/lugar3.webp"  },
];

function GalleryItem({ item, index }: { item: typeof galleryItems[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-3xl cursor-pointer w-full h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={item.src}
        alt={item.label}
        fill
        className={`object-cover transition-transform duration-700 ${hovered ? "scale-110" : "scale-100"}`}
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

      <motion.div
        animate={{ opacity: hovered ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        className="absolute bottom-3 left-3"
      >
        <span className="font-inter text-[10px] tracking-widest uppercase text-white bg-black/35 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/15">
          {item.tag}
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 px-5 text-center"
        style={{ background: "rgba(139,34,82,0.55)", backdropFilter: "blur(3px)" }}
      >
        <p className="font-playfair text-base md:text-lg text-white drop-shadow leading-snug">{item.label}</p>
        <span className="font-inter text-[10px] tracking-[0.2em] uppercase bg-white/20 text-white px-3 py-1 rounded-full border border-white/30">
          {item.tag}
        </span>
      </motion.div>
    </motion.div>
  );
}

export default function Gallery() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section id="galeria" className="relative py-28 md:py-32 overflow-hidden" style={{ background: "#0C0307" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-12"
        >
          <span className="font-playfair italic text-xl text-mauve/60 block mb-3 font-normal">Momentos que inspiran</span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4">
            Nuestra <span className="italic text-dusty">Galería</span>
          </h2>
          <p className="font-inter text-sm text-white/50 max-w-sm mx-auto leading-relaxed">
            Cada foto cuenta una historia de amor, dulzura y momentos perfectos.
          </p>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-px w-14 bg-white/10" />
            <span className="text-mauve/60">✿</span>
            <div className="h-px w-14 bg-white/10" />
          </div>
        </motion.div>

        {/* Masonry grid — desktop 4 cols, mobile 2 cols */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4" style={{ gridAutoRows: "200px" }}>

          {/* Item 1 — tall */}
          <div style={{ gridRow: "span 2" }} className="min-h-[200px]">
            <GalleryItem item={galleryItems[0]} index={0} />
          </div>

          {/* Items 2, 3, 4 — normal */}
          <div style={{ gridRow: "span 1" }}>
            <GalleryItem item={galleryItems[1]} index={1} />
          </div>
          <div style={{ gridRow: "span 1" }}>
            <GalleryItem item={galleryItems[2]} index={2} />
          </div>
          <div style={{ gridRow: "span 1" }}>
            <GalleryItem item={galleryItems[3]} index={3} />
          </div>

          {/* Item 5 — tall */}
          <div style={{ gridRow: "span 2" }} className="min-h-[200px]">
            <GalleryItem item={galleryItems[4]} index={4} />
          </div>

          {/* Items 6, 7 — normal */}
          <div style={{ gridRow: "span 1" }}>
            <GalleryItem item={galleryItems[5]} index={5} />
          </div>
          <div style={{ gridRow: "span 1" }}>
            <GalleryItem item={galleryItems[6]} index={6} />
          </div>

          {/* Item 8 — normal */}
          <div style={{ gridRow: "span 1" }}>
            <GalleryItem item={galleryItems[7]} index={7} />
          </div>

          {/* Instagram CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.65 }}
            style={{ gridRow: "span 1", background: "linear-gradient(135deg, #8B2252 0%, #C26B85 60%, #E8799A 100%)" }}
            className="rounded-3xl overflow-hidden flex flex-col items-center justify-center gap-3 p-5 text-center"
          >
            <svg className="w-7 h-7 text-white/80" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <p className="font-dancing text-lg text-white leading-snug">Seguinos en Instagram</p>
            <a
              href="https://www.instagram.com/cafeteria_andreasbakery"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full bg-white text-berry font-inter text-[10px] tracking-widest uppercase font-semibold hover:bg-petal transition-colors duration-300"
            >
              @andreasbakery
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
