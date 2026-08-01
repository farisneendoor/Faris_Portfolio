import { useRef } from "react";
import { useInView } from "framer-motion";
import { GraduationCap, Award, Cloud } from "lucide-react";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <div
      ref={ref}
      className={`transition-all duration-600 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const credentials = [
  {
    type: "certification",
    title: "Skill Diploma in Cloud Computing",
    institution: "Techno Dot Academy, Kozhikode",
    period: "Aug 2025 – Nov 2025",
    icon: Award,
    accent: "#5eead4",
  },
  {
    type: "certification",
    title: "Introduction to Linux (LFS101)",
    institution: "The Linux Foundation",
    period: "Completed",
    icon: Award,
    accent: "#38bdf8",
  },
  {
    type: "degree",
    title: "Bachelor of Computer Application (BCA)",
    institution: "Indira Gandhi National Open University (IGNOU)",
    period: "Aug 2022 – Jun 2025",
    icon: GraduationCap,
    accent: "#38bdf8",
  },
];

const cloudProviders = [
  { name: "Amazon Web Services", shorthand: "AWS", color: "#ff9900" },
  { name: "Microsoft Azure", shorthand: "Azure", color: "#0078d4" },
];

export default function Education() {
  return (
    <section id="education" className="py-28 sm:py-36">
      <div className="container max-w-6xl">
        <FadeIn>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-[2px] bg-[#5eead4]" />
            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-[#e4e4e7]">
              Education & Credentials
            </h2>
          </div>
        </FadeIn>

        {/* Credentials */}
        <div className="grid sm:grid-cols-2 gap-5 mt-12">
          {credentials.map((cred, i) => (
            <FadeIn key={cred.title} delay={i * 100}>
              <div className="glass-card rounded-xl p-6 hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${cred.accent}10` }}>
                  <cred.icon className="w-5 h-5" style={{ color: cred.accent }} />
                </div>
                <h3 className="text-base font-display font-semibold text-[#e4e4e7] mb-1">
                  {cred.title}
                </h3>
                <p className="text-sm text-[#a1a1aa] mb-0.5">{cred.institution}</p>
                <p className="text-xs text-[#a1a1aa]/50">{cred.period}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Cloud Platforms - subdued treatment */}
        <FadeIn delay={200}>
          <div className="mt-16">
            <div className="flex items-center gap-3 mb-6">
              <Cloud className="w-4 h-4 text-[#52525b]" />
              <h3 className="text-base font-display font-medium text-[#a1a1aa]">
                Cloud Platform Experience
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {cloudProviders.map((provider) => (
                <div
                  key={provider.name}
                  className="rounded-xl p-5 text-center border border-[#27272a] bg-[#16161a]/30"
                >
                  <div
                    className="text-sm font-bold mb-2"
                    style={{ color: provider.color }}
                  >
                    {provider.shorthand}
                  </div>
                  <p className="text-xs text-[#a1a1aa]">{provider.name}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
