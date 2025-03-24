import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// TODO: Figure out how to structure with our own utils folder

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
