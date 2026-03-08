import { useState } from "react";
import { Link } from "wouter";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Mail, ArrowRight, Linkedin, Twitter, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImg from "@assets/Elyintis_Logo-Photoroom_1772959144370.png";

const footerLinks = {
  Company: [
    { label: "Home", href: "/" },
    { label: "Platform & Products", href: "/platform" },
    { label: "Academy", href: "/academy" },
    { label: "Hire AI Talent", href: "/academy#hire" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
  Solutions: [
    { label: "AI Platform as a Service", href: "/platform" },
    { label: "Proprietary AI Products", href: "/platform#products" },
    { label: "AI Consulting", href: "/contact" },
    { label: "Certified AI Training", href: "/academy" },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const newsletterMutation = useMutation({
    mutationFn: (emailAddr: string) =>
      apiRequest("POST", "/api/newsletter", { email: emailAddr }),
    onSuccess: () => {
      setSubscribed(true);
      setEmail("");
    },
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      newsletterMutation.mutate(email);
    }
  };

  return (
    <footer className="relative border-t border-white/10 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, hsl(180 85% 35% / 0.15), transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link href="/">
              <div className="flex items-center cursor-pointer mb-4">
                <img
                  src={logoImg}
                  alt="Elyintis"
                  className="h-16 w-auto object-contain"
                  style={{ mixBlendMode: "screen" }}
                />
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              The all-in-AI provider delivering the platform, the products, and the people to transform your business.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-linkedin"
                className="w-9 h-9 rounded-md bg-white/8 border border-white/10 flex items-center justify-center text-white/50 hover:text-teal-DEFAULT hover:border-teal-DEFAULT/30 transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-twitter"
                className="w-9 h-9 rounded-md bg-white/8 border border-white/10 flex items-center justify-center text-white/50 hover:text-teal-DEFAULT hover:border-teal-DEFAULT/30 transition-all duration-200"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-github"
                className="w-9 h-9 rounded-md bg-white/8 border border-white/10 flex items-center justify-center text-white/50 hover:text-teal-DEFAULT hover:border-teal-DEFAULT/30 transition-all duration-200"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>
                      <span
                        className="text-white/45 hover:text-white/80 text-sm transition-colors cursor-pointer"
                        data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <h4 className="text-white font-semibold mb-1 flex items-center gap-2">
              <Mail className="w-4 h-4 text-teal-DEFAULT" />
              Stay updated on the future of AI
            </h4>
            <p className="text-white/40 text-sm">No spam. Only insights that matter.</p>
          </div>

          {subscribed ? (
            <div
              data-testid="status-subscribed"
              className="px-5 py-3 rounded-md bg-teal-DEFAULT/15 border border-teal-DEFAULT/30 text-teal-light text-sm font-medium"
            >
              Thanks for subscribing!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex items-center gap-2 flex-wrap">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                data-testid="input-newsletter-email"
                className="px-4 py-2 rounded-md bg-white/8 border border-white/15 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-teal-DEFAULT/50 transition-colors w-56"
              />
              <Button
                type="submit"
                disabled={newsletterMutation.isPending}
                data-testid="button-newsletter-subscribe"
                size="sm"
                className="gap-1.5"
                style={{
                  background: "linear-gradient(135deg, hsl(180,85%,38%), hsl(195,90%,50%))",
                  color: "white",
                }}
              >
                Subscribe <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </form>
          )}
        </div>

        <div className="border-t border-white/8 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Elyintis. All rights reserved.
          </p>
          <p className="text-white/25 text-xs">
            All in AI — Platform, Products & People
          </p>
        </div>
      </div>
    </footer>
  );
}
