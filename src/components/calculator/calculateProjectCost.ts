import {
  HOURS_PER_FEATURE,
  WORK_HOURS_PER_DAY,
  HOURLY_RATE,
} from "./constants";
import type { FormValues } from "./schema";

export type CalculationResult = {
  cost: number;
  timeline: number;
};

export function calculateProjectCost(data: FormValues): CalculationResult {
  const baseCost =
    data.featureCount *
    HOURS_PER_FEATURE *
    (data.developerCount * HOURLY_RATE);
  const cost = Math.round(Math.ceil(baseCost ** 1.02) / 10) * 10;

  const baseTimeline = Math.ceil(
    (data.featureCount * (HOURS_PER_FEATURE / data.developerCount)) /
      WORK_HOURS_PER_DAY
  );
  const timeline = baseTimeline + Math.ceil(baseTimeline / 3);

  return { cost, timeline };
}
