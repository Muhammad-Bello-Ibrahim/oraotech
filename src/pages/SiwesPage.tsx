import { useState } from 'react';
import { ArrowRight, CalendarClock, CheckCircle2, Users } from 'lucide-react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import siwesImage from '@/assets/siwes 1.png';

const faqs = [
  { q: 'Who can apply?', a: 'SIWES students and early-career learners in relevant technical disciplines.' },
  { q: 'How long is the program?', a: 'Tracks run between 3 and 12 months depending on institution requirements.' },
  { q: 'Is this remote or onsite?', a: 'Hybrid options are available based on role, location, and project needs.' },
];

const timeline = ['Application review', 'Interview + track matching', 'Onboarding and mentorship pairing', 'Project participation and performance review'];

const SiwesPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', track: '', motivation: '' });

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/siwes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!result.success) throw new Error(result.message);

      toast({ title: 'Application submitted', description: result.message });
      setFormData({ name: '', email: '', track: '', motivation: '' });
    } catch {
      toast({ title: 'Unable to submit', description: 'Please try again shortly.', variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <section className="py-16">
          <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.95fr]">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">SIWES at Orao</p>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Build real-world skills in a production environment.</h1>
              <p className="text-base text-muted-foreground sm:text-lg">Join a structured program focused on mentorship, practical delivery, and measurable career growth.</p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-card p-4 text-sm text-muted-foreground">50+ alumni supported</div>
                <div className="rounded-2xl border border-border bg-card p-4 text-sm text-muted-foreground">4 learning tracks available</div>
              </div>
            </div>
            <div className="image-placeholder min-h-[320px] overflow-hidden p-0" aria-label="SIWES cohort image">
              <img src={siwesImage} alt="SIWES students collaborating in a technology workspace" className="h-full w-full object-cover" />
            </div>
          </div>
        </section>

        <section className="bg-muted/40 py-16">
          <div className="section-shell grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-border bg-card p-6 shadow-soft"><Users className="h-5 w-5 text-primary" /><h3 className="mt-3 font-semibold">Why join Orao</h3><p className="mt-2 text-sm text-muted-foreground">Mentor-led projects, real engineering workflows, and career support.</p></article>
            <article className="rounded-2xl border border-border bg-card p-6 shadow-soft"><CheckCircle2 className="h-5 w-5 text-primary" /><h3 className="mt-3 font-semibold">Benefits</h3><p className="mt-2 text-sm text-muted-foreground">Portfolio projects, recommendation support, and team collaboration skills.</p></article>
            <article className="rounded-2xl border border-border bg-card p-6 shadow-soft"><CalendarClock className="h-5 w-5 text-primary" /><h3 className="mt-3 font-semibold">Opportunities</h3><p className="mt-2 text-sm text-muted-foreground">Top performers are considered for internships and full-time pathways.</p></article>
          </div>
        </section>

        <section className="py-16">
          <div className="section-shell grid gap-8 lg:grid-cols-2">
            <article className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h2 className="text-xl font-semibold">Application process</h2>
              <ul className="mt-4 space-y-2">
                {timeline.map((step) => (
                  <li key={step} className="text-sm text-muted-foreground">• {step}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h2 className="text-xl font-semibold">Frequently asked questions</h2>
              <div className="mt-4 space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.q}>
                    <p className="text-sm font-semibold">{faq.q}</p>
                    <p className="text-sm text-muted-foreground">{faq.a}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="bg-muted/40 py-16">
          <div className="section-shell rounded-2xl border border-border bg-card p-8 shadow-soft">
            <h2 className="text-2xl font-semibold">Apply to the SIWES program</h2>
            <form onSubmit={submit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input required placeholder="Full name" value={formData.name} onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))} className="h-11 rounded-lg border border-border bg-background px-4 text-sm" />
                <input required type="email" placeholder="Email address" value={formData.email} onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))} className="h-11 rounded-lg border border-border bg-background px-4 text-sm" />
              </div>
              <input required placeholder="Preferred track (Frontend, Backend, Design, AI)" value={formData.track} onChange={(e) => setFormData((p) => ({ ...p, track: e.target.value }))} className="h-11 w-full rounded-lg border border-border bg-background px-4 text-sm" />
              <textarea required rows={5} placeholder="Why are you interested in this program?" value={formData.motivation} onChange={(e) => setFormData((p) => ({ ...p, motivation: e.target.value }))} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm" />
              <Button disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit application'}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SiwesPage;
