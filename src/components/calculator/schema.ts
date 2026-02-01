import { z } from "zod";

export const formSchema = z.object({
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
});

export type FormValues = z.infer<typeof formSchema>;

export const defaultFormValues: FormValues = {
  contactName: "",
  organizationName: "",
  contactEmail: "",
  contactPhone: "",
  serviceType: "project",
  applicationType: "",
  projectName: "",
  projectDescription: "",
  developerCount: 1,
  featureCount: 1,
};
