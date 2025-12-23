import { ASSETS } from "@/lib/content";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback } from "react";

export function ServiceCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  emblaApi?.on("select", onSelect);

  return (
    <div className="relative w-full group">
      <div className="overflow-hidden rounded-lg shadow-2xl" ref={emblaRef}>
        <div className="flex w-full h-full">
          {ASSETS.slideshow.map((src, index) => (
            <div className="flex-[0_0_100%] min-w-0 relative h-[500px]" key={index}>
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-primary/80 hover:bg-primary text-white p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-primary/80 hover:bg-primary text-white p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {ASSETS.slideshow.map((_, index) => (
          <button
            key={index}
            className="w-2 h-2 rounded-full bg-white/50 hover:bg-white transition-all"
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
