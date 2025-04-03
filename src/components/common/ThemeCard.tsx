import { useTheme } from "../../context/ThemeContext";
import type { Theme, ThemeVariant } from "../../types/theme";

interface ThemeCardProps {
  themeKey: ThemeVariant;
  theme: Theme;
}

export default function ThemeCard({ themeKey, theme }: ThemeCardProps) {
  const { activeTheme, setActiveTheme } = useTheme();
  const Icon = theme.icon;

  return (
    <div
      className="rounded-lg overflow-hidden border transition-transform hover:scale-105"  
      style={{
        borderColor: theme.colors.secondary,
        backgroundColor: theme.colors.bg,
        boxShadow: activeTheme === themeKey ? `0 0 0 2px ${theme.colors.accent}` : 'none'
      }}
    >
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Icon className="w-5 h-5" style={{ color: theme.colors.accent }} />
          <h3 className="text-xl font-bold" style={{ color: theme.colors.text }}>{theme.name}</h3>
        </div>
        <p className="mb-6" style={{ color: theme.colors.secondaryText }}>{theme.description}</p>
        <div className="grid grid-cols-5 gap-2 mb-4">
          {theme.colors.syntax.map((color, index) => (
            <div key={index} className="h-8 rounded" style={{ backgroundColor: color }} />
          ))}
        </div>
        <button
          onClick={() => setActiveTheme(themeKey)}
          className={`w-full px-4 py-2 rounded text-center text-sm ${activeTheme === themeKey ? '' : 'cursor-pointer'}`}
          style={{
            backgroundColor: activeTheme === themeKey ? theme.colors.accent : theme.colors.secondary,
            color: activeTheme === themeKey ? theme.colors.bg : theme.colors.text
          }}
        >
          {activeTheme === themeKey ? 'Current Theme' : 'Preview Theme'}
        </button>
      </div>
    </div>
  );
}
