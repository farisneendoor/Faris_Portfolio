import { useRef } from "react";
import { useInView } from "framer-motion";

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

const skillCategories = [
  {
    title: "Cloud Platforms",
    description: "Hands-on experience across all major providers",
    skills: ["Amazon Web Services", "Microsoft Azure"],
  },
  {
    title: "DevOps & IaC",
    description: "Infrastructure automation and orchestration",
    skills: ["Terraform", "Docker", "Kubernetes", "Git & GitHub"],
  },
  {
    title: "OS & Scripting",
    description: "System administration and automation",
    skills: ["Ubuntu Linux", "AlmaLinux", "Windows Server", "Bash Scripting", "Cron Scheduling"],
  },
  {
    title: "Identity & Productivity",
    description: "Enterprise identity and device management",
    skills: ["Microsoft 365", "Google Workspace", "Active Directory", "Intune MDM"],
  },
  {
    title: "Web & Database",
    description: "Server management and data infrastructure",
    skills: ["Apache/Nginx", "MySQL", "AWS RDS", "cPanel/WHM"],
  },
  {
    title: "Soft Skills",
    description: "Professional competencies",
    skills: ["Problem Solving", "Adaptability", "Goal Orientation", "Time Management", "Teamwork"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 sm:py-36 bg-[#16161a]/20">
      <div className="container max-w-6xl">
        <FadeIn>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-[2px] bg-[#5eead4]" />
            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-[#e4e4e7]">
              Skills & Technologies
            </h2>
          </div>
          <p className="text-[#a1a1aa] mb-14 max-w-xl">
            A comprehensive toolkit spanning cloud infrastructure, automation, and system administration.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((cat, i) => (
            <FadeIn key={cat.title} delay={i * 60}>
              <div className="glass-card rounded-xl p-6 hover:-translate-y-1 transition-all duration-300 h-full group">
                <h3 className="text-base font-display font-semibold text-[#e4e4e7] mb-2">
                  {cat.title}
                </h3>
                <p className="text-xs text-[#a1a1aa]/60 mb-4">{cat.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs rounded-md bg-[#1a1a1e] text-[#a1a1aa] border border-[#27272a] group-hover:border-[#5eead4]/15 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
