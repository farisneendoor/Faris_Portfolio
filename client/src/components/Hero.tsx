import { useEffect, useState } from "react";
import { ArrowRight, Mail, MapPin } from "lucide-react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/manus-storage/hero-bg-modern_13e9c7ae.png"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f13]/50 via-[#0f0f13]/85 to-[#0f0f13]" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Status badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#5eead4]/20 bg-[#5eead4]/5 mb-10 transition-all duration-600 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <span className="w-2 h-2 rounded-full bg-[#5eead4] animate-pulse" />
            <span className="text-sm text-[#a1a1aa] font-medium">
              Available for opportunities
            </span>
          </div>

          {/* Name - unified with gradient */}
          <h1
            className={`text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <span className="gradient-text">Muhammed Faris </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-lg sm:text-xl text-[#a1a1aa] mb-8 font-light max-w-xl transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            Junior DevOps Engineer &middot; Cloud Infrastructure &middot; Automation
          </p>

          {/* Description */}
          <p
            className={`text-base text-[#a1a1aa]/70 leading-relaxed mb-10 max-w-xl transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            Cloud engineer fresher with hands-on experience deploying virtual machines, managing storage and networking, and automating CI/CD workflows across AWS &amp; Azure.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap gap-4 mb-12 transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "1000ms" }}
          >
            <button
              onClick={() => scrollTo("projects")}
              className="group flex items-center gap-2 px-7 py-3.5 bg-[#5eead4] text-[#0f0f13] font-semibold rounded-lg hover:bg-[#5eead4]/90 transition-all duration-200 hover:shadow-lg hover:shadow-[#5eead4]/10"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo("about")}
              className="px-7 py-3.5 border border-[#27272a] text-[#e4e4e7] rounded-lg hover:border-[#5eead4]/30 hover:bg-[#5eead4]/5 transition-all duration-200"
            >
              Learn More
            </button>
          </div>

          {/* Contact chips */}
          <div
            className={`flex flex-wrap gap-3 transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "1200ms" }}
          >
            <a
              href="mailto:farisneendoor@gmail.com"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#16161a] border border-[#27272a] text-[#a1a1aa] text-sm hover:border-[#38bdf8]/30 hover:text-[#38bdf8] transition-all"
            >
              <Mail className="w-3.5 h-3.5" />
              farisneendoor@gmail.com
            </a>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#16161a] border border-[#27272a] text-[#a1a1aa] text-sm">
              <MapPin className="w-3.5 h-3.5" />
              Thrissur, Kerala, India
            </div>
            <a
              href="tel:8943261531"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#16161a] border border-[#27272a] text-[#a1a1aa] text-sm hover:border-[#5eead4]/30 hover:text-[#5eead4] transition-all"
            >
              +91 8943261531
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-[#27272a] flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-[#5eead4]/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
