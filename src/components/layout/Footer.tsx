import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t bd-line bg-background">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
      <div className="container-x relative z-10 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center gap-2.5">
              <img src="/assets/logo.png" alt="COSSOFTWARE" className="h-9 w-auto" />
              <span className="text-lg font-bold tracking-tight">
                COS<span className="gradient-text">SOFTWARE</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Pense. Nós construímos para você. Software sob demanda, do conceito
              à execução.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground/90">
              Navegação
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Início", href: "/#home" },
                { label: "Sobre", href: "/#about" },
                { label: "Serviços", href: "/#services" },
                { label: "Produtos", href: "/#clients" },
                { label: "Tecnologias", href: "/#technologies" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground/90">
              Contato
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="contact-item">
                <Phone size={16} className="text-primary" />
                <span>+55 67 9129-8385</span>
              </li>
              <li className="contact-item">
                <Mail size={16} className="text-primary" />
                <span>contato@cossoftware.com</span>
              </li>
              <li className="contact-item items-start">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                <span>Rua Paranaíba, nº 237, Centro, 3º andar – Três Lagoas/MS</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground/90">
              Vamos conversar
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Tem um projeto em mente? Calcule uma estimativa em segundos.
            </p>
            <Link to="/calculator" className="button-primary w-full text-sm">
              Calculadora de Serviços
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t bd-line pt-8 text-center text-sm text-muted-foreground md:flex-row md:text-left">
          <p>&copy; 2021–2026 COSSOFTWARE. Todos os direitos reservados.</p>
          <p>CNPJ: 43.943.493/0001-06</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
