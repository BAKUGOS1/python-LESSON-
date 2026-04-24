/**
 * Custom SVG icons for CodeChai brand identity.
 * All icons follow Lucide conventions: 24×24 viewBox, currentColor, 2px stroke.
 */

export function ChaiCupIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Cup body */}
      <path d="M17 8H3v8a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V8z" />
      {/* Handle */}
      <path d="M17 10h1a3 3 0 0 1 0 6h-1" />
      {/* Steam lines */}
      <path d="M6 1v3" />
      <path d="M10 1v3" />
      <path d="M14 1v3" />
    </svg>
  );
}

export function CodeBracketIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
