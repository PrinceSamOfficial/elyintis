import { useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Cpu,
  Package,
  ArrowRight,
  ChevronRight,
  Zap,
  Shield,
  BarChart3,
  GitBranch,
  Lock,
  Globe,
  Plug,
  Database,
  Brain,
  Workflow,
  CheckCircle,
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

const platformFeatures = [
  {
    icon: Brain,
    title: "AI Inference Engine",
    description: "Enterprise-grade inference without managing your own LLM. We handle the models, you use the outputs.",
    color: "text-teal-light",
    bg: "bg-teal-DEFAULT/15",
    border: "border-teal-DEFAULT/20",
  },
  {
    icon: GitBranch,
    title: "Workflow Orchestration",
    description: "Chain complex AI tasks into production-grade workflows with visual configuration and built-in monitoring.",
    color: "text-cyan-light",
    bg: "bg-cyan-DEFAULT/15",
    border: "border-cyan-DEFAULT/20",
  },
  {
    icon: Database,
    title: "Enterprise Data Layer",
    description: "Secure, governed data ingestion with RAG pipelines, vector stores, and real-time embedding.",
    color: "text-gold-light",
    bg: "bg-gold/15",
    border: "border-gold/20",
  },
  {
    icon: Plug,
    title: "Zero-Code Integrations",
    description: "Native connectors to Salesforce, SAP, Dynamics, SharePoint, and 200+ enterprise systems.",
    color: "text-purple-400",
    bg: "bg-purple-500/15",
    border: "border-purple-500/20",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "SOC-2 compliant, on-premise or cloud. Role-based access, audit trails, and data residency controls.",
    color: "text-green-400",
    bg: "bg-green-500/15",
    border: "border-green-500/20",
  },
  {
    icon: BarChart3,
    title: "Observability & Analytics",
    description: "Full visibility into model performance, usage, costs, and business impact with real-time dashboards.",
    color: "text-orange-400",
    bg: "bg-orange-500/15",
    border: "border-orange-500/20",
  },
];

const products = [
  {
    name: "Elyintis Insight",
    category: "Business Intelligence",
    tagline: "Turn your data into decisions — in natural language.",
    description: "Ask any business question in plain English. Insight queries your databases, generates visualizations, and surfaces actionable answers without a single line of SQL.",
    features: ["Natural language analytics", "Auto-generated charts & reports", "Real-time data connectors", "Scheduled AI digests"],
    color: "from-teal-DEFAULT/20 to-cyan-DEFAULT/10",
    accent: "text-teal-light",
    border: "border-teal-DEFAULT/25",
    badgeBg: "bg-teal-DEFAULT/15",
    badgeText: "text-teal-light",
  },
  {
    name: "Elyintis Assist",
    category: "Enterprise Copilot",
    tagline: "An AI colleague that knows your entire business.",
    description: "Context-aware AI assistant integrated into your existing tools. Assist understands your company's processes, documents, and workflows — and acts on them.",
    features: ["Document understanding & synthesis", "Meeting summarization & actions", "Cross-system task automation", "Multi-agent collaboration"],
    color: "from-gold/20 to-gold-light/10",
    accent: "text-gold-light",
    border: "border-gold/25",
    badgeBg: "bg-gold/15",
    badgeText: "text-gold-light",
  },
  {
    name: "Elyintis Flow",
    category: "Process Automation",
    tagline: "AI-native process automation. Zero manual triggers.",
    description: "Replace repetitive workflows with intelligent automation that adapts. Flow monitors your systems, detects events, and takes action — 24/7, without human intervention.",
    features: ["Event-driven AI triggers", "Smart document processing", "Approval routing & escalation", "Compliance-aware actions"],
    color: "from-purple-500/20 to-pink-500/10",
    accent: "text-purple-400",
    border: "border-purple-500/25",
    badgeBg: "bg-purple-500/15",
    badgeText: "text-purple-400",
  },
];

const whyNoLLM = [
  "No model selection or version management",
  "No prompt engineering expertise required",
  "No hidden token costs or capacity planning",
  "No compliance exposure from third-party models",
  "No infrastructure teams for ML Ops",
  "No 12-month model fine-tuning cycles",
];

export default function Platform() {
  return (
    <div className="min-h-screen text-white">
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 50% -10%, hsl(195 90% 50% / 0.2), transparent),
              radial-gradient(ellipse 50% 40% at 90% 70%, hsl(180 85% 45% / 0.1), transparent),
              linear-gradient(180deg, hsl(222 55% 7%) 0%, hsl(222 47% 11%) 100%)
            `,
          }}
        />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(195 90% 60%) 1px, transparent 1px),
              linear-gradient(90deg, hsl(195 90% 60%) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-DEFAULT/30 bg-cyan-DEFAULT/10 text-cyan-light text-sm font-medium mb-8"
          >
            <Cpu className="w-4 h-4" />
            AI Platform as a Service
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-6 max-w-4xl"
          >
            <span className="text-white">Powerful AI. </span>
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, hsl(195,90%,65%), hsl(180,85%,65%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Zero LLM Required.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-white/55 max-w-2xl leading-relaxed mb-10"
          >
            Elyintis handles the entire AI stack — models, infrastructure, scaling, and compliance. Your team gets powerful AI capabilities without owning a single GPU or hiring a single ML engineer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/contact">
              <Button
                size="lg"
                data-testid="button-platform-get-demo"
                style={{
                  background: "linear-gradient(135deg, hsl(195,90%,45%), hsl(180,85%,40%))",
                  color: "white",
                  boxShadow: "0 0 30px hsl(195 90% 50% / 0.25)",
                }}
                className="gap-2 font-semibold"
              >
                Get a Demo <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                data-testid="button-platform-contact-sales"
                className="border-white/20 text-white gap-2"
                style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(8px)" }}
              >
                Contact Sales
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, hsl(222 47% 11%) 0%, hsl(222 35% 13%) 100%)" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold-light text-xs font-semibold mb-5"
              >
                <Zap className="w-3.5 h-3.5" />
                Why No LLM
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
                We manage the AI so you don't have to.
              </h2>
              <p className="text-white/50 text-lg leading-relaxed mb-8">
                Traditional AI projects fail because companies spend 80% of their budget managing infrastructure instead of building value. Elyintis flips this equation entirely.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {whyNoLLM.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-teal-light flex-shrink-0 mt-0.5" />
                    <span className="text-white/60 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.15}>
              <div
                className="rounded-xl border border-white/10 overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
                  backdropFilter: "blur(16px)",
                }}
              >
                <div className="p-2 border-b border-white/8 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  </div>
                  <span className="text-white/30 text-xs font-mono">elyintis-platform.sh</span>
                </div>
                <div className="p-6 font-mono text-sm">
                  <div className="text-white/30 mb-1"># Traditional AI setup</div>
                  <div className="text-red-400/70 mb-4">$ manage-llm --version chaos</div>
                  <div className="text-white/30 mb-1"># Install dependencies (6 months)</div>
                  <div className="text-red-400/70 mb-4">$ deploy-infrastructure --hope-it-works</div>

                  <div className="border-t border-white/8 pt-4 mb-1 text-white/30"># With Elyintis</div>
                  <div className="text-teal-light mb-1">$ elyintis connect --workspace=acme-corp</div>
                  <div className="text-white/40 mb-1">Connecting to Elyintis PaaS...</div>
                  <div className="text-green-400 mb-1">✓ Platform ready</div>
                  <div className="text-green-400 mb-1">✓ AI models configured</div>
                  <div className="text-green-400 mb-1">✓ Data layer secured</div>
                  <div className="text-green-400 mb-4">✓ Ready to build</div>
                  <div className="text-gold-light">$ # Go build something great.</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, hsl(222 35% 13%) 0%, hsl(222 47% 11%) 100%)" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <p className="text-teal-light font-semibold text-sm tracking-widest uppercase mb-4">Platform Features</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Enterprise-grade. Developer-friendly.
            </h2>
            <p className="text-white/45 text-lg max-w-xl mx-auto">
              Everything you need to deploy, manage, and scale AI across your organization.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {platformFeatures.map((feature, i) => (
              <FadeIn key={feature.title} delay={i * 0.08}>
                <div
                  data-testid={`card-platform-feature-${i}`}
                  className={`p-6 rounded-lg border ${feature.border} h-full hover-elevate transition-all duration-300`}
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div className={`w-11 h-11 rounded-md ${feature.bg} flex items-center justify-center mb-4`}>
                    <feature.icon className={`w-5 h-5 ${feature.color}`} />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 60% 50% at 50% 0%, hsl(32 95% 55% / 0.06), transparent),
              linear-gradient(180deg, hsl(222 47% 11%) 0%, hsl(222 35% 13%) 100%)
            `,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 text-gold-light text-sm font-medium mb-5">
              <Package className="w-4 h-4" />
              Elyintis Products
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Out-of-the-box AI. <br />
              <span
                style={{
                  background: "linear-gradient(135deg, hsl(32,95%,65%), hsl(38,95%,70%))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Ready on Day One.
              </span>
            </h2>
            <p className="text-white/45 text-lg max-w-xl mx-auto">
              Pre-built AI products that plug directly into your existing business workflows — no custom development required.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <FadeIn key={product.name} delay={i * 0.12}>
                <div
                  data-testid={`card-product-${i}`}
                  className={`relative p-7 rounded-xl border ${product.border} h-full flex flex-col hover-elevate transition-all duration-300`}
                  style={{
                    background: `linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))`,
                    backdropFilter: "blur(16px)",
                  }}
                >
                  <div className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-md ${product.badgeBg} ${product.badgeText} text-xs font-semibold mb-5 self-start`}>
                    {product.category}
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 ${product.accent}`}>{product.name}</h3>
                  <p className="text-white/80 font-medium text-sm mb-4 italic">"{product.tagline}"</p>
                  <p className="text-white/45 text-sm leading-relaxed mb-6 flex-1">{product.description}</p>

                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5">
                        <CheckCircle className={`w-3.5 h-3.5 ${product.accent} flex-shrink-0`} />
                        <span className="text-white/55 text-xs">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contact">
                    <Button
                      variant="outline"
                      size="sm"
                      data-testid={`button-product-learn-more-${i}`}
                      className={`w-full border-white/15 text-white/80 gap-2`}
                      style={{ background: "rgba(255,255,255,0.05)" }}
                    >
                      Learn More <ChevronRight className="w-3.5 h-3.5" />
                    </Button>
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, hsl(222 35% 13%) 0%, hsl(222 47% 9%) 100%)" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl border border-cyan-DEFAULT/25 p-10 lg:p-14 flex flex-col lg:flex-row items-center gap-8"
            style={{
              background: "linear-gradient(135deg, hsl(195 90% 50% / 0.08), hsl(180 85% 45% / 0.06))",
              backdropFilter: "blur(16px)",
            }}
          >
            <div className="flex-1">
              <FadeIn direction="left">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                  See the platform in action.
                </h2>
                <p className="text-white/50 text-lg">
                  Book a 30-minute live demo with our solutions team. We'll show you how Elyintis maps to your specific use cases.
                </p>
              </FadeIn>
            </div>
            <FadeIn direction="right" delay={0.1} className="flex-shrink-0">
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact">
                  <Button
                    size="lg"
                    data-testid="button-platform-cta-demo"
                    style={{
                      background: "linear-gradient(135deg, hsl(195,90%,45%), hsl(180,85%,40%))",
                      color: "white",
                    }}
                    className="gap-2 font-semibold"
                  >
                    Book a Demo <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    data-testid="button-platform-cta-pricing"
                    className="border-white/20 text-white"
                    style={{ background: "rgba(255,255,255,0.05)" }}
                  >
                    Get Pricing
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
