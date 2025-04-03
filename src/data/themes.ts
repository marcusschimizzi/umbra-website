import { Moon, Sun, Zap } from "lucide-react";
import type { Theme, ThemeVariant } from "../types/theme";

const themes: Record<ThemeVariant, Theme> = {
  umbra: {
    name: 'Umbra',
    description: 'Professional dark theme with balanced contrast',
    icon: Moon,
    colors: {
      bg: '#121218',
      secondary: '#1e1e26',
      tertiary: '#2a2a36',
      text: '#e8e8e8',
      secondaryText: '#909090',
      accent: '#4caf8f',
      syntax: [
        '#4caf8f',
        '#61b8d6',
        '#9d7cd8',
        '#ff9c6a',
        '#e4bf7f',
      ],
    },
  },
  penumbra: {
    name: 'Penumbra',
    description: 'Refined light theme with careful attention to eye comfort',
    icon: Sun,
    colors: {
      bg: '#ffffff',
      secondary: '#f5f5f7',
      tertiary: '#e8e8ea',
      text: '#1a1a1f',
      secondaryText: '#4a4a57',
      accent: '#2a916c',
      syntax: [
        '#2a916c',
        '#2b82a3',
        '#7850b4',
        '#e67e45',
        '#b88d3c',
      ],
    },
  },
  antumbra: {
    name: 'Antumbra',
    description: 'High-contrast dark theme with vibrant accents',
    icon: Zap,
    colors: {
      bg: '#0a0a14',
      secondary: '#151522',
      tertiary: '#1e1e2f',
      text: '#f8f8ff',
      secondaryText: '#a0a0b2',
      accent: '#56dba9',
      syntax: [
        '#56dba9',
        '#7cd4f1',
        '#b794f6',
        '#ffb182',
        '#ffd700',
      ],
    },
  },
};

export default themes;
