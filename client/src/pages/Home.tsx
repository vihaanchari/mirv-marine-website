import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { ServiceCarousel } from "@/components/home/ServiceCarousel";
import { CONTENT, ASSETS } from "@/lib/content";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Award, Anchor, Users, ChevronDown, ChevronUp, Clock, Info } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  const [showAllCourses, setShowAllCourses] = useState(false);

  const courses = [
    { id: "01", name: "OIL LCHS – IMO Model 2.06", duration: "05 Days", target: "Deck Officers – Oil Tankers", requirement: "SIRE 2.0 – 3.3.3", remarks: "Conducted Online with Cloud SIM" },
    { id: "02", name: "OIL LCHS - Refresher", duration: "03 Days", target: "Deck Officers – Oil Tankers", requirement: "SIRE 2.0 – 3.3.3", remarks: "Conducted Online with Cloud SIM" },
    { id: "03", name: "CHEM LCHS – IMO Model 1.37", duration: "05 Days", target: "Deck Officers – Chem Tankers", requirement: "SIRE 2.0 – 3.3.3", remarks: "Conducted Online with Cloud SIM" },
    { id: "04", name: "CHEM LCHS - Refresher", duration: "03 Days", target: "Deck Officers – Chem Tankers", requirement: "SIRE 2.0 – 3.3.3", remarks: "Conducted Online with Cloud SIM" },
    { id: "05", name: "LPG LCHS - IMO Model 1.35", duration: "05 Days", target: "Deck Officers – LPG Tankers", requirement: "SIRE 2.0 – 3.3.3", remarks: "Conducted Online with Cloud SIM" },
    { id: "06", name: "LPG LCHS - Refresher", duration: "03 Days", target: "Deck Officers – LPG Tankers", requirement: "SIRE 2.0 – 3.3.3", remarks: "Conducted Online with Cloud SIM" },
    { id: "07", name: "LNG LCHS - IMO Model 1.36", duration: "05 Days", target: "Deck Officers – LNG Tankers", requirement: "SIRE 2.0 – 3.3.3", remarks: "Conducted Online with Cloud SIM" },
    { id: "08", name: "LNG LCHS - Refresher", duration: "03 Days", target: "Deck Officers – LNG Tankers", requirement: "SIRE 2.0 – 3.3.3", remarks: "Conducted Online with Cloud SIM" },
    { id: "09", name: "BRM – IMO Model 1.22", duration: "05 Days", target: "Deck Officers", requirement: "SIRE 2.0 – 3.3.1", remarks: "Conducted Online with Cloud SIM" },
    { id: "10", name: "ERM Simulator – IMO Model 2.07", duration: "05 Days", target: "Engineer Officers", requirement: "SIRE 2.0 – 3.3.4", remarks: "Conducted Online with Cloud SIM" },
    { id: "11", name: "SIRE 2.0 – Finer Points", duration: "02 Days", target: "All Shore & Sailing Staff on Tankers", requirement: "Industry Standard", remarks: "Online & Onsite with Demo Sire 2.0 inspection" },
    { id: "12", name: "RISQ – Revised Guidelines", duration: "02 Days", target: "All Shore & Sailing Staff on Bulk Carriers", requirement: "Rightship Requirements", remarks: "Online & Onsite with Demo inspection" },
    { id: "13", name: "M/E - MAN B&W ME LGIM-W", duration: "04 days", target: "All Engineers", requirement: "Methanol Powered Vessels", remarks: "Conducted Online/Offline" },
    { id: "14", name: "MAN B&W ME B/C Engines", duration: "05 Days", target: "Engineer Officers", requirement: "ME Engines Proficiency", remarks: "Conducted Online with/without Cloud SIM" },
    { id: "15", name: "MAN B&W ME GI (LNG)", duration: "4 Days", target: "Engineer Officers", requirement: "Alternate Fuel Types", remarks: "Conducted Online with/without Cloud SIM" },
    { id: "16", name: "MAN B&W ME Engines Refresher", duration: "02 Days", target: "Engineer Officers", requirement: "Latest Technologies", remarks: "Conducted Online with/without Cloud SIM" },
    { id: "17", name: "Nitrogen Generator Training", duration: "02 days", target: "All Engineers & Senior Deck Officers", requirement: "Dual Fuel & Chemical Tankers", remarks: "Conducted Online/Offline" },
    { id: "18", name: "Wartsila X DF Engine", duration: "04 Days", target: "Engineer Officers", requirement: "X DF Engines Proficiency", remarks: "Conducted Online with/without Cloud SIM" },
    { id: "19", name: "IHM Expert", duration: "03 Days", target: "All Officers", requirement: "Hongkong Convention 2020", remarks: "Online + training on board" },
    { id: "20", name: "VDR Analyst", duration: "02 Days", target: "Senior Deck Officers", requirement: "SIRE 2.0 External Requirement", remarks: "Online / Onsite" },
    { id: "21", name: "HAZMAT", duration: "01 Day", target: "All Officers & Crew", requirement: "IMDG Requirement", remarks: "Online / Onsite" },
    { id: "22", name: "MARPOL & SOLAS REQUIREMENTS", duration: "02 Days", target: "All Officers", requirement: "Statutory Compliance", remarks: "Online / Onsite" },
    { id: "23", name: "ISM CODE INTERNAL AUDITOR", duration: "03 Days", target: "All Officers", requirement: "Quality Management", remarks: "Industry Standard" },
    { id: "24", name: "ISM CODE LEAD AUDITOR", duration: "03 Days", target: "All Officers", requirement: "Advanced Quality Mgmt", remarks: "Industry Standard" },
    { id: "25", name: "ISO 9001:2015 QMS", duration: "03 Days", target: "All Officers", requirement: "Internal Auditor", remarks: "Quality Systems" },
    { id: "26", name: "ISO 14001:2015 EMS", duration: "03 Days", target: "All Officers & Crew", requirement: "Environmental Mgmt", remarks: "Sustainability" },
    { id: "27", name: "ISO 45001:2018 OH&S", duration: "01 Day", target: "All Officers & Crew", requirement: "Health & Safety", remarks: "Workplace Safety" },
    { id: "28", name: "INTEGRATED MANAGEMENT SYSTEMS", duration: "03 Days", target: "All Officers & Crew", requirement: "IMS Internal Auditor", remarks: "Comprehensive Systems" },
    { id: "29", name: "ISPS CODE INTERNAL AUDITOR", duration: "02 Days", target: "All Officers & Crew", requirement: "Security Management", remarks: "Vessel Security" },
    { id: "30", name: "MARITIME LABOUR CONVENTION", duration: "02 Days", target: "All Officers & Crew", requirement: "MLC 2006 Inspector", remarks: "Labour Standards" },
  ];

  const visibleCourses = showAllCourses ? courses : courses.slice(0, 9);
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
                          <span>
                            {detail}
                            {detail.includes("Shipfinite Job Portal Link-") && (
                              <a
                                href="https://jobs.shipfinite.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-1 text-secondary hover:underline font-bold inline-flex items-center gap-1"
                              >
                                Click Here
                              </a>
                            )}
                          </span>
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

            {/* Upcoming Courses Section */}
            <div id="upcoming-courses" className="mt-20 pt-16 border-t border-border">
              <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
                <h2 className="text-sm font-bold tracking-widest text-primary uppercase">
                  Enhance Your Skills
                </h2>
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary">
                  Upcoming Courses
                </h3>
                <div className="w-16 h-1 bg-secondary rounded-full mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleCourses.map((course) => (
                  <Card key={course.id} className="group hover:border-secondary transition-all duration-300 shadow-sm hover:shadow-md bg-white border-primary/10">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-xs font-bold text-secondary uppercase tracking-tighter">Course {course.id}</span>
                        <div className="flex items-center gap-1.5 text-xs font-medium bg-primary/5 text-primary px-2.5 py-1 rounded-full">
                          <Clock className="w-3 h-3" />
                          {course.duration}
                        </div>
                      </div>
                      <h4 className="font-serif font-bold text-lg text-primary mb-4 group-hover:text-secondary transition-colors line-clamp-2 h-14 leading-tight">
                        {course.name}
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2.5 text-xs text-muted-foreground">
                          <Users className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{course.target}</span>
                        </div>
                        <div className="flex items-start gap-2.5 text-xs text-muted-foreground">
                          <Award className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                          <span className="leading-relaxed font-medium text-slate-700">{course.requirement}</span>
                        </div>
                        <div className="flex items-start gap-2.5 text-xs text-muted-foreground pt-2 border-t border-slate-100 italic">
                          <Info className="w-4 h-4 text-primary/40 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{course.remarks}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <Button 
                  size="lg"
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-white px-8 h-14 font-bold transition-all shadow-sm"
                  onClick={() => setShowAllCourses(!showAllCourses)}
                >
                  {showAllCourses ? (
                    <>Show Less <ChevronUp className="ml-2 w-5 h-5" /></>
                  ) : (
                    <>Explore All 30+ Courses <ChevronDown className="ml-2 w-5 h-5" /></>
                  )}
                </Button>
              </div>
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
                  onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) {
                      const offset = 80;
                      const bodyRect =
                        document.body.getBoundingClientRect().top;
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
                        const ease =
                          percentage < 0.5
                            ? 4 * percentage * percentage * percentage
                            : 1 - Math.pow(-2 * percentage + 2, 3) / 2;

                        window.scrollTo(0, startPosition + distance * ease);
                        if (progress < duration)
                          window.requestAnimationFrame(step);
                      };
                      window.requestAnimationFrame(step);
                    }
                  }}
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
                    index === 4 &&
                      CONTENT.team.length === 5 &&
                      "md:col-span-2 md:mx-auto md:max-w-xl",
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

        {/* Partners Section */}
        <section id="partners" className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-12">
              WE ARE PROUD TO BE ASSOCIATED WITH !!
            </h3>
            <div className="max-w-5xl mx-auto">
              <img
                src="/images/companies.png"
                alt="Associated Companies"
                className="w-full h-auto object-contain mx-auto"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
