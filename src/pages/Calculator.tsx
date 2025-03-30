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
  Home, 
  ArrowLeft, 
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
  const [showResults, setShowResults] = useState(false);
  const [calculation, setCalculation] = useState({
    cost: 0,
    timeline: 0
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
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
      calculateProjectCost(formData, false);
    }
  }, [developerCount, featureCount]);

  const calculateProjectCost = (data: FormValues, changeResults: boolean = true) => {
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
    
    if (changeResults) {
      setShowResults(true);
    }
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
      <header className="fixed w-full z-50 bg-white shadow-md py-2">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center">
              <img 
                src="/assets/logo.png" 
                alt="COSSOFTWARE" 
                className="h-10 mr-2"
              />
              <h1 className="text-2xl font-bold text-primary">COSSOFTWARE</h1>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="nav-link">
              <span className="flex items-center gap-1">
                <Home size={16} />
                Home
              </span>
            </Link>
            <Link to="/calculator" className="nav-link">
              <span className="flex items-center gap-1">
                <CalculatorIcon size={16} />
                Calculadora
              </span>
            </Link>
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
              <Link 
                to="/" 
                className="block py-2 nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="flex items-center gap-2">
                  <Home size={16} />
                  Home
                </span>
              </Link>
              <Link 
                to="/calculator" 
                className="block py-2 nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="flex items-center gap-2">
                  <CalculatorIcon size={16} />
                  Calculadora
                </span>
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow pt-20">
        <section id="calculator" className="bg-white">
          <div className="container mx-auto px-4 md:px-6 py-12">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Calculadora de Serviços</h1>
              <p className="text-lg text-center mb-12">
                Calcule o custo estimado do seu projeto baseado nas suas necessidades
              </p>
              
              <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-8 animate-fade-in">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="space-y-6">
                      <FormField
                        control={form.control}
                        name="serviceType"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel className="text-lg font-medium">Tipo de Serviço</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                              >
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="team" id="team" />
                                  <label htmlFor="team" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Escalar um time de desenvolvedores para seu projeto
                                  </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="project" id="project" />
                                  <label htmlFor="project" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Contratar nosso serviço para um projeto
                                  </label>
                                </div>
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
                            <FormLabel className="text-lg font-medium">Tipo de Aplicação</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
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

                      <div className="border-t pt-6">
                        <h3 className="text-lg font-medium mb-4">Informações do Projeto</h3>
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

                    <div className="flex justify-center pt-4">
                      <Button type="submit" className="button-primary px-8 py-6">
                        Calcular Orçamento
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>

              {showResults && (
                <Card className="animate-scale-in">
                  <CardHeader>
                    <CardTitle>Resultados do Orçamento</CardTitle>
                    <CardDescription>
                      Baseado nas informações fornecidas, segue abaixo nosso orçamento estimado:
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
                        <DollarSign size={48} className="text-primary mb-2" />
                        <h3 className="text-lg font-semibold mb-1">Orçamento Estimado</h3>
                        <p className="text-3xl font-bold text-primary">
                          R$ {calculation.cost.toLocaleString('pt-BR')}
                        </p>
                      </div>
                      
                      <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
                        <Clock size={48} className="text-primary mb-2" />
                        <h3 className="text-lg font-semibold mb-1">Prazo de Entrega</h3>
                        <p className="text-3xl font-bold text-primary">
                          {calculation.timeline} {calculation.timeline === 1 ? 'dia' : 'dias'}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col items-center">
                    <p className="text-center text-sm text-gray-500 mb-4">
                      Este é apenas um orçamento estimado. Para um orçamento mais preciso, entre em contato conosco.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button variant="outline" onClick={() => setShowResults(false)}>
                        Voltar ao Formulário
                      </Button>
                      <a href="https://wa.me/5567993369450">
                        <Button>
                          Entrar em Contato
                        </Button>
                      </a>
                    </div>
                  </CardFooter>
                </Card>
              )}
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
