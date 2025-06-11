import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRandomFutureDate(daysAhead: number = 30): string {
  const today = new Date();
  const randomOffset = Math.floor(Math.random() * daysAhead);
  const futureDate = new Date(
    today.getTime() + randomOffset * 24 * 60 * 60 * 1000
  );
  return futureDate.toISOString().split("T")[0];
}
