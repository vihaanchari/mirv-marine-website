import { ASSETS } from "@/lib/content";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

  return (
    <div id="hero" className="relative w-full h-[600px] overflow-hidden bg-slate-900">
      {/* Carousel */}
      <div className="w-full h-full" ref={emblaRef}>
        <div className="flex w-full h-full">
          {ASSETS.slideshow.map((src, index) => (
            <div className="flex-[0_0_100%] min-w-0 relative h-full" key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            </div>
          ))}
        </div>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in zoom-in duration-1000">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-white leading-tight drop-shadow-lg">
              MiRV MARiNE LLP <span className="text-white">[India]</span><br/>
              MiRV MARiNE Services LLC <span className="text-white">[UAE]</span>
            </h1>
            <h2 className="text-lg md:text-xl font-bold tracking-wide text-secondary drop-shadow-lg">
              Catering to Main Fleet and Oil & Gas Industry
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Excellence in Maritime Training, Surveys, and Consultancy Services worldwide.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-secondary text-primary hover:bg-white hover:text-primary font-bold px-8 py-6 text-lg rounded-sm shadow-xl transition-all"
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) {
                    const offset = 80;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = element.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;
                    
                    const startPosition = window.pageYOffset;
                    const distance = offsetPosition - startPosition;
                    const duration = 1500; // 1.5 seconds for a very gentle glide
                    let start: number | null = null;

                    const step = (timestamp: number) => {
                      if (!start) start = timestamp;
                      const progress = timestamp - start;
                      const percentage = Math.min(progress / duration, 1);
                      
                      // Easing function for extra smoothness (easeInOutCubic)
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
                Explore Services
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-white/40 hover:bg-white/10 hover:border-white px-8 py-6 text-lg rounded-sm backdrop-blur-sm"
                onClick={() => {
                  const element = document.getElementById('about');
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
                }}
              >
                About Us <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Gold Line */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-primary" />
    </div>
  );
}
