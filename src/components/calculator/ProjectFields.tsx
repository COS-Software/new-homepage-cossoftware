import { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { FormValues } from "./schema";

type ProjectFieldsProps = {
  control: Control<FormValues>;
};

export function ProjectFields({ control }: ProjectFieldsProps) {
  return (
    <div className="border-t border-gray-200 pt-6">
      <h3 className="text-base font-semibold mb-1 flex items-center gap-2">
        <span className="w-1 h-5 rounded-full bg-primary" />
        Informações do Projeto
      </h3>
      <p className="text-sm text-muted-foreground mb-4">
        Nome, descrição e parâmetros para o cálculo.
      </p>
      <div className="space-y-4">
        <FormField
          control={control}
          name="projectName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome do Projeto</FormLabel>
              <FormControl>
                <Input
                  placeholder="Ex: Sistema de Gestão Empresarial"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
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
            control={control}
            name="developerCount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quantidade de Desenvolvedores</FormLabel>
                <FormControl>
                  <Input type="number" min={1} max={5} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="featureCount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quantidade de Funcionalidades</FormLabel>
                <FormControl>
                  <Input type="number" min={1} max={100} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );
}
