"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Play, Calendar, User } from "lucide-react";

const Innovations = [
  {
    title: "All-Soft Knotless Suture Anchors",
    description: "The next standard in precision medial row fixation with 1.8mm footprint.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800",
    date: "March 2026",
    author: "Clinical Research Team",
  },
  {
    title: "SutureAnchor™ Loading Video",
    description: "Step-by-step procedure for efficient anchor loading and deployment.",
    image: "https://images.unsplash.com/photo-1576091160550-2173bc113f9b?auto=format&fit=crop&q=80&w=800",
    date: "Feb 2026",
    author: "Technical Center",
  },
  {
    title: "ACL Repair: FiberTape System",
    description: "Bio-compression technology for enhanced internal brace stability.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a724?auto=format&fit=crop&q=80&w=800",
    date: "Jan 2026",
    author: "Dr. Annamala",
  },
];

export default function FeaturedInnovations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-accent/30 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-outfit">
              New Techniques <span className="text-secondary tracking-tight">of the Month</span>
            </h2>
            <p className="text-primary/60 text-lg">
              Explore our latest surgical techniques, clinical studies, and product
              demonstrations designed to empower orthopedic surgeons.
            </p>
          </div>
          <button className="text-secondary font-bold hover:underline flex items-center gap-2 group transition-all">
            See All Techniques
            <span className="w-8 h-px bg-secondary group-hover:w-12 transition-all" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Innovations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              <div className="relative aspect-16/10 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border-2 border-white/50">
                    <Play className="fill-white text-white w-6 h-6 ml-1" />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full tracking-widest">
                    Clinical Video
                  </span>
                </div>
              </div>

              <div className="p-8 grow flex flex-col">
                <div className="flex items-center gap-6 mb-4 text-[10px] text-primary/40 uppercase font-bold tracking-widest">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-3 h-3" />
                    {item.author}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                  {item.title}
                </h3>
                <p className="text-primary/60 text-sm leading-relaxed mb-6 grow">
                  {item.description}
                </p>
                <button className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest transition-all group-hover:gap-4">
                  Learn Technique
                  <span className="w-6 h-[2px] bg-secondary" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
