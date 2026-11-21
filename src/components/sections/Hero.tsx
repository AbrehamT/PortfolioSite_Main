import React from 'react';
import { Github, Linkedin, Mail, FileText, ArrowUpRight, ArrowRight } from 'lucide-react';
import Sonar, { SonarDot } from '../../ui/Sonar';

// const PinterestEmbed = () => {
//   return (
//     <div style={{ maxWidth: "100%", overflow: "hidden" }}>
//       <iframe
//         src="https://assets.pinterest.com/ext/embed.html?id=139470919704351588"
//         width="345"
//         height="790"
//         style={{ border: "none", maxWidth: "100%" }}
//         scrolling="no"
//         title="Pinterest Embed"
//       ></iframe>
//     </div>
//   );
// };

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/AbrehamT', icon: Github, external: true },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/abrehamt/', icon: Linkedin, external: true },
  { name: 'Email', href: 'mailto:abrehamtadesse95@gmail.com', icon: Mail, external: false },
  { name: 'Resume', href: 'https://drive.google.com/file/d/1nyvb8x2oe8ODD-TXsKloQ-hvGZJ5_HQg/view?usp=sharing', icon: FileText, external: true },
];

const Hero = () => {
  return (
    <section id="home" className="relative pt-28 md:pt-36">
      <div className="container relative">
        {/* Eyebrow */}
        <div className="flex items-center justify-between border-t border-hairline pt-4">
          <p className="label text-muted">
            <span className="text-accent">00</span>
            <span className="mx-2 text-muted/60">/</span>
            Portfolio
          </p>
          <span aria-hidden="true" className="label text-muted">&darr;</span>
        </div>

        {/* Name */}
        <h1 className="display mt-10 text-[clamp(4.25rem,22vw,8.5rem)] text-ink md:mt-14 lg:text-[min(12.5vw,10.5rem)]">
          <span className="block lg:inline">Abreham</span>{' '}
          <span className="block lg:inline">Tadesse</span>
        </h1>

        <div className="mt-12 grid grid-cols-1 items-center gap-14 md:mt-16 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <h2 className="label flex items-center gap-3 text-ink">
              <SonarDot />
              Software Engineer
            </h2>
            <p className="voice mt-6 text-[1.85rem] leading-[1.2] text-ink md:text-[2.4rem]">
              Computer Science student at University of Nevada, Las Vegas with experience in scientific computing, AI/ML, and full-stack development.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="#contact" className="btn btn-accent">
                Get in Touch
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a href="#projects" className="btn btn-ghost">
                View Projects
              </a>
            </div>
          </div>

          <div className="flex justify-center md:col-span-5 md:justify-end">
            <div className="relative aspect-square w-full max-w-[260px] sm:max-w-[300px] md:max-w-[360px]">
              {/* Sonar rings behind the portrait */}
              <Sonar rings={4} pulse className="absolute -inset-[18%]" />
              <div className="absolute inset-[6%] overflow-hidden rounded-full border border-hairline bg-paper">
                <img
                  src="/images/Me.png"
                  alt="Abreham Tadesse"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Pinterest Embed */}
            {/* <div style={{ maxWidth: '100%', overflow: 'hidden' }}>
              <iframe
                src="https://assets.pinterest.com/ext/embed.html?id=139470919704351588"
                width="345"
                height="790"
                style={{ border: 'none', maxWidth: '100%' }}
                scrolling="no"
                title="Pinterest Embed"
              ></iframe>
            </div> */}
          {/* <div style={{ marginTop: '2rem', borderRadius: '12px', overflow: 'hidden' }}>
            <iframe
              src="https://open.spotify.com/embed/playlist/7kalSs40bWw9Ng7pTbUg7R?utm_source=generator"
              width="100%"
              height="152"
              style={{ border: 'none', borderRadius: '12px' }}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify Playlist"
            ></iframe>
          </div> */}
          </div>
        </div>

        {/* Social links */}
        <ul className="mt-20 grid grid-cols-2 border-t border-hairline md:mt-28 md:grid-cols-4">
          {socialLinks.map(({ name, href, icon: Icon, external }, i) => (
            <li
              key={name}
              className={`border-b border-hairline ${i % 2 === 0 ? 'border-r' : ''} md:border-r ${
                i === socialLinks.length - 1 ? 'md:border-r-0' : ''
              }`}
            >
              <a
                href={href}
                {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                className="label group flex min-h-[64px] items-center justify-between gap-3 px-3 text-ink hover:text-accent md:px-5"
              >
                <span className="flex items-center gap-3">
                  <Icon size={18} aria-hidden="true" />
                  {name}
                </span>
                <ArrowUpRight
                  size={16}
                  aria-hidden="true"
                  className="text-muted transition-transform group-hover:text-accent motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
