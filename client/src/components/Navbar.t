import { useState, useEffect } from "react";

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
];

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f0f13]/80 backdrop-blur-xl border-b border-[#27272a]"
          : "bg-transparent"
      }`}
    >
      <div className="container max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-2"
          >
            <button
  onClick={() => scrollTo("hero")}
  className="flex items-center gap-2"
>
  <span className="font-display font-bold text-lg text-[#e4e4e7] tracking-tight">
    faris<span className="text-[#5eead4]">.</span>
  </span>
</button>
            <span className="font-display font-bold text-lg text-[#e4e4e7] tracking-tight">
              faris<span className="text-[#5eead4]">.</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeSection === item.id
                    ? "text-[#5eead4]"
                    : "text-[#a1a1aa] hover:text-[#e4e4e7]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-[#27272a] text-[#a1a1aa] hover:text-[#5eead4] transition-colors"
          >
            {mobileOpen ? "✕" : "≡"}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0f0f13]/95 backdrop-blur-xl border-b border-[#27272a]">
          <div className="container py-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-[#5eead4] bg-[#5eead4]/5"
                    : "text-[#a1a1aa] hover:text-[#e4e4e7]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
