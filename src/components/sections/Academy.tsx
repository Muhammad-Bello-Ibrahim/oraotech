import { useState } from 'react';
import { ArrowRight, BookOpen, BriefcaseBusiness, CheckCircle2, Code2, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';

const featuredProgrammes = [
  {
    icon: Code2,
    title: 'Software Development',
    eyebrow: 'Code track',
    description: 'Build practical websites, apps, APIs, databases, and portfolio projects with mentorship from fundamentals to deployment.',
    outcomes: ['Frontend and backend foundations', 'Git/GitHub collaboration', 'Capstone product build'],
  },
  {
    icon: Palette,
    title: 'Creative Technology',
    eyebrow: 'Design track',
    description: 'Learn brand identity, graphics, UI/UX, social media design, and presentation-ready creative workflows.',
    outcomes: ['CorelDRAW, Photoshop and Canva', 'Logo and visual identity', 'Portfolio-ready projects'],
  },
  {
    icon: BriefcaseBusiness,
    title: 'SIWES & Career Practice',
    eyebrow: 'Work track',
    description: 'A guided practical pathway for students and interns, combining real assignments, supervision, documentation, and workplace readiness.',
    outcomes: ['Structured project supervision', 'Assessment and progress tracking', 'CV and presentation support'],
  },
];

const moreProgrammes = [
  'Digital Skills & Basic Computing',
  'Bootcamps & Short Courses',
  'Developer Workspace & Technology Hub',
  'Mentorship & Professional Development',
  'Workshops, Seminars & Technology Events',
  'Corporate & Institutional Training',
  'Technology & Innovation Programmes',
  'Commercial Technology Services',
];

const Academy = () => {
  const [showAll, setShowAll] = useState(false);
  const scrollToContact = () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="academy" className="overflow-hidden bg-background py-20">
      <div className="section-shell space-y-10">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="space-y-4">
            <p className="inline-flex rounded-full border border-primary/15 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary shadow-soft">
              Orao Academy
            </p>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
              Focused career pathways without the clutter.
            </h2>
          </div>
          <p className="text-base leading-8 text-muted-foreground">
            Inspired by simple career tracks, we now highlight three clear ways to learn: code, design, and workplace practice. Each path is practical, mentor-led, and built around visible projects.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {featuredProgrammes.map((programme, index) => (
            <article
              key={programme.title}
              className="group relative overflow-hidden rounded-[2rem] border border-border bg-card p-6 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-card"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/20 blur-2xl transition-smooth group-hover:scale-125" />
              <div className="relative space-y-7">
                <div className="flex items-center justify-between">
                  <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                    <programme.icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">{programme.eyebrow}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">{programme.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{programme.description}</p>
                </div>
                <ul className="space-y-3">
                  {programme.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-center gap-3 text-sm text-foreground/80">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-dark" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="rounded-[2rem] border border-primary/10 bg-white/75 p-4 shadow-soft backdrop-blur sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-accent/20 p-3 text-accent-dark">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Need another pathway?</h3>
                <p className="text-sm text-muted-foreground">Reveal the complete academy catalogue only when you need it.</p>
              </div>
            </div>
            <Button variant="outline" className="group rounded-full" onClick={() => setShowAll((value) => !value)} aria-expanded={showAll}>
              {showAll ? 'Hide all programmes' : 'View all programmes'}
              <ArrowRight className={`ml-2 h-4 w-4 transition-transform duration-300 ${showAll ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
            </Button>
          </div>

          <div className={`grid transition-all duration-500 ease-out ${showAll ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="overflow-hidden">
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {moreProgrammes.map((programme, index) => (
                  <div
                    key={programme}
                    className="rounded-2xl border border-border bg-background px-4 py-3 text-sm font-medium text-foreground/80 shadow-sm transition-smooth hover:border-primary/25 hover:bg-primary/5"
                    style={{ transitionDelay: showAll ? `${index * 35}ms` : '0ms' }}
                  >
                    {programme}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-5 rounded-[2rem] bg-gradient-to-br from-primary-dark to-primary p-8 text-primary-foreground shadow-soft sm:flex-row sm:items-center">
          <div>
            <h3 className="text-2xl font-semibold">Ready to choose a path?</h3>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-primary-foreground/80">
              Talk to Orao Academy about enrolment, SIWES placement, cohort training, or a custom institutional programme.
            </p>
          </div>
          <Button className="shrink-0 bg-white text-primary hover:bg-white/90" size="lg" onClick={scrollToContact}>
            Contact the academy
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Academy;
