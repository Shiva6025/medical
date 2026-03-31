import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Intro() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-block px-4 py-1 bg-secondary/10 border-l-4 border-secondary text-secondary font-bold text-xs uppercase tracking-widest">
              Our Mission
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight font-outfit">
              Improving lives through <span className="text-secondary italic">medical innovation</span>
            </h2>
            <p className="text-lg text-primary/70 leading-relaxed">
              At VIRAAT Medical, we distribute and develop the world's most advanced
              surgical technologies. Our focus is on minimally invasive techniques
              that reduce patient trauma and accelerate recovery times.
            </p>
            <p className="text-lg text-primary/70 leading-relaxed">
              From Knotless Suture Anchors to advanced biologics, our portfolio
              represents the pinnacle of modern orthopedic surgical science.
            </p>
            <div className="pt-4">
              <Link href="/about" className="btn-outline flex items-center gap-2 w-fit group">
                Learn More About Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-4/3">
              <Image
                src="/intro.png"
                alt="Medical Innovation"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Background decorative square */}
            <div className="absolute -top-8 -right-8 w-64 h-64 border-8 border-secondary/20 z-0 rounded-2xl" />
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-primary/5 z-0 rounded-2xl" />

            <div className="absolute bottom-8 right-8 z-20 bg-white p-6 rounded-xl shadow-xl border-l-4 border-secondary max-w-xs animate-bounce-slow">
              <p className="text-primary font-bold text-lg mb-1">20+ Years</p>
              <p className="text-primary/60 text-sm">Of clinical excellence and surgical training experience.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
