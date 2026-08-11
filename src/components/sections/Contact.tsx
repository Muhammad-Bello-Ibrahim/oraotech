import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!result.success) throw new Error(result.message || 'Unable to submit.');

      toast({ title: 'Message sent', description: result.message });
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch {
      toast({ title: 'Submission failed', description: 'Please try again in a moment.', variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-background py-20">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Contact</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Let’s discuss your next build.</h2>
          <p className="text-base text-muted-foreground">Share your goals and timeline. We’ll respond with a practical implementation plan.</p>
          <div className="space-y-3 rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground shadow-soft">
            <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> info@oraotechnologies.com.ng</p>
            <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +234 (90) 325 090 94</p>
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Gombe, Nigeria</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              required
              name="name"
              value={formData.name}
              onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
              placeholder="Full name"
              className="h-11 rounded-lg border border-border bg-background px-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
              placeholder="Email address"
              className="h-11 rounded-lg border border-border bg-background px-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <input
            name="company"
            value={formData.company}
            onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
            placeholder="Company / organization"
            className="mt-4 h-11 w-full rounded-lg border border-border bg-background px-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <textarea
            required
            name="message"
            rows={6}
            value={formData.message}
            onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
            placeholder="Project scope, goals, timeline, and expected outcomes"
            className="mt-4 w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <Button type="submit" className="mt-4 w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
