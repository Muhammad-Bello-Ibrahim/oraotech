import { Navigate, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import connectrixImage from '@/assets/connectrix.png';
import meSafeImage from '@/assets/mesafe.png';
import shopmonImage from '@/assets/shopmon.png';

type ProjectDetail = {
  title: string;
  category: string;
  overview: string;
  objectives: string[];
  challenge: string;
  solutions: string[];
  impact: string[];
  technologies: string[];
  contributors: string[];
  nextProjectId: string;
  image: string;
};

const projectData: Record<string, ProjectDetail> = {
  connectrix: {
    title: 'Connectrix',
    category: 'Software',
    overview: 'A student operations platform built to improve collections, communication, and engagement workflows.',
    objectives: ['Digitize institution-level dues and records', 'Improve communication between students and administrators'],
    challenge: 'Manual payment and communication processes created delays, disputes, and limited visibility.',
    solutions: ['Unified payment flow and records dashboard', 'Real-time notifications and student engagement modules'],
    impact: ['95% faster payment processing', '80% increase in student participation', '60% reduction in admin workload'],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Payment APIs'],
    contributors: ['Product Manager', 'Frontend Engineer', 'Backend Engineer', 'QA Engineer'],
    nextProjectId: 'mesafe',
    image: connectrixImage,
  },
  mesafe: {
    title: 'meSafe',
    category: 'HealthTech',
    overview: 'A secure health record platform for verified access, continuity of care, and safer patient history management.',
    objectives: ['Protect sensitive patient records', 'Make records portable across clinical touchpoints'],
    challenge: 'Fragmented paper-based records caused delays and critical care handoff issues.',
    solutions: ['Role-based cloud records access', 'Identity-based patient verification workflow'],
    impact: ['99.9% record integrity target', '70% less admin record time', '90% better continuity in treatment flow'],
    technologies: ['React', 'Node.js', 'Cloud Storage', 'Biometric SDK'],
    contributors: ['Health Product Lead', 'Security Engineer', 'Platform Engineer'],
    nextProjectId: 'shopmon',
    image: meSafeImage,
  },
  shopmon: {
    title: 'Shopmon',
    category: 'Ecommerce',
    overview: 'A local commerce platform that connects buyers and sellers by location and category.',
    objectives: ['Improve local business visibility', 'Create safer local transaction discovery'],
    challenge: 'Local businesses had low discoverability and buyers lacked trusted nearby options.',
    solutions: ['Geo-aware listing and search engine', 'Merchant verification and trust-building profiles'],
    impact: ['10,000+ active users in year one', '500+ merchants onboarded', '85% user satisfaction score'],
    technologies: ['React', 'Express', 'Geo APIs', 'Realtime Messaging'],
    contributors: ['Product Designer', 'Frontend Engineer', 'Backend Engineer'],
    nextProjectId: 'connectrix',
    image: shopmonImage,
  },
};

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const project = projectData[projectId || ''];

  if (!project) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <section className="py-16">
          <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.95fr]">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">{project.category}</p>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{project.title}</h1>
              <p className="text-base text-muted-foreground sm:text-lg">{project.overview}</p>
              <ul className="space-y-2">
                {project.objectives.map((objective) => (
                  <li key={objective} className="flex gap-2 text-sm text-muted-foreground"><CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />{objective}</li>
                ))}
              </ul>
            </div>
            <div className="image-placeholder min-h-[320px] overflow-hidden p-0" aria-label={`${project.title} project image`}>
              <img src={project.image} alt={`${project.title} project interface`} className="h-full w-full object-cover" />
            </div>
          </div>
        </section>

        <section className="bg-muted/40 py-16">
          <div className="section-shell grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h2 className="text-2xl font-semibold">Challenge</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.challenge}</p>
            </article>
            <article className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h2 className="text-2xl font-semibold">Solution implemented</h2>
              <ul className="mt-3 space-y-2">
                {project.solutions.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground">• {item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="py-16">
          <div className="section-shell grid gap-6 lg:grid-cols-3">
            {project.impact.map((item) => (
              <article key={item} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <TrendingUp className="h-5 w-5 text-primary" />
                <p className="mt-3 text-sm text-muted-foreground">{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-muted/40 py-16">
          <div className="section-shell grid gap-8 lg:grid-cols-2">
            <article className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h2 className="text-xl font-semibold">Technologies used</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{tech}</span>
                ))}
              </div>
            </article>
            <article className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h2 className="text-xl font-semibold">Contributors</h2>
              <ul className="mt-4 space-y-2">
                {project.contributors.map((name) => (
                  <li key={name} className="text-sm text-muted-foreground">• {name}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="py-16">
          <div className="section-shell flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 text-center shadow-soft">
            <p className="text-sm text-muted-foreground">Next project in portfolio tour</p>
            <Button onClick={() => (window.location.href = `/projects/${project.nextProjectId}`)}>
              View next project
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetailPage;
