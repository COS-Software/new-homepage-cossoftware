import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/assets/logo.png" 
                alt="COSSOFTWARE" 
                className="h-8 mr-2"
              />
              <h3 className="text-xl font-bold">COSSOFTWARE</h3>
            </div>
            <p className="text-gray-400">
              Pense. Nós construímos para você.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="/#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="/#services" className="text-gray-400 hover:text-white transition-colors">Serviços</a></li>
              <li><a href="/#clients" className="text-gray-400 hover:text-white transition-colors">Produtos</a></li>
              <li><a href="/#technologies" className="text-gray-400 hover:text-white transition-colors">Tecnologias</a></li>
              <li><a href="/#contact" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={16} />
                <span>+55 67 9129-8385</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={16} />
                <span>contato@cossoftware.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Endereço</h3>
            <p className="text-gray-400">
              Rua Paranaíba, nº 237, Centro, 3º andar – Três Lagoas/MS
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2021-2026 COSSOFTWARE. Todos os direitos reservados.</p>
          <p className="mt-2">CNPJ: 43.943.493/0001-06</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
