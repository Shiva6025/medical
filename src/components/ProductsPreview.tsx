"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Bone, Syringe, Activity, Microscope } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    id: "sports",
    name: "Sports Medicine",
    icon: <Activity className="w-5 h-5" />,
    description: "Innovative solutions for ligament reconstruction, meniscus repair, and shoulder stabilization.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f!d1c2?auto=format&fit=crop&q=80&w=800",
    features: ["Knotless Suture Anchors", "ACL/PCL Reconstruction", "Shoulder Arthroplasty"],
  },
  {
    id: "joint",
    name: "Joint Preservation",
    icon: <Bone className="w-5 h-5" />,
    description: "Advanced techniques to delay or prevent joint replacement through biological restoration.",
    image: "https://images.unsplash.com/photo-1559757175-5700d!b5c3?auto=format&fit=crop&q=80&w=800",
    features: ["Cartilage Repair", "Osteotomy Systems", "Meniscal Allograft"],
  },
  {
    id: "arthro",
    name: "Arthroplasty",
    icon: <Activity className="w-5 h-5" />,
    description: "Comprehensive primary and revision systems for total hip and knee replacement.",
    image: "https://images.unsplash.com/photo-1581093588401-fbbd!d404?auto=format&fit=crop&q=80&w=800",
    features: ["Total Knee Systems", "Hip Revision Sets", "Custom Instruments"],
  },
  {
    id: "biologics",
    name: "Biologics",
    icon: <Microscope className="w-5 h-5" />,
    description: "Biotechnological solutions for orthobiologics and rheumatology applications.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9d!7931?auto=format&fit=crop&q=80&w=800",
    features: ["Bone Grafts", "PRP Systems", "Amniotic Tissue"],
  },
];

export default function ProductsPreview() {
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-20 -left-20 w-[500px] h-[500px] border border-white rounded-full" />
        <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] border border-white rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-secondary font-bold tracking-widest uppercase text-xs">Innovation Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold font-outfit">Surgical <span className="text-secondary italic">Specialties</span></h2>
          <p className="text-white/60 text-lg">
            Our comprehensive portfolio covers the most critical areas of modern
            orthopedic surgery, providing tools for every clinical need.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Tabs */}
          <div className="lg:w-1/3 flex flex-col gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat)}
                className={`flex items-center gap-6 p-6 rounded-2xl text-left transition-all duration-300 border-2 ${activeTab.id === cat.id
                    ? "bg-white/10 border-secondary shadow-xl shadow-secondary/10"
                    : "bg-white/5 border-transparent hover:bg-white/10"
                  }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${activeTab.id === cat.id ? "bg-secondary text-white" : "bg-white/10 text-white/40"
                  }`}>
                  {cat.icon}
                </div>
                <div>
                  <h3 className={`font-bold text-lg ${activeTab.id === cat.id ? "text-white" : "text-white/60"}`}>
                    {cat.name}
                  </h3>
                  <p className="text-xs text-white/30 uppercase font-semibold tracking-wider mt-1">Explore Products</p>
                </div>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 h-full flex flex-col md:flex-row gap-12"
              >
                <div className="md:w-1/2 space-y-8">
                  <h3 className="text-3xl font-bold font-outfit text-white">{activeTab.name}</h3>
                  <p className="text-white/60 text-lg leading-relaxed">
                    {activeTab.description}
                  </p>

                  <div className="space-y-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-secondary">Key Highlights</p>
                    <ul className="grid grid-cols-1 gap-4">
                      {activeTab.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-white/80">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(179,139,63,0.8)]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6">
                    <Link
                      href={`/products?category=${activeTab.id}`}
                      className="btn-gold w-fit flex items-center gap-2 group"
                    >
                      View Full Catalog
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                <div className="md:w-1/2 relative min-h-[300px] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={activeTab.image}
                    alt={activeTab.name}
                    className="absolute inset-0 w-full h-full object-cover grayscale-20 group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-primary/80 to-transparent" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
