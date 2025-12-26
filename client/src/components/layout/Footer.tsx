import { CONTENT } from "@/lib/content";
import { MapPin, Mail, Phone, Facebook, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t-4 border-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-secondary">
              MiRV MARiNE
            </h3>
            <p className="text-white/80 leading-relaxed max-w-xs">
              {CONTENT.tagline}. Delivering competent and proficient seafarers
              who shall excel in the shipping industry.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="bg-white/10 p-2 rounded hover:bg-secondary hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded hover:bg-secondary hover:text-primary transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded hover:bg-secondary hover:text-primary transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-bold text-secondary">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Home", id: "hero" },
                { name: "About Us", id: "about" },
                { name: "Our Services", id: "services" },
                { name: "Training Academy", id: "services" },
                { name: "Contact", id: "cta" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={`#${item.id}`}
                    className="text-white/80 hover:text-secondary hover:pl-1 transition-all flex items-center gap-2"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(item.id);
                      if (element) {
                        const offset = 80;
                        const bodyRect = document.body.getBoundingClientRect().top;
                        const elementRect = element.getBoundingClientRect().top;
                        const elementPosition = elementRect - bodyRect;
                        const offsetPosition = elementPosition - offset;
                        
                        const startPosition = window.pageYOffset;
                        const distance = offsetPosition - startPosition;
                        const duration = 2000;
                        let start: number | null = null;

                        const step = (timestamp: number) => {
                          if (!start) start = timestamp;
                          const progress = timestamp - start;
                          const percentage = Math.min(progress / duration, 1);
                          const ease = percentage < 0.5 
                            ? 4 * percentage * percentage * percentage 
                            : 1 - Math.pow(-2 * percentage + 2, 3) / 2;
                          
                          window.scrollTo(0, startPosition + distance * ease);
                          if (progress < duration) window.requestAnimationFrame(step);
                        };
                        window.requestAnimationFrame(step);
                      }
                    }}
                  >
                    <span className="h-px w-3 bg-secondary/50"></span> {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4" id="contact">
            <h4 className="text-lg font-serif font-bold text-secondary">
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-white/80">
                <MapPin className="shrink-0 text-secondary mt-1" size={18} />
                <div className="flex flex-col">
                  {CONTENT.contact.locations.map((loc) => (
                    <span key={loc}>{loc}</span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Mail className="shrink-0 text-secondary" size={18} />
                <a
                  href={`mailto:${CONTENT.contact.email}`}
                  className="hover:text-secondary transition-colors"
                >
                  {CONTENT.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Phone className="shrink-0 text-secondary" size={18} />
                <a
                  href={`tel:${CONTENT.contact.phone}`}
                  className="hover:text-secondary transition-colors"
                >
                  {CONTENT.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
          <p>© {new Date().getFullYear()} MiRV MARiNE. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
