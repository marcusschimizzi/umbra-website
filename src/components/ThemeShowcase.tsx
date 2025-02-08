import React, { useState } from "react";
import { Sun, Moon, Zap, Github, ExternalLink } from "lucide-react";
import type { Theme, ThemeVariant } from "../types/theme";

const themes: Record<ThemeVariant, Theme> = {
  umbra: {
    name: "Umbra",
    description: "Professional dark theme with balanced contrast",
    icon: Moon,
    colors: {
      bg: "#121218",
      secondary: "#1e1e26",
      text: "#e8e8e8",
      accent: "#4caf8f",
      syntax: ["#4caf8f", "#61b8d6", "#9d7cd8", "#ff9c6a", "#e4bf7f"],
    },
  },
  penumbra: {
    name: "Penumbra",
    description: "Refined light theme with careful attention to eye comfort",
    icon: Sun,
    colors: {
      bg: "#FFFFFF",
      secondary: "#F5F5F7",
      text: "#1a1a1f",
      accent: "#2a916c",
      syntax: ["#2a916c", "#2b82a3", "#7850b4", "#e67e45", "#b88d3c"],
    },
  },
  antumbra: {
    name: "Antumbra",
    description: "High-contrast dark theme with vibrant accents",
    icon: Zap,
    colors: {
      bg: "#0a0a14",
      secondary: "#151522",
      text: "#f8f8ff",
      accent: "#56dba9",
      syntax: ["#56dba9", "#7cd4f1", "#b794f6", "#ffb182", "#ffd700"],
    },
  },
};

export default function ThemeShowcase() {
  const [currentTheme, setCurrentTheme] = useState<ThemeVariant>("umbra");

  function renderCodePreview(theme: Theme) {
    return (
      <div
        className="rounded-lg p-4 font-mono text-sm"
        style={{ backgroundColor: theme.colors.secondary }}
      >
        <pre style={{ color: theme.colors.text }}>
          <span style={{ color: theme.colors.syntax[0] }}>function</span>{" "}
          <span style={{ color: theme.colors.syntax[1] }}>calculateTotal</span>(
          <span style={{ color: theme.colors.syntax[2] }}>items</span>:
          <span style={{ color: theme.colors.syntax[2] }}>Array</span>&lt;
          <span style={{ color: theme.colors.syntax[2] }}>Item</span>&gt;) {"{"}
          {"\n"}
          {"  "}
          <span style={{ color: theme.colors.syntax[0] }}>const</span> total =
          items.
          <span style={{ color: theme.colors.syntax[1] }}>reduce</span>((sum,
          item) {"=>"} {"{"}
          {"\n"}
          {"    "}
          <span style={{ color: theme.colors.syntax[0] }}>return</span> sum +
          item.
          <span style={{ color: theme.colors.syntax[4] }}>price</span> * item.
          <span style={{ color: theme.colors.syntax[4] }}>quantity</span>;{"\n"}
          {"  "}
          {"}"},{"  "}
          <span style={{ color: theme.colors.syntax[4] }}>0</span>);
          {"\n"}
          {"  "}
          <span style={{ color: theme.colors.syntax[0] }}>return</span>{" "}
          <span style={{ color: theme.colors.syntax[3] }}>
            `Total: $${"{"}total{"}"}`
          </span>
          ;{"\n"}
          {"}"}
        </pre>
      </div>
    );
  }

  return (
    <div
      style={{ backgroundColor: themes[currentTheme].colors.bg }}
      className="min-h-screen"
    >
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Moon
            className="w-6 h-6"
            style={{ color: themes[currentTheme].colors.accent }}
          />
          <span
            className="text-xl font-bold"
            style={{ color: themes[currentTheme].colors.text }}
          >
            Umbra Themes
          </span>
        </div>
        <div className="flex space-x-4">
          <a
            href="#"
            className="hover:opacity-80"
            style={{ color: themes[currentTheme].colors.accent }}
          >
            <Github className="w-6 h-6" />
          </a>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1
            className="text-4xl font-bold mb-4"
            style={{ color: themes[currentTheme].colors.text }}
          >
            A theme family for beautiful workflows
          </h1>
          <p
            className="text-lg mb-8"
            style={{ color: themes[currentTheme].colors.text }}
          >
            Three carefully crafted variants designed for visual harmony and
            optimal readability.
          </p>
          <div className="flex justify-center space-x-4">
            {Object.entries(themes).map(([key, theme]) => (
              <button
                key={key}
                onClick={() => setCurrentTheme(key as ThemeVariant)}
                className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-all ${currentTheme === key ? "ring-2" : "opacity-80 hover:opacity-100"}`}
                style={{
                  backgroundColor: theme.colors.secondary,
                  color: theme.colors.text,
                }}
              >
                <theme.icon className="w-5 h-5" />
                <span>{theme.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: themes[currentTheme].colors.text }}
            >
              Code that's easy on the eyes
            </h2>
            <p
              className="mb-4"
              style={{ color: themes[currentTheme].colors.text }}
            >
              Each variant in the Umbra family is crafted with careful attention
              to contrast ratios and color relationships, ensuring comfortable
              viewing for long coding sessions.
            </p>
            {renderCodePreview(themes[currentTheme])}
          </div>
          <div>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: themes[currentTheme].colors.text }}
            >
              Color Palette
            </h2>
            <div className="grid grid-cols-5 gap-4">
              {themes[currentTheme].colors.syntax.map((color, index) => (
                <div key={index} className="space-y-2">
                  <div
                    className="h-12 rounded-lg"
                    style={{ backgroundColor: color }}
                  />
                  <div
                    className="text-sm text-center"
                    style={{ color: themes[currentTheme].colors.text }}
                  >
                    {color}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
