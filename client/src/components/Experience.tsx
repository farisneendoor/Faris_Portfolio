import { useRef } from "react";
import { useInView } from "framer-motion";
import { Briefcase, Calendar, Building } from "lucide-react";

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

const achievements = [
  "Deployed and managed 15+ cloud environments across AWS and Azure — VM provisioning, storage buckets/blobs, networking (VPC, VNet, security groups)",
  "Provisioned infrastructure using Terraform IaC — reduced manual setup time for repeated deployments on AWS and Azure",
  "Configured Linux and Windows servers for production web hosting — DNS setup, SSL certificates, service validation, performance checks",
  "Administered Microsoft 365 tenant (20+ users) — account creation, mailbox config, domain setup, conditional access, Intune device management",
  "Deployed Windows Server with Active Directory — implemented GPOs for role-based access control",
  "Set up containerised workloads using Docker — configured Kubernetes cluster on Ubuntu VMs for orchestration practice",
  "Wrote Bash automation scripts on EC2 (Ubuntu) — AWS resource usage tracking, GitHub repo collaborator audit via REST API, scheduled with cron",
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 sm:py-36">
      <div className="container max-w-6xl">
        <FadeIn>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-[2px] bg-[#5eead4]" />
            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-[#e4e4e7]">
              Experience
            </h2>
          </div>
        </FadeIn>

        {/* Job Card - substantial treatment */}
        <FadeIn delay={100}>
          <div className="mt-10 glass-card rounded-2xl overflow-hidden">
            {/* Top accent */}
            <div className="h-1 bg-gradient-to-r from-[#5eead4] to-[#38bdf8]" />
            
            <div className="p-8 sm:p-10">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <Briefcase className="w-5 h-5 text-[#5eead4]" />
                    <h3 className="text-xl font-display font-semibold text-[#e4e4e7]">
                      Cloud Support Associate Intern
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-[#a1a1aa] text-sm">
                    <Building className="w-4 h-4" />
                    <span>Febno Technologies, Kozhikode</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#a1a1aa] bg-[#16161a] px-3 py-1.5 rounded-lg border border-[#27272a]">
                  <Calendar className="w-4 h-4 text-[#5eead4]" />
                  <span>Nov 2025 – Mar 2026</span>
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-5">
                {achievements.map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#5eead4] mt-2.5 shrink-0" />
                    <p className="text-[#a1a1aa] text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
