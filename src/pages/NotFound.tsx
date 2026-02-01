import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 p-4">
      <div className="flex flex-col items-center space-y-8 max-w-md w-full">
        {/* Logo and Company Name */}
        <div className="flex flex-col items-center space-y-4">
          <img 
            src="/assets/logo.png" 
            alt="COSSOFTWARE" 
            className="h-20 w-auto"
          />
          <h1 className="text-3xl font-bold text-primary">COSSOFTWARE</h1>
        </div>

        {/* 404 Content */}
        <div className="text-center space-y-4">
          <h2 className="text-6xl font-bold text-primary">404</h2>
          <p className="text-xl text-gray-600">
            Ops! A página que você está procurando não existe.
          </p>
          <p className="text-gray-500">
            O endereço {location.pathname} não foi encontrado.
          </p>
        </div>

        {/* Back to Home Button */}
        <Link 
          to="/" 
          className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors mt-4"
        >
          <Home size={20} />
          Voltar para Home
        </Link>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 mt-8">
          <p>&copy; 2021-2026 COSSOFTWARE. Todos os direitos reservados.</p>
          <p className="mt-1">CNPJ: 43.943.493/0001-06</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
