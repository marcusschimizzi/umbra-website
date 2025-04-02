import { useTheme } from "../../context/ThemeContext";
import themes from "../../data/themes";
import type { ThemeVariant } from "../../types/theme";

export default function ThemeSwitcher() {
  const { activeTheme, setActiveTheme } = useTheme();

  return (  
    <div
      className="flex border rounded-lg overflow-hidden"
      style={{ borderColor: themes[activeTheme].colors.secondary }}
    >
      {Object.entries(themes).map(([key, theme]) => (
        <button
          key={key}
          onClick={() => setActiveTheme(key as ThemeVariant)}
          className="px-4 py-3 flex items-center space-x-2 transition-all"
          style={{
            backgroundColor: activeTheme === key ? theme.colors.secondary : 'transparent',
            color: activeTheme === key ? theme.colors.text : theme.colors.secondaryText,
          }}
        >
          <theme.icon className="w-4 h-4" />
          <span>{theme.name}</span>
        </button>
      ))}
    </div>
  );
}
