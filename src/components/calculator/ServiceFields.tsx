import { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import type { FormValues } from "./schema";
import { APPLICATION_TYPES } from "./constants";

type ServiceFieldsProps = {
  control: Control<FormValues>;
};

export function ServiceFields({ control }: ServiceFieldsProps) {
  return (
    <>
      <FormField
        control={control}
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
                    field.value === "team"
                      ? "border-primary bg-primary/5"
                      : "border-gray-200"
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
                    field.value === "project"
                      ? "border-primary bg-primary/5"
                      : "border-gray-200"
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
        control={control}
        name="applicationType"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-base font-semibold">
              Tipo de Aplicação
            </FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="h-11 rounded-lg">
                  <SelectValue placeholder="Selecione o tipo de aplicação" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {APPLICATION_TYPES.map((type) => (
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
    </>
  );
}
