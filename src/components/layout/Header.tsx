import { Github } from "lucide-react";
import { useTheme } from '../../context/ThemeContext';
import UmbraLogo from "../common/UmbraLogo";

export default function Header() {
  const { currentTheme } = useTheme();

  return (  
    <div
      className="sticky top-0 z-10"
      style={{
        backgroundColor: currentTheme.colors.bg,
        borderBottom: `1px solid ${currentTheme.colors.secondary}`
      }}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <UmbraLogo />
          <div>
            <h1 className="text-xl font-bold leading-none" style={{ color: currentTheme.colors.text }}>
              Umbra
            </h1>
            <span className="text-xs"style={{ color: currentTheme.colors.secondaryText }}>
              Theme Family
            </span>
          </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-sm font-medium" style={{ color: currentTheme.colors.secondaryText }}>Features</a>
            <a href="#themes" className="text-sm font-medium" style={{ color: currentTheme.colors.secondaryText }}>Themes</a>
            <a href="#platforms" className="text-sm font-medium" style={{ color: currentTheme.colors.secondaryText }}>Platforms</a>
            <a href="#documentation" className="text-sm font-medium" style={{ color: currentTheme.colors.secondaryText }}>Documentation</a>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/umbra-themes" className="hover:opacity-80" style={{ color: currentTheme.colors.accent }}>
              <Github className="w-5 h-5" />
            </a>
          </div>
      </nav>
    </div>
  )
}
