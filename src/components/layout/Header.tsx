import React, { useState, useEffect } from 'react';
import { X, Menu, ArrowUpRight } from 'lucide-react';
import { SonarDot } from '../../ui/Sonar';

const RESUME_URL = 'https://drive.google.com/file/d/1bneZCYc-lBn-8gBPIBrYTOinuwss2IHL/view?usp=sharing';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', number: '00' },
    { name: 'Experience', href: '#experience', number: '01' },
    { name: 'Projects', href: '#projects', number: '02' },
    { name: 'Skills', href: '#skills', number: '03' },
    { name: 'Contact', href: '#contact', number: '04' },
  ];

  const solid = scrolled || isMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
        solid ? 'border-hairline bg-bone/90 backdrop-blur-md' : 'border-transparent bg-transparent'
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <a href="#home" className="flex min-h-[44px] items-center gap-3 text-ink">
          <SonarDot />
          <span className="display text-[1.65rem] leading-none tracking-[0.01em]">Abreham Tadesse</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="label flex min-h-[44px] items-center gap-1.5 px-2 text-ink-2 hover:text-accent lg:px-3"
            >
              <span className="text-muted">{link.number}</span>
              {link.name}
            </a>
          ))}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-ink ml-3"
          >
            Resume
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="-mr-2.5 inline-flex h-11 w-11 items-center justify-center rounded-chip text-ink md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav id="mobile-nav" className="border-t border-hairline bg-bone md:hidden" aria-label="Primary mobile">
          <div className="container flex flex-col pb-6 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex min-h-[56px] items-center justify-between border-b border-hairline text-ink hover:text-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="display text-[2.5rem]">{link.name}</span>
                <span className="label text-muted">{link.number}</span>
              </a>
            ))}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ink mt-6 w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
