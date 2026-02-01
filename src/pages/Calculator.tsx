import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {
  RadioGroup,
  RadioGroupItem
} from "@/components/ui/radio-group";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { 
  Menu,
  X,
  Calculator as CalculatorIcon,
  Clock,
  DollarSign
} from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

// Constants for calculation
const HOURS_PER_FEATURE = 5;
const WORK_HOURS_PER_DAY = 5;
const HOURLY_RATE = 80; // R$

// Form schema
const formSchema = z.object({
  contactName: z.string().min(2, {
    message: "Informe seu nome completo",
  }),
  organizationName: z.string().min(2, {
    message: "Informe o nome da organização ou empresa",
  }),
  contactEmail: z.string().email({
    message: "Informe um e-mail válido",
  }),
  contactPhone: z.string().min(10, {
    message: "Informe um telefone válido (com DDD)",
  }),
  serviceType: z.enum(["team", "project"]),
  applicationType: z.string().min(1, {
    message: "Por favor selecione o tipo de aplicação",
  }),
  detailLevel: z.enum(["simple", "detailed"]),
  projectName: z.string().min(3, {
    message: "Nome do projeto deve ter pelo menos 3 caracteres",
  }),
  projectDescription: z.string().min(10, {
    message: "Por favor forneça uma descrição mais detalhada",
  }),
  developerCount: z.coerce.number().min(1, {
    message: "É necessário pelo menos 1 desenvolvedor",
  }).max(5, {
    message: "Máximo de 5 desenvolvedores permitido",
  }),
  featureCount: z.coerce.number().min(1, {
    message: "É necessário pelo menos 1 funcionalidade",
  }).max(100, {
    message: "Máximo de 100 funcionalidades permitido",
  }),
  integrationCount: z.coerce.number().optional(),
  simultaneousAccessCount: z.coerce.number().optional(),
  database: z.string().optional(),
  serverCount: z.coerce.number().optional(),
  notificationCount: z.coerce.number().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const Calculator = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [calculation, setCalculation] = useState({
    cost: 0,
    timeline: 0
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      contactName: "",
      organizationName: "",
      contactEmail: "",
      contactPhone: "",
      serviceType: "project",
      applicationType: "",
      detailLevel: "simple",
      projectName: "",
      projectDescription: "",
      developerCount: 1,
      featureCount: 1,
      integrationCount: 0,
      simultaneousAccessCount: 0,
      database: "",
      serverCount: 0,
      notificationCount: 0,
    },
  });

  const detailLevel = form.watch("detailLevel");
  const developerCount = form.watch("developerCount");
  const featureCount = form.watch("featureCount");

  useEffect(() => {
    const formData = form.getValues();
    if (formData.developerCount > 0 && formData.featureCount > 0) {
      calculateProjectCost(formData);
    }
  }, [developerCount, featureCount]);

  const calculateProjectCost = (data: FormValues) => {
    // Calculate project cost
    const baseCost = data.featureCount * HOURS_PER_FEATURE * (data.developerCount * HOURLY_RATE);
    const cost = Math.round(Math.ceil(baseCost ** 1.02) / 10) * 10;
    
    // Calculate timeline in days
    const baseTimeline = Math.ceil((data.featureCount * (HOURS_PER_FEATURE / data.developerCount)) / WORK_HOURS_PER_DAY);
    const timeline = baseTimeline + Math.ceil(baseTimeline / 3);
    
    setCalculation({
      cost,
      timeline
    });
  };

  const onSubmit = (data: FormValues) => {
    calculateProjectCost(data);
  };

  const applicationTypes = [
    { value: "multi", label: "Multiplataforma (várias opções)" },
    { value: "web", label: "Aplicativo Web" },
    { value: "mobile", label: "Aplicativo Mobile" },
    { value: "site", label: "Site institucional" },
    { value: "integration", label: "Integração de Sistemas" },
    { value: "automation", label: "Aplicação de automação" },
    { value: "desktop", label: "Aplicação Desktop" },
    { value: "games", label: "Jogos e Aplicações Lúdicas" },
    { value: "other", label: "Outros (especificar)" },
  ];

  const databaseOptions = [
    { value: "mysql", label: "MySQL" },
    { value: "postgresql", label: "PostgreSQL" },
    { value: "mongodb", label: "MongoDB" },
    { value: "sqlserver", label: "SQL Server" },
    { value: "oracle", label: "Oracle" },
    { value: "other", label: "Outro" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm py-3">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src="/assets/logo.png" 
              alt="COSSOFTWARE" 
              className="h-9 mr-1"
            />
            <h1 className="text-xl font-bold text-primary group-hover:opacity-90 transition-opacity">COSSOFTWARE</h1>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="nav-link text-sm font-medium">Voltar ao site</Link>
            <span className="text-muted-foreground text-sm font-medium">Calculadora</span>
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
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg animate-fade-in">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
              <Link 
                to="/" 
                className="block py-3 px-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Voltar ao site
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow pt-20">
        <section id="calculator" className="relative min-h-[60vh] bg-gradient-to-b from-gray-50 to-white overflow-hidden">
          <div className="absolute inset-0 bg-primary/[0.02] pointer-events-none" />
          <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 relative z-10">
            <div className="text-center mb-10 md:mb-12 animate-fade-in">
              <h1 className="text-3xl md:text-5xl font-bold mb-3 text-foreground">
                Calculadora de <span className="text-primary">Serviços</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Informe as necessidades do seu projeto e veja uma estimativa de custo e prazo em tempo real.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
              {/* Form column */}
              <div className="lg:col-span-2 space-y-6">
                <Card className="border-0 shadow-lg shadow-gray-200/50 overflow-hidden animate-fade-in">
                  <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10 border-b">
                    <CardTitle className="flex items-center gap-2">
                      <CalculatorIcon className="h-5 w-5 text-primary" />
                      Dados do Projeto
                    </CardTitle>
                    <CardDescription>
                      Preencha os campos abaixo para obter o orçamento estimado.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 md:p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="space-y-8">
                      <div className="border-b border-gray-200 pb-6">
                        <h3 className="text-base font-semibold mb-1 flex items-center gap-2">
                          <span className="w-1 h-5 rounded-full bg-primary" />
                          Dados do Contato
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">Informações para retorno do orçamento.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="contactName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Nome completo</FormLabel>
                                <FormControl>
                                  <Input placeholder="Seu nome" className="rounded-lg" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="organizationName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Nome da organização / empresa</FormLabel>
                                <FormControl>
                                  <Input placeholder="Nome da empresa ou organização" className="rounded-lg" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="contactEmail"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>E-mail</FormLabel>
                                <FormControl>
                                  <Input type="email" placeholder="seu@email.com" className="rounded-lg" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="contactPhone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Telefone (com DDD)</FormLabel>
                                <FormControl>
                                  <Input placeholder="(67) 91234-5678" className="rounded-lg" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>

                      <FormField
                        control={form.control}
                        name="serviceType"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel className="text-base font-semibold">Tipo de Serviço</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                              >
                                <label
                                  htmlFor="team"
                                  className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all hover:border-primary/50 hover:bg-primary/5 ${
                                    field.value === "team" ? "border-primary bg-primary/5" : "border-gray-200"
                                  }`}
                                >
                                  <RadioGroupItem value="team" id="team" className="shrink-0" />
                                  <span className="text-sm font-medium">
                                    Escalar um time de desenvolvedores
                                  </span>
                                </label>
                                <label
                                  htmlFor="project"
                                  className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all hover:border-primary/50 hover:bg-primary/5 ${
                                    field.value === "project" ? "border-primary bg-primary/5" : "border-gray-200"
                                  }`}
                                >
                                  <RadioGroupItem value="project" id="project" className="shrink-0" />
                                  <span className="text-sm font-medium">
                                    Contratar serviço para um projeto
                                  </span>
                                </label>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="applicationType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-semibold">Tipo de Aplicação</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-11 rounded-lg">
                                  <SelectValue placeholder="Selecione o tipo de aplicação" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {applicationTypes.map((type) => (
                                  <SelectItem key={type.value} value={type.value}>
                                    {type.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* <FormField
                        control={form.control}
                        name="detailLevel"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel className="text-lg font-medium">Nível de Detalhamento</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                              >
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="simple" id="simple" />
                                  <label htmlFor="simple" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Simples
                                  </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="detailed" id="detailed" />
                                  <label htmlFor="detailed" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Detalhado
                                  </label>
                                </div>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      /> */}

                      <div className="border-t border-gray-200 pt-6">
                        <h3 className="text-base font-semibold mb-1 flex items-center gap-2">
                          <span className="w-1 h-5 rounded-full bg-primary" />
                          Informações do Projeto
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">Nome, descrição e parâmetros para o cálculo.</p>
                        <div className="space-y-4">
                          <FormField
                            control={form.control}
                            name="projectName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Nome do Projeto</FormLabel>
                                <FormControl>
                                  <Input placeholder="Ex: Sistema de Gestão Empresarial" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="projectDescription"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Descrição do Projeto</FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="Descreva brevemente o que o seu projeto deve fazer"
                                    className="resize-none h-24"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="developerCount"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Quantidade de Desenvolvedores</FormLabel>
                                  <FormControl>
                                    <Input 
                                      type="number" 
                                      min="1" 
                                      max="5" 
                                      {...field} 
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="featureCount"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Quantidade de Funcionalidades</FormLabel>
                                  <FormControl>
                                    <Input 
                                      type="number" 
                                      min="1" 
                                      max="100" 
                                      {...field} 
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          {detailLevel === "detailed" && (
                            <div className="space-y-4 animate-fade-in">
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <FormField
                                  control={form.control}
                                  name="integrationCount"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Quantidade de Integrações</FormLabel>
                                      <FormControl>
                                        <Input type="number" min="0" {...field} />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />

                                <FormField
                                  control={form.control}
                                  name="simultaneousAccessCount"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Acessos Simultâneos</FormLabel>
                                      <FormControl>
                                        <Input type="number" min="1" {...field} />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </div>

                              <FormField
                                control={form.control}
                                name="database"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Banco de Dados</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                      <FormControl>
                                        <SelectTrigger>
                                          <SelectValue placeholder="Selecione o banco de dados" />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent>
                                        {databaseOptions.map((db) => (
                                          <SelectItem key={db.value} value={db.value}>
                                            {db.label}
                                          </SelectItem>
                                        ))}
                                      </SelectContent>
                                    </Select>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <FormField
                                  control={form.control}
                                  name="serverCount"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Quantidade de Servidores</FormLabel>
                                      <FormControl>
                                        <Input type="number" min="1" {...field} />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />

                                <FormField
                                  control={form.control}
                                  name="notificationCount"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Emails/SMS/Notificações</FormLabel>
                                      <FormControl>
                                        <Input type="number" min="0" {...field} />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center pt-2">
                      <Button type="submit" className="button-primary px-10 py-6 text-base rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/30 transition-shadow">
                        Calcular Orçamento
                      </Button>
                    </div>
                  </form>
                </Form>
                  </CardContent>
                </Card>

              </div>

              {/* Live preview sidebar */}
              <div className="lg:col-span-1">
                <div className="lg:sticky lg:top-24 animate-fade-in">
                  <Card className="border-2 border-primary/10 shadow-lg overflow-hidden">
                    <CardHeader className="bg-gradient-to-b from-primary/10 to-transparent pb-4">
                      <CardTitle className="text-base flex items-center gap-2">
                        <CalculatorIcon className="h-4 w-4 text-primary" />
                        Resumo em tempo real
                      </CardTitle>
                      <CardDescription className="text-xs">
                        Atualiza conforme você preenche
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-5 space-y-4">
                      <div className="rounded-xl bg-primary/5 p-4 border border-primary/10">
                        <div className="flex items-center gap-2 text-muted-foreground mb-1">
                          <DollarSign size={18} className="text-primary" />
                          <span className="text-sm font-medium">Estimativa</span>
                        </div>
                        <p className="text-xl font-bold text-primary">
                          R$ {calculation.cost.toLocaleString('pt-BR')}
                        </p>
                      </div>
                      <div className="rounded-xl bg-primary/5 p-4 border border-primary/10">
                        <div className="flex items-center gap-2 text-muted-foreground mb-1">
                          <Clock size={18} className="text-primary" />
                          <span className="text-sm font-medium">Prazo estimado</span>
                        </div>
                        <p className="text-xl font-bold text-primary">
                          {calculation.timeline} {calculation.timeline === 1 ? 'dia' : 'dias'}
                        </p>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Orçamento estimado. Para valor fechado, entre em contato.
                      </p>
                      <a href="https://wa.me/556791298385" className="block">
                        <Button className="w-full rounded-lg bg-green-600 hover:bg-green-700">
                          Entrar em Contato (WhatsApp)
                        </Button>
                      </a>
                      <Button className="w-full rounded-lg mt-3 bg-primary hover:bg-primary/90 text-primary-foreground" title="Enviar orçamento para análise">
                        Enviar orçamento para análise
                      </Button>
                    </CardContent>
                  </Card>
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
                <li><a href="/#clients" className="text-gray-400 hover:text-white transition-colors">Clientes</a></li>
                <li><a href="/#contact" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-400">
                  <span>+55 67 9129-8385</span>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
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
    </div>
  );
};

export default Calculator;
