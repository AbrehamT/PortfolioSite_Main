import React, { useState, FormEvent } from 'react';
import { Mail, Linkedin, Github, Phone, Globe, ArrowRight } from 'lucide-react';
import SectionHeading from '../../ui/SectionHeading';


const ContactSection = () => {
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ submitted: true, success: false, message: 'Sending...' });
    
    const formData = new FormData(e.target as HTMLFormElement);
    
    try {
      // Replace with your Formspree form ID
      const response = await fetch('https://formspree.io/f/xnnpwkaa', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });
      
      if (response.ok) {
        setStatus({
          submitted: true,
          success: true,
          message: 'Message sent successfully!'
        });
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus({
          submitted: true,
          success: false,
          message: 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      setStatus({
        submitted: true,
        success: false,
        message: 'An error occurred. Please try again.'
      });
    }
  };
  const contactItems = [
    { label: 'Email', icon: Mail, href: 'mailto:abrehamtadesse95@gmail.com', text: 'abrehamtadesse95@gmail.com', external: false },
    { label: 'Mobile', icon: Phone, href: 'tel:+17028013039', text: '+1-702-801-3039', external: false },
    { label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/abrehamt/', text: 'linkedin.com/in/abreham-t-tadesse-34b78b259/', external: true },
    { label: 'GitHub', icon: Github, href: 'https://github.com/AbrehamT', text: 'github.com/AbrehamT', external: true },
    { label: 'Website', icon: Globe, href: 'http://www.abrehamtadesse.com', text: 'www.abrehamtadesse.com', external: true },
  ];

  const inputClass =
    'block w-full min-h-[48px] rounded-chip border border-hairline bg-bone px-4 py-3 text-base text-ink placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25';

  return (
    <section id="contact" className="pb-24 pt-24 md:pb-36 md:pt-36">
      <div className="container">
        <SectionHeading
          number="04"
          label="Contact"
          title="Get In Touch"
          subtitle="Interested in working together? Let's connect!"
        />

        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
          {/* Contact Info */}
          <div className="md:col-span-5">
            <h3 className="label mb-2 text-muted">Contact Information</h3>
            <ul>
              {contactItems.map(({ label, icon: Icon, href, text, external }) => (
                <li key={label} className="border-t border-hairline last:border-b">
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                    className="group flex min-h-[64px] items-center gap-4 py-3"
                  >
                    <Icon className="flex-shrink-0 text-muted group-hover:text-accent" size={18} aria-hidden="true" />
                    <span className="min-w-0">
                      <span className="label block text-muted">{label}</span>
                      <span className="block text-ink [overflow-wrap:anywhere] group-hover:text-accent">{text}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div className="rounded-card border border-hairline bg-paper p-5 md:col-span-7 md:p-8">
            <h3 className="display text-[2.25rem] text-ink">Send a Message</h3>
            <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="label mb-2 block text-muted">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  className={inputClass}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="label mb-2 block text-muted">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  className={inputClass}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="label mb-2 block text-muted">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className={`${inputClass} resize-y`}
                  placeholder="Your message here..."
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-accent w-full disabled:cursor-not-allowed disabled:opacity-60"
                disabled={status.submitted && !status.success}
              >
                {status.submitted && !status.success ? 'Sending...' : 'Send Message'}
                <ArrowRight size={16} aria-hidden="true" />
              </button>
              {status.message && (
                <p
                  role="status"
                  className={`label text-center ${
                    status.success ? 'text-accent' : status.message === 'Sending...' ? 'text-muted' : 'text-danger'
                  }`}
                >
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
