import { ArrowRight, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero 1.png';

const stats = [
  { value: '70+', label: 'Products and platforms delivered' },
  { value: '11', label: 'Academy training tracks' },
  { value: '100s', label: 'Students mentored practically' },
];

const Hero = () => {
  const scrollTo = (selector: string) => {
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-hero pt-28 pb-20 sm:pt-32">
      <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
      <div className="section-shell relative grid items-center gap-12 lg:grid-cols-[1fr_0.92fr]">
        <div className="space-y-7">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary shadow-soft backdrop-blur">
            THINK BOLD, BUILD SMART
          </p>
          <div className="space-y-5">
            <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl lg:text-7xl">
              Build better software. Train stronger talent. Grow with confidence.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              Orao Technologies is a gentle, practical technology partner for organizations and students — combining product development, digital transformation, and hands-on academy training under one roof.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" onClick={() => scrollTo('#academy')}>
              Explore the academy
              <GraduationCap className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollTo('#services')}>
              See what we build
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid gap-4 border-t border-border/80 pt-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-white/60 p-4 shadow-soft backdrop-blur">
                <p className="text-3xl font-semibold text-primary">{stat.value}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 top-10 hidden rounded-2xl border border-border bg-white p-4 shadow-card lg:block">
            <p className="text-xs font-medium text-muted-foreground">Academy cohort</p>
            <p className="text-2xl font-semibold text-primary">48 learners</p>
          </div>
          <div className="image-placeholder min-h-[420px] overflow-hidden p-0 sm:min-h-[540px]" aria-label="Orao team collaborating">
            <img src={heroImage} alt="Orao team collaborating in a technology workspace" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 right-6 rounded-2xl border border-border bg-white p-4 shadow-card">
            <p className="text-xs font-medium text-muted-foreground">Workspace rhythm</p>
            <p className="text-lg font-semibold text-foreground">Learn • Build • Launch</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
