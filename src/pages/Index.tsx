import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Smartphone, 
  Link2, 
  ShoppingCart, 
  Gamepad,
  Database,
  ExternalLink
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Index = () => {
  const getAnimationDelay = (index: number) => {
    return { animationDelay: `${index * 0.1}s` };
  };

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

  const products = [
    { img: "/assets/clientes/341028288_915872326387209_5194747744176783643_n.jpg", title: "Vivendo Ciência", description: "Materiais de Ensino de Ciências e Biologia.", link: "https://vivendociencia.com.br/" },
    { img: "/assets/clientes/315668972_827726428274104_4378133375194152941_n.jpg", title: "Violin Conservatory", description: "Portal de uma escola de violino nigeriana", link: "https://www.violin-conservatory.com/" },
    { img: "/assets/clientes/LogoClaro2017.png", title: "Claro TL", description: "Automatização dos disparos para clientes" },
    { img: "/assets/clientes/pc.png", imgMaxSize: "70%", title: "Point do Chinelo", description: "Loja online da Point do Chinelo", link: "http://pointdochinelo.com/" },
    { img: "/assets/clientes/Default logo.png", title: "ColaAqui", description: "App de Role e Bilheteria", link: "http://cola-aqui.com/" },
    { img: "/assets/clientes/logo.4fe47245.svg", imgMaxSize: "80%", title: "OnCenterChat", description: "Plataforma de Disparo de Mensagens", link: "https://www.oncenterchat.com.br" },
    { img: "/assets/clientes/logo.9166e658.svg", title: "Blog Do Chris", description: "Sistema de blog", link: "https://blogdochris.com/" },
    { img: "/assets/clientes/logo-menu.0bc67f91.png", imgMaxSize: "80%", title: "Khaos - Centro Científico", description: "Sistema de Postagem Científicas", link: "https://khaos.academy/" },
    { img: "/assets/clientes/Screenshot_3-removebg-preview.png", imgMaxSize: "80%", title: "Força em rede", description: "Rede social para portadores de doenças oncológicas — SITE e APP", link: "https://forcaemrede.com.br/" },
  ];

  const technologies = [
    "angular", "bs", "c", "cpp", "cs", "dart", "flutter", "go", "java", "jquery", "js", "kotlin",
    "mongo", "mysql", "nextjs", "node", "oracle", "pgsql", "php", "python", "react", "sass", "sqlserver", "typescript", "vue"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main>
        {/* Hero Section with enhanced animations */}
        <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 section-padding pt-32 md:pt-40 overflow-hidden">
          <div className="absolute inset-0 bg-bg-effect opacity-10 animate-pulse-slow"></div>
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Pense. <span className="text-primary animate-text-shimmer">Nós construímos</span> para você.
              </h1>
              <p className="text-lg md:text-xl text-secondary mb-10 animate-fade-in" style={getAnimationDelay(1)}>
                Do conceito à execução, entregamos software de alta qualidade, sob medida para você.
              </p>
              <p className="text-gray-600 mb-10 animate-fade-in" style={getAnimationDelay(2)}>
                Uma empresa de negócios voltada para a produção de software sob demanda.
              </p>
              <div className="animate-bounce-subtle" style={getAnimationDelay(3)}>
                <Link to="/calculator">
                  <Button className="button-primary transform transition hover:scale-105">
                    Calculadora de Serviços
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section-padding bg-white relative overflow-hidden">
          <div className="absolute -right-20 top-20 w-64 h-64 rounded-full bg-primary/5 animate-float"></div>
          <div className="absolute -left-20 bottom-20 w-40 h-40 rounded-full bg-secondary/5 animate-float animation-delay-1000"></div>
          <div className="container mx-auto relative z-10">
            <h2 className="section-title animate-fade-in">Sobre Nós</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg mb-6 animate-slide-up" style={getAnimationDelay(0)}>
                A COSSOFTWARE é uma empresa especializada em desenvolvimento de software sob demanda, 
                oferecendo soluções personalizadas para empresas de todos os tamanhos.
              </p>
              <p className="text-lg mb-6 animate-slide-up" style={getAnimationDelay(1)}>
                Desde 2021, temos trabalhado com clientes em diversos setores, transformando ideias em 
                produtos digitais de alta qualidade que impulsionam negócios.
              </p>
              <p className="text-lg animate-slide-up" style={getAnimationDelay(2)}>
                <span className="font-semibold">Nossa missão:</span> Entregar soluções de software personalizadas 
                que realmente fazem a diferença para nossos clientes.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section-padding bg-gray-50 relative overflow-hidden">
          <div className="absolute -left-32 top-20 w-80 h-80 rounded-full bg-primary/5 animate-float animation-delay-500"></div>
          <div className="container mx-auto relative z-10">
            <h2 className="section-title animate-fade-in">Nossos Serviços</h2>
            <p className="section-subtitle mb-12 animate-fade-in">
              Soluções de Software Personalizadas para Impulsionar Seu Negócio
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="service-card animate-fade-in hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:border-primary/20" 
                  style={getAnimationDelay(index)}
                >
                  <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products / Clients Section */}
        <section id="clients" className="section-padding bg-white relative overflow-hidden">
          <div className="absolute -right-32 bottom-20 w-64 h-64 rounded-full bg-secondary/5 animate-float animation-delay-1500"></div>
          <div className="container mx-auto relative z-10">
            <h2 className="section-title animate-fade-in">Conheça nossos produtos</h2>
            <p className="section-subtitle animate-fade-in">Programas e parceiros desenvolvidos pela COSSOFTWARE</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="service-card animate-fade-in flex flex-col"
                  style={getAnimationDelay(index % 6)}
                >
                  <div className="h-40 rounded-t-lg bg-gray-50 flex items-center justify-center p-6 overflow-hidden">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="max-h-full w-auto object-contain"
                      style={product.imgMaxSize ? { maxWidth: product.imgMaxSize } : undefined}
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                    <p className="text-gray-600 text-sm flex-1">{product.description}</p>
                    {product.link && (
                      <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 text-primary font-medium hover:underline text-sm"
                      >
                        Conhecer
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section id="technologies" className="section-padding bg-gray-50 relative overflow-hidden">
          <div className="absolute -left-32 top-20 w-80 h-80 rounded-full bg-primary/5 animate-float animation-delay-500"></div>
          <div className="container mx-auto relative z-10">
            <h2 className="section-title animate-fade-in">Nossas tecnologias</h2>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-12">
              {technologies.map((tech, index) => (
                <div
                  key={tech}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white shadow-md flex items-center justify-center p-2 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in border border-gray-100"
                  style={getAnimationDelay(index % 12)}
                  title={tech}
                >
                  <img
                    src={`/assets/linguagens/${tech === "sqlserver" ? "sqlserver.svg" : `${tech}.png`}`}
                    alt={tech}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
            <p className="text-center text-lg font-semibold text-muted-foreground mt-10 animate-fade-in">E MUITO MAIS...</p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-padding bg-gray-50 relative overflow-hidden">
          <div className="absolute left-1/2 top-0 w-96 h-96 -translate-x-1/2 rounded-full bg-gradient-to-b from-primary/5 to-secondary/5 blur-3xl opacity-30 animate-pulse-slow"></div>
          <div className="container mx-auto relative z-10">
            <h2 className="section-title animate-fade-in">Entre em Contato</h2>
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md animate-fade-in transform hover:shadow-lg transition duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-6">Informações de Contato</h3>
                  <div className="space-y-4">
                    <div className="contact-item">
                      <Phone className="h-5 w-5 text-primary" />
                      <span>+55 67 9129-8385</span>
                    </div>
                    <div className="contact-item">
                      <Mail className="h-5 w-5 text-primary" />
                      <span>contato@cossoftware.com</span>
                    </div>
                    <div className="contact-item">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>Rua Paranaíba, nº 237, Centro, 3º andar – Três Lagoas/MS</span>
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
      </main>

      <Footer />
    </div>
  );
};

export default Index;
