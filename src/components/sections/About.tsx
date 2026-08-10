import { ShieldCheck, TrendingUp, Users } from 'lucide-react';

const indicators = [
  { icon: TrendingUp, title: '98% delivery consistency', detail: 'Consistent on-time milestones across active projects.' },
  { icon: Users, title: 'Cross-sector experience', detail: 'Trusted by institutions, startups, and enterprise teams.' },
  { icon: ShieldCheck, title: 'Secure-by-default builds', detail: 'Security and maintainability integrated from day one.' },
];

const metrics = [
  { value: '70+', label: 'Products shipped' },
  { value: '15+', label: 'Industry verticals' },
  { value: '24/7', label: 'Critical support' },
];

const About = () => (
  <section id="about" className="bg-background py-20">
    <div className="section-shell space-y-10">
      <div className="max-w-3xl space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">About Orao</p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">A focused technology partner for growth-ready organizations.</h2>
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          We combine product strategy, engineering excellence, and practical execution to deliver solutions that create visible business impact.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {metrics.map((metric) => (
          <article key={metric.label} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <p className="text-3xl font-semibold text-primary">{metric.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{metric.label}</p>
          </article>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {indicators.map((item) => (
          <article key={item.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-smooth hover:-translate-y-0.5">
            <item.icon className="mb-4 h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default About;
