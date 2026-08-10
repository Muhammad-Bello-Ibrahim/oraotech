import { Mail, Phone, MapPin, Linkedin, Github, Facebook } from 'lucide-react';

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Team', href: '#team' },
  { name: 'SIWES', href: '#siwes' },
  { name: 'Contact', href: '#contact' },
];

const socials = [
  { icon: Linkedin, href: 'https://www.linkedin.com/oraoacademy', label: 'LinkedIn' },
  { icon: Github, href: 'https://www.github.com/oraoacademy', label: 'GitHub' },
  { icon: Facebook, href: 'https://www.facebook.com/oraoacademy', label: 'Facebook' },
];

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div className="space-y-5">
          <h2 className="text-xl font-semibold">Orao Technologies</h2>
          <p className="max-w-md text-sm leading-relaxed text-primary-foreground/80">
            We design and build modern software, digital infrastructure, and training programs for organizations that want measurable results.
          </p>
          <div className="space-y-2 text-sm text-primary-foreground/80">
            <p className="flex items-center gap-2"><Mail className="h-4 w-4" />info@oraotechnologies.tech</p>
            <p className="flex items-center gap-2"><Phone className="h-4 w-4" />+234 (90) 325 090 94</p>
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4" />Lagos, Nigeria</p>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary-foreground/70">Navigate</h3>
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm text-primary-foreground/85 transition-colors hover:text-accent"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary-foreground/70">Connect</h3>
          <div className="flex gap-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-primary-foreground/25 text-primary-foreground/85 transition-colors hover:border-accent hover:text-accent"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-primary-foreground/65 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Orao Technologies. All rights reserved.</p>
          <p>Think Bold, Build Smart.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
