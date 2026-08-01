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

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container max-w-6xl mx-auto px-4">
        <FadeIn>
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-[2px] bg-[#5eead4]" />
            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-[#e4e4e7]">
              About Me
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Bio - 3 columns */}
            <div className="lg:col-span-3 space-y-5">
              <p className="text-base sm:text-lg text-[#d4d4d8] leading-relaxed">
                A Cloud &amp; DevOps engineer passionate about building reliable, scalable infrastructure.
              </p>
              <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed">
                I thrive on automating repetitive tasks, deploying applications across cloud platforms, and ensuring systems run smoothly 24/7. During my internship at Febno Technologies, I gained hands-on experience deploying cloud environments across AWS and Azure — managing VMs, networking, storage, and CI/CD pipelines.
              </p>
              <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed">
                I also set up Kubernetes clusters, Docker containers, and Terraform-based infrastructure. I believe in Infrastructure as Code and the power of automation. My goal is to help organizations reduce downtime, optimize costs, and deploy faster through modern DevOps practices.
              </p>
            </div>

            {/* Stats - 2 columns */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: "15+", label: "Cloud Environments Deployed" },
                  { value: "2", label: "Cloud Platforms" },
                  { value: "7", label: "Key Achievements" },
                  { value: "6", label: "Core Technologies" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-5 text-center bg-[#16161a] border border-[#27272a] hover:border-[#5eead4]/20 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="text-3xl font-bold text-[#5eead4] mb-1 font-display">
                      {stat.value}
                    </div>
                    <div className="text-xs text-[#71717a] leading-tight">{stat.label}</div>
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
