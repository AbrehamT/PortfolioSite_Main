import React from 'react';

interface SectionHeadingProps {
  /** Two-digit section number, e.g. "01" */
  number: string;
  title: string;
  /** Mono label next to the number; defaults to the title */
  label?: string;
  /** Short line in the person's own voice, set in the serif accent */
  subtitle?: string;
}

/**
 * Editorial section header: hairline rule, "01 / Title" mono label,
 * huge condensed display title and a serif-italic subtitle.
 */
const SectionHeading: React.FC<SectionHeadingProps> = ({ number, title, label, subtitle }) => (
  <header className="mb-12 md:mb-20">
    <div className="flex items-center justify-between border-t border-hairline pt-4">
      <p className="label text-muted">
        <span className="text-accent">{number}</span>
        <span className="mx-2 text-muted/60">/</span>
        {label ?? title}
      </p>
      <span aria-hidden="true" className="label text-muted">
        &darr;
      </span>
    </div>
    <h2 className="display mt-8 text-[clamp(3.25rem,15vw,8.5rem)] text-ink md:mt-12">
      {title}
    </h2>
    {subtitle && (
      <p className="voice mt-4 max-w-2xl text-2xl leading-snug text-ink-2 md:mt-6 md:text-[2rem]">
        {subtitle}
      </p>
    )}
  </header>
);

export default SectionHeading;
