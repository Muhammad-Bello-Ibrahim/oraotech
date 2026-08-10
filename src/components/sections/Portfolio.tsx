import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Building, Users, Heart, ShoppingCart, GraduationCap, Blocks } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const navigate = useNavigate();

  const categories = ['All', 'Software', 'Blockchain', 'HealthTech', 'EdTech', 'Ecommerce', 'EdServices'];

  const projects = [
    { id: 'connectrix', title: 'Connectrix', category: 'Software', description: 'Dues collection and student engagement platform for higher institutions.', icon: Users },
    { id: 'mesafe', title: 'meSafe', category: 'HealthTech', description: 'Digital health record management with secure cloud workflows.', icon: Heart },
    { id: 'shopmon', title: 'Shopmon', category: 'Ecommerce', description: 'Location-based marketplace connecting local buyers and sellers.', icon: ShoppingCart },
    { id: 'elevatex', title: 'Elevatex', category: 'Blockchain', description: 'Referral-driven financial model powered by smart contracts.', icon: Blocks },
    { id: 'bigtailor', title: 'BigTailor', category: 'Ecommerce', description: 'Tailoring-focused e-commerce platform with virtual fitting concept.', icon: ShoppingCart },
    { id: 'lectrocloud', title: 'Lectrocloud', category: 'EdTech', description: 'Cloud student engagement platform for university ecosystems.', icon: GraduationCap },
    { id: 'libolt', title: 'Libolt', category: 'EdServices', description: 'JAMB practice system with guidance and progress analytics.', icon: GraduationCap },
    { id: 'arks-xpress', title: 'Arks Xpress', category: 'Ecommerce', description: 'Local e-commerce and payment solution for Nigerian businesses.', icon: Building },
    { id: 'vrs-data', title: 'VRS Data', category: 'Software', description: 'Virtual top-up utility platform for airtime and bills.', icon: Building },
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="portfolio" className="bg-background py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Portfolio</p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Selected projects across industries.</h2>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            We build products that solve practical challenges in education, commerce, finance, and healthcare.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article key={project.id} className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-smooth hover:border-primary/35 hover:shadow-card">
              <project.icon className="h-5 w-5 text-primary" />
              <h3 className="mt-4 text-lg font-semibold text-foreground">{project.title}</h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-accent">{project.category}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
              <Button variant="ghost" className="mt-4 px-0 text-primary hover:bg-transparent hover:text-accent" onClick={() => navigate(`/projects/${project.id}`)}>
                View project
                <ExternalLink className="h-4 w-4" />
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
