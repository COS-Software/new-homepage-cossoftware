import { useState } from "react";
import type { UseFormReturn } from "react-hook-form";
import {
  User,
  Layers,
  FolderKanban,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { ContactFields } from "./ContactFields";
import { ServiceFields } from "./ServiceFields";
import { ProjectFields } from "./ProjectFields";
import { CalculatorSummary } from "./CalculatorSummary";
import type { FormValues } from "./schema";
import type { CalculationResult } from "./calculateProjectCost";

type CalculatorWizardProps = {
  form: UseFormReturn<FormValues>;
  calculation: CalculationResult;
  isSending: boolean;
  onComputeResult: () => void;
  onSendBudget: () => void;
};

type StepDef = {
  id: string;
  icon: typeof User;
  fields: (keyof FormValues)[];
};

const steps: StepDef[] = [
  {
    id: "project",
    icon: FolderKanban,
    fields: ["projectName", "projectDescription", "developerCount", "featureCount"],
  },
  {
    id: "service",
    icon: Layers,
    fields: ["serviceType", "applicationType"],
  },
  {
    id: "contact",
    icon: User,
    fields: ["contactName", "organizationName", "contactEmail", "contactPhone"],
  },
  {
    id: "result",
    icon: CheckCircle2,
    fields: [],
  },
];

export function CalculatorWizard({
  form,
  calculation,
  isSending,
  onComputeResult,
  onSendBudget,
}: CalculatorWizardProps) {
  const [step, setStep] = useState(0);
  const isResult = step === steps.length - 1;
  const isLastDataStep = step === steps.length - 2;

  const handleNext = async () => {
    const valid = await form.trigger(steps[step].fields);
    if (!valid) return;
    if (isLastDataStep) onComputeResult();
    setStep((s) => Math.min(s + 1, steps.length - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setStep((s) => Math.max(s - 1, 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="mx-auto max-w-3xl">
      {/* Stepper */}
      <div className="mb-8">
        {/* Desktop stepper */}
        <div className="hidden items-center sm:flex">
          {steps.map((s, i) => {
            const Icon = s.icon;
            const done = i < step;
            const active = i === step;
            return (
              <div key={s.id} className="flex flex-1 items-center last:flex-none">
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                      active
                        ? "border-primary bg-primary/15 text-primary-foreground shadow-[0_0_25px_-5px_hsl(239_90%_60%/0.8)]"
                        : done
                          ? "border-primary bg-primary text-primary-foreground"
                          : "bd-line-strong surface-2 text-muted-foreground"
                    }`}
                  >
                    {done ? (
                      <CheckCircle2 className="h-5 w-5" />
                    ) : (
                      <Icon className="h-5 w-5" />
                    )}
                  </div>
                  <span
                    className={`mt-2 text-xs font-medium ${
                      active || done ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {s.title}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className="mx-2 h-0.5 flex-1 overflow-hidden rounded-full surface-3">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                      style={{ width: done ? "100%" : "0%" }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile stepper */}
        <div className="sm:hidden">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="font-semibold text-foreground">
              {steps[step].title}
            </span>
            <span className="text-muted-foreground">
              Passo {step + 1} de {steps.length}
            </span>
          </div>
          <div className="h-2 overflow-hidden rounded-full surface-3">
            <div
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
              style={{ width: `${((step + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {isResult ? (
        <div className="animate-fade-in space-y-6">
          <div className="text-center">
            <span className="eyebrow mx-auto mb-4 inline-flex">
              <Sparkles className="h-3.5 w-3.5" />
              Estimativa pronta
            </span>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Aqui está a estimativa do{" "}
              <span className="gradient-text">seu projeto</span>
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              Valores estimados com base nas informações fornecidas. Para um
              orçamento fechado, fale com a nossa equipe.
            </p>
          </div>

          <CalculatorSummary
            calculation={calculation}
            onSendBudget={onSendBudget}
            isSending={isSending}
          />

          <div className="flex justify-center">
            <Button
              type="button"
              variant="ghost"
              onClick={handleBack}
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Editar dados do projeto
            </Button>
          </div>
        </div>
      ) : (
        <Card className="glass-card overflow-hidden animate-fade-in">
          <CardContent className="p-6 md:p-8">
            <Form {...form}>
              <div key={steps[step].id} className="animate-fade-in space-y-6">
                {steps[step].id === "project" && (
                  <ProjectFields control={form.control} />
                )}
                {steps[step].id === "service" && (
                  <ServiceFields control={form.control} />
                )}
                {steps[step].id === "contact" && (
                  <ContactFields control={form.control} />
                )}
              </div>
            </Form>

            <div className="mt-8 flex items-center justify-between gap-3">
              {step > 0 ? (
                <Button
                  type="button"
                  variant="ghost"
                  onClick={handleBack}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar
                </Button>
              ) : (
                <span />
              )}

              <Button
                type="button"
                onClick={handleNext}
                className="button-primary px-7"
              >
                {isLastDataStep ? "Ver resultado" : "Próximo"}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default CalculatorWizard;
