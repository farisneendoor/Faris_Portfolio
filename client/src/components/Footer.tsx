import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-20 border-t border-[#27272a]">
      <div className="container max-w-6xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
  <span className="font-display font-bold text-lg text-[#e4e4e7]">
    faris<span className="text-[#5eead4]">.</span>
  </span>
</div>
            <p className="text-sm text-[#a1a1aa] leading-relaxed">
              Junior DevOps Engineer building reliable, scalable cloud infrastructure. Passionate about automation and Infrastructure as Code.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-[#e4e4e7] uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:farisneendoor@gmail.com"
                className="flex items-center gap-3 text-sm text-[#a1a1aa] hover:text-[#5eead4] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#5eead4]/60" />
                farisneendoor@gmail.com
              </a>
              <a
                href="tel:8943261531"
                className="flex items-center gap-3 text-sm text-[#a1a1aa] hover:text-[#5eead4] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#5eead4]/60" />
                +91 8943261531
              </a>
              <div className="flex items-center gap-3 text-sm text-[#a1a1aa]">
                <MapPin className="w-4 h-4 text-[#5eead4]/60" />
                Thrissur, Kerala, India
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-[#e4e4e7] uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="space-y-3">
              <a
                href="https://www.linkedin.com/in/muhammmedfaris"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[#a1a1aa] hover:text-[#38bdf8] transition-colors group"
              >
                <ExternalLink className="w-4 h-4 text-[#38bdf8]/60 group-hover:text-[#38bdf8]" />
                LinkedIn
              </a>
              <a
                href="https://github.com/farisneendoor"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[#a1a1aa] hover:text-[#e4e4e7] transition-colors group"
              >
                <ExternalLink className="w-4 h-4 text-[#a1a1aa]/60 group-hover:text-[#e4e4e7]" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-[#27272a] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5eead4] animate-pulse" />
            <span className="text-xs text-[#a1a1aa]">Available for opportunities</span>
          </div>
          <p className="text-xs text-[#a1a1aa]/50">
            © 2026 Muhammed Faris N A. Built with React &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
