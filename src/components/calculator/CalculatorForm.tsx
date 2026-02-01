import type { UseFormReturn } from "react-hook-form";
import { Calculator as CalculatorIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { ContactFields } from "./ContactFields";
import { ServiceFields } from "./ServiceFields";
import { ProjectFields } from "./ProjectFields";
import type { FormValues } from "./schema";

type CalculatorFormProps = {
  form: UseFormReturn<FormValues>;
  onSubmit: (data: FormValues) => void;
};

export function CalculatorForm({ form, onSubmit }: CalculatorFormProps) {
  const handleSubmit = (data: FormValues) => {
    onSubmit(data);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
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
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
            <div className="space-y-8">
              <ContactFields control={form.control} />
              <ServiceFields control={form.control} />
              <ProjectFields control={form.control} />
            </div>

            <div className="flex justify-center pt-2">
              <Button
                type="submit"
                className="button-primary px-10 py-6 text-base rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/30 transition-shadow"
              >
                Calcular Orçamento
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
