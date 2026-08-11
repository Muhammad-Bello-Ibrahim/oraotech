import { Blocks, Code2, GraduationCap, Lightbulb, Palette, Wrench } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const services = [
  { id: 'nimc-enrollment', icon: Code2, title: 'Software & Product Development', desc: 'Websites, web apps, APIs, databases, dashboards, MVPs, and maintainable internal tools.' },
  { id: 'bvn-enrollment', icon: GraduationCap, title: 'Academy & Institutional Training', desc: 'Digital literacy, programming, design, SIWES, bootcamps, corporate upskilling, and career mentorship.' },
  { id: 'passport-application', icon: Palette, title: 'Creative & Brand Technology', desc: 'Graphics design, UI/UX, social media creative systems, brand identity, and multimedia support.' },
  { id: 'passport-application', icon: Blocks, title: 'Developer Workspace & Hub', desc: 'Coworking, collaboration, code reviews, startup experiments, and supervised project delivery.' },
  { id: 'nimc-enrollment', icon: Lightbulb, title: 'Innovation & MVP Support', desc: 'Prototype planning, technology research, startup incubation, and early-stage product execution.' },
  { id: 'bvn-enrollment', icon: Wrench, title: 'Maintenance & Advisory', desc: 'Software support, technical advisory, digital transformation guidance, and maintenance retainers.' },
];


const Services = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="bg-muted/40 py-20">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Services</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">Everything needed to learn, build, launch, and improve.</h2>
          </div>
          <p className="text-base leading-8 text-muted-foreground">
            Our services are arranged like a calm operating system: train people, build products, support teams, and keep improving the work after launch.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <button
              key={`${service.title}-${service.id}`}
              onClick={() => navigate(`/services/${service.id}`)}
              className="group rounded-3xl border border-border bg-card p-6 text-left shadow-soft transition-smooth hover:-translate-y-1 hover:border-primary/30 hover:shadow-card"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-smooth group-hover:bg-primary group-hover:text-white">
                <service.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.desc}</p>
              <p className="mt-5 text-sm font-medium text-primary">View service details →</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
