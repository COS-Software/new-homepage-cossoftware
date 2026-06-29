import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Calculator } from "lucide-react";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

const navItems = [
  { label: "Início", href: "/#home", type: "anchor" as const },
  { label: "Sobre", href: "/#about", type: "anchor" as const },
  { label: "Serviços", href: "/#services", type: "anchor" as const },
  { label: "Produtos", href: "/#clients", type: "anchor" as const },
  { label: "Tecnologias", href: "/#technologies", type: "anchor" as const },
  { label: "Depoimentos", href: "/#testimonials", type: "anchor" as const },
  { label: "FAQ", href: "/#faq", type: "anchor" as const },
  { label: "Contato", href: "/#contact", type: "anchor" as const },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b bd-line bg-background/70 py-3 backdrop-blur-xl"
          : "border-b border-transparent py-5"
      }`}
    >
      <div className="container-x flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-2.5">
          <img src="/assets/logo.png" alt="COSSOFTWARE" className="h-9 w-auto" />
          <span className="text-lg font-bold tracking-tight">
            COS<span className="gradient-text">SOFTWARE</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Link to="/calculator" className="button-primary px-5 py-2.5 text-sm">
            <Calculator className="h-4 w-4" />
            Calculadora
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            className="text-foreground"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mt-3 border-t bd-line bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-[hsl(var(--foreground)/0.05)] hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/calculator"
              className="button-primary mt-2 w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Calculator className="h-4 w-4" />
              Calculadora de Serviços
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
