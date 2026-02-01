import { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { FormValues } from "./schema";

type ContactFieldsProps = {
  control: Control<FormValues>;
};

export function ContactFields({ control }: ContactFieldsProps) {
  return (
    <div className="border-b border-gray-200 pb-6">
      <h3 className="text-base font-semibold mb-1 flex items-center gap-2">
        <span className="w-1 h-5 rounded-full bg-primary" />
        Dados do Contato
      </h3>
      <p className="text-sm text-muted-foreground mb-4">
        Informações para retorno do orçamento.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField
          control={control}
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
          control={control}
          name="organizationName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome da organização / empresa</FormLabel>
              <FormControl>
                <Input
                  placeholder="Nome da empresa ou organização"
                  className="rounded-lg"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="contactEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  className="rounded-lg"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="contactPhone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefone (com DDD)</FormLabel>
              <FormControl>
                <Input
                  placeholder="(67) 91234-5678"
                  className="rounded-lg"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
