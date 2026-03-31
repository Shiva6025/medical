"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden bg-primary">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Medical Technology Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-primary via-primary/50 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
              Medical Innovation
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-outfit">
              Knotless <span className="text-secondary">Tensionable</span> Technology™
            </h1>
            <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-xl">
              The next generation in low-profile Knotless Tensionable Suture Anchors
              engineered for superior medial row fixation and biomechanical stability.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/products" className="btn-gold flex items-center gap-2 group">
                Explore Technology
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="flex items-center gap-3 text-white font-semibold hover:text-secondary transition-colors px-6 py-2 group">
                <div className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:border-secondary transition-colors">
                  <Play className="fill-white group-hover:fill-secondary w-5 h-5 ml-1" />
                </div>
                Watch Procedure
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-white to-transparent opacity-10" />
      <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
    </section>
  );
}
