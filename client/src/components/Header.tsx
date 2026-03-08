import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImg from "@assets/Elyintis_Logo-Photoroom_1772959144370.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Platform & Products", href: "/platform" },
  { label: "Academy", href: "/academy" },
  { label: "Hire AI Talent", href: "/academy#hire" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-dark/90 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20 gap-4">
          <Link href="/" data-testid="link-logo">
            <div className="flex items-center gap-1 cursor-pointer group">
              <img
                src={logoImg}
                alt="Elyintis Logo"
                className="h-14 w-auto object-contain"
                style={{ mixBlendMode: "screen" }}
              />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 flex-wrap">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 cursor-pointer ${
                    location === link.href
                      ? "text-teal-DEFAULT bg-white/10"
                      : "text-white/70 hover:text-white hover:bg-white/8"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact">
              <Button
                data-testid="button-get-started"
                className="bg-gradient-to-r from-gold-dark to-gold text-navy-dark font-semibold shadow-lg shadow-gold/20"
                style={{
                  background: "linear-gradient(135deg, hsl(32,95%,48%), hsl(38,95%,60%))",
                  color: "hsl(222,47%,11%)",
                }}
              >
                Get Started
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-white/80 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            data-testid="button-mobile-menu"
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-navy-dark/95 backdrop-blur-xl border-t border-white/10">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  data-testid={`link-mobile-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`block px-4 py-3 text-sm font-medium rounded-md transition-colors cursor-pointer ${
                    location === link.href
                      ? "text-teal-DEFAULT bg-white/10"
                      : "text-white/70 hover:text-white hover:bg-white/8"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <Link href="/contact">
              <Button
                data-testid="button-mobile-get-started"
                className="mt-3 w-full font-semibold"
                style={{
                  background: "linear-gradient(135deg, hsl(32,95%,48%), hsl(38,95%,60%))",
                  color: "hsl(222,47%,11%)",
                }}
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
