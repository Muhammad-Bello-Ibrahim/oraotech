import { ArrowRight, BadgeCheck, BookOpen, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import siwesMentorshipImage from '@/assets/siwes 1.png';
import siwesLearningImage from '@/assets/siwes 2.png';
import siwesCareerImage from '@/assets/siwes 3.png';

const points = [
  { icon: Users, title: 'Mentorship', desc: 'Work directly with active engineers and product teams.', image: siwesMentorshipImage },
  { icon: BookOpen, title: 'Practical learning', desc: 'Build portfolio-ready features, not just tutorials.', image: siwesLearningImage },
  { icon: BadgeCheck, title: 'Career readiness', desc: 'Gain references and workplace collaboration experience.', image: siwesCareerImage },
];

const Siwes = () => (
  <section id="siwes" className="bg-muted/40 py-20">
    <div className="section-shell">
      <div className="max-w-3xl space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">SIWES Program</p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Hands-on internship experience for future builders.</h2>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {points.map((point) => (
          <article key={point.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <img src={point.image} alt={point.title} className="h-36 w-full rounded-xl object-cover" />
            <point.icon className="h-5 w-5 text-primary" />
            <h3 className="mt-4 text-lg font-semibold">{point.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{point.desc}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-soft sm:flex sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">Applications are open for design, frontend, backend, and AI learning tracks.</p>
        <Button className="mt-4 sm:mt-0" onClick={() => (window.location.href = '/siwes')}>
          Explore SIWES page
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  </section>
);

export default Siwes;
