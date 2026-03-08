import { useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Users,
  ArrowRight,
  ChevronRight,
  BookOpen,
  Award,
  Briefcase,
  Star,
  Clock,
  CheckCircle,
  Target,
  Sparkles,
  Building2,
  UserCheck,
} from "lucide-react";

function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 30 : 0,
      x: direction === "left" ? -30 : direction === "right" ? 30 : 0,
    },
    visible: { opacity: 1, y: 0, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const curriculumModules = [
  {
    num: "01",
    title: "AI Foundations & LLM Architecture",
    duration: "2 weeks",
    description: "Deep understanding of how modern AI systems work — from transformer architecture to enterprise deployment patterns.",
    topics: ["Transformer models & attention mechanisms", "LLM capabilities and limitations", "Prompt engineering mastery", "AI safety fundamentals"],
    color: "text-teal-light",
    border: "border-teal-DEFAULT/25",
    numColor: "text-teal-DEFAULT/30",
  },
  {
    num: "02",
    title: "Elyintis Platform Deep Dive",
    duration: "3 weeks",
    description: "Hands-on mastery of the Elyintis PaaS — the only platform your clients will ever need you to know.",
    topics: ["Platform architecture & APIs", "Building custom AI workflows", "Data integration & RAG pipelines", "Production deployment"],
    color: "text-cyan-light",
    border: "border-cyan-DEFAULT/25",
    numColor: "text-cyan-DEFAULT/30",
  },
  {
    num: "03",
    title: "Enterprise AI Project Management",
    duration: "2 weeks",
    description: "How to discover, scope, and deliver AI projects in large organizations with competing priorities.",
    topics: ["Use-case discovery frameworks", "Stakeholder management", "AI ROI measurement", "Change management"],
    color: "text-gold-light",
    border: "border-gold/25",
    numColor: "text-gold/30",
  },
  {
    num: "04",
    title: "Real-World Project Delivery",
    duration: "5 weeks",
    description: "Work on live Elyintis client projects under mentor supervision. Graduate with a real portfolio.",
    topics: ["Live client project work", "Mentored code reviews", "Solution architecture", "Portfolio development"],
    color: "text-purple-400",
    border: "border-purple-500/25",
    numColor: "text-purple-500/30",
  },
];

const talentProfiles = [
  {
    title: "AI Champion",
    icon: Star,
    description: "Business-focused AI leaders who bridge the gap between technical teams and stakeholders. They own AI strategy inside your organization.",
    skills: ["AI roadmap strategy", "Use-case prioritization", "Vendor & platform evaluation", "Team enablement & training"],
    color: "text-gold-light",
    bg: "bg-gold/15",
    border: "border-gold/25",
  },
  {
    title: "AI Developer",
    icon: Sparkles,
    description: "Technical builders native to the Elyintis platform. They design, build, and maintain production AI solutions for your business.",
    skills: ["Elyintis platform development", "AI workflow engineering", "RAG & data pipeline builds", "Integration & API development"],
    color: "text-teal-light",
    bg: "bg-teal-DEFAULT/15",
    border: "border-teal-DEFAULT/25",
  },
  {
    title: "AI Solutions Architect",
    icon: Building2,
    description: "Senior experts who design end-to-end AI architectures aligned with your enterprise security, scalability, and compliance requirements.",
    skills: ["Enterprise AI architecture", "Security & compliance design", "Cross-system integration", "Technical due diligence"],
    color: "text-cyan-light",
    bg: "bg-cyan-DEFAULT/15",
    border: "border-cyan-DEFAULT/25",
  },
];

const subcontractingBenefits = [
  {
    icon: UserCheck,
    title: "Platform-native from Day 1",
    description: "Every Elyintis expert knows the platform inside-out. No onboarding ramp. Immediate contribution.",
  },
  {
    icon: Clock,
    title: "Rapid Team Augmentation",
    description: "Match with certified talent in days, not months. Scale up or down as your project demands.",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "Every subcontractor is Elyintis-certified with a verified project portfolio and peer reviews.",
  },
  {
    icon: Briefcase,
    title: "Flexible Engagement Models",
    description: "Short-term sprint support, long-term embedded teams, or project-based delivery — your choice.",
  },
];

const testimonials = [
  {
    quote: "Our Elyintis-certified AI Champions transformed how our leadership team makes decisions. Within 3 months, we had AI-driven insights in every board meeting.",
    name: "Sarah K.",
    role: "Chief Digital Officer",
    company: "Global Insurance Group",
    initial: "S",
    color: "bg-teal-DEFAULT/20 text-teal-light",
  },
  {
    quote: "The quality of subcontractors from the Academy is unlike anything we've experienced. They're not just technically skilled — they understand how enterprises actually work.",
    name: "Marcus T.",
    role: "VP of Engineering",
    company: "FinTech Scale-Up",
    initial: "M",
    color: "bg-gold/20 text-gold-light",
  },
  {
    quote: "I went through the Academy as a fresher. 12 months later, I'm leading an AI transformation project for a Fortune 500 company. The training is genuinely world-class.",
    name: "Priya R.",
    role: "Elyintis AI Developer",
    company: "Academy Graduate",
    initial: "P",
    color: "bg-purple-500/20 text-purple-400",
  },
];

export default function Academy() {
  return (
    <div className="min-h-screen text-white">
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 50% -10%, hsl(270 65% 55% / 0.18), transparent),
              radial-gradient(ellipse 50% 40% at 90% 70%, hsl(180 85% 45% / 0.1), transparent),
              linear-gradient(180deg, hsl(222 55% 7%) 0%, hsl(222 47% 11%) 100%)
            `,
          }}
        />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(270 65% 60%) 1px, transparent 1px),
              linear-gradient(90deg, hsl(270 65% 60%) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm font-medium mb-8"
          >
            <GraduationCap className="w-4 h-4" />
            Elyintis Academy & Talent
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-6 max-w-4xl"
          >
            <span className="text-white">From Fresher to </span>
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, hsl(270,65%,70%), hsl(195,90%,65%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Project-Ready
            </span>
            <br />
            <span className="text-white">AI Experts.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-white/55 max-w-2xl leading-relaxed mb-10"
          >
            Rigorous, real-world training that manufactures high-tier AI talent. Every graduate is battle-tested, platform-certified, and ready to deliver from Day 1.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#hire">
              <Button
                size="lg"
                data-testid="button-academy-hire-talent"
                style={{
                  background: "linear-gradient(135deg, hsl(270,65%,55%), hsl(195,90%,50%))",
                  color: "white",
                  boxShadow: "0 0 30px hsl(270 65% 55% / 0.25)",
                }}
                className="gap-2 font-semibold"
              >
                Hire Certified Talent <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <a href="#curriculum">
              <Button
                size="lg"
                variant="outline"
                data-testid="button-academy-see-curriculum"
                className="border-white/20 text-white gap-2"
                style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(8px)" }}
              >
                See Curriculum <BookOpen className="w-4 h-4" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <section id="curriculum" className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, hsl(222 47% 11%) 0%, hsl(222 35% 13%) 100%)" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <p className="text-purple-400 font-semibold text-sm tracking-widest uppercase mb-4">The Curriculum</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              12 Weeks. Real Projects. Real Results.
            </h2>
            <p className="text-white/45 text-lg max-w-xl mx-auto">
              No theory-only bootcamps. Elyintis Academy graduates leave with a verifiable portfolio of shipped AI solutions.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {curriculumModules.map((module, i) => (
              <FadeIn key={module.num} delay={i * 0.1}>
                <div
                  data-testid={`card-curriculum-module-${i}`}
                  className={`relative p-7 rounded-xl border ${module.border} h-full hover-elevate transition-all duration-300`}
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div className="flex items-start gap-5">
                    <span className={`text-5xl font-black ${module.numColor} flex-shrink-0 leading-none`}>
                      {module.num}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className={`font-bold text-lg ${module.color} leading-tight`}>{module.title}</h3>
                        <span className="px-2 py-0.5 rounded text-xs font-mono bg-white/8 text-white/40 flex-shrink-0">{module.duration}</span>
                      </div>
                      <p className="text-white/45 text-sm leading-relaxed mb-4">{module.description}</p>

                      <ul className="space-y-1.5">
                        {module.topics.map((topic) => (
                          <li key={topic} className="flex items-center gap-2">
                            <CheckCircle className={`w-3.5 h-3.5 ${module.color} flex-shrink-0`} />
                            <span className="text-white/55 text-xs">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 60% 50% at 50% 0%, hsl(32 95% 55% / 0.07), transparent),
              linear-gradient(180deg, hsl(222 35% 13%) 0%, hsl(222 47% 11%) 100%)
            `,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <p className="text-gold-light font-semibold text-sm tracking-widest uppercase mb-4">Certified Talent Profiles</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              The talent types we produce.
            </h2>
            <p className="text-white/45 text-lg max-w-xl mx-auto">
              Every Elyintis-certified expert is specialized, tested, and deployed into real enterprise environments.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {talentProfiles.map((profile, i) => (
              <FadeIn key={profile.title} delay={i * 0.1}>
                <div
                  data-testid={`card-talent-profile-${i}`}
                  className={`p-7 rounded-xl border ${profile.border} h-full flex flex-col hover-elevate transition-all duration-300`}
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                    backdropFilter: "blur(16px)",
                  }}
                >
                  <div className={`w-12 h-12 rounded-md ${profile.bg} flex items-center justify-center mb-5`}>
                    <profile.icon className={`w-6 h-6 ${profile.color}`} />
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${profile.color}`}>{profile.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed mb-5 flex-1">{profile.description}</p>

                  <ul className="space-y-2">
                    {profile.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${profile.bg.replace("bg-", "bg-").replace("/15", "")}`}
                          style={{
                            background: profile.color.includes("teal") ? "hsl(180 85% 45%)" :
                              profile.color.includes("gold") ? "hsl(32 95% 55%)" :
                              "hsl(195 90% 50%)"
                          }}
                        />
                        <span className="text-white/55 text-xs">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="hire" className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 50% 50%, hsl(180 85% 35% / 0.1), transparent),
              linear-gradient(180deg, hsl(222 47% 11%) 0%, hsl(222 35% 13%) 100%)
            `,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-DEFAULT/30 bg-teal-DEFAULT/10 text-teal-light text-xs font-semibold mb-5">
                <Users className="w-3.5 h-3.5" />
                Subcontracting Service
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
                Augment your team with certified{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, hsl(180,85%,65%), hsl(195,90%,65%))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  AI Champions.
                </span>
              </h2>
              <p className="text-white/50 text-lg leading-relaxed mb-8">
                Elyintis-certified subcontractors are not just skilled — they're native to the platform your business runs on. No onboarding overhead. Maximum output from Week 1.
              </p>

              <Link href="/contact">
                <Button
                  size="lg"
                  data-testid="button-hire-cta"
                  style={{
                    background: "linear-gradient(135deg, hsl(180,85%,38%), hsl(195,90%,50%))",
                    color: "white",
                  }}
                  className="gap-2 font-semibold"
                >
                  Request Talent <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </FadeIn>

            <FadeIn direction="right" delay={0.15}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {subcontractingBenefits.map((benefit, i) => (
                  <div
                    key={benefit.title}
                    data-testid={`card-benefit-${i}`}
                    className="p-5 rounded-lg border border-white/10 hover-elevate transition-all duration-300"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    <div className="w-9 h-9 rounded-md bg-teal-DEFAULT/15 flex items-center justify-center mb-3">
                      <benefit.icon className="w-4 h-4 text-teal-light" />
                    </div>
                    <h4 className="text-white font-semibold text-sm mb-1.5">{benefit.title}</h4>
                    <p className="text-white/40 text-xs leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, hsl(222 35% 13%) 0%, hsl(222 47% 9%) 100%)" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              What our people say.
            </h2>
            <p className="text-white/40 text-lg">Graduates, clients, and champions.</p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div
                  data-testid={`card-testimonial-${i}`}
                  className="p-6 rounded-xl border border-white/10 h-full flex flex-col"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5" style={{ color: "hsl(32 95% 55%)", fill: "hsl(32 95% 55%)" }} />
                    ))}
                  </div>
                  <p className="text-white/65 text-sm leading-relaxed flex-1 mb-5 italic">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-sm font-bold flex-shrink-0`}>
                      {t.initial}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{t.name}</div>
                      <div className="text-white/35 text-xs">{t.role} · {t.company}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, hsl(222 47% 9%) 0%, hsl(222 47% 11%) 100%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl border border-purple-500/25 p-10 lg:p-14 text-center"
            style={{
              background: "linear-gradient(135deg, hsl(270 65% 55% / 0.08), hsl(195 90% 50% / 0.06))",
              backdropFilter: "blur(16px)",
            }}
          >
            <FadeIn>
              <Target className="w-12 h-12 text-purple-400 mx-auto mb-5" />
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to build your AI team?
              </h2>
              <p className="text-white/50 text-lg max-w-xl mx-auto mb-8">
                Whether you're hiring subcontractors, enrolling your team, or building a custom AI talent pipeline — we can help.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    data-testid="button-academy-cta-contact"
                    style={{
                      background: "linear-gradient(135deg, hsl(270,65%,55%), hsl(195,90%,50%))",
                      color: "white",
                    }}
                    className="gap-2 font-semibold"
                  >
                    Talk to Our Team <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/platform">
                  <Button
                    size="lg"
                    variant="outline"
                    data-testid="button-academy-cta-platform"
                    className="border-white/20 text-white gap-2"
                    style={{ background: "rgba(255,255,255,0.05)" }}
                  >
                    Explore Platform <ChevronRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
