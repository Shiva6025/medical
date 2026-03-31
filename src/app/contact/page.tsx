import { Mail, Phone, MapPin, Search, Send, Clock, ArrowUpRight } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-20 bg-white">
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold font-outfit mb-6">Contact <span className="text-secondary">Us</span></h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Get in touch with our clinical and technical teams for product inquiries or
            support.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact Information */}
            <div className="lg:w-1/2 space-y-12">
              <h2 className="text-4xl font-bold text-primary font-outfit">Get in <span className="text-secondary italic">touch</span></h2>
              <p className="text-primary/60 text-lg">
                Whether you're a surgeon looking for technical specifications or
                a distributor interested in partnership, our team is ready to
                provide the assistance you need.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6 p-8 rounded-3xl bg-accent/30 border border-gray-100 group hover:shadow-xl transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg mb-1">Email Us</h4>
                    <p className="text-primary/60">info@viraatmedical.com</p>
                    <p className="text-primary/60">support@viraatmedical.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 p-8 rounded-3xl bg-accent/30 border border-gray-100 group hover:shadow-xl transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg mb-1">Call Us</h4>
                    <p className="text-primary/60">+91 11 2345 6789</p>
                    <p className="text-primary/60">+91 11 9876 5432</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 p-8 rounded-3xl bg-accent/30 border border-gray-100 group hover:shadow-xl transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg mb-1">Office Hours</h4>
                    <p className="text-primary/60">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-primary/60">Saturday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-1/2">
              <div className="p-10 md:p-12 rounded-[40px] bg-white border border-gray-100 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -mr-16 -mt-16" />

                <h3 className="text-2xl font-bold text-primary mb-8 font-outfit">Send a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-primary/40 ml-1">Full Name</label>
                      <input type="text" className="w-full px-6 py-4 rounded-2xl bg-accent/40 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all font-semibold" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-primary/40 ml-1">Email Address</label>
                      <input type="email" className="w-full px-6 py-4 rounded-2xl bg-accent/40 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all font-semibold" placeholder="john@example.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-primary/40 ml-1">Subject</label>
                    <select className="w-full px-6 py-4 rounded-2xl bg-accent/40 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all font-semibold appearance-none">
                      <option>Product Inquiry</option>
                      <option>Technical Support</option>
                      <option>Distribution Inquiry</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-primary/40 ml-1">Message</label>
                    <textarea rows={5} className="w-full px-6 py-4 rounded-2xl bg-accent/40 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all font-semibold" placeholder="How can we help you?"></textarea>
                  </div>

                  <button className="btn-gold w-full flex items-center justify-center gap-3 py-5 text-base shadow-xl shadow-secondary/20">
                    Send Message
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Redirect */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold font-outfit mb-4 italic text-secondary">Looking for our physical locations?</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">Explore our office locations across India on our official About page.</p>
          <a href="/about" className="inline-flex items-center gap-2 font-bold uppercase tracking-widest hover:text-secondary hover:gap-4 transition-all group">
            Go to Office Map <ArrowUpRight className="w-5 h-5 text-secondary" />
          </a>
        </div>
      </section>
    </div>
  );
}
