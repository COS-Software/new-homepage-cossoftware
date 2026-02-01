import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  CalculatorForm,
  CalculatorSummary,
  calculateProjectCost,
  defaultFormValues,
  formSchema,
} from "@/components/calculator";
import type { FormValues } from "@/components/calculator";
import { APPLICATION_TYPES } from "@/components/calculator/constants";
import { toast } from "@/hooks/use-toast";

const N8N_WEBHOOK_URL =
  (import.meta.env.VITE_N8N_API_URL ?? "http://localhost:5678") + "/webhook/budget";
const WHATSAPP_BASE_URL = "https://wa.me/556791298385";

function buildWhatsAppMessage(
  data: FormValues,
  cost: number,
  timeline: number
): string {
  const applicationLabel =
    APPLICATION_TYPES.find((t) => t.value === data.applicationType)?.label ??
    data.applicationType;
  const lines = [
    "Olá! Gostaria de falar sobre o orçamento do meu projeto.",
    "",
    "*Dados do contato:*",
    `Nome: ${data.contactName}`,
    `Empresa: ${data.organizationName}`,
    `E-mail: ${data.contactEmail}`,
    `Telefone: ${data.contactPhone}`,
    "",
    "*Projeto:*",
    `Nome: ${data.projectName}`,
    `Descrição: ${data.projectDescription}`,
    `Tipo de serviço: ${data.serviceType === "project" ? "Projeto" : "Time"}`,
    `Tipo de aplicação: ${applicationLabel}`,
    "",
    "*Estimativa da calculadora:*",
    `Valor estimado: R$ ${cost.toLocaleString("pt-BR")}`,
    `Prazo estimado: ${timeline} ${timeline === 1 ? "dia" : "dias"}`,
  ];
  return lines.join("\n");
}

const Calculator = () => {
  const [calculation, setCalculation] = useState({ cost: 0, timeline: 0 });
  const [isSending, setIsSending] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultFormValues,
  });

  const developerCount = form.watch("developerCount");
  const featureCount = form.watch("featureCount");

  useEffect(() => {
    const formData = form.getValues();
    if (formData.developerCount > 0 && formData.featureCount > 0) {
      const result = calculateProjectCost(formData);
      setCalculation(result);
    }
  }, [developerCount, featureCount]);

  const onSubmit = (data: FormValues) => {
    const result = calculateProjectCost(data);
    setCalculation(result);
  };

  const onValidSendBudget = async (data: FormValues) => {
    setIsSending(true);
    const result = calculateProjectCost(data);
    const payload = {
      contactName: data.contactName,
      organizationName: data.organizationName,
      contactEmail: data.contactEmail,
      contactPhone: data.contactPhone,
      serviceType: data.serviceType,
      applicationType: data.applicationType,
      projectName: data.projectName,
      projectDescription: data.projectDescription,
      developerCount: data.developerCount,
      featureCount: data.featureCount,
      estimatedValue: result.cost,
      estimatedTime: result.timeline,
    };
    try {
      const res = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const text = await res.text();
      let body: { status?: boolean; message?: string } = {};

      if (text.trim()) {
        try {
          body = JSON.parse(text);
        } catch {
          body = {};
        }
      }
      if (!res.ok) {
        throw new Error(`Erro ao enviar: ${res.status}`);
      }

      if (body.status === true) {
        toast({
          title: "Orçamento enviado",
          description: body.message ?? "Seu orçamento foi enviado para análise. Entraremos em contato em breve.",
        });
      } else {
        toast({
          title: "Erro!",
          description: body.message ?? "Não foi possível processar seu orçamento no momento. Tente novamente ou entre em contato.",
        });
      }
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Erro ao enviar",
        description:
          err instanceof Error ? err.message : "Não foi possível enviar o orçamento. Tente novamente.",
      });
    } finally {
      setIsSending(false);
    }
  };

  const onInvalid = () => {
    toast({
      variant: "destructive",
      title: "Formulário incompleto",
      description: "Preencha todos os campos obrigatórios antes de enviar.",
    });
    document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" });
  };

  const onValidSendBudgetAndGoToWhatsApp = async (data: FormValues) => {
    setIsSending(true);
    const result = calculateProjectCost(data);
    const payload = {
      contactName: data.contactName,
      organizationName: data.organizationName,
      contactEmail: data.contactEmail,
      contactPhone: data.contactPhone,
      serviceType: data.serviceType,
      applicationType: data.applicationType,
      projectName: data.projectName,
      projectDescription: data.projectDescription,
      developerCount: data.developerCount,
      featureCount: data.featureCount,
      estimatedValue: result.cost,
      estimatedTime: result.timeline,
    };
    try {
      await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } finally {
      setIsSending(false);
    }
    const message = buildWhatsAppMessage(data, result.cost, result.timeline);
    const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;
  };

  const handleSendBudget = () => {
    form.handleSubmit(onValidSendBudget, onInvalid)();
  };

  const handleWhatsAppContact = () => {
    form.handleSubmit(onValidSendBudgetAndGoToWhatsApp, onInvalid)();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-20">
        <section
          id="calculator"
          className="relative min-h-[60vh] bg-gradient-to-b from-gray-50 to-white overflow-hidden"
        >
          <div className="absolute inset-0 bg-primary/[0.02] pointer-events-none" />
          <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 relative z-10">
            <div className="text-center mb-10 md:mb-12 animate-fade-in">
              <h1 className="text-3xl md:text-5xl font-bold mb-3 text-foreground">
                Calculadora de <span className="text-primary">Serviços</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Informe as necessidades do seu projeto e veja uma estimativa de
                custo e prazo em tempo real.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
              <div className="lg:col-span-2 space-y-6">
                <CalculatorForm form={form} onSubmit={onSubmit} />
              </div>

              <div className="lg:col-span-1">
                <CalculatorSummary
                calculation={calculation}
                onSendBudget={handleSendBudget}
                onWhatsAppContact={handleWhatsAppContact}
                isSending={isSending}
              />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Calculator;
