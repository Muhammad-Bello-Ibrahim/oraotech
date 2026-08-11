import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Academy', href: '#academy' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Team', href: '#team' },
  { name: 'SIWES', href: '#siwes' },
  { name: 'Contact', href: '#contact' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToSection = (href: string) => {
    if (window.location.pathname !== '/') {
      window.location.href = `/${href}`;
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-smooth',
        isScrolled ? 'border-border/80 bg-background/95 backdrop-blur' : 'border-transparent bg-transparent',
      )}
    >
      <div className="section-shell flex h-16 items-center justify-between">
        <button onClick={() => navigateToSection('#home')} className="text-base font-semibold tracking-tight text-primary">
          Orao Technologies
        </button>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => navigateToSection(item.href)}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {item.name}
            </button>
          ))}
        </div>

        <Button size="sm" className="hidden md:inline-flex" onClick={() => navigateToSection('#contact')}>
          Talk to us
        </Button>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {isOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="section-shell flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => navigateToSection(item.href)}
                className="rounded-md px-3 py-2 text-left text-sm font-medium text-foreground/80 hover:bg-muted hover:text-primary"
              >
                {item.name}
              </button>
            ))}
            <Button className="mt-2" onClick={() => navigateToSection('#contact')}>
              Talk to us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
