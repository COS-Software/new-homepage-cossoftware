
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Calculator, 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Smartphone, 
  Link2, 
  ShoppingCart, 
  Gamepad,
  Database,
  Menu,
  X
} from "lucide-react";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Animation delay for staggered elements
  const getAnimationDelay = (index: number) => {
    return { animationDelay: `${index * 0.1}s` };
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const services = [
    {
      title: "Desenvolvimento Web",
      icon: <Globe className="h-8 w-8 text-primary" />,
      description: "Criamos sites e aplicações web modernas e responsivas."
    },
    {
      title: "Desenvolvimento de Aplicativos Móveis",
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      description: "Aplicativos nativos e híbridos para iOS e Android."
    },
    {
      title: "Integração de Sistemas",
      icon: <Link2 className="h-8 w-8 text-primary" />,
      description: "Conectamos diferentes sistemas e APIs para automatizar processos."
    },
    {
      title: "Desenvolvimento de E-commerce",
      icon: <ShoppingCart className="h-8 w-8 text-primary" />,
      description: "Plataformas de vendas online customizadas para seu negócio."
    },
    {
      title: "Desenvolvimento de Jogos",
      icon: <Gamepad className="h-8 w-8 text-primary" />,
      description: "Jogos 2D e 3D para diversas plataformas."
    },
    {
      title: "Desenvolvimento de Aplicações Empresariais",
      icon: <Database className="h-8 w-8 text-primary" />,
      description: "Sistemas sob medida para gestão e processos empresariais."
    },
  ];

  const clients = [
    "Claro", 
    "Point do Chinelo", 
    "Vivendo Ciência", 
    "Violin Conservatory", 
    "ColaAqui", 
    "OnCenterChat", 
    "Blog Do Chris"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white shadow-md py-2' : 'py-4'}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">COSSOFTWARE</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="nav-link">
              <span className="flex items-center gap-1">
                <Home size={16} />
                Home
              </span>
            </a>
            <a href="#calculator" className="nav-link">
              <span className="flex items-center gap-1">
                <Calculator size={16} />
                Calculadora
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
                href="#home" 
                className="block py-2 nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="flex items-center gap-2">
                  <Home size={16} />
                  Home
                </span>
              </a>
              <a 
                href="#calculator" 
                className="block py-2 nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="flex items-center gap-2">
                  <Calculator size={16} />
                  Calculadora
                </span>
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 section-padding pt-32 md:pt-40">
          <div className="absolute inset-0 bg-[#3498db55] opacity-10"></div>
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Pense. <span className="text-primary">Nós construímos</span> para você.
              </h1>
              <p className="text-lg md:text-xl text-secondary mb-10 animate-fade-in" style={getAnimationDelay(1)}>
                Do conceito à execução, entregamos software de alta qualidade, sob medida para você.
              </p>
              <p className="text-gray-600 mb-10 animate-fade-in" style={getAnimationDelay(2)}>
                Uma empresa de negócios voltada para a produção de software sob demanda.
              </p>
              <div className="animate-fade-in" style={getAnimationDelay(3)}>
                <a href="#calculator">
                  <Button className="button-primary">
                    Calculadora de Serviços
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section-padding bg-white">
          <div className="container mx-auto">
            <h2 className="section-title animate-fade-in">Sobre Nós</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg mb-6 animate-fade-in">
                A COSSOFTWARE é uma empresa especializada em desenvolvimento de software sob demanda, 
                oferecendo soluções personalizadas para empresas de todos os tamanhos.
              </p>
              <p className="text-lg mb-6 animate-fade-in">
                Desde 2021, temos trabalhado com clientes em diversos setores, transformando ideias em 
                produtos digitais de alta qualidade que impulsionam negócios.
              </p>
              <p className="text-lg animate-fade-in">
                <span className="font-semibold">Nossa missão:</span> Entregar soluções de software personalizadas 
                que realmente fazem a diferença para nossos clientes.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section-padding bg-gray-50">
          <div className="container mx-auto">
            <h2 className="section-title animate-fade-in">Nossos Serviços</h2>
            <p className="section-subtitle mb-12 animate-fade-in">
              Soluções de Software Personalizadas para Impulsionar Seu Negócio
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="service-card animate-fade-in" 
                  style={getAnimationDelay(index % 3)}
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section id="clients" className="section-padding bg-white">
          <div className="container mx-auto">
            <h2 className="section-title animate-fade-in">Nossos Clientes</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
              {clients.map((client, index) => (
                <div key={index} className="flex items-center justify-center animate-fade-in" style={getAnimationDelay(index % 4)}>
                  <div className="client-logo bg-gray-100 h-32 w-full rounded-lg flex items-center justify-center p-6">
                    <span className="text-xl font-semibold text-secondary">{client}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-padding bg-gray-50">
          <div className="container mx-auto">
            <h2 className="section-title animate-fade-in">Entre em Contato</h2>
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-6">Informações de Contato</h3>
                  <div className="space-y-4">
                    <div className="contact-item">
                      <Phone className="h-5 w-5 text-primary" />
                      <span>+55 (67) 99336-9450</span>
                    </div>
                    <div className="contact-item">
                      <Mail className="h-5 w-5 text-primary" />
                      <span>cossoftware11@gmail.com</span>
                    </div>
                    <div className="contact-item">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>Rua Graça Aranha, 1986, JD Dourados, Três Lagoas, MS</span>
                    </div>
                    <div className="contact-item">
                      <span className="text-sm font-medium">CNPJ:</span>
                      <span>43.943.493/0001-06</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-6">Envie uma Mensagem</h3>
                  <form>
                    <div className="space-y-4">
                      <div>
                        <input
                          type="text"
                          placeholder="Nome"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="Email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                      <div>
                        <textarea
                          placeholder="Mensagem"
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        ></textarea>
                      </div>
                      <div>
                        <Button type="submit" className="button-primary w-full">
                          Enviar Mensagem
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Section (placeholder) */}
        <section id="calculator" className="section-padding bg-white">
          <div className="container mx-auto">
            <h2 className="section-title animate-fade-in">Calculadora de Serviços</h2>
            <p className="text-center max-w-3xl mx-auto mb-8 animate-fade-in">
              Esta seção será implementada posteriormente. Aqui os clientes poderão calcular estimativas de preços para nossos serviços.
            </p>
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
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Serviços</a></li>
                <li><a href="#clients" className="text-gray-400 hover:text-white transition-colors">Clientes</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-400">
                  <Phone size={16} />
                  <span>+55 (67) 99336-9450</span>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <Mail size={16} />
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

export default Index;
