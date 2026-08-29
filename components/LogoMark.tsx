export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      {/* Back page */}
      <path
        d="M14 10 L40 10 L40 52 L14 52 Z"
        fill="#8C6420"
        opacity="0.55"
      />
      {/* Middle page */}
      <path
        d="M18 8 L44 8 L44 50 L18 50 Z"
        fill="#B8862B"
        opacity="0.8"
      />
      {/* Front page */}
      <path d="M22 6 L50 6 L50 48 L22 48 Z" fill="#D8A93D" />
      {/* Folded flag corner */}
      <path d="M50 6 L50 20 L36 6 Z" fill="#C4212E" />
      {/* Page lines */}
      <rect x="27" y="16" width="18" height="2.4" rx="1.2" fill="#0A0E16" opacity="0.45" />
      <rect x="27" y="23" width="18" height="2.4" rx="1.2" fill="#0A0E16" opacity="0.45" />
      <rect x="27" y="30" width="12" height="2.4" rx="1.2" fill="#0A0E16" opacity="0.45" />
    </svg>
  );
}
