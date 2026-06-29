import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Seo from "@/components/seo/Seo";
import {
  CalculatorWizard,
  calculateProjectCost,
  defaultFormValues,
  formSchema,
} from "@/components/calculator";
import type { FormValues, CalculationResult } from "@/components/calculator";
import { usePageTheme } from "@/components/theme/ThemeProvider";
import { toast } from "@/hooks/use-toast";
import {
  createLead,
  normalizePhone,
  type ApplicationType,
  type LeadPayload,
} from "@/lib/api";

function buildLeadPayload(
  data: FormValues,
  result: CalculationResult
): LeadPayload {
  return {
    contactName: data.contactName.trim(),
    contactPhone: normalizePhone(data.contactPhone),
    organizationName: data.organizationName?.trim() || null,
    contactEmail: data.contactEmail?.trim() || null,
    serviceType: data.serviceType,
    applicationType: data.applicationType as ApplicationType,
    projectName: data.projectName?.trim() || null,
    projectDescription: data.projectDescription?.trim() || null,
    developerCount: Number(data.developerCount),
    featureCount: Number(data.featureCount),
    estimatedValue: Number(result.cost),
    estimatedTime: Number(result.timeline),
  };
}

const Calculator = () => {
  usePageTheme("light");
  const navigate = useNavigate();

  const [calculation, setCalculation] = useState({ cost: 0, timeline: 0 });
  const [isSending, setIsSending] = useState(false);
  const [leadSent, setLeadSent] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultFormValues,
  });

  // Calcula a estimativa e já registra o lead assim que o usuário chega ao resultado.
  const handleComputeResult = async () => {
    const data = form.getValues();
    const result = calculateProjectCost(data);
    setCalculation(result);

    setIsSending(true);
    try {
      await createLead(buildLeadPayload(data, result));
      setLeadSent(true);
    } catch (err) {
      setLeadSent(false);
      toast({
        variant: "destructive",
        title: "Erro ao registrar orçamento",
        description:
          err instanceof Error
            ? err.message
            : "Não foi possível registrar seu orçamento. Tente novamente.",
      });
    } finally {
      setIsSending(false);
    }
  };

  // O botão de confirmação leva o usuário à página de agradecimento.
  const handleSendBudget = () => {
    navigate("/obrigado", {
      state: {
        calculation,
        contactName: form.getValues("contactName"),
        leadSent,
      },
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Seo
        title="Calculadora de Serviços | Estimativa de Custo e Prazo"
        description="Calcule em tempo real o custo e o prazo do seu projeto de software com a COSSOFTWARE. Responda alguns passos rápidos e receba uma estimativa gratuita, sem compromisso."
        path="/calculator"
      />
      <Header />

      <main className="flex-grow pt-24">
        <section
          id="calculator"
          className="relative min-h-[60vh] overflow-hidden"
        >
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-primary/15 blur-[130px] animate-glow-pulse" />
          <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 relative z-10">
            <div className="text-center mb-10 md:mb-12 animate-fade-in">
              <span className="eyebrow mx-auto mb-5 block w-fit">
                Estimativa em tempo real
              </span>
              <h1 className="text-3xl md:text-5xl font-bold mb-3 tracking-tight">
                Calculadora de <span className="gradient-text">Serviços</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Responda alguns passos rápidos e veja a estimativa de custo e
                prazo do seu projeto.
              </p>
            </div>

            <CalculatorWizard
              form={form}
              calculation={calculation}
              isSending={isSending}
              onComputeResult={handleComputeResult}
              onSendBudget={handleSendBudget}
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Calculator;
