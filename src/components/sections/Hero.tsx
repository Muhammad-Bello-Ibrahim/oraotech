import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const stats = [
  { value: '70+', label: 'Projects delivered' },
  { value: '35+', label: 'Clients served' },
  { value: '6+', label: 'Years building' },
];

const Hero = () => {
  const scrollTo = (selector: string) => {
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="bg-gradient-hero pt-28 pb-20">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[1fr_0.85fr]">
        <div className="space-y-6">
          <p className="inline-flex rounded-full border border-primary/20 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Real impact, built cleanly
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            We build digital products that move organizations forward.
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Orao Technologies designs and ships software, platforms, and training programs with a sharp focus on measurable outcomes.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" onClick={() => scrollTo('#services')}>
              Explore services
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollTo('#portfolio')}>
              View case studies
            </Button>
          </div>
          <div className="grid gap-4 border-t border-border pt-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-semibold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="image-placeholder min-h-[320px] p-8 sm:min-h-[420px]" aria-label="Hero image placeholder">
          <p>
            Insert compelling hero image here<br />
            <span className="text-xs">Professional team or product showcase visual</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
