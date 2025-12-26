import { Link, useLocation } from "wouter";
import { ASSETS, CONTENT } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Team", href: "/#team" },
    { name: "Contact", href: "/#contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const smoothScrollTo = (id: string) => {
    const targetId = id.startsWith("/#") ? id.substring(2) : id.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      
      const startPosition = window.pageYOffset;
      const distance = offsetPosition - startPosition;
      const duration = 1500;
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
  };

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    smoothScrollTo(id);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-secondary/20 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="/" 
            className="flex items-center gap-3 group"
            onClick={() => window.location.href = '/'}
          >
            <img 
              src={ASSETS.logo} 
              alt={CONTENT.companyName} 
              className="h-16 w-auto object-contain transition-transform group-hover:scale-105" 
            />
            <div className="hidden md:flex flex-col">
              <span className="font-serif font-bold text-xl tracking-wide text-primary leading-none">MiRV MARiNE</span>
              <span className="text-[10px] text-secondary font-medium tracking-widest leading-tight">PROVIDING CELESTIAL SOLUTIONS</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium uppercase tracking-wider hover:text-secondary transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-secondary after:transition-all hover:after:w-full",
                  location === link.href ? "text-primary" : "text-foreground"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo(link.href);
                }}
              >
                {link.name}
              </a>
            ))}
            <Button 
              className="bg-primary hover:bg-primary/90 text-white font-medium rounded-none px-6 shadow-md border-b-4 border-primary/50 hover:border-primary active:border-0 active:translate-y-1 transition-all"
              onClick={() => {
                const element = document.getElementById('cta');
                if (element) {
                  const offset = 80;
                  const bodyRect = document.body.getBoundingClientRect().top;
                  const elementRect = element.getBoundingClientRect().top;
                  const elementPosition = elementRect - bodyRect;
                  const offsetPosition = elementPosition - offset;
                  
                  const startPosition = window.pageYOffset;
                  const distance = offsetPosition - startPosition;
                  const duration = 2000; // Slower for longer distance
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
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-primary p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-border shadow-xl animate-in slide-in-from-top-5">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-serif font-medium text-foreground hover:text-primary border-b border-dashed border-muted pb-2"
                onClick={(e) => {
                  if (link.href.startsWith("/#")) {
                    e.preventDefault();
                    scrollToSection(link.href);
                  } else {
                    setIsOpen(false);
                  }
                }}
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full bg-primary text-white mt-4">
              Get in Touch
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
