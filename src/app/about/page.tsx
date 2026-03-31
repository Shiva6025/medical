import Image from "next/image";
import { CheckCircle2, History, Target, Users } from "lucide-react";
import AboutSummary from "@/components/AboutSummary";

const stats = [
  { label: "Products Distributed", value: "500+" },
  { label: "Surgeons Trained", value: "20,000+" },
  { label: "Years of Service", value: "22" },
  { label: "Across India Locations", value: "4" },
];

export default function AboutPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary text-white pt-44 pb-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold font-outfit mb-6">Our <span className="text-secondary">Corporate</span> Story</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            VIRAAT Medical has been at the forefront of surgical innovation in India for over two decades.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div className="p-8 rounded-3xl bg-accent/30 border border-gray-100 space-y-6">
                <div className="w-12 h-12 rounded-xl bg-secondary text-white flex items-center justify-center">
                  <History className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-primary font-outfit">The Legacy of Excellence</h2>
                <p className="text-primary/70 leading-relaxed">
                  Founded with a vision to bring the world's most advanced medical technology
                  to the Indian healthcare landscape, VIRAAT Medical has grown into
                  a trusted partner for thousands of orthopedic surgeons.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-primary text-white space-y-6">
                <div className="w-12 h-12 rounded-xl bg-secondary text-white flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold font-outfit">Our Core Mission</h2>
                <p className="text-white/60 leading-relaxed">
                  To empower surgeons with precision instruments and innovative implants
                  that solve complex clinical challenges and improve the quality of life
                  for patients across the subcontinent.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="p-8 rounded-3xl border border-gray-100 flex flex-col justify-center items-center text-center hover:shadow-xl transition-shadow bg-white group">
                  <span className="text-4xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">{stat.value}</span>
                  <span className="text-xs uppercase font-bold tracking-widest text-primary/40">{stat.label}</span>
                </div>
              ))}
              <div className="aspect-square relative rounded-3xl overflow-hidden sm:col-span-2">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef!55b0b249?auto=format&fit=crop&q=80&w=800"
                  alt="Clinical Excellence"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section Placeholder */}
      <section className="py-24 bg-accent/30 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-outfit mb-16">Distinguished <span className="text-secondary">Leadership</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[1, 2, 3].map(i => (
              <div key={i} className="group">
                <div className="aspect-4/5 relative rounded-2xl overflow-hidden mb-6 bg-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center text-primary/10">
                    <Users className="w-24 h-24" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-primary mb-1">Executive Leader {i}</h4>
                <p className="text-secondary font-bold text-[10px] uppercase tracking-widest">Medical Director</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration of the Map section already built */}
      <AboutSummary />

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-outfit mb-6">Why Surgeons <span className="text-secondary tracking-tight">Trust VIRAAT</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "State-of-the-art surgical skills labs",
              "24/7 Technical clinical support",
              "Widest range of orthopedic solutions",
              "Unmatched delivery & logistics network"
            ].map((text, i) => (
              <div key={i} className="p-8 rounded-2xl border border-gray-50 bg-accent/20 flex flex-col items-center text-center group hover:bg-primary transition-all duration-300">
                <CheckCircle2 className="w-10 h-10 text-secondary mb-6 group-hover:scale-110 transition-transform" />
                <p className="font-bold text-primary group-hover:text-white transition-colors">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
