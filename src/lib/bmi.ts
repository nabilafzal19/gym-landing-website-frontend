export type BMICategory =
  | "Underweight"
  | "Normal weight"
  | "Overweight"
  | "Obese";

export function calculateBMI(heightCm: number, weightKg: number): number | null {
  if (!Number.isFinite(heightCm) || !Number.isFinite(weightKg)) return null;
  if (heightCm <= 0 || weightKg <= 0) return null;
  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);
  if (!Number.isFinite(bmi)) return null;
  return Math.round(bmi * 10) / 10;
}

export function parsePositiveNumber(value: string): number | null {
  const trimmed = value.trim();
  if (trimmed === "") return null;
  const num = parseFloat(trimmed);
  if (!Number.isFinite(num) || num <= 0) return null;
  return num;
}

export function getBMICategory(bmi: number): BMICategory {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal weight";
  if (bmi < 30) return "Overweight";
  return "Obese";
}

export function getBMICategoryColor(category: BMICategory): string {
  const colors: Record<BMICategory, string> = {
    Underweight: "text-blue-600",
    "Normal weight": "text-emerald-600",
    Overweight: "text-amber-600",
    Obese: "text-red-600",
  };
  return colors[category];
}
