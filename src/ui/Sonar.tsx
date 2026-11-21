import React from 'react';

interface SonarProps {
  /** Number of static concentric rings */
  rings?: number;
  /** Adds slowly expanding rings (disabled under prefers-reduced-motion) */
  pulse?: boolean;
  className?: string;
}

/**
 * Sonar rings motif: faint concentric circles in the accent colour.
 * Purely decorative; sized by its container via className.
 */
const Sonar: React.FC<SonarProps> = ({ rings = 5, pulse = false, className = '' }) => {
  const radii = Array.from({ length: rings }, (_, i) => ((i + 1) / rings) * 49.5);

  return (
    <div aria-hidden="true" className={`pointer-events-none text-accent ${className}`}>
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" fill="none">
        {radii.map((r, i) => (
          <circle
            key={r}
            cx="50"
            cy="50"
            r={r}
            stroke="currentColor"
            strokeWidth={0.25}
            vectorEffect="non-scaling-stroke"
            opacity={0.5 - (i / rings) * 0.35}
          />
        ))}
      </svg>
      {pulse && (
        <>
          <span className="absolute inset-0 rounded-full border border-current opacity-0 motion-safe:animate-sonar" />
          <span
            className="absolute inset-0 rounded-full border border-current opacity-0 motion-safe:animate-sonar"
            style={{ animationDelay: '1.8s' }}
          />
        </>
      )}
    </div>
  );
};

/** Small status mark: a dot with one pulsing ring. */
export const SonarDot: React.FC<{ className?: string }> = ({ className = '' }) => (
  <span aria-hidden="true" className={`relative inline-flex h-2.5 w-2.5 text-accent ${className}`}>
    <span className="absolute -inset-1.5 rounded-full border border-current opacity-0 motion-safe:animate-sonar" />
    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-current" />
  </span>
);

export default Sonar;
