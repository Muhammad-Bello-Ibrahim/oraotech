import { Leaf, ShieldCheck, TrendingUp, Users } from 'lucide-react';

const indicators = [
  { icon: Leaf, title: 'Gentle discovery', detail: 'We slow down enough to understand people, process, constraints, and desired outcomes before building.' },
  { icon: TrendingUp, title: 'Practical delivery', detail: 'Every project and training programme is structured around useful milestones, feedback, and visible progress.' },
  { icon: Users, title: 'Talent development', detail: 'Our academy gives learners supervised practice, teamwork experience, and career guidance.' },
  { icon: ShieldCheck, title: 'Secure-by-default builds', detail: 'Security, maintainability, documentation, and handover are considered from day one.' },
];

const metrics = [
  { value: '70+', label: 'Products shipped' },
  { value: '11', label: 'Academy categories' },
  { value: '24/7', label: 'Critical support mindset' },
];

const About = () => (
  <section id="about" className="bg-background py-20">
    <div className="section-shell space-y-10">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">About Orao</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">Technology work with a calmer pace and a clearer purpose.</h2>
        </div>
        <p className="text-base leading-8 text-muted-foreground sm:text-lg">
          Inspired by product-led clarity, Orao Technologies brings software engineering, academy training, developer workspace support, and commercial technology services into one thoughtful ecosystem.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {metrics.map((metric) => (
          <article key={metric.label} className="rounded-3xl border border-border bg-card p-6 shadow-soft">
            <p className="text-3xl font-semibold text-primary">{metric.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{metric.label}</p>
          </article>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {indicators.map((item) => (
          <article key={item.title} className="rounded-3xl border border-border bg-card p-6 shadow-soft transition-smooth hover:-translate-y-0.5">
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
