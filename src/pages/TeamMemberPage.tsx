import { Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, Github, Globe, Linkedin } from 'lucide-react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import ceoImage from '@/assets/ceo.png';
import presidentImage from '@/assets/ChatGPT Image Sep 14, 2026, 04_36_27 AM (8).png';
import ctoImage from '@/assets/ChatGPT Image Sep 14, 2026, 04_36_26 AM (7).png';
import frontendImage from '@/assets/ChatGPT Image Sep 14, 2026, 04_36_26 AM (6).png';

type MemberProfile = {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  projects: string[];
  socials: { label: string; href: string; icon: typeof Linkedin }[];
  image: string;
};

const members: Record<string, MemberProfile> = {
  'almustapha-ibrahim-gurama': {
    name: 'Almustapha Ibrahim Gurama',
    role: 'President',
    bio: 'Executive leader guiding Orao’s strategic direction, partnerships, and long-term growth delivery.',
    skills: ['Strategic leadership', 'Partnership development', 'Operational governance'],
    projects: ['Institutional transformation programs', 'Cross-sector partnerships'],
    socials: [{ label: 'LinkedIn', href: 'https://linkedin.com/in/almustapha-gurama', icon: Linkedin }],
    image: presidentImage,
  },
  'muhammad-bello-ibrahim': {
    name: 'Muhammad Bello Ibrahim',
    role: 'Chief Executive Officer',
    bio: 'Technology executive leading solution architecture, delivery quality, and client outcomes across portfolios.',
    skills: ['Product delivery', 'Software architecture', 'Team leadership'],
    projects: ['meSafe platform', 'Connectrix delivery operations', 'Enterprise integrations'],
    socials: [
      { label: 'LinkedIn', href: 'https://linkedin.com/in/muhammad-bello-ibrahim', icon: Linkedin },
      { label: 'GitHub', href: 'https://github.com/devmufteem', icon: Github as typeof Linkedin },
    ],
    image: ceoImage,
  },
  'andurrahman-grema': {
    name: 'Engr. Andurrahman Grema',
    role: 'Chief Technology Officer',
    bio: 'Technical lead focused on architecture modernization, advanced systems, and secure engineering practices.',
    skills: ['System architecture', 'Blockchain engineering', 'AI/ML integration'],
    projects: ['Elevatex blockchain systems', 'Libolt advisory intelligence'],
    socials: [{ label: 'LinkedIn', href: 'https://linkedin.com/in/andurrahman-grema', icon: Linkedin }],
    image: ctoImage,
  },
  'abbas-abdullahi': {
    name: 'Abbas Abdullahi',
    role: 'Frontend Lead',
    bio: 'Frontend specialist delivering performant, accessible interfaces with clean component architecture.',
    skills: ['React + TypeScript', 'Design systems', 'Performance optimization'],
    projects: ['Shopmon interface', 'BigTailor frontend', 'Portfolio web experiences'],
    socials: [
      { label: 'LinkedIn', href: 'https://linkedin.com/in/abbas-abdullahi', icon: Linkedin },
      { label: 'Website', href: 'https://oraotechnologies.tech', icon: Globe as typeof Linkedin },
    ],
    image: frontendImage,
  },
};

const TeamMemberPage = () => {
  const { memberId } = useParams();
  const member = members[memberId || ''];

  if (!member) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <section className="py-16">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="image-placeholder min-h-[340px] p-8" aria-label={`${member.name} profile image`}>
              <img src={member.image} alt={`${member.name} profile`} className="h-full w-full object-cover" />
            </div>
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Team member profile</p>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{member.name}</h1>
              <p className="text-lg font-medium text-primary">{member.role}</p>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{member.bio}</p>
              <Button variant="outline" onClick={() => (window.location.href = '/#team')}>
                <ArrowLeft className="h-4 w-4" />
                Back to team
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-muted/40 py-16">
          <div className="section-shell grid gap-8 lg:grid-cols-2">
            <article className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h2 className="text-xl font-semibold">Skills & expertise</h2>
              <ul className="mt-4 space-y-2">
                {member.skills.map((skill) => (
                  <li key={skill} className="text-sm text-muted-foreground">• {skill}</li>
                ))}
              </ul>
            </article>
            <article className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h2 className="text-xl font-semibold">Projects contributed to</h2>
              <ul className="mt-4 space-y-2">
                {member.projects.map((project) => (
                  <li key={project} className="text-sm text-muted-foreground">• {project}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="py-16">
          <div className="section-shell rounded-2xl border border-border bg-card p-8 shadow-soft">
            <h2 className="text-xl font-semibold">Social links</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {member.socials.map((social) => (
                <Button key={social.label} variant="outline" asChild>
                  <a href={social.href} target="_blank" rel="noreferrer">
                    <social.icon className="h-4 w-4" />
                    {social.label}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TeamMemberPage;
