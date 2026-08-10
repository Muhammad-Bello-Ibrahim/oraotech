import { Code, Blocks, Heart, GraduationCap, ShoppingCart, Users, CreditCard, FileText, UserCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    { icon: Code, title: 'Software Development', description: 'Custom software for web, mobile, and operations workflows.', detailPage: null },
    { icon: Blocks, title: 'Blockchain Solutions', description: 'Smart contract and decentralized product development.', detailPage: null },
    { icon: Heart, title: 'Digital Health Systems', description: 'Secure health platforms and patient-focused digital tools.', detailPage: null },
    { icon: GraduationCap, title: 'Educational Technology', description: 'Learning systems, portals, and assessment platforms.', detailPage: null },
    { icon: GraduationCap, title: 'School Management Systems', description: 'Admissions, result management, and institutional automation.', detailPage: null },
    { icon: Users, title: 'Training & Capacity Building', description: 'Practical training in software, AI, and emerging technologies.', detailPage: null },
    { icon: ShoppingCart, title: 'E-commerce Solutions', description: 'Modern commerce platforms with smooth checkout journeys.', detailPage: null },
    { icon: Users, title: 'Enterprise Solutions', description: 'Scalable internal systems for business growth and control.', detailPage: null },
    { icon: UserCheck, title: 'NIMC Enrollment', description: 'Guided NIN enrollment and profile update support.', detailPage: 'nimc-enrollment' },
    { icon: CreditCard, title: 'BVN Enrollment', description: 'End-to-end BVN registration and update assistance.', detailPage: 'bvn-enrollment' },
    { icon: FileText, title: 'Passport Application Assistance', description: 'Documentation and application support for passport processing.', detailPage: 'passport-application' },
    { icon: FileText, title: 'CAC Registration', description: 'Business registration and incorporation support services.', detailPage: 'cac-registration' },
  ];

  return (
    <section id="services" className="bg-muted/35 py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Services</p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Technology services designed for clarity and results.</h2>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            We support startups, institutions, and enterprises with focused solutions across product development and digital operations.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <button
              key={service.title}
              type="button"
              onClick={() => service.detailPage && navigate(`/services/${service.detailPage}`)}
              className="group rounded-2xl border border-border bg-card p-6 text-left shadow-soft transition-smooth hover:-translate-y-0.5 hover:border-primary/30"
            >
              <service.icon className="mb-4 h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              {service.detailPage && <p className="mt-4 text-sm font-medium text-accent">View details →</p>}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
