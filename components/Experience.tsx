"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: "✿",
    title: "Ambiente Romántico",
    subtitle: "Instagrammable",
    description:
      "Cada rincón fue diseñado para que te enamores. Decoración pink, luz cálida y detalles florales que hacen de cada visita un momento digno de guardar en tu feed.",
    gradient: "from-rose-50 to-petal",
    iconBg: "from-dusty to-mauve",
    tag: "Ambiente",
  },
  {
    icon: "☕",
    title: "Brunch & Cafés",
    subtitle: "Con amor en cada sorbo",
    description:
      "Desde pancakes esponjosos con frutos del bosque hasta cafés especiales de origen único. Nuestro menú es una experiencia sensorial que despierta todos tus sentidos.",
    gradient: "from-amber-50 to-rose-50",
    iconBg: "from-amber-400 to-dusty",
    tag: "Menú",
  },
  {
    icon: "✦",
    title: "Postres & Pasteles",
    subtitle: "Arte comestible",
    description:
      "Cada pastel es una obra de arte única. Personalizamos diseños buttercream, queques de frutas, cupcakes y galletas que son tan hermosos que dan pena comerlos.",
    gradient: "from-petal to-rose-100",
    iconBg: "from-mauve to-berry",
    tag: "Repostería",
  },
  {
    icon: "✨",
    title: "Workshops Creativos",
    subtitle: "Crea tu experiencia",
    description:
      "Únete a nuestros workshops de pintura y tarde de café. Materiales incluidos, ambiente de ensueño y una experiencia que no encontrarás en ningún otro lugar de Palmares.",
    gradient: "from-rose-50 to-blush",
    iconBg: "from-rose-300 to-mauve",
    tag: "Experiencias",
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative bg-gradient-to-br ${feature.gradient} rounded-4xl p-8 shadow-soft card-hover hover-glow border border-white/60`}
    >
      {/* Tag */}
      <span className="inline-block font-inter text-[10px] tracking-[0.25em] uppercase text-mauve bg-white/70 px-3 py-1 rounded-full mb-6 border border-petal">
        {feature.tag}
      </span>

      {/* Icon */}
      <div
        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.iconBg} flex items-center justify-center text-2xl shadow-pink mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
      >
        <span className="text-white">{feature.icon}</span>
      </div>

      {/* Text */}
      <h3 className="font-playfair text-2xl text-berry mb-1">{feature.title}</h3>
      <p className="font-dancing text-xl text-dusty mb-4">{feature.subtitle}</p>
      <p className="font-inter text-sm text-[#7A4558] leading-relaxed">{feature.description}</p>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-dusty to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}

export default function Experience() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section id="experiencia" className="relative py-32 bg-cream overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, #FFD6E0 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #F4B8CA 0%, transparent 70%)", transform: "translate(-30%, 30%)" }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="font-dancing text-2xl text-dusty block mb-3">Lo que nos hace especiales</span>
          <h2 className="section-heading mb-6">
            Una experiencia que<br />
            <span className="italic">nunca olvidarás</span>
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-dusty" />
            <span className="text-dusty text-lg">✿</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-dusty" />
          </div>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 p-10 rounded-4xl glass border border-petal/40"
        >
          {[
            { number: "5K+", label: "Seguidores felices" },
            { number: "2376", label: "Momentos compartidos" },
            { number: "100%", label: "Hecho con amor" },
            { number: "∞", label: "Recuerdos creados" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="font-playfair text-4xl font-bold text-gradient mb-1">{stat.number}</p>
              <p className="font-inter text-xs tracking-wider text-[#8B5567] uppercase">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
