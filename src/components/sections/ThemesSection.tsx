import { useTheme } from "../../context/ThemeContext";
import themes from "../../data/themes";
import type { ThemeVariant } from "../../types/theme";
import ThemeCard from "../common/ThemeCard";

export default function ThemesSection() {
  const { currentTheme } = useTheme();

  return (
    <section id="themes" className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: currentTheme.colors.text }}>
        Meet the Family
      </h2>
      <p className="text-center max-w-2xl mx-auto mb-12" style={{ color: currentTheme.colors.secondaryText }}>
        Each variant in the Umbra family serves a specific purpose while maintaining cohesive design patterns
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {Object.entries(themes).map(([key, theme]) => (
          <ThemeCard
            key={key}
            themeKey={key as ThemeVariant}
            theme={theme}
          />
        ))}
      </div>
    </section>
  );
}
