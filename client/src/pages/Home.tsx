import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Cpu,
  Package,
  Layers,
  Users,
  ChevronRight,
  ArrowRight,
  Zap,
  CheckCircle2,
  Clock,
  Rocket,
  Shield,
  TrendingUp,
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

const advantages = [
  {
    icon: Cpu,
    title: "AI Platform as a Service",
    description:
      "Powerful AI infrastructure on demand — zero LLM overhead, zero infrastructure headaches. We handle the heavy lifting so your team focuses on value.",
    gradient: "from-teal-DEFAULT/20 to-cyan-DEFAULT/10",
    iconColor: "text-teal-light",
    iconBg: "bg-teal-DEFAULT/15",
    border: "border-teal-DEFAULT/20",
  },
  {
    icon: Package,
    title: "Proprietary Products",
    description:
      "Ready-to-deploy business AI tools built natively on the Elyintis platform. Purpose-built, battle-tested, and plug-and-play into any workflow.",
    gradient: "from-cyan-DEFAULT/20 to-blue-500/10",
    iconColor: "text-cyan-light",
    iconBg: "bg-cyan-DEFAULT/15",
    border: "border-cyan-DEFAULT/20",
  },
  {
    icon: Layers,
    title: "End-to-End Services",
    description:
      "From use-case discovery to full production deployment — our consulting team shepherds your AI transformation every step of the way.",
    gradient: "from-gold/20 to-gold-light/10",
    iconColor: "text-gold-light",
    iconBg: "bg-gold/15",
    border: "border-gold/20",
  },
  {
    icon: Users,
    title: "Certified Talent",
    description:
      "Project-ready AI experts who are native to the Elyintis ecosystem. Augment your team instantly with certified AI Champions and developers.",
    gradient: "from-purple-500/20 to-pink-500/10",
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/15",
    border: "border-purple-500/20",
  },
];

const timelineSteps = [
  {
    day: "Day 1–14",
    title: "Discovery & Design",
    description: "Use-case mapping, data audit, architecture blueprinting with your team.",
    icon: TrendingUp,
    color: "text-teal-light",
    bg: "bg-teal-DEFAULT/15",
    border: "border-teal-DEFAULT/30",
  },
  {
    day: "Day 15–35",
    title: "Platform Setup",
    description: "Elyintis PaaS deployed, integrated, and configured to your environment.",
    icon: Cpu,
    color: "text-cyan-light",
    bg: "bg-cyan-DEFAULT/15",
    border: "border-cyan-DEFAULT/30",
  },
  {
    day: "Day 36–60",
    title: "Build & Validate",
    description: "Core AI features built, tested, and validated with real business data.",
    icon: Zap,
    color: "text-gold-light",
    bg: "bg-gold/15",
    border: "border-gold/30",
  },
  {
    day: "Day 61–75",
    title: "Pilot Launch",
    description: "Controlled rollout with your team, feedback loops, performance tuning.",
    icon: Rocket,
    color: "text-purple-400",
    bg: "bg-purple-500/15",
    border: "border-purple-500/30",
  },
  {
    day: "Day 76–90",
    title: "Production & Handover",
    description: "Full production deployment. Your certified AI team takes ownership.",
    icon: CheckCircle2,
    color: "text-green-400",
    bg: "bg-green-500/15",
    border: "border-green-500/30",
  },
];

const stats = [
  { value: "90", unit: "Days", label: "Concept to Production" },
  { value: "500+", unit: "", label: "AI Experts Certified" },
  { value: "10x", unit: "", label: "Faster Than Legacy IT" },
  { value: "Zero", unit: "", label: "LLM Management Required" },
];

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 50% -20%, hsl(180 85% 35% / 0.25), transparent),
              radial-gradient(ellipse 60% 50% at 80% 60%, hsl(195 90% 50% / 0.12), transparent),
              radial-gradient(ellipse 50% 40% at 10% 80%, hsl(32 95% 55% / 0.10), transparent),
              linear-gradient(180deg, hsl(222 55% 7%) 0%, hsl(222 47% 9%) 50%, hsl(222 47% 11%) 100%)
            `,
          }}
        />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${180 + i * 60}px`,
                height: `${180 + i * 60}px`,
                left: `${[10, 75, 45, 85, 20][i]}%`,
                top: `${[20, 15, 65, 55, 75][i]}%`,
                background: [
                  "radial-gradient(circle, hsl(180 85% 45% / 0.06), transparent 70%)",
                  "radial-gradient(circle, hsl(195 90% 50% / 0.05), transparent 70%)",
                  "radial-gradient(circle, hsl(32 95% 55% / 0.05), transparent 70%)",
                  "radial-gradient(circle, hsl(180 85% 45% / 0.04), transparent 70%)",
                  "radial-gradient(circle, hsl(195 90% 50% / 0.04), transparent 70%)",
                ][i],
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 5 + i * 1.5,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(180 85% 60%) 1px, transparent 1px),
              linear-gradient(90deg, hsl(180 85% 60%) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-DEFAULT/30 bg-teal-DEFAULT/10 text-teal-light text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-teal-DEFAULT animate-pulse" />
            The Future of Enterprise AI is Here
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight mb-6 max-w-5xl"
          >
            <span className="text-white">All in AI. </span>
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, hsl(180,85%,65%) 0%, hsl(195,90%,65%) 40%, hsl(32,95%,65%) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              From Platform
            </span>
            <br />
            <span className="text-white">to People.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/60 max-w-2xl leading-relaxed mb-10"
          >
            We provide the out-of-the-box AI platform, the proprietary enterprise products, and the certified talent to drive real business value — without the overhead of managing your own LLMs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <Link href="/platform">
              <Button
                size="lg"
                data-testid="button-hero-explore-platform"
                style={{
                  background: "linear-gradient(135deg, hsl(180,85%,38%), hsl(195,90%,50%))",
                  color: "white",
                  boxShadow: "0 0 30px hsl(180 85% 45% / 0.3)",
                }}
                className="gap-2 font-semibold text-base"
              >
                Explore Platform <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/academy">
              <Button
                size="lg"
                variant="outline"
                data-testid="button-hero-hire-experts"
                className="gap-2 font-semibold text-base border-white/20 text-white"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(8px)",
                }}
              >
                Hire AI Experts <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10"
          >
            {stats.map((stat) => (
              <div key={stat.label} data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="text-3xl font-bold text-white mb-1">
                  <span
                    style={{
                      background: "linear-gradient(135deg, hsl(180,85%,65%), hsl(195,90%,65%))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {stat.value}
                  </span>
                  {stat.unit && (
                    <span className="text-lg text-white/60 ml-1">{stat.unit}</span>
                  )}
                </div>
                <div className="text-white/45 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative py-28 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, hsl(222 47% 11%) 0%, hsl(222 35% 13%) 100%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <p className="text-teal-light font-semibold text-sm tracking-widest uppercase mb-4">Why Elyintis</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
              The Elyintis Advantage
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              One partner. Complete AI transformation. From infrastructure to intelligence to talent — we cover every angle.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {advantages.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div
                  data-testid={`card-advantage-${i}`}
                  className={`relative p-6 rounded-lg border ${item.border} h-full group hover-elevate transition-all duration-300`}
                  style={{
                    background: `linear-gradient(135deg, ${
                      item.gradient.includes("teal")
                        ? "hsl(180 85% 35% / 0.08)"
                        : item.gradient.includes("cyan")
                        ? "hsl(195 90% 50% / 0.08)"
                        : item.gradient.includes("gold")
                        ? "hsl(32 95% 55% / 0.08)"
                        : "hsl(270 65% 55% / 0.08)"
                    }, hsl(222 35% 13% / 0.9))`,
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div className={`w-12 h-12 rounded-md ${item.iconBg} flex items-center justify-center mb-5`}>
                    <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-3 leading-tight">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>

                  <div className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${
                        item.iconColor.includes("teal") ? "hsl(180 85% 45%)" :
                        item.iconColor.includes("cyan") ? "hsl(195 90% 50%)" :
                        item.iconColor.includes("gold") ? "hsl(32 95% 55%)" :
                        "hsl(270 65% 55%)"
                      }, transparent)`,
                    }}
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-28 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 70% 50% at 30% 50%, hsl(32 95% 55% / 0.06), transparent),
              radial-gradient(ellipse 60% 50% at 80% 40%, hsl(180 85% 45% / 0.06), transparent),
              linear-gradient(180deg, hsl(222 35% 13%) 0%, hsl(222 47% 11%) 100%)
            `,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 text-gold-light text-sm font-medium mb-5">
              <Clock className="w-4 h-4" />
              Speed to Market
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
              Concept to Production in{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, hsl(32,95%,65%), hsl(38,95%,70%))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                90 Days
              </span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Fast, agile, and zero legacy-IT friction. We move at startup speed — without sacrificing enterprise-grade reliability.
            </p>
          </FadeIn>

          <div className="relative">
            <div className="hidden lg:block absolute top-10 left-[calc(10%+1.5rem)] right-[calc(10%+1.5rem)] h-px"
              style={{
                background: "linear-gradient(90deg, hsl(180 85% 45% / 0.3), hsl(195 90% 50% / 0.3), hsl(32 95% 55% / 0.3), hsl(270 65% 55% / 0.3), hsl(142 65% 45% / 0.3))",
              }}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {timelineSteps.map((step, i) => (
                <FadeIn key={step.day} delay={i * 0.12}>
                  <div
                    data-testid={`card-timeline-step-${i}`}
                    className={`relative p-5 rounded-lg border ${step.border} bg-white/3 backdrop-blur-sm h-full hover-elevate transition-all duration-300`}
                    style={{ backdropFilter: "blur(12px)" }}
                  >
                    <div className={`w-11 h-11 rounded-md ${step.bg} flex items-center justify-center mb-4 mx-auto lg:mx-0`}>
                      <step.icon className={`w-5 h-5 ${step.color}`} />
                    </div>
                    <div className="text-xs font-mono text-white/35 mb-2">{step.day}</div>
                    <h3 className={`font-bold text-base mb-2 ${step.color}`}>{step.title}</h3>
                    <p className="text-white/45 text-xs leading-relaxed">{step.description}</p>

                    <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-lg"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${
                          step.color.includes("teal") ? "hsl(180 85% 45%)" :
                          step.color.includes("cyan") ? "hsl(195 90% 50%)" :
                          step.color.includes("gold") ? "hsl(32 95% 55%)" :
                          step.color.includes("purple") ? "hsl(270 65% 55%)" :
                          "hsl(142 65% 45%)"
                        }, transparent)`,
                      }}
                    />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <FadeIn delay={0.4} className="mt-16 text-center">
            <div
              className="inline-flex items-center gap-4 px-8 py-5 rounded-lg border border-white/12"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
                backdropFilter: "blur(12px)",
              }}
            >
              <Shield className="w-6 h-6 text-teal-light flex-shrink-0" />
              <p className="text-white/60 text-sm text-left">
                <span className="text-white font-semibold">No legacy IT friction. </span>
                Elyintis plugs directly into your existing workflows — no rip-and-replace, no 18-month rollouts.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="relative py-28 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 50% 100%, hsl(180 85% 35% / 0.12), transparent),
              linear-gradient(180deg, hsl(222 47% 11%) 0%, hsl(222 47% 9%) 100%)
            `,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl overflow-hidden border border-teal-DEFAULT/25 p-12 lg:p-16 text-center relative"
            style={{
              background: `
                radial-gradient(ellipse 80% 80% at 50% 50%, hsl(180 85% 35% / 0.12), transparent),
                linear-gradient(135deg, hsl(222 35% 13%) 0%, hsl(222 47% 11%) 100%)
              `,
              backdropFilter: "blur(16px)",
            }}
          >
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `
                  linear-gradient(hsl(180 85% 60%) 1px, transparent 1px),
                  linear-gradient(90deg, hsl(180 85% 60%) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
            />

            <FadeIn className="relative">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Ready to go{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, hsl(180,85%,65%) 0%, hsl(195,90%,65%) 50%, hsl(32,95%,65%) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  All in AI?
                </span>
              </h2>
              <p className="text-white/50 text-xl max-w-xl mx-auto mb-10">
                Let's map your AI roadmap together — free, no obligation, no jargon.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    data-testid="button-cta-contact"
                    style={{
                      background: "linear-gradient(135deg, hsl(32,95%,48%), hsl(38,95%,60%))",
                      color: "hsl(222,47%,11%)",
                      fontWeight: "700",
                      boxShadow: "0 0 30px hsl(32 95% 55% / 0.35)",
                    }}
                    className="gap-2 text-base"
                  >
                    Start Your AI Journey <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/platform">
                  <Button
                    size="lg"
                    variant="outline"
                    data-testid="button-cta-platform"
                    className="border-white/20 text-white gap-2 text-base"
                    style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(8px)" }}
                  >
                    See the Platform <ChevronRight className="w-4 h-4" />
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
