import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const stats = [
  { number: '50+', label: 'Projects delivered' },
  { number: '25+', label: 'Happy clients' },
  { number: '5+', label: 'Years of experience' },
  { number: '10+', label: 'Core technologies' },
];

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl items-center px-4 pt-24 pb-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-8">
          <p className="inline-flex rounded-full border border-primary-foreground/25 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground/80">
            Think Bold, Build Smart
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Clean technology solutions for modern organizations.
          </h1>
          <p className="text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            Orao Technologies builds dependable software, digital health systems, and educational platforms that are simple to use and built to last.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" onClick={() => scrollToSection('#services')}>
              Explore services
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10" onClick={() => scrollToSection('#contact')}>
              Talk to our team
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-5 border-t border-primary-foreground/20 pt-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-semibold sm:text-3xl">{stat.number}</p>
                <p className="mt-1 text-sm text-primary-foreground/75">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
