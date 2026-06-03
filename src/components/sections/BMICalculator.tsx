"use client";

import { useState, useMemo } from "react";
import {
  calculateBMI,
  getBMICategory,
  getBMICategoryColor,
  parsePositiveNumber,
} from "@/lib/bmi";
import { SectionHeading } from "@/components/ui/SectionHeading";

type ResultState =
  | { status: "empty" }
  | { status: "incomplete" }
  | { status: "invalid" }
  | { status: "result"; bmi: number; category: ReturnType<typeof getBMICategory> };

function getResultState(height: string, weight: string): ResultState {
  const heightTrimmed = height.trim();
  const weightTrimmed = weight.trim();

  if (!heightTrimmed && !weightTrimmed) {
    return { status: "empty" };
  }

  const heightCm = parsePositiveNumber(height);
  const weightKg = parsePositiveNumber(weight);

  if (heightCm === null || weightKg === null) {
    if (!heightTrimmed || !weightTrimmed) {
      return { status: "incomplete" };
    }
    return { status: "invalid" };
  }

  const heightOutOfRange = heightCm < 50 || heightCm > 250;
  const weightOutOfRange = weightKg < 20 || weightKg > 300;
  if (heightOutOfRange || weightOutOfRange) {
    return { status: "invalid" };
  }

  const bmi = calculateBMI(heightCm, weightKg);
  if (bmi === null) {
    return { status: "invalid" };
  }

  return { status: "result", bmi, category: getBMICategory(bmi) };
}

const friendlyMessages = {
  empty: {
    title: "Ready when you are",
    message: "Enter your height and weight above to calculate your BMI.",
  },
  incomplete: {
    title: "Almost there",
    message: "Please enter both height and weight to see your result.",
  },
  invalid: {
    title: "Check your values",
    message:
      "Use valid numbers — height between 50–250 cm and weight between 20–300 kg.",
  },
} as const;

export function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const result = useMemo(
    () => getResultState(height, weight),
    [height, weight]
  );

  return (
    <section
      id="bmi"
      className="py-16 sm:py-20 md:py-28"
      aria-labelledby="bmi-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Health Tool"
          title="BMI Calculator"
          description="Estimate your Body Mass Index instantly. For guidance only — consult a trainer for a full assessment."
        />

        <div className="mx-auto w-full max-w-lg rounded-2xl border border-card-border bg-card p-5 sm:p-8 shadow-sm">
          <h3 id="bmi-heading" className="sr-only">
            BMI Calculator
          </h3>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="grid gap-5 sm:grid-cols-2 sm:gap-6"
            aria-label="BMI calculator form"
          >
            <div className="sm:col-span-1">
              <label
                htmlFor="height"
                className="mb-2 block text-sm font-medium text-heading"
              >
                Height (cm)
              </label>
              <input
                id="height"
                type="number"
                inputMode="decimal"
                min="50"
                max="250"
                step="0.1"
                placeholder="e.g. 175"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full min-h-[48px] rounded-lg border border-card-border bg-background px-4 py-3 text-base text-heading placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                aria-describedby="bmi-result"
              />
            </div>
            <div className="sm:col-span-1">
              <label
                htmlFor="weight"
                className="mb-2 block text-sm font-medium text-heading"
              >
                Weight (kg)
              </label>
              <input
                id="weight"
                type="number"
                inputMode="decimal"
                min="20"
                max="300"
                step="0.1"
                placeholder="e.g. 70"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full min-h-[48px] rounded-lg border border-card-border bg-background px-4 py-3 text-base text-heading placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                aria-describedby="bmi-result"
              />
            </div>
          </form>

          <div
            id="bmi-result"
            className="mt-6 sm:mt-8 rounded-xl border border-card-border bg-surface p-5 sm:p-6 text-center"
            aria-live="polite"
            role="status"
          >
            {result.status === "result" ? (
              <>
                <p className="text-xs sm:text-sm text-muted uppercase tracking-wide mb-2">
                  Your BMI
                </p>
                <p className="font-display text-4xl sm:text-5xl font-bold text-heading">
                  {result.bmi}
                </p>
                <p
                  className={`mt-2 text-base sm:text-lg font-semibold ${getBMICategoryColor(result.category)}`}
                >
                  {result.category}
                </p>
                <p className="mt-4 text-[11px] sm:text-xs text-muted leading-relaxed px-1">
                  Underweight &lt;18.5 · Normal 18.5–24.9 · Overweight 25–29.9 ·
                  Obese ≥30
                </p>
              </>
            ) : (
              <>
                <p className="text-sm font-medium text-heading">
                  {friendlyMessages[result.status].title}
                </p>
                <p className="mt-2 text-sm text-muted leading-relaxed max-w-xs mx-auto">
                  {friendlyMessages[result.status].message}
                </p>
                <div
                  className="mt-4 mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-card-border text-muted"
                  aria-hidden
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                    />
                  </svg>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
