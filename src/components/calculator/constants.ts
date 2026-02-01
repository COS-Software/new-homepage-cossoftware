// Constantes para o cálculo de orçamento
export const HOURS_PER_FEATURE = 5;
export const WORK_HOURS_PER_DAY = 5;
export const HOURLY_RATE = 80; // R$

export const APPLICATION_TYPES = [
  { value: "multi", label: "Multiplataforma (várias opções)" },
  { value: "web", label: "Aplicativo Web" },
  { value: "mobile", label: "Aplicativo Mobile" },
  { value: "site", label: "Site institucional" },
  { value: "integration", label: "Integração de Sistemas" },
  { value: "automation", label: "Aplicação de automação" },
  { value: "desktop", label: "Aplicação Desktop" },
  { value: "games", label: "Jogos e Aplicações Lúdicas" },
  { value: "other", label: "Outros (especificar)" },
] as const;
