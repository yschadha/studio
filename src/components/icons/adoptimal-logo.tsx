import type { SVGProps } from 'react';

export function AdOptimalLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 200 100" // Added for proper scaling
      xmlns="http://www.w3.org/2000/svg"
      {...props} // Spread props here to allow overriding fill, stroke, className, style, width, height etc.
    >
      <defs>
        <linearGradient id="adOptimalLogoGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#0A2342', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#0A2342', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      {/* The background <rect width="200" height="100" fill="#F5F7FA"/> was removed for a transparent background */}
      <text
        x="10"
        y="65"
        fontFamily="Avenir Book, Arial, sans-serif"
        fontSize="40"
        fill="url(#adOptimalLogoGrad)"
        fontWeight="bold"
      >
        AdOptimal
      </text>
      <circle cx="175" cy="30" r="10" fill="#FFD100" />
    </svg>
  );
}
