import { BadgeCheck, Users, School } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Siwes = () => {
  const perks = [
    { title: 'Structured mentorship', desc: 'Weekly guidance from engineers working on real client solutions.', icon: Users },
    { title: 'Hands-on delivery', desc: 'Participate in practical tasks across frontend, backend, and AI tracks.', icon: BadgeCheck },
    { title: 'Certification support', desc: 'Earn verifiable completion recognition for your internship period.', icon: School },
  ];

  return (
    <section id="siwes" className="bg-muted/35 py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">SIWES & Internship</p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Learn in a professional product environment.</h2>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Our SIWES pathway helps students gain practical delivery experience with modern engineering workflows.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {perks.map((perk) => (
            <article key={perk.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <perk.icon className="mb-4 h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">{perk.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{perk.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Training tracks include basic IT, frontend engineering, backend development, AI/ML fundamentals, and blockchain concepts.
          </p>
          <Button className="mt-5" onClick={() => { window.location.href = '/siwes'; }}>
            Apply for SIWES
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Siwes;
