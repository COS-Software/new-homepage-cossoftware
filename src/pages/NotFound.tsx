import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import Seo from "@/components/seo/Seo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background p-4">
      <Seo
        title="Página não encontrada (404)"
        description="A página que você procura não existe ou foi movida."
        path={location.pathname}
        noindex
      />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/15 blur-[130px] animate-glow-pulse" />
      <div className="relative z-10 flex flex-col items-center space-y-8 max-w-md w-full">
        <div className="flex flex-col items-center space-y-4">
          <img
            src="/assets/logo.png"
            alt="COSSOFTWARE"
            className="h-16 w-auto"
          />
          <h1 className="text-2xl font-bold tracking-tight">
            COS<span className="gradient-text">SOFTWARE</span>
          </h1>
        </div>

        <div className="text-center space-y-4">
          <h2 className="text-7xl font-bold gradient-text">404</h2>
          <p className="text-xl text-foreground">
            Ops! A página que você está procurando não existe.
          </p>
          <p className="text-muted-foreground">
            O endereço {location.pathname} não foi encontrado.
          </p>
        </div>

        <Link to="/" className="button-primary mt-4">
          <Home size={20} />
          Voltar para Home
        </Link>

        <div className="text-center text-sm text-muted-foreground mt-8">
          <p>&copy; 2021–2026 COSSOFTWARE. Todos os direitos reservados.</p>
          <p className="mt-1">CNPJ: 43.943.493/0001-06</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
