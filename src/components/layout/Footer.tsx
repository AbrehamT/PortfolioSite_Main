import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SonarDot } from '../../ui/Sonar';

const Footer = () => {
  const iconLink =
    'inline-flex h-11 w-11 items-center justify-center rounded-chip border border-hairline text-ink-2 hover:border-accent hover:text-accent';

  return (
    <footer className="border-t border-hairline bg-bone text-ink">
      <div className="container py-12 md:py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <a href="#home" className="inline-flex min-h-[44px] items-center gap-3">
              <SonarDot />
              <span className="display text-[2.5rem] md:text-[3rem]">Abreham Tadesse</span>
            </a>
            <p className="label mt-2 text-muted">Software Engineering Student</p>
          </div>

          <div className="flex gap-3">
            <a href="https://github.com/AbrehamT" target="_blank" rel="noreferrer" aria-label="GitHub" className={iconLink}>
              <Github size={18} aria-hidden="true" />
            </a>
            <a href="https://www.linkedin.com/in/abreham-t-tadesse-34b78b259/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className={iconLink}>
              <Linkedin size={18} aria-hidden="true" />
            </a>
            <a href="mailto:abrehamtadesse95@gmail.com" aria-label="Email" className={iconLink}>
              <Mail size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-hairline pt-6 md:flex-row md:justify-between">
          <p className="label text-muted">&copy; {new Date().getFullYear()} Abreham Tadesse. All rights reserved.</p>
          <p className="label text-muted">Built with ❤️ using React &amp; TypeScript</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
