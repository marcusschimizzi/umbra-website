import { Download } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import ThemeSwitcher from "../common/ThemeSwitcher";
import UmbraLogo from "../common/UmbraLogo";
import CodePreview from "../common/CodePreview";

export default function HeroSection() {
  const { currentTheme } = useTheme();

  return (
    <section className="py-20 container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="flex justify-center mb-6">
          <UmbraLogo />
        </div>
        <h1 className="text-5xl font-bold mb-6" style={{ color: currentTheme.colors.text }}>
          A Theme Family for Extended Development Sessions
        </h1>
        <p className="text-xl mb-10" style={{ color: currentTheme.colors.secondaryText }}>
          Three carefully crafted variant designed for visual harmony and optimal readability
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#download"
            className="px-5 py-3 rounded-lg font-medium flex items-center space-x-2 transition-opacity hover:opacity-90"
            style={{ backgroundColor: currentTheme.colors.accent, color: currentTheme.colors.bg }}
          >
            <Download className="w-5 h-5" />
            <span>Download Now</span>
          </a>
          <ThemeSwitcher />
        </div>
      </div>

      <div className="rounded-xl overflow-hidden border shadow-xl"
        style={{ borderColor: currentTheme.colors.secondary }}
      >
        <CodePreview />
      </div>
    </section>
  );
}
