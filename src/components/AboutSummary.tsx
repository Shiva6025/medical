import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

const locations = [
  { name: "New Delhi", type: "Corporate Headquarters" },
  { name: "Mumbai", type: "Regional Office & Training Center" },
  { name: "Bengaluru", type: "Distribution Hub" },
  { name: "Chennai", type: "Support Center" },
];

export default function AboutSummary() {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Content */}
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold font-outfit uppercase tracking-wider">
              About <span className="text-secondary italic">VIRAAT</span>
            </h2>
            <div className="space-y-6 text-white/70 text-lg leading-relaxed">
              <p>
                From the beginning, VIRAAT Medical has been committed to providing
                surgeons with the innovative solutions they need to help their
                patients return to the activities they love.
              </p>
              <p>
                As a leader in medical technology, we maintain a vast network
                across India, ensuring that our products and clinical expertise
                are available to the medical community whenever required.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              {locations.map((loc, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <MapPin className="text-secondary w-5 h-5 mt-1" />
                  <div>
                    <h4 className="font-bold text-white">{loc.name}</h4>
                    <p className="text-white/40 text-xs uppercase tracking-widest mt-1">{loc.type}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <Link href="/about" className="btn-gold flex items-center gap-2 w-fit group">
                Full Company Profile
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Map Graphic */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 w-full aspect-square md:aspect-4/3 p-8">
              <Image
                src="/map.png"
                alt="VIRAAT India Coverage"
                fill
                className="object-contain drop-shadow-[0_0_50px_rgba(179,139,63,0.3)]"
              />
            </div>
            {/* Background glowing circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-secondary/10 rounded-full blur-[120px] z-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
