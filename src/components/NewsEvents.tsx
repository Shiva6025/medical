import Link from "next/link";
import { ArrowRight, Calendar, MapPin } from "lucide-react";

const events = [
  {
    title: "15th Annual Orthopedic Conference",
    date: "April 12-14, 2026",
    location: "New Delhi, India",
    category: "Convention",
    image: "https://images.unsplash.com/photo-1540575861!5e5?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Knotless Suture Workshop",
    date: "May 5, 2026",
    location: "Mumbai Training Center",
    category: "Hands-on Workshop",
    image: "https://images.unsplash.com/photo-1517048676732-d!b5c3?auto=format&fit=crop&q=80&w=800",
  },
];

const news = [
  {
    title: "VIRAAT Medical Expands to South India",
    date: "March 20, 2026",
    excerpt: "New distribution center opened in Bengaluru to better serve our growing customer base.",
  },
  {
    title: "FDA Clearance for V-Knot Anchor system",
    date: "March 15, 2026",
    excerpt: "The V-Knot system has received regulatory clearance for all standard orthopedic procedures.",
  },
];

export default function NewsEvents() {
  return (
    <section className="py-24 bg-white font-sans">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Events Sidebar */}
          <div className="lg:w-2/3">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold text-primary font-outfit uppercase tracking-wider">
                News <span className="text-secondary">& Events</span>
              </h2>
              <Link href="/events" className="text-secondary font-bold text-sm hover:underline">
                View All Events
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {events.map((event, i) => (
                <div key={i} className="group relative overflow-hidden rounded-2xl aspect-4/3 shadow-xl">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/40 to-transparent" />
                  <div className="absolute bottom-0 p-8 w-full">
                    <span className="bg-secondary text-white text-[10px] uppercase font-bold px-3 py-1 rounded-md tracking-widest mb-4 inline-block">
                      {event.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-secondary transition-colors">
                      {event.title}
                    </h3>
                    <div className="flex flex-col gap-2 text-white/70 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-secondary" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-secondary" />
                        {event.location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* News Sidebar */}
          <div className="lg:w-1/3">
            <h3 className="text-xl font-bold text-white bg-primary px-6 py-4 rounded-xl mb-8 flex items-center justify-between">
              Latest Headlines
              <ArrowRight className="w-5 h-5 text-secondary" />
            </h3>

            <div className="space-y-6">
              {news.map((item, i) => (
                <div key={i} className="p-6 border border-gray-100 rounded-2xl hover:border-secondary/30 hover:shadow-lg transition-all group">
                  <span className="text-secondary font-bold text-[10px] uppercase tracking-widest mb-2 block">{item.date}</span>
                  <h4 className="font-bold text-primary mb-3 leading-snug group-hover:text-secondary transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-primary/60 text-sm mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <Link href="#" className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                    Read Story
                    <ArrowRight className="w-4 h-4 text-secondary" />
                  </Link>
                </div>
              ))}

              <Link href="/news" className="block w-full text-center py-4 bg-accent/50 text-primary font-bold text-sm rounded-xl hover:bg-accent transition-colors">
                Explore More News
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
