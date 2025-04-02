import React from "react";
import type { Theme } from "../types/theme";
import Header from "./layout/Header";
import { ThemeProvider, useTheme } from "../context/ThemeContext";
import Footer from "./layout/Footer";
import ThemesSection from "./sections/ThemesSection";

function ThemeContainer({ children }: { children: React.ReactNode }) {
  const { currentTheme } = useTheme();

  return (
    <div style={{ backgroundColor: currentTheme.colors.bg }} className="min-h-screen">
      {children}
    </div>
  );
}

export default function ThemeShowcase() {

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
    <ThemeProvider>
      <ThemeContainer>
        <Header />
        <main>
          <ThemesSection />
        </main>
        <Footer />
      </ThemeContainer>
    </ThemeProvider>
  );
}
