import type { LucideIcon } from "lucide-react";

export interface ThemeColors {
  bg: string;
  secondary: string;
  tertiary: string;
  text: string;
  secondaryText: string;
  accent: string;
  syntax: string[];
}

export interface Theme {
  name: string;
  description: string;
  icon: LucideIcon;
  colors: ThemeColors;
}

export type ThemeVariant = "umbra" | "penumbra" | "antumbra";
