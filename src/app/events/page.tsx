import { Calendar, MapPin, ArrowUpRight } from "lucide-react";
import NewsEvents from "@/components/NewsEvents";

const upcomingEvents = [
  {
    title: "National Orthopedic Summit 2026",
    date: "June 15-18",
    location: "Hyderabad, India",
    type: "Conference",
    image: "https://images.unsplash.com/photo-1540575861!5e5?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Advanced Arthroscopy Masterclass",
    date: "July 02",
    location: "VIRAAT Skills Lab, Mumbai",
    type: "Workshop",
    image: "https://images.unsplash.com/photo-1517048676732-d!b5c3?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Biologics in Sports Medicine Forum",
    date: "August 10",
    location: "Virtual Webinar",
    type: "Webinar",
    image: "https://images.unsplash.com/photo-1591115765!372-ad4c!6a5?auto=format&fit=crop&q=80&w=800"
  },
];

export default function EventsPage() {
  return (
    <div>
      <section className="bg-primary text-white pt-44 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold font-outfit mb-6">News & <span className="text-secondary">Events</span></h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Stay updated with the latest clinical announcements and surgical workshops.
          </p>
        </div>
      </section>

      {/* Re-use the home news section as a summary start */}
      <NewsEvents />

      <section className="py-24 bg-accent/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary mb-12 font-outfit uppercase tracking-widest">Upcoming <span className="text-secondary">Conferences</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-gray-100">
                <div className="aspect-video relative overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-secondary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    {event.type}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-primary/40 text-xs font-bold uppercase tracking-widest mb-4">
                    <div className="flex items-center gap-1"><Calendar className="w-4 h-4 text-secondary" /> {event.date}</div>
                    <div className="flex items-center gap-1"><MapPin className="w-4 h-4 text-secondary" /> {event.location}</div>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-6 group-hover:text-secondary transition-colors">{event.title}</h3>
                  <button className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                    Register Now <ArrowUpRight className="w-4 h-4 text-secondary" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
