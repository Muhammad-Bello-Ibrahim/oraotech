import { Linkedin, Github, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const links = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Academy', href: '#academy' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Team', href: '#team' },
  { name: 'SIWES', href: '#siwes' },
  { name: 'Contact', href: '#contact' },
];

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/oraoacademy', icon: Linkedin },
  { label: 'GitHub', href: 'https://www.github.com/oraoacademy', icon: Github },
  { label: 'Facebook', href: 'https://www.facebook.com/oraoacademy', icon: Facebook },
];

const Footer = () => {
  const navigateToSection = (href: string) => {
    if (window.location.pathname !== '/') {
      window.location.href = `/${href}`;
      return;
    }

    const section = document.querySelector(href);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-white">
      <div className="section-shell grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-primary">Orao Technologies</h2>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            We build useful software, train practical technology talent, and support organizations with calm, reliable digital transformation.
          </p>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> info@oraotechnologies.tech</p>
            <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +234 (90) 325 090 94</p>
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Lagos, Nigeria</p>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-primary">Quick links</h3>
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.name}>
                <button className="text-sm text-muted-foreground hover:text-primary" onClick={() => navigateToSection(link.href)}>
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-primary">Social</h3>
          <div className="flex gap-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-smooth hover:border-primary hover:text-primary"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="section-shell flex flex-col gap-2 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Orao Technologies. All rights reserved.</p>
          <p>Think Bold, Build Smart.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
