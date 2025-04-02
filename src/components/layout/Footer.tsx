import { useTheme } from "../../context/ThemeContext";
import UmbraLogo from "../common/UmbraLogo";

export default function Footer() {
  const { currentTheme } = useTheme();

  return (
    <footer style={{ borderTop: `1px solid ${currentTheme.colors.secondary}` }} className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <UmbraLogo className="w-6 h-6" />
            <span className="text-sm font-medium"style={{ color: currentTheme.colors.text }}>
              Umbra Theme Family
            </span>
            </div>
            <div className="flex space-x-8">
              <a href="#" className="text-sm" style={{ color: currentTheme.colors.secondaryText }}>Privacy</a>
              <a href="#" className="text-sm" style={{ color: currentTheme.colors.secondaryText }}>Terms</a>
              <a href="#" className="text-sm" style={{ color: currentTheme.colors.secondaryText }}>Contact</a>
            </div>
            <div style={{ color: currentTheme.colors.secondaryText }} className="text-sm mt-4 md:mt-0">
              © 2025 Umbra Themes
            </div>
        </div>
      </div>
    </footer>
  );
}
