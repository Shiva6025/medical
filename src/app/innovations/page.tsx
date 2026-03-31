"use client";

import { useRef } from "react";
import Image from "next/image";
import { Play, BookOpen, GraduationCap, ArrowRight } from "lucide-react";
import FeaturedInnovations from "@/components/FeaturedInnovations";

const topics = [
  { title: "Knotless Anchor Loading", count: "14 Videos", icon: <Play /> },
  { title: "Clinical Case Studies", count: "45 PDF Reports", icon: <BookOpen /> },
  { title: "Surgical Workshops", count: "8 Upcoming", icon: <GraduationCap /> },
];

export default function InnovationsPage() {
  return (
    <div>
      <section className="bg-primary text-white pt-44 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-4 block">Education & Research</span>
          <h1 className="text-5xl md:text-7xl font-bold font-outfit mb-6">Medical <span className="text-secondary">Innovations</span></h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Deep dive into the next generation of surgical techniques and clinical evidence.
          </p>
        </div>
      </section>

      {/* Feature the Innovations components built for Home */}
      <FeaturedInnovations />

      {/* Resource Sections */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topics.map((topic, i) => (
              <div key={i} className="p-10 rounded-3xl border border-gray-100 bg-accent/30 hover:bg-primary hover:text-white transition-all duration-500 group">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-secondary mb-8 group-hover:scale-110 transition-transform">
                  {topic.icon}
                </div>
                <h3 className="text-2xl font-bold font-outfit mb-2">{topic.title}</h3>
                <p className="text-primary/40 group-hover:text-white/60 text-sm font-bold uppercase tracking-widest mb-8">{topic.count}</p>
                <button className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-secondary">
                  Access Portal <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Center Highlight */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1551601651-!d83!410d?auto=format&fit=crop&q=80&w=800" 
              alt="Surgical Labs" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl font-bold font-outfit">Surgical Skills <span className="text-secondary">Training Centers</span></h2>
            <p className="text-white/60 text-lg leading-relaxed">
              VIRAAT Medical's commitment to education is showcased through our advanced 
              surgical skills labs located across India. Surgeons are invited to 
              gain hands-on experience with the latest knotless tensionable 
              technologies in a controlled clinical environment.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="btn-gold">Book a Session</button>
              <button className="px-8 py-3 border-2 border-white/20 rounded-full font-bold hover:bg-white hover:text-primary transition-all">Download Lab Brochure</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
