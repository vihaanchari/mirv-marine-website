import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { ServiceCarousel } from "@/components/home/ServiceCarousel";
import { CONTENT, ASSETS } from "@/lib/content";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Award, Anchor } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />

      <main className="flex-grow">
        <HeroCarousel />

        {/* About Section */}
        <section id="about" className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>

          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 order-2 lg:order-1">
                <div className="space-y-4">
                  <h2 className="text-sm font-bold tracking-widest text-secondary uppercase">
                    Our Story
                  </h2>
                  <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary">
                    {CONTENT.about.title}
                  </h3>
                  <div className="w-24 h-1 bg-secondary rounded-full"></div>
                </div>

                <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                  {CONTENT.about.story.slice(0, 3).map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary">
                    <Award className="text-secondary w-8 h-8 mb-3" />
                    <h4 className="font-serif font-bold text-lg mb-2">
                      Our Mission
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {CONTENT.about.mission}
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-secondary">
                    <Anchor className="text-primary w-8 h-8 mb-3" />
                    <h4 className="font-serif font-bold text-lg mb-2">
                      Our Vision
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {CONTENT.about.vision}
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative order-1 lg:order-2 group">
                <div className="absolute -inset-4 border-2 border-secondary/30 rounded-lg translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
                <img
                  src={ASSETS.aboutImage}
                  alt="MiRV MARiNE Branding"
                  className="rounded-lg shadow-2xl relative z-10 w-full object-cover aspect-[4/3] group-hover:shadow-2xl transition-all duration-700"
                />
                <div className="absolute -bottom-10 -left-10 bg-white p-6 shadow-xl rounded-lg z-20 max-w-xs border-t-4 border-primary hidden md:block">
                  <p className="font-serif italic text-primary text-lg">
                    "Providing Celestial Solutions"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="py-20 bg-slate-50 border-y border-border"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase">
                What We Do
              </h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary">
                Services & Products
              </h3>
              <p className="text-muted-foreground text-lg">
                Comprehensive maritime solutions tailored for the modern
                shipping industry.
              </p>
              <div className="w-16 h-1 bg-secondary rounded-full mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {CONTENT.services.map((service, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-none shadow-md overflow-hidden bg-white"
                >
                  <div className="h-2 w-full bg-primary group-hover:bg-secondary transition-colors duration-300"></div>
                  <CardContent className="p-6 pt-8 space-y-4">
                    <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-4">
                      <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                    </div>

                    <h4 className="font-serif font-bold text-xl text-primary group-hover:text-secondary transition-colors">
                      {service.title}
                    </h4>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    <div className="pt-4 space-y-2">
                      {service.details.map((detail, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-xs font-medium text-slate-600"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-secondary mt-0.5 shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Services Gallery Carousel */}
            <div className="mt-16 pt-12 border-t border-border">
              <h4 className="text-2xl font-serif font-bold text-center text-primary mb-8">
                Our Work in Action
              </h4>
              <ServiceCarousel />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="py-20 bg-background text-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
                Ready to elevate your maritime operations?
              </h2>
              <p className="text-xl text-muted-foreground">
                Join hundreds of satisfied clients who trust MiRV MARiNE for
                their training and inspection needs.
              </p>
              <div className="flex justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-bold px-10 py-6 text-lg shadow-lg"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Contact Us Today
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20 relative bg-primary text-white">
          <div className="absolute inset-0 bg-[url('/attached_assets/Screenshot_2025-12-18_140054_1766130651823.png')] bg-cover bg-fixed opacity-10 mix-blend-overlay"></div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-sm font-bold tracking-widest text-secondary uppercase">
                Leadership
              </h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-white">
                Our Team
              </h3>
              <div className="w-16 h-1 bg-secondary rounded-full mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {CONTENT.team.map((member, index) => (
                <div
                  key={index}
                  className={cn(
                    "bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg hover:bg-white/10 transition-colors",
                    index === 4 && CONTENT.team.length === 5 && "md:col-span-2 md:mx-auto md:max-w-xl"
                  )}
                >
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-1 space-y-3">
                      <div>
                        <h4 className="text-2xl font-serif font-bold text-secondary">
                          {member.name}
                        </h4>
                        <p className="text-sm uppercase tracking-wider text-white/70 font-medium">
                          {member.role}
                        </p>
                      </div>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
