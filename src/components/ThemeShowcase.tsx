import React from "react";
import Header from "./layout/Header";
import { ThemeProvider, useTheme } from "../context/ThemeContext";
import Footer from "./layout/Footer";
import ThemesSection from "./sections/ThemesSection";
import HeroSection from "./sections/HeroSection";

function ThemeContainer({ children }: { children: React.ReactNode }) {
  const { currentTheme } = useTheme();

  return (
    <div style={{ backgroundColor: currentTheme.colors.bg }} className="min-h-screen">
      {children}
    </div>
  );
}

export default function ThemeShowcase() {

  return (
    <ThemeProvider>
      <ThemeContainer>
        <Header />
        <main>
          <HeroSection />
          <ThemesSection />
        </main>
        <Footer />
      </ThemeContainer>
    </ThemeProvider>
  );
}
