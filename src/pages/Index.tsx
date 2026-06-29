import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Smartphone,
  Link2,
  ShoppingCart,
  Gamepad2,
  Database,
  ExternalLink,
  ArrowRight,
  Sparkles,
  Calculator,
  Rocket,
  ShieldCheck,
  Clock,
  Star,
  Quote,
  Users,
} from "lucide-react";
import { lazy, Suspense } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/Reveal";
import Seo from "@/components/seo/Seo";
import { usePageTheme } from "@/components/theme/ThemeProvider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Hero3D = lazy(() => import("@/components/three/Hero3D"));

const services = [
  {
    title: "Desenvolvimento Web",
    icon: Globe,
    description: "Sites e aplicações web modernas, rápidas e responsivas.",
  },
  {
    title: "Aplicativos Móveis",
    icon: Smartphone,
    description: "Apps nativos e híbridos para iOS e Android.",
  },
  {
    title: "Integração de Sistemas",
    icon: Link2,
    description: "Conectamos sistemas e APIs para automatizar processos.",
  },
  {
    title: "E-commerce",
    icon: ShoppingCart,
    description: "Plataformas de vendas online sob medida para seu negócio.",
  },
  {
    title: "Desenvolvimento de Jogos",
    icon: Gamepad2,
    description: "Jogos 2D e 3D para diversas plataformas.",
  },
  {
    title: "Aplicações Empresariais",
    icon: Database,
    description: "Sistemas sob medida para gestão e processos empresariais.",
  },
];

// NOTE: descrições abaixo são um mockup/placeholder — substituir pelos
// detalhes reais de cada projeto depois.
const products = [
  {
    img: "/assets/clientes/341028288_915872326387209_5194747744176783643_n.jpg",
    title: "Vivendo Ciência",
    tag: "Plataforma EAD",
    description:
      "Plataforma de ensino de Ciências e Biologia com área de aluno, trilhas de conteúdo, vídeos e materiais para download.",
    link: "https://vivendociencia.com.br/",
  },
  {
    img: "/assets/clientes/315668972_827726428274104_4378133375194152941_n.jpg",
    title: "Violin Conservatory",
    tag: "Portal Educacional",
    description:
      "Portal multilíngue para uma escola de violino, com matrícula online, agenda de aulas e galeria de apresentações.",
    link: "https://www.violin-conservatory.com/",
  },
  {
    img: "/assets/clientes/LogoClaro2017.png",
    title: "Claro TL",
    tag: "Automação",
    description:
      "Automação dos disparos de mensagens e notificações para clientes, com painel de campanhas e relatórios de entrega.",
  },
  {
    img: "/assets/clientes/pc.png",
    imgMaxSize: "70%",
    title: "Point do Chinelo",
    tag: "E-commerce",
    description:
      "Loja virtual completa com catálogo, carrinho, checkout e integração de pagamento e cálculo de frete.",
    link: "http://pointdochinelo.com/",
  },
  {
    img: "/assets/clientes/Default logo.png",
    title: "ColaAqui",
    tag: "App Mobile",
    description:
      "App de eventos e bilheteria com venda de ingressos, QR Code de acesso e descoberta de roles por localização.",
    link: "http://cola-aqui.com/",
  },
  {
    img: "/assets/clientes/logo.4fe47245.svg",
    imgMaxSize: "80%",
    title: "OnCenterChat",
    tag: "SaaS / Mensageria",
    description:
      "Plataforma de disparo de mensagens em massa com gestão de contatos, modelos de mensagem e métricas em tempo real.",
    link: "https://www.oncenterchat.com.br",
  },
  {
    img: "/assets/clientes/logo.9166e658.svg",
    title: "Blog Do Chris",
    tag: "CMS / Blog",
    description:
      "Sistema de blog sob medida com editor de posts, categorias, SEO e painel administrativo de publicações.",
    link: "https://blogdochris.com/",
  },
  {
    img: "/assets/clientes/logo-menu.0bc67f91.png",
    imgMaxSize: "80%",
    title: "Khaos - Centro Científico",
    tag: "Publicações",
    description:
      "Plataforma de postagens científicas com submissão de artigos, revisão e biblioteca de conteúdos acadêmicos.",
    link: "https://khaos.academy/",
  },
  {
    img: "/assets/clientes/Screenshot_3-removebg-preview.png",
    imgMaxSize: "80%",
    title: "Força em rede",
    tag: "Site + App",
    description:
      "Rede social para pacientes oncológicos, com feed de apoio, grupos e perfil — entregue como site e aplicativo mobile.",
    link: "https://forcaemrede.com.br/",
  },
];

const testimonials = [
  {
    quote:
      "A equipe da COSSOFTWARE entendeu exatamente o que precisávamos e entregou uma plataforma que superou nossas expectativas.",
    name: "Nome do Cliente",
    role: "Cargo · Empresa",
    rating: 5,
  },
  {
    quote:
      "Profissionalismo do início ao fim. Prazos cumpridos, comunicação clara e um produto final impecável.",
    name: "Nome do Cliente",
    role: "Cargo · Empresa",
    rating: 5,
  },
  {
    quote:
      "Transformaram nossa ideia em um sistema robusto e fácil de usar. Recomendo de olhos fechados.",
    name: "Nome do Cliente",
    role: "Cargo · Empresa",
    rating: 5,
  },
];

const team = [
  { initials: "FS", role: "Full-stack", color: "from-indigo-500 to-violet-500" },
  { initials: "MB", role: "Mobile", color: "from-sky-500 to-cyan-500" },
  { initials: "UX", role: "UI/UX Design", color: "from-fuchsia-500 to-pink-500" },
  { initials: "BE", role: "Back-end", color: "from-violet-500 to-purple-500" },
  { initials: "QA", role: "Qualidade", color: "from-blue-500 to-indigo-500" },
];

const technologies = [
  "angular", "bs", "c", "cpp", "cs", "dart", "flutter", "go", "java", "jquery",
  "js", "kotlin", "mongo", "mysql", "nextjs", "node", "oracle", "pgsql", "php",
  "python", "react", "sass", "sqlserver", "typescript", "vue",
];

const stats = [
  { value: "2021", label: "Atuando desde" },
  { value: "25+", label: "Tecnologias dominadas" },
  { value: "+50", label: "Produtos entregues" },
  { value: "100%", label: "Sob medida" },
];

const differentiators = [
  {
    icon: Rocket,
    title: "Do conceito à execução",
    description:
      "Acompanhamos cada etapa: ideação, design, desenvolvimento e entrega.",
  },
  {
    icon: ShieldCheck,
    title: "Qualidade sob medida",
    description:
      "Soluções personalizadas que realmente fazem a diferença no seu negócio.",
  },
  {
    icon: Clock,
    title: "Estimativa transparente",
    description:
      "Calcule custo e prazo do seu projeto em tempo real com nossa calculadora.",
  },
];

// Perguntas frequentes: conteúdo factual e "citável", otimizado tanto para o
// rich result de FAQ no Google quanto para motores generativos (GEO).
const faqs = [
  {
    question: "O que a COSSOFTWARE faz?",
    answer:
      "A COSSOFTWARE é uma empresa de desenvolvimento de software sob demanda, fundada em 2021 e sediada em Três Lagoas/MS. Criamos sites e aplicações web, aplicativos móveis (iOS e Android), lojas de e-commerce, sistemas empresariais, jogos e integrações entre sistemas e APIs.",
  },
  {
    question: "Quanto custa desenvolver um software com a COSSOFTWARE?",
    answer:
      "O custo depende do tipo de aplicação, do número de funcionalidades e da complexidade do projeto. Você pode obter uma estimativa imediata de custo e prazo usando a Calculadora de Serviços gratuita no nosso site, sem compromisso.",
  },
  {
    question: "Quanto tempo leva para entregar um projeto?",
    answer:
      "O prazo varia conforme o escopo. Projetos simples podem levar poucas semanas, enquanto sistemas mais robustos demandam mais tempo. A Calculadora de Serviços apresenta uma estimativa de prazo em tempo real com base nas características do seu projeto.",
  },
  {
    question: "Quais tecnologias a COSSOFTWARE utiliza?",
    answer:
      "Trabalhamos com mais de 25 tecnologias, incluindo React, Angular, Vue, Next.js, Node.js, Python, Java, Kotlin, Dart/Flutter, PHP, Go, C#, e bancos de dados como PostgreSQL, MySQL, SQL Server, Oracle e MongoDB.",
  },
  {
    question: "A COSSOFTWARE atende clientes de todo o Brasil?",
    answer:
      "Sim. Embora sediada em Três Lagoas, Mato Grosso do Sul, a COSSOFTWARE atende empresas de todos os tamanhos em todo o Brasil, com atendimento remoto e acompanhamento em todas as etapas do projeto.",
  },
  {
    question: "Como faço para solicitar um orçamento?",
    answer:
      "Você pode usar a Calculadora de Serviços para uma estimativa instantânea ou entrar em contato pelo e-mail contato@cossoftware.com e pelo telefone +55 67 9129-8385.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

const Index = () => {
  usePageTheme("dark");

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Seo
        title="COSSOFTWARE | Desenvolvimento de Software Sob Demanda em Três Lagoas/MS"
        description="A COSSOFTWARE desenvolve software sob demanda: sites, aplicativos móveis, e-commerce, sistemas empresariais e integrações. Do conceito à execução, com estimativa de custo e prazo em tempo real."
        path="/"
        jsonLd={faqJsonLd}
      />
      <Header />

      <main>
        {/* ===================== HERO 3D ===================== */}
        <section
          id="home"
          className="relative flex min-h-screen items-center overflow-hidden pt-28 md:pt-0"
        >
          {/* 3D canvas as the cover backdrop */}
          <Suspense
            fallback={
              <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary/40 to-accent/30 blur-[120px] animate-glow-pulse" />
              </div>
            }
          >
            <Hero3D className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-90" />
          </Suspense>

          {/* glow + vignette */}
          <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-background/40 via-background/20 to-background" />
          <div className="pointer-events-none absolute left-1/2 top-1/3 z-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px] animate-glow-pulse" />

          <div className="container-x relative z-10">
            <div className="max-w-3xl">
              <div className="animate-fade-in">
                <span className="eyebrow">
                  <Sparkles className="h-3.5 w-3.5" />
                  Software sob demanda · desde 2021
                </span>
              </div>

              <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl animate-fade-in animation-delay-300">
                Pense. <span className="gradient-text">Nós construímos</span> para
                você.
              </h1>

              <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl animate-fade-in animation-delay-500">
                Do conceito à execução, entregamos software de alta qualidade,
                sob medida para o seu negócio.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row animate-fade-in animation-delay-700">
                <Link to="/calculator" className="button-primary text-base">
                  <Calculator className="h-5 w-5" />
                  Calculadora de Serviços
                </Link>
                <a href="#services" className="button-ghost text-base">
                  Conheça nossos serviços
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* scroll hint */}
          <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 md:block">
            <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 bd-line-strong p-1.5">
              <div className="h-2 w-1 animate-bounce-subtle rounded-full bg-[hsl(var(--foreground)/0.5)]" />
            </div>
          </div>
        </section>

        {/* ===================== STATS ===================== */}
        <section className="relative border-y bd-line-soft surface-1">
          <div className="container-x py-12">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat, i) => (
                <Reveal
                  key={stat.label}
                  delay={i * 100}
                  className="text-center"
                >
                  <p className="text-4xl font-bold gradient-text md:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== ABOUT ===================== */}
        <section id="about" className="section-padding relative overflow-hidden">
          <div className="container-x">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <Reveal>
                <span className="eyebrow">Sobre nós</span>
                <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
                  Transformamos ideias em{" "}
                  <span className="gradient-text">produtos digitais</span>.
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground">
                  <p>
                    A COSSOFTWARE é uma empresa especializada em desenvolvimento
                    de software sob demanda, oferecendo soluções personalizadas
                    para empresas de todos os tamanhos.
                  </p>
                  <p>
                    Desde 2021, trabalhamos com clientes em diversos setores,
                    transformando ideias em produtos digitais de alta qualidade
                    que impulsionam negócios.
                  </p>
                  <p className="text-foreground">
                    <span className="font-semibold">Nossa missão:</span> entregar
                    soluções de software personalizadas que realmente fazem a
                    diferença para nossos clientes.
                  </p>
                </div>
              </Reveal>

              <div className="grid gap-5">
                {differentiators.map((item, i) => (
                  <Reveal key={item.title} delay={i * 120}>
                    <div className="glass-card group flex items-start gap-4 p-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 ring-1 ring-hairline transition-transform group-hover:scale-110">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===================== TEAM ===================== */}
        <section className="relative overflow-hidden border-y bd-line-soft surface-1">
          <div className="container-x py-16">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <Reveal>
                <span className="eyebrow">
                  <Users className="h-3.5 w-3.5" />
                  Nossa equipe
                </span>
                <h2 className="mt-5 text-2xl font-bold tracking-tight md:text-4xl">
                  Não é uma pessoa só —{" "}
                  <span className="gradient-text">somos um time</span>.
                </h2>
                <p className="mt-4 max-w-xl text-muted-foreground">
                  A COSSOFTWARE reúne profissionais multidisciplinares de
                  front-end, back-end, mobile, design e qualidade. Cada projeto
                  conta com a especialidade certa em cada etapa.
                </p>
              </Reveal>

              <Reveal delay={150}>
                <div className="flex flex-col items-center gap-4">
                  <div className="flex -space-x-3">
                    {team.map((member) => (
                      <div
                        key={member.role}
                        title={member.role}
                        className={`flex h-14 w-14 items-center justify-center rounded-full border-2 border-background bg-gradient-to-br ${member.color} text-sm font-bold text-white shadow-lg transition-transform hover:z-10 hover:-translate-y-1`}
                      >
                        {member.initials}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap justify-center gap-2">
                    {team.map((member) => (
                      <span
                        key={member.role}
                        className="rounded-full border bd-line surface-2 px-3 py-1 text-xs text-muted-foreground"
                      >
                        {member.role}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ===================== SERVICES ===================== */}
        <section
          id="services"
          className="section-padding relative overflow-hidden"
        >
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
          <div className="container-x relative z-10">
            <Reveal className="mb-14">
              <span className="eyebrow mx-auto block w-fit">Nossos serviços</span>
              <h2 className="section-title mt-5">
                Soluções para{" "}
                <span className="gradient-text">impulsionar seu negócio</span>
              </h2>
              <p className="section-subtitle mt-4">
                Software personalizado, do front-end ao back-end, com a stack
                certa para cada desafio.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <Reveal key={service.title} delay={(index % 3) * 100}>
                  <div className="glass-card group h-full p-7 hover:-translate-y-1.5">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/30 to-accent/20 ring-1 ring-hairline transition-transform duration-300 group-hover:scale-110">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== PRODUCTS / CLIENTS ===================== */}
        <section
          id="clients"
          className="section-padding relative overflow-hidden"
        >
          <div className="container-x relative z-10">
            <Reveal className="mb-14">
              <span className="eyebrow mx-auto block w-fit">Portfólio</span>
              <h2 className="section-title mt-5">
                Conheça nossos <span className="gradient-text">produtos</span>
              </h2>
              <p className="section-subtitle mt-4">
                Programas e parceiros desenvolvidos pela COSSOFTWARE.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product, index) => (
                <Reveal key={product.title} delay={(index % 3) * 100}>
                  <div className="glass-card group flex h-full flex-col overflow-hidden">
                    <div className="flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-[hsl(var(--foreground)/0.06)] to-[hsl(var(--foreground)/0.01)] p-6">
                      <img
                        src={product.img}
                        alt={product.title}
                        loading="lazy"
                        className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                        style={
                          product.imgMaxSize
                            ? { maxWidth: product.imgMaxSize }
                            : undefined
                        }
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-lg font-semibold">{product.title}</h3>
                        {product.tag && (
                          <span className="shrink-0 rounded-full border bd-line surface-2 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                            {product.tag}
                          </span>
                        )}
                      </div>
                      <p className="mt-1.5 flex-1 text-sm text-muted-foreground">
                        {product.description}
                      </p>
                      {product.link && (
                        <a
                          href={product.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary/90 transition-colors hover:text-primary"
                        >
                          <span className="gradient-text font-semibold">
                            Conhecer
                          </span>
                          <ExternalLink size={14} className="text-violet-400" />
                        </a>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== TECHNOLOGIES ===================== */}
        <section
          id="technologies"
          className="section-padding relative overflow-hidden border-y bd-line-soft surface-1"
        >
          <div className="container-x relative z-10">
            <Reveal className="mb-14">
              <span className="eyebrow mx-auto block w-fit">Stack</span>
              <h2 className="section-title mt-5">
                Nossas <span className="gradient-text">tecnologias</span>
              </h2>
              <p className="section-subtitle mt-4">
                Dominamos as principais linguagens, frameworks e bancos de dados
                do mercado.
              </p>
            </Reveal>

            <Reveal className="flex flex-wrap justify-center gap-4 md:gap-5">
              {technologies.map((tech) => (
                <div
                  key={tech}
                  title={tech}
                  className="group flex h-16 w-16 items-center justify-center rounded-2xl border bd-line surface-1 p-3 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-[hsl(var(--foreground)/0.08)] md:h-20 md:w-20"
                >
                  <img
                    src={`/assets/linguagens/${
                      tech === "sqlserver" ? "sqlserver.svg" : `${tech}.png`
                    }`}
                    alt={tech}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              ))}
            </Reveal>
            <p className="mt-10 text-center text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              e muito mais…
            </p>
          </div>
        </section>

        {/* ===================== TESTIMONIALS ===================== */}
        <section
          id="testimonials"
          className="section-padding relative overflow-hidden"
        >
          <div className="container-x relative z-10">
            <Reveal className="mb-14">
              <span className="eyebrow mx-auto block w-fit">Depoimentos</span>
              <h2 className="section-title mt-5">
                O que dizem <span className="gradient-text">nossos clientes</span>
              </h2>
              <p className="section-subtitle mt-4">
                A confiança de quem já transformou ideias em produtos com a gente.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {testimonials.map((t, index) => (
                <Reveal key={index} delay={(index % 3) * 120}>
                  <figure className="glass-card flex h-full flex-col p-8">
                    <Quote className="h-8 w-8 text-primary/60" />
                    <blockquote className="mt-4 flex-1 text-foreground/90">
                      “{t.quote}”
                    </blockquote>
                    <div className="mt-6 flex items-center gap-1 text-amber-400">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <figcaption className="mt-4 flex items-center gap-3 border-t bd-line pt-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary/40 to-accent/30 text-sm font-bold text-white ring-1 ring-hairline">
                        {t.name
                          .split(" ")
                          .map((w) => w[0])
                          .slice(0, 2)
                          .join("")}
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.role}</p>
                      </div>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
            <p className="mt-8 text-center text-xs text-muted-foreground/70">
              * Depoimentos ilustrativos para demonstração de layout.
            </p>
          </div>
        </section>

        {/* ===================== FAQ ===================== */}
        <section
          id="faq"
          className="section-padding relative overflow-hidden border-y bd-line-soft surface-1"
        >
          <div className="container-x relative z-10">
            <Reveal className="mb-12">
              <span className="eyebrow mx-auto block w-fit">Perguntas frequentes</span>
              <h2 className="section-title mt-5">
                Tudo que você precisa{" "}
                <span className="gradient-text">saber</span>
              </h2>
              <p className="section-subtitle mt-4">
                Respostas rápidas sobre serviços, prazos e orçamentos da
                COSSOFTWARE.
              </p>
            </Reveal>

            <Reveal className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem
                    key={faq.question}
                    value={`faq-${i}`}
                    className="glass-card mb-3 overflow-hidden border-0 px-6"
                  >
                    <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </section>

        {/* ===================== CTA ===================== */}
        <section className="section-padding">
          <div className="container-x">
            <Reveal>
              <div className="glass-card glow relative overflow-hidden p-10 text-center md:p-16">
                <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/25 blur-[100px]" />
                <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-primary/25 blur-[100px]" />
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                    Tem um projeto em mente?
                  </h2>
                  <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                    Use nossa calculadora e receba uma estimativa de custo e
                    prazo em tempo real — sem compromisso.
                  </p>
                  <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                    <Link to="/calculator" className="button-primary text-base">
                      <Calculator className="h-5 w-5" />
                      Calcular meu projeto
                    </Link>
                    <a href="#contact" className="button-ghost text-base">
                      Falar com a equipe
                      <ArrowRight className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ===================== CONTACT ===================== */}
        <section
          id="contact"
          className="section-padding relative overflow-hidden"
        >
          <div className="container-x relative z-10">
            <Reveal className="mb-14">
              <span className="eyebrow mx-auto block w-fit">Contato</span>
              <h2 className="section-title mt-5">
                Entre em <span className="gradient-text">contato</span>
              </h2>
            </Reveal>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
              <Reveal>
                <div className="glass-card h-full p-8">
                  <h3 className="text-xl font-semibold">
                    Informações de contato
                  </h3>
                  <div className="mt-6 space-y-5">
                    <div className="contact-item">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-hairline">
                        <Phone className="h-5 w-5 text-primary" />
                      </span>
                      <span className="text-foreground">+55 67 9129-8385</span>
                    </div>
                    <div className="contact-item">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-hairline">
                        <Mail className="h-5 w-5 text-primary" />
                      </span>
                      <span className="text-foreground">
                        contato@cossoftware.com
                      </span>
                    </div>
                    <div className="contact-item items-start">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-hairline">
                        <MapPin className="h-5 w-5 text-primary" />
                      </span>
                      <span className="text-foreground">
                        Rua Paranaíba, nº 237, Centro, 3º andar – Três Lagoas/MS
                      </span>
                    </div>
                    <div className="border-t bd-line pt-5 text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">CNPJ:</span>{" "}
                      43.943.493/0001-06
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="glass-card h-full p-8">
                  <h3 className="text-xl font-semibold">Envie uma mensagem</h3>
                  <form className="mt-6 space-y-4">
                    <input
                      type="text"
                      placeholder="Nome"
                      className="w-full rounded-xl border bd-line surface-1 px-4 py-3 text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-primary/30"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full rounded-xl border bd-line surface-1 px-4 py-3 text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-primary/30"
                    />
                    <textarea
                      placeholder="Mensagem"
                      rows={5}
                      className="w-full resize-none rounded-xl border bd-line surface-1 px-4 py-3 text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-primary/30"
                    />
                    <button type="submit" className="button-primary w-full">
                      Enviar mensagem
                    </button>
                  </form>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
