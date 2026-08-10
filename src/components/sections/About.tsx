import { Target, Eye, Heart, Users } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Focused execution',
    description: 'We design around business outcomes and ship practical solutions with clear timelines.',
  },
  {
    icon: Users,
    title: 'Trusted partnership',
    description: 'We collaborate closely with teams, communicate clearly, and stay accountable from start to finish.',
  },
  {
    icon: Heart,
    title: 'Quality by default',
    description: 'From architecture to interface details, we prioritize reliability, accessibility, and maintainability.',
  },
];

const About = () => {
  return (
    <section id="about" className="bg-background py-24">
      <div className="mx-auto w-full max-w-6xl space-y-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">About Orao Technologies</p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            A product-minded technology company building systems that scale.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            We help institutions and businesses modernize operations with clean software experiences, secure platforms, and structured implementation support.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-border bg-card p-8 shadow-soft">
            <Target className="mb-4 h-6 w-6 text-accent" />
            <h3 className="text-xl font-semibold text-foreground">Our mission</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Deliver digital products that are simple, reliable, and aligned with real-world user needs.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-card p-8 shadow-soft">
            <Eye className="mb-4 h-6 w-6 text-accent" />
            <h3 className="text-xl font-semibold text-foreground">Our vision</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Become a leading African technology partner known for thoughtful execution and measurable impact.
            </p>
          </article>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <article key={value.title} className="rounded-2xl border border-border bg-card p-6 transition-smooth hover:border-primary/35 hover:shadow-soft">
              <value.icon className="mb-4 h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
