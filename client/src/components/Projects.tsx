import { useState, useRef } from "react";
import { useInView } from "framer-motion";
import { ChevronDown, Layers, Code, Server, Cloud, Gamepad2 } from "lucide-react";

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

const projects = [
  {
    id: "docker",
    title: "Docker Containerization",
    description: "Create and manage Docker containers on Linux for web application deployment",
    icon: Layers,
    tech: ["Docker", "Docker Compose", "Linux", "Nginx", "Dockerfile"],
    highlights: [
      "Installed and configured Docker on Ubuntu Linux",
      "Pulled and ran nginx and ubuntu containers from Docker Hub",
      "Created custom Dockerfile for web server with proper port exposure",
      "Implemented Docker Compose for multi-container app (web server + database)",
    ],
  },
  {
    id: "terraform",
    title: "Terraform IaC Deployment",
    description: "Deploy EC2 instance using Terraform Infrastructure as Code",
    icon: Code,
    tech: ["Terraform", "AWS", "EC2", "IAM", "IaC"],
    highlights: [
      "Configured AWS provider with IAM credentials and region settings",
      "Created modular Terraform files: main.tf, variables.tf, outputs.tf",
      "Defined EC2 instance with AMI, instance type (t2.micro), and security tags",
      "Executed terraform init, plan, and apply workflow",
    ],
  },
  {
    id: "kubernetes",
    title: "Kubernetes Cluster Setup",
    description: "Set up Kubernetes cluster with application deployment and scaling",
    icon: Server,
    tech: ["Kubernetes", "kubeadm", "Docker", "Flannel", "Ubuntu"],
    highlights: [
      "Installed kubeadm, kubelet, and kubectl components",
      "Initialized Kubernetes master node with kubeadm init",
      "Applied Flannel network plugin for pod networking",
      "Deployed Nginx app, scaled, and performed rolling updates",
    ],
  },
  {
    id: "aws-ha",
    title: "AWS High Availability App",
    description: "HA web application with Auto Scaling and Load Balancer across AZs",
    icon: Cloud,
    tech: ["AWS EC2", "ELB", "Auto Scaling", "RDS", "CloudWatch"],
    highlights: [
      "Planned architecture with 2 EC2 instances across different AZs behind ELB",
      "Configured RDS database (MySQL/PostgreSQL)",
      "Set up Auto Scaling Group with CPU-based scaling policies",
      "Implemented CloudWatch monitoring for health and performance",
    ],
  },
  {
    id: "bash-typing",
    title: "Bash Typing Game",
    description: "A terminal-based typing game with game modes, performance metrics, and local score tracking",
    icon: Gamepad2,
    tech: ["Bash", "Linux", "Shell Scripting", "Score Tracking"],
    highlights: [
      "Built a Bash-based typing game with multiple game modes (words and sentences)",
      "Evaluates typing performance — calculates typing speed (WPM), accuracy percentage, and overall score",
      "Stores scores in a local file for persistent results and future reference",
      "Displays randomly selected words or sentences for the user to type within time limits",
    ],
  },
];

export default function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="projects" className="py-28 sm:py-36 bg-[#16161a]/20">
      <div className="container max-w-6xl">
        <FadeIn>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-[2px] bg-[#5eead4]" />
            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-[#e4e4e7]">
              Projects
            </h2>
          </div>
          <p className="text-[#a1a1aa] mb-14 max-w-xl">
            Hands-on infrastructure projects demonstrating cloud deployment, automation, and orchestration skills.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <FadeIn key={project.id} delay={i * 80}>
              <div
                className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
              >
                {/* Header */}
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#1a1a1e] border border-[#27272a] flex items-center justify-center">
                        <project.icon className="w-5 h-5 text-[#5eead4]" />
                      </div>
                      <h3 className="text-base font-display font-semibold text-[#e4e4e7]">
                        {project.title}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#52525b] transition-transform duration-300 ${
                        expandedId === project.id ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  <p className="text-sm text-[#a1a1aa]/70 mt-3 leading-relaxed">{project.description}</p>
                </div>

                {/* Tech tags */}
                <div className="px-6 pb-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs rounded-md bg-[#1a1a1e] text-[#a1a1aa] border border-[#27272a]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Expanded highlights */}
                <div
                  className={`overflow-hidden transition-all duration-400 ${
                    expandedId === project.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 border-t border-[#27272a] pt-4">
                    <div className="space-y-3">
                      {project.highlights.map((h, hi) => (
                        <div key={hi} className="flex gap-2.5 items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#5eead4] mt-2 shrink-0" />
                          <span className="text-sm text-[#a1a1aa]/80 leading-relaxed">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
