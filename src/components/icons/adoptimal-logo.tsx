import type { SVGProps } from 'react';

export function AdOptimalLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24" // Adjusted viewBox for a typical icon size
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5" // Adjusted stroke width for better visibility at small sizes
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" fill="currentColor" stroke="none" opacity="0.1" /> {/* Optional: subtle background circle to give it some body, using primary color with low opacity */}
      <path d="M12 1.75C8.982 1.75 6.13 3.258 4.25 5.46L12 22.25l7.75-16.79C17.87 3.258 15.018 1.75 12 1.75zM1.75 12c0 3.018 1.508 5.87 3.71 7.75L22.25 12 5.46 4.25C3.258 6.13 1.75 8.982 1.75 12zM12 1.75L5.46 19.75h13.08L12 1.75z" transform="matrix(0.8191520442889918,0.573576436351046,-0.573576436351046,0.8191520442889918,5.921820244114044,-2.9218202441140436) rotate(45 12 12)" />
      <path d="M12 4.5C9.762 4.5 7.768 5.43 6.343 6.853L12 19.5l5.657-12.647C16.232 5.43 14.238 4.5 12 4.5zM4.5 12c0 2.238.93 4.232 2.353 5.657L19.5 12l-12.647-5.657C5.43 7.768 4.5 9.762 4.5 12z M12 4.5L6.853 17.157h10.294L12 4.5z" transform="matrix(0.8191520442889918,0.573576436351046,-0.573576436351046,0.8191520442889918,5.921820244114044,-2.9218202441140436) rotate(45 12 12)" opacity="0.6"/>
      <path d="M12 2c-1.956 0-3.83.53-5.464 1.505L12 22l5.464-18.495C15.83 2.53 13.956 2 12 2zm-10 10c0 1.956.53 3.83 1.505 5.464L22 12l-18.495-5.464C2.53 8.17 2 10.044 2 12zm10-10L3.505 17.464h16.99L12 2z" transform="scale(0.833) translate(2.4 2.4)" />

    </svg>
  );
}
