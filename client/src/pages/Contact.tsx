import { useState } from "react";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
  Cpu,
  GraduationCap,
  Users,
  HelpCircle,
} from "lucide-react";

const contactReasons = [
  { value: "platform", label: "Platform & Products Demo", icon: Cpu },
  { value: "academy", label: "Academy Enrollment", icon: GraduationCap },
  { value: "hire", label: "Hire Certified Talent", icon: Users },
  { value: "consulting", label: "AI Consulting", icon: HelpCircle },
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@elyintis.ai",
    href: "mailto:hello@elyintis.ai",
    color: "text-teal-light",
    bg: "bg-teal-DEFAULT/15",
    border: "border-teal-DEFAULT/20",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (800) ELYINTIS",
    href: "tel:+18003594684",
    color: "text-gold-light",
    bg: "bg-gold/15",
    border: "border-gold/20",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "New York, NY · London · Singapore",
    href: null,
    color: "text-cyan-light",
    bg: "bg-cyan-DEFAULT/15",
    border: "border-cyan-DEFAULT/20",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    reason: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const contactMutation = useMutation({
    mutationFn: (data: typeof formData) =>
      apiRequest("POST", "/api/contact", {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        company: data.company || null,
        reason: data.reason || null,
        message: data.message,
      }),
    onSuccess: () => {
      setSubmitted(true);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  return (
    <div className="min-h-screen text-white">
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 70% 60% at 50% -10%, hsl(32 95% 55% / 0.15), transparent),
              radial-gradient(ellipse 50% 40% at 90% 60%, hsl(180 85% 45% / 0.08), transparent),
              linear-gradient(180deg, hsl(222 55% 7%) 0%, hsl(222 47% 11%) 100%)
            `,
          }}
        />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(32 95% 60%) 1px, transparent 1px),
              linear-gradient(90deg, hsl(32 95% 60%) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 text-gold-light text-sm font-medium mb-8"
          >
            <Send className="w-4 h-4" />
            Let's Connect
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-5 max-w-3xl"
          >
            <span className="text-white">Start your </span>
            <span
              style={{
                background: "linear-gradient(135deg, hsl(32,95%,65%), hsl(38,95%,70%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              AI journey.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/50 max-w-xl leading-relaxed"
          >
            Tell us about your goals and we'll map the right solution — platform, product, talent, or all three.
          </motion.p>
        </div>
      </section>

      <section className="relative py-12 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, hsl(222 47% 11%) 0%, hsl(222 35% 13%) 100%)" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex items-center justify-center py-16"
                >
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-teal-DEFAULT/20 border border-teal-DEFAULT/30 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-teal-light" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-3" data-testid="status-form-submitted">
                      Message sent!
                    </h2>
                    <p className="text-white/50 text-lg max-w-sm mx-auto">
                      Our team will be in touch within 1 business day. Expect a thoughtful response, not a sales pitch.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" data-testid="form-contact">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">
                        First Name *
                      </label>
                      <input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        placeholder="Alex"
                        data-testid="input-first-name"
                        className="w-full px-4 py-3 rounded-md bg-white/6 border border-white/12 text-white placeholder:text-white/25 text-sm focus:outline-none focus:border-teal-DEFAULT/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">
                        Last Name *
                      </label>
                      <input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        placeholder="Johnson"
                        data-testid="input-last-name"
                        className="w-full px-4 py-3 rounded-md bg-white/6 border border-white/12 text-white placeholder:text-white/25 text-sm focus:outline-none focus:border-teal-DEFAULT/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">
                      Work Email *
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="alex@company.com"
                      data-testid="input-email"
                      className="w-full px-4 py-3 rounded-md bg-white/6 border border-white/12 text-white placeholder:text-white/25 text-sm focus:outline-none focus:border-teal-DEFAULT/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">
                      Company
                    </label>
                    <input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Corporation"
                      data-testid="input-company"
                      className="w-full px-4 py-3 rounded-md bg-white/6 border border-white/12 text-white placeholder:text-white/25 text-sm focus:outline-none focus:border-teal-DEFAULT/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">
                      I'm interested in... *
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {contactReasons.map((reason) => (
                        <button
                          key={reason.value}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, reason: reason.value }))}
                          data-testid={`button-reason-${reason.value}`}
                          className={`flex items-center gap-2.5 px-4 py-3 rounded-md border text-sm font-medium transition-all duration-200 text-left ${
                            formData.reason === reason.value
                              ? "border-teal-DEFAULT/50 bg-teal-DEFAULT/15 text-teal-light"
                              : "border-white/10 bg-white/4 text-white/50 hover:border-white/20 hover:text-white/70"
                          }`}
                        >
                          <reason.icon className="w-4 h-4 flex-shrink-0" />
                          <span>{reason.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">
                      Tell us more *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Describe your goals, challenges, or questions. The more context you give us, the better we can help."
                      data-testid="textarea-message"
                      className="w-full px-4 py-3 rounded-md bg-white/6 border border-white/12 text-white placeholder:text-white/25 text-sm focus:outline-none focus:border-teal-DEFAULT/50 transition-colors resize-none"
                    />
                  </div>

                  {contactMutation.isError && (
                    <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={contactMutation.isPending}
                    data-testid="button-submit-contact"
                    style={{
                      background: "linear-gradient(135deg, hsl(32,95%,48%), hsl(38,95%,60%))",
                      color: "hsl(222,47%,11%)",
                      fontWeight: "700",
                    }}
                    className="w-full gap-2"
                  >
                    {contactMutation.isPending ? (
                      <>
                        <motion.div
                          className="w-4 h-4 border-2 border-navy-dark/40 border-t-navy-dark rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>

                  <p className="text-white/25 text-xs text-center">
                    No spam, no sales pressure. Just a genuine conversation.
                  </p>
                </form>
              )}
            </div>

            <div className="lg:col-span-2 space-y-5">
              <div
                className="p-6 rounded-xl border border-white/10"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
                  backdropFilter: "blur(12px)",
                }}
              >
                <h3 className="text-white font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-3">
                      <div className={`w-9 h-9 rounded-md ${info.bg} border ${info.border} flex items-center justify-center flex-shrink-0`}>
                        <info.icon className={`w-4 h-4 ${info.color}`} />
                      </div>
                      <div>
                        <div className="text-white/40 text-xs mb-0.5">{info.label}</div>
                        {info.href ? (
                          <a href={info.href} className={`text-sm font-medium ${info.color} hover:underline`}
                            data-testid={`link-contact-${info.label.toLowerCase()}`}>
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-white/70 text-sm">{info.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="p-6 rounded-xl border border-teal-DEFAULT/20"
                style={{
                  background: "linear-gradient(135deg, hsl(180 85% 35% / 0.1), hsl(195 90% 50% / 0.06))",
                  backdropFilter: "blur(12px)",
                }}
              >
                <h3 className="text-white font-semibold mb-2">Fast-track response</h3>
                <p className="text-white/45 text-sm leading-relaxed mb-4">
                  For urgent inquiries about talent requests or platform demos, our solutions team responds within 4 hours during business hours.
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-xs font-medium">Team is online now</span>
                </div>
              </div>

              <div
                className="p-6 rounded-xl border border-gold/20"
                style={{
                  background: "linear-gradient(135deg, hsl(32 95% 55% / 0.08), rgba(255,255,255,0.02))",
                  backdropFilter: "blur(12px)",
                }}
              >
                <h3 className="text-gold-light font-semibold mb-2">Free AI Readiness Assessment</h3>
                <p className="text-white/45 text-sm leading-relaxed">
                  Mention this in your message and we'll include a complimentary AI readiness review for your organization — no strings attached.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
