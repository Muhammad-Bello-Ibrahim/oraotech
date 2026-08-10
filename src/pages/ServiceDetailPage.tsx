import { Navigate, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Layers, Target } from 'lucide-react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

type ServiceDetail = {
  title: string;
  overview: string;
  benefits: string[];
  deliverables: string[];
  useCases: string[];
  related: { id: string; label: string }[];
};

const serviceData: Record<string, ServiceDetail> = {
  'nimc-enrollment': {
    title: 'Software Development Services',
    overview: 'We design and engineer secure, scalable software that aligns with business outcomes and measurable KPIs.',
    benefits: ['Faster digital delivery cycles', 'Reliable architecture for growth', 'Improved team productivity and automation'],
    deliverables: ['Product discovery and roadmap', 'UI implementation with responsive design', 'Backend APIs, testing, and deployment support'],
    useCases: ['Internal operations platform for large institutions', 'Client-facing web products for startups'],
    related: [
      { id: 'bvn-enrollment', label: 'Blockchain Solutions' },
      { id: 'passport-application', label: 'Digital Health Systems' },
    ],
  },
  'bvn-enrollment': {
    title: 'Blockchain Solutions',
    overview: 'We implement smart-contract and distributed workflows for transparent, auditable, and tamper-resistant operations.',
    benefits: ['Traceable transactions', 'Reduced manual reconciliation', 'Transparent partner and payout workflows'],
    deliverables: ['Architecture and protocol selection', 'Smart contract implementation and review', 'Dashboard and analytics integration'],
    useCases: ['Referral and incentive platforms', 'Cross-organization audit logging'],
    related: [
      { id: 'nimc-enrollment', label: 'Software Development Services' },
      { id: 'passport-application', label: 'Digital Health Systems' },
    ],
  },
  'passport-application': {
    title: 'Digital Health Systems',
    overview: 'We build health-tech products that improve patient record integrity, service continuity, and operational speed.',
    benefits: ['Secure patient data flows', 'Improved care continuity', 'Faster intake and service processes'],
    deliverables: ['Clinical workflow mapping', 'Secure records platform design', 'Operational analytics and support handover'],
    useCases: ['Digital clinic operations', 'Multi-facility patient record access'],
    related: [
      { id: 'nimc-enrollment', label: 'Software Development Services' },
      { id: 'bvn-enrollment', label: 'Blockchain Solutions' },
    ],
  },
};

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const service = serviceData[serviceId || ''];

  if (!service) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <section className="py-16">
          <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Service detail</p>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{service.title}</h1>
              <p className="text-base text-muted-foreground sm:text-lg">{service.overview}</p>
              <Button onClick={() => (window.location.href = '/#contact')}>
                Start a consultation
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="image-placeholder min-h-[300px] p-8" aria-label="Service hero image placeholder">
              <p>Insert service showcase image here</p>
            </div>
          </div>
        </section>

        <section className="bg-muted/40 py-16">
          <div className="section-shell grid gap-6 md:grid-cols-3">
            {service.benefits.map((benefit) => (
              <article key={benefit} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <Target className="h-5 w-5 text-primary" />
                <p className="mt-3 text-sm text-muted-foreground">{benefit}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="py-16">
          <div className="section-shell grid gap-8 lg:grid-cols-2">
            <article className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h2 className="text-2xl font-semibold">Features & deliverables</h2>
              <ul className="mt-4 space-y-3">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted-foreground"><CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />{item}</li>
                ))}
              </ul>
            </article>
            <article className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h2 className="text-2xl font-semibold">Use cases / case studies</h2>
              <ul className="mt-4 space-y-3">
                {service.useCases.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted-foreground"><Layers className="mt-0.5 h-4 w-4 text-primary" />{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="bg-muted/40 py-16">
          <div className="section-shell rounded-2xl border border-border bg-card p-8 shadow-soft text-center">
            <h3 className="text-2xl font-semibold">Need this capability in your organization?</h3>
            <p className="mt-2 text-sm text-muted-foreground">Book a scoped consultation and get a practical execution roadmap.</p>
            <Button className="mt-4" onClick={() => (window.location.href = '/#contact')}>Book consultation</Button>
          </div>
        </section>

        <section className="py-16">
          <div className="section-shell">
            <h2 className="text-2xl font-semibold">Related services</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {service.related.map((item) => (
                <button
                  key={item.id}
                  onClick={() => (window.location.href = `/services/${item.id}`)}
                  className="rounded-2xl border border-border bg-card p-5 text-left text-sm shadow-soft hover:border-primary/30"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
