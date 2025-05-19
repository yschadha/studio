import type { SVGProps } from 'react';

export function AdOptimalLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props} // fill="currentColor" will be passed if set on the component, or path can have it directly
    >
      <path
        d="M12 0C12 0 11.25 11.25 0 12C11.25 12.75 12 24 12 24C12 24 12.75 12.75 24 12C12.75 11.25 12 0 12 0Z"
        fill="currentColor" // Ensures the path itself uses the current text color
      />
    </svg>
  );
}
