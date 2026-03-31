import Link from "next/link";
import Image from "next/image";
import { Globe, Camera, MessageCircle, Share2, Mail, Phone, MapPin } from "lucide-react";

const SocialLinks = [
  { icon: <Globe className="w-5 h-5" />, href: "#" },
  { icon: <Camera className="w-5 h-5" />, href: "#" },
  { icon: <MessageCircle className="w-5 h-5" />, href: "#" },
  { icon: <Share2 className="w-5 h-5" />, href: "#" },
];

const FooterSections = [
  {
    title: "Quick Links",
    links: [
      { name: "Products", href: "/products" },
      { name: "Innovations", href: "/innovations" },
      { name: "Education", href: "/education" },
      { name: "News & Events", href: "/events" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Contact Us", href: "/contact" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Careers", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 divide-y divide-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-12 h-12 bg-white rounded-lg p-1">
                <Image src="/logo.png" alt="VIRAAT" fill className="object-contain p-1" />
              </div>
              <span className="text-2xl font-bold tracking-tight">VIRAAT</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              VIRAAT Medical is a leading provider of innovative surgical solutions, 
              focusing on the next generation of medical technology to improve patient outcomes.
            </p>
            <div className="flex gap-4">
              {SocialLinks.map((social, i) => (
                <Link key={i} href={social.href} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all">
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {FooterSections.map((section) => (
            <div key={section.title} className="flex flex-col gap-6">
              <h4 className="font-bold text-lg text-secondary uppercase tracking-widest">{section.title}</h4>
              <ul className="flex flex-col gap-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-white/60 hover:text-secondary transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-lg text-secondary uppercase tracking-widest">Connect</h4>
            <div className="flex flex-col gap-4 text-sm text-white/60">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary" />
                <span>info@viraatmedical.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span>+91 11 2345 6789</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-secondary" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs">
          <p>© {new Date().getFullYear()} VIRAAT Medical. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-secondary transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-secondary transition-colors">Terms</Link>
            <Link href="#" className="hover:text-secondary transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
