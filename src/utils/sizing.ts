export interface SizeCounts {
  XS: number;
  S: number;
  M: number;
  L: number;
  XL: number;
  XXL: number;
  XXXL: number;
}

/**
 * Calculates sum of all unit counts.
 */
export function calculateTotalUnits(sizes: SizeCounts): number {
  return Object.values(sizes).reduce((acc, curr) => acc + (Number(curr) || 0), 0);
}

/**
 * Checks if total quantity fulfills the jacket style MOQ.
 */
export function checkMoqCompliance(totalUnits: number, moq: number): {
  compliant: boolean;
  shortfall: number;
} {
  const compliant = totalUnits >= moq;
  const shortfall = compliant ? 0 : moq - totalUnits;
  return { compliant, shortfall };
}
