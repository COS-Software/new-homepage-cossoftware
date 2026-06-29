export const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL ?? "http://localhost:3000"
).replace(/\/+$/, "");

export type ServiceType = "team" | "project";

export type ApplicationType =
  | "multi"
  | "web"
  | "mobile"
  | "site"
  | "integration"
  | "automation"
  | "desktop"
  | "games"
  | "other";

export type LeadPayload = {
  contactName: string;
  contactPhone: string;
  organizationName?: string | null;
  contactEmail?: string | null;
  serviceType?: ServiceType;
  applicationType?: ApplicationType;
  projectName?: string | null;
  projectDescription?: string | null;
  developerCount?: number;
  featureCount?: number;
  estimatedValue?: number;
  estimatedTime?: number;
};

export type Lead = LeadPayload & {
  id: string;
  status: string;
  createdAt: string;
};

/**
 * Normaliza um telefone para apenas dígitos com DDI do Brasil (55).
 * Aceita entradas com máscara, espaços, parênteses, etc.
 */
export function normalizePhone(raw: string | null | undefined): string {
  const digits = (raw ?? "").replace(/\D/g, "");
  if (!digits) return "";
  // Já possui DDI (12 = fixo, 13 = celular com 9).
  if (digits.length >= 12 && digits.startsWith("55")) return digits;
  return `55${digits}`;
}

/**
 * Remove campos vazios (string vazia / nulo / indefinido) do payload,
 * para não enviar strings vazias ao backend.
 */
function pruneEmpty<T extends Record<string, unknown>>(obj: T): Partial<T> {
  return Object.fromEntries(
    Object.entries(obj).filter(([, value]) => {
      if (value === null || value === undefined) return false;
      if (typeof value === "string") return value.trim().length > 0;
      return true;
    })
  ) as Partial<T>;
}

/**
 * Cria um lead no backend.
 * Lança um Error com a mensagem retornada pelo servidor (res.error) em caso de falha.
 */
export async function createLead(payload: LeadPayload): Promise<Lead> {
  const res = await fetch(`${API_BASE_URL}/api/leads`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(pruneEmpty(payload as Record<string, unknown>)),
  });

  console.log({ payload: pruneEmpty(payload as Record<string, unknown>) });
  let data: unknown = null;
  try {
    data = await res.json();
  } catch {
    data = null;
  }

  if (!res.ok) {
    const message =
      (data as { error?: string } | null)?.error ??
      `Não foi possível enviar seus dados (${res.status}).`;
    throw new Error(message);
  }

  return data as Lead;
}
