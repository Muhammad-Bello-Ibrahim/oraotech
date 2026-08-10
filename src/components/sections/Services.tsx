import { Code2, Blocks, HeartPulse, GraduationCap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const services = [
  { id: 'nimc-enrollment', icon: Code2, title: 'Software Development', desc: 'Custom web and platform solutions built for scale and reliability.' },
  { id: 'bvn-enrollment', icon: Blocks, title: 'Blockchain Solutions', desc: 'Smart contracts and decentralized workflows for secure operations.' },
  { id: 'passport-application', icon: HeartPulse, title: 'Digital Health Systems', desc: 'Patient-first systems for secure records and service delivery.' },
  { id: 'nimc-enrollment', icon: GraduationCap, title: 'Education Technology', desc: 'Learning and training platforms that improve measurable outcomes.' },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="bg-muted/40 py-20">
      <div className="section-shell">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Services</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Four core capabilities for high-impact digital delivery.</h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <button
              key={`${service.title}-${service.id}`}
              onClick={() => navigate(`/services/${service.id}`)}
              className="rounded-2xl border border-border bg-card p-6 text-left shadow-soft transition-smooth hover:border-primary/30 hover:shadow-card"
            >
              <service.icon className="h-5 w-5 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
              <p className="mt-4 text-sm font-medium text-primary">View service details →</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
