import { useMemo, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import connectrixImage from '@/assets/connectrix.png';
import meSafeImage from '@/assets/mesafe.png';
import shopmonImage from '@/assets/shopmon.png';

const projects = [
  { id: 'connectrix', title: 'Connectrix', category: 'Software', description: 'Student operations platform that improved collections and engagement by over 80%.', image: connectrixImage },
  { id: 'mesafe', title: 'meSafe', category: 'HealthTech', description: 'Secure health records platform improving care continuity across facilities.', image: meSafeImage },
  { id: 'shopmon', title: 'Shopmon', category: 'Ecommerce', description: 'Location-based marketplace connecting communities to local merchants.', image: shopmonImage },
  { id: 'elevatex', title: 'Elevatex', category: 'Blockchain', description: 'Smart-contract powered referral system with transparent reward tracking.' },
  { id: 'lectrocloud', title: 'Lectrocloud', category: 'EdTech', description: 'Cloud learning platform that increased student participation and completion.' },
  { id: 'vrs-data', title: 'VRS Data', category: 'Software', description: 'High-availability utility transaction service handling thousands of daily requests.' },
];

const Portfolio = () => {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = useMemo(() => (showAll ? projects : projects.slice(0, 3)), [showAll]);

  return (
    <section id="portfolio" className="bg-background py-20">
      <div className="section-shell">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Portfolio</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Featured work with measurable outcomes.</h2>
          <p className="text-base text-muted-foreground">Showing 3 featured projects first. Expand to explore the full project portfolio.</p>
        </div>

        <div className="mt-10 overflow-hidden">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((project, index) => (
              <article
                key={project.id}
                className="rounded-2xl border border-border bg-card p-5 shadow-soft transition-smooth hover:-translate-y-0.5"
                style={{ animation: showAll && index >= 3 ? 'fade-in-up 300ms ease forwards' : undefined }}
              >
                <div className="image-placeholder min-h-[140px] overflow-hidden p-0" aria-label={`${project.title} project image`}>
                  {project.image ? <img src={project.image} alt={`${project.title} project interface`} className="h-full w-full object-cover" /> : <p className="p-4 text-xs">Project image coming soon</p>}
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-accent">{project.category}</p>
                <h3 className="mt-2 text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
                <Button variant="ghost" className="mt-4 px-0 hover:bg-transparent" onClick={() => navigate(`/projects/${project.id}`)}>
                  View project
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Button variant="outline" onClick={() => setShowAll((prev) => !prev)}>
            {showAll ? 'Show Featured Only' : 'View All Projects'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
