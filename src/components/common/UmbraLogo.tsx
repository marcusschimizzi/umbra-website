interface UmbraLogoProps {
  className?: string;
}

export default function UmbraLogo({ className = "w-10 h-10" }: UmbraLogoProps) {
  return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className={className}>
      {/* Background circle (deep dark blue-black from Umbra theme) */}
      <circle cx="100" cy="100" r="95" fill="#121218" />
      
      {/* Crescent with gradient */}
      <defs>
        <linearGradient id="fiveColorGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4CAF8F" /> {/* Aurora - Green */}
          <stop offset="25%" stopColor="#61B8D6" /> {/* Nebula - Blue */}
          <stop offset="50%" stopColor="#9D7CD8" /> {/* Nova - Purple */}
          <stop offset="75%" stopColor="#FF9C6A" /> {/* Solar - Orange */}
          <stop offset="100%" stopColor="#E4BF7F" /> {/* Stellar - Gold */}
        </linearGradient>
        
        <radialGradient id="moonShading" cx="90" cy="90" r="110" gradientUnits="userSpaceOnUse">
          <stop offset="75%" stopColor="white" stopOpacity="0" />
          <stop offset="100%" stopColor="#121218" stopOpacity="0.3" />
        </radialGradient>
        
        <mask id="crescentMask">
          <circle cx="100" cy="100" r="70" fill="white" />
          <circle cx="135" cy="100" r="60" fill="black" />
        </mask>
      </defs>
      
      {/* Main crescent shape with 5-color gradient */}
      <g id="fiveColorCrescent">
        <circle cx="100" cy="100" r="70" fill="url(#fiveColorGradient)" mask="url(#crescentMask)" />
        <circle cx="100" cy="100" r="70" fill="url(#moonShading)" mask="url(#crescentMask)" />
      </g>
    </svg>
  );
}
