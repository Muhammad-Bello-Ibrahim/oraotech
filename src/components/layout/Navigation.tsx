import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Team', href: '#team' },
  { name: 'SIWES', href: '#siwes' },
  { name: 'Contact', href: '#contact' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
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
        isScrolled ? 'border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85' : 'border-transparent bg-transparent'
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => scrollToSection('#home')}
          className="text-left text-base font-semibold tracking-tight text-primary"
        >
          Orao Technologies
        </button>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="hidden md:block">
          <Button size="sm" onClick={() => scrollToSection('#contact')}>
            Start a project
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {isOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="rounded-md px-3 py-2 text-left text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-primary"
              >
                {item.name}
              </button>
            ))}
            <Button className="mt-2" onClick={() => scrollToSection('#contact')}>
              Start a project
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
