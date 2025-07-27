import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getYearsSinceStart(): number {
  const startYear = 2015;
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
}

// Install clsx and tailwind-merge if not already installed
// npm install clsx tailwind-merge