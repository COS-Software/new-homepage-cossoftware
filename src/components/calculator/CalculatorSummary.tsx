import {
  Calculator as CalculatorIcon,
  Clock,
  DollarSign,
  Loader2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { CalculationResult } from "./calculateProjectCost";

type CalculatorSummaryProps = {
  calculation: CalculationResult;
  onSendBudget: () => void;
  isSending: boolean;
};

export function CalculatorSummary({
  calculation,
  onSendBudget,
  isSending,
}: CalculatorSummaryProps) {
  return (
    <div className="lg:sticky lg:top-24 animate-fade-in">
      <Card className="glass-card overflow-hidden">
        <CardHeader className="bg-gradient-to-b from-primary/15 to-transparent pb-4 border-b bd-line">
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
              R$ {calculation.cost.toLocaleString("pt-BR")}
            </p>
          </div>
          <div className="rounded-xl bg-primary/5 p-4 border border-primary/10">
            <div className="flex items-center gap-2 text-muted-foreground mb-1">
              <Clock size={18} className="text-primary" />
              <span className="text-sm font-medium">Prazo estimado</span>
            </div>
            <p className="text-xl font-bold text-primary">
              {calculation.timeline}{" "}
              {calculation.timeline === 1 ? "dia" : "dias"}
            </p>
          </div>
          <Button
            type="button"
            onClick={onSendBudget}
            disabled={isSending}
            className="w-full rounded-lg button-primary"
            title="Enviar orçamento para análise"
          >
            {isSending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                Enviar orçamento
                <ArrowRight className="ml-1 h-4 w-4" />
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
