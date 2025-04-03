import { useTheme } from "../../context/ThemeContext";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  const { currentTheme } = useTheme();
  const Icon = icon;

  return (
    <div className="p-6 rounded-lg" style={{ backgroundColor: currentTheme.colors.secondary }}>
      <div className="flex items-center mb-4 space-x-3">
        <div className="p-2 rounded-lg" style={{ backgroundColor: currentTheme.colors.tertiary }}>
          <Icon className="w-6 h-6" style={{ color: currentTheme.colors.accent }} />
        </div>
        <h3 className="text-lg font-medium" style={{ color: currentTheme.colors.text }}>{title}</h3>
      </div>
      <p style={{ color: currentTheme.colors.secondaryText }}>{description}</p>
    </div>
  );
}
