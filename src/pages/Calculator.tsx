
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  ArrowLeft, 
  Menu,
  X
} from "lucide-react";

const Calculator = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed w-full z-50 bg-white shadow-md py-2">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">COSSOFTWARE</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="nav-link">
              <span className="flex items-center gap-1">
                <Home size={16} />
                Home
              </span>
            </a>
            <a href="#calculator" className="nav-link">
              <span className="flex items-center gap-1">
                <ArrowLeft size={16} />
                Voltar
              </span>
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a 
                href="/" 
                className="block py-2 nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="flex items-center gap-2">
                  <Home size={16} />
                  Home
                </span>
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow pt-20">
        <section className="section-padding bg-white">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Calculadora de Serviços</h1>
              <p className="text-lg text-center mb-12">
                Esta página está em desenvolvimento. Em breve você poderá calcular o custo estimado dos nossos serviços.
              </p>
              
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-6">Página em Construção</h2>
                <p className="mb-6">
                  Estamos trabalhando para disponibilizar uma calculadora de serviços que permitirá
                  estimar o custo do seu projeto com base em diversos parâmetros.
                </p>
                <div className="flex justify-center">
                  <Button
                    onClick={() => window.location.href = '/'}
                    className="button-primary"
                  >
                    Voltar para a Home
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">COSSOFTWARE</h3>
              <p className="text-gray-400">
                Pense. Nós construímos para você.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="/#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="/#services" className="text-gray-400 hover:text-white transition-colors">Serviços</a></li>
                <li><a href="/#clients" className="text-gray-400 hover:text-white transition-colors">Clientes</a></li>
                <li><a href="/#contact" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-400">
                  <span>+55 (67) 99336-9450</span>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <span>cossoftware11@gmail.com</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Endereço</h3>
              <p className="text-gray-400">
                Rua Graça Aranha, 1986<br />
                JD Dourados<br />
                Três Lagoas, MS
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2021-2025 COSSOFTWARE. Todos os direitos reservados.</p>
            <p className="mt-2">CNPJ: 43.943.493/0001-06</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Calculator;
