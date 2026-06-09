"use client";

import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";

const U = (id: string, w = 700) =>
  `https://images.unsplash.com/${id}?w=${w}&q=82&auto=format&fit=crop`;

const categories = ["Todo", "Brunch", "Cafés", "Postres", "Galletas"];

const products = [
  {
    id: 1, name: "Pancakes Happiness",
    description: "Esponjosos pancakes con frutos del bosque frescos, crema batida y coulis de fresas.",
    price: "₡4.500", category: "Brunch",
    src: U("photo-1567620905732-2d1ec7ab7445"),
    tag: "⭐ Favorito", tagColor: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    id: 2, name: "Cappuccino de Autor",
    description: "Espresso doble con leche vaporizada y arte latte personalizado del día.",
    price: "₡2.200", category: "Cafés",
    src: U("photo-1509042239860-f550ce710b93"),
    tag: "✦ Popular", tagColor: "bg-rose-50 text-mauve border-rose-200",
  },
  {
    id: 3, name: "Pastel Buttercream",
    description: "Pastel artesanal con frosting de mantequilla y decoración floral personalizada.",
    price: "₡25.000", category: "Postres",
    src: U("photo-1578985545062-69928b1d9587"),
    tag: "✿ Premium", tagColor: "bg-petal text-berry border-dusty",
  },
  {
    id: 4, name: "Cookies Artesanales",
    description: "Galleta gigante con chips de chocolate, Oreo triturado y M&Ms de colores.",
    price: "₡1.800", category: "Galletas",
    src: U("photo-1499636136210-6f4ee915583e"),
    tag: "♡ Nuevo", tagColor: "bg-rose-50 text-rose-600 border-rose-200",
  },
  {
    id: 5, name: "Queque de Naranja",
    description: "Clásico queque seco de naranja con glaseado cítrico y toque de canela.",
    price: "₡3.200", category: "Postres",
    src: U("photo-1464349095431-e9a21285b5f3"),
    tag: "✦ Clásico", tagColor: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    id: 6, name: "Croissant Especial",
    description: "Croissant artesanal con queso crema, jamón, aguacate y semillas de sésamo.",
    price: "₡3.800", category: "Brunch",
    src: U("photo-1555507036-ab1f4038808a"),
    tag: "✿ Favorito", tagColor: "bg-rose-50 text-mauve border-rose-200",
  },
  {
    id: 7, name: "Matcha Latte",
    description: "Matcha ceremonial japonés con leche de avena y toque de vainilla.",
    price: "₡2.800", category: "Cafés",
    src: U("photo-1536256263959-770b48d82b0a"),
    tag: "✦ Trendy", tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
];

function FeaturedCard({ product, index }: { product: typeof products[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-4xl overflow-hidden cursor-pointer col-span-1 row-span-2 shadow-[0_16px_48px_rgba(194,107,133,0.18)]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ minHeight: "480px" }}
    >
      <Image
        src={product.src}
        alt={product.name}
        fill
        className={`object-cover transition-transform duration-700 ${hovered ? "scale-110" : "scale-100"}`}
        sizes="(max-width: 768px) 100vw, 400px"
        priority
      />

      {/* Permanent gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A0810]/80 via-[#1A0810]/20 to-transparent" />

      {/* Tag */}
      <div className={`absolute top-4 left-4 font-inter text-[10px] tracking-wide px-3 py-1.5 rounded-full border font-medium backdrop-blur-sm ${product.tagColor}`}>
        {product.tag}
      </div>

      {/* Price */}
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full">
        <span className="font-playfair font-bold text-berry text-sm">{product.price}</span>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <span className="font-inter text-[10px] tracking-[0.2em] uppercase text-dusty/80">
          {product.category}
        </span>
        <h3 className="font-playfair text-2xl text-white mt-1 mb-2 leading-tight">
          {product.name}
        </h3>
        <motion.p
          animate={{ opacity: hovered ? 1 : 0.6, y: hovered ? 0 : 4 }}
          transition={{ duration: 0.3 }}
          className="font-inter text-sm text-white/75 leading-relaxed mb-4"
        >
          {product.description}
        </motion.p>

        <motion.a
          href="https://wa.me/50660860935"
          target="_blank"
          rel="noopener noreferrer"
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-berry font-inter text-xs tracking-widest uppercase font-semibold hover:bg-petal transition-colors duration-300"
        >
          Pedir por WhatsApp ♡
        </motion.a>
      </div>
    </motion.div>
  );
}

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.09, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-white rounded-3xl overflow-hidden border border-petal/30 hover:-translate-y-1.5 transition-all duration-500"
      style={{ boxShadow: hovered ? "0 12px 36px rgba(194,107,133,0.20)" : "0 4px 16px rgba(0,0,0,0.06)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative h-44 overflow-hidden">
        <Image
          src={product.src}
          alt={product.name}
          fill
          className={`object-cover transition-transform duration-700 ${hovered ? "scale-110" : "scale-100"}`}
          sizes="(max-width: 640px) 100vw, 300px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
        <div className={`absolute top-3 left-3 font-inter text-[10px] tracking-wide px-2.5 py-1 rounded-full border font-medium ${product.tagColor}`}>
          {product.tag}
        </div>
        <div className="absolute bottom-3 right-3 glass px-3 py-1.5 rounded-full">
          <span className="font-playfair font-bold text-berry text-sm">{product.price}</span>
        </div>
      </div>

      <div className="p-5">
        <span className="font-inter text-[10px] tracking-[0.2em] uppercase text-mauve">{product.category}</span>
        <h3 className="font-playfair text-lg text-[#2D1020] mt-1 mb-1.5 leading-snug group-hover:text-mauve transition-colors duration-300">
          {product.name}
        </h3>
        <p className="font-inter text-[13px] text-[#7A4558] leading-relaxed line-clamp-2">{product.description}</p>

        <motion.a
          href="https://wa.me/50660860935"
          target="_blank"
          rel="noopener noreferrer"
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 6 }}
          transition={{ duration: 0.25 }}
          className="mt-4 block w-full py-2.5 text-center rounded-full bg-mauve text-white font-inter text-[11px] tracking-widest uppercase hover:bg-berry transition-colors duration-300"
        >
          Pedir ♡
        </motion.a>
      </div>
    </motion.div>
  );
}

function BentoGrid({ items }: { items: typeof products }) {
  const [featured, ...rest] = items;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-auto">
      {/* Featured card — spans 1 col × 2 rows */}
      <FeaturedCard product={featured} index={0} />
      {/* Remaining cards */}
      {rest.map((product, i) => (
        <ProductCard key={product.id} product={product} index={i + 1} />
      ))}
    </div>
  );
}

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("Todo");
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  const filtered = activeCategory === "Todo"
    ? products
    : products.filter((p) => p.category === activeCategory);

  const showBento = activeCategory === "Todo" && filtered.length >= 2;

  return (
    <section id="productos" className="relative py-28 md:py-32 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dusty/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-14"
        >
          <span className="font-playfair italic text-xl text-mauve/65 block mb-3 font-normal">Para enamorarte</span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-[#2D1020] leading-tight mb-4">
            Nuestro <span className="italic text-mauve">Menú</span>
          </h2>
          <p className="font-inter text-[14px] text-[#7A4558] max-w-md mx-auto leading-7">
            Ingredientes frescos, recetas únicas y mucho amor en cada preparación.
          </p>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-px w-14 bg-gradient-to-r from-transparent to-dusty" />
            <span className="text-dusty">✿</span>
            <div className="h-px w-14 bg-gradient-to-l from-transparent to-dusty" />
          </div>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full font-inter text-xs tracking-wider uppercase transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-mauve text-white scale-105"
                  : "bg-white text-[#7A4558] border border-petal hover:border-dusty hover:bg-blush"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {showBento ? (
              <BentoGrid items={filtered} />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {filtered.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
          className="text-center mt-14"
        >
          <p className="font-playfair italic text-xl text-mauve/70 mb-4 font-normal">¿Querés ver el menú completo?</p>
          <a
            href="https://www.instagram.com/cafeteria_andreasbakery"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-dusty text-mauve font-inter text-xs tracking-widest uppercase hover:bg-blush hover:border-mauve transition-all duration-300"
          >
            Ver menú en Instagram →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
