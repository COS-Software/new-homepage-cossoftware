import { Link, useLocation } from "react-router-dom";
import {
  CheckCircle2,
  Sparkles,
  DollarSign,
  Clock,
  Home,
  Calculator as CalculatorIcon,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Seo from "@/components/seo/Seo";
import { Button } from "@/components/ui/button";
import { usePageTheme } from "@/components/theme/ThemeProvider";

type ThankYouState = {
  calculation?: { cost: number; timeline: number };
  contactName?: string;
  leadSent?: boolean;
};

const ThankYou = () => {
  usePageTheme("light");
  const location = useLocation();
  const state = (location.state as ThankYouState | null) ?? {};
  const { calculation, contactName } = state;

  const firstName = contactName?.trim().split(" ")[0];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Seo
        title="Orçamento enviado | Obrigado"
        description="Recebemos o seu pedido de orçamento. Nossa equipe entrará em contato em breve."
        path="/obrigado"
        noindex
      />
      <Header />

      <main className="flex-grow pt-24">
        <section className="relative flex min-h-[70vh] items-center overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[130px] animate-glow-pulse" />

          <div className="container relative z-10 mx-auto px-4 py-16 md:px-6">
            <div className="mx-auto max-w-xl text-center animate-fade-in">
              <div className="relative mx-auto mb-8 flex h-24 w-24 items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-green-500/15 blur-xl animate-glow-pulse" />
                <span className="absolute inset-0 rounded-full border-2 border-green-500/30" />
                <CheckCircle2
                  className="relative h-14 w-14 text-green-600"
                  strokeWidth={1.75}
                />
              </div>

              <span className="eyebrow mx-auto mb-5 inline-flex">
                <Sparkles className="h-3.5 w-3.5" />
                Recebemos o seu pedido
              </span>

              <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
                {firstName ? (
                  <>
                    Obrigado, <span className="gradient-text">{firstName}</span>!
                  </>
                ) : (
                  <>
                    <span className="gradient-text">Obrigado</span> pelo contato!
                  </>
                )}
              </h1>

              <p className="mx-auto mt-4 max-w-md text-base text-muted-foreground md:text-lg">
                Seu orçamento foi enviado com sucesso. Nossa equipe vai analisar
                os detalhes e entrar em contato com você em breve.
              </p>

              {calculation && (calculation.cost > 0 || calculation.timeline > 0) && (
                <div className="mx-auto mt-8 grid max-w-md grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="glass-card rounded-xl p-5 text-left">
                    <div className="mb-1 flex items-center gap-2 text-muted-foreground">
                      <DollarSign size={18} className="text-primary" />
                      <span className="text-sm font-medium">Estimativa</span>
                    </div>
                    <p className="text-2xl font-bold text-primary">
                      R$ {calculation.cost.toLocaleString("pt-BR")}
                    </p>
                  </div>
                  <div className="glass-card rounded-xl p-5 text-left">
                    <div className="mb-1 flex items-center gap-2 text-muted-foreground">
                      <Clock size={18} className="text-primary" />
                      <span className="text-sm font-medium">Prazo estimado</span>
                    </div>
                    <p className="text-2xl font-bold text-primary">
                      {calculation.timeline}{" "}
                      {calculation.timeline === 1 ? "dia" : "dias"}
                    </p>
                  </div>
                </div>
              )}

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild className="button-primary px-7">
                  <Link to="/">
                    <Home className="mr-2 h-4 w-4" />
                    Voltar ao início
                  </Link>
                </Button>
                <Button asChild variant="outline" className="px-7">
                  <Link to="/calculator">
                    <CalculatorIcon className="mr-2 h-4 w-4" />
                    Fazer nova estimativa
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYou;
