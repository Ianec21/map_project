import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isHexColorCode(color: string): boolean {
  // Hex color code regex pattern
  const hexColorRegex = /^#?([a-fA-F0-9]{3}|[a-fA-F0-9]{6})$/;

  return hexColorRegex.test(color);
}

export function generateRandomHexColor(): string {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor.padStart(6, '0')}`;
}