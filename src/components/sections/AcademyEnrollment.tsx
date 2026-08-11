import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const AcademyEnrollment = () => {
  const steps = [
    {
      number: '01',
      title: 'Choose Your Program',
      description: 'Browse our 50+ programs and select the one that aligns with your goals',
    },
    {
      number: '02',
      title: 'Get Consultation',
      description: 'Connect with our advisors to plan your learning path',
    },
    {
      number: '03',
      title: 'Complete Enrollment',
      description: 'Register and pay the course fee to secure your spot',
    },
    {
      number: '04',
      title: 'Start Learning',
      description: 'Access your courses and begin your transformation journey',
    },
  ];

  return (
    <section id="academy-enrollment" className="section-shell py-20 border-t border-border">
      <div className="mb-12">
        <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl">
          How to Get Started
        </h2>
        <p className="text-lg text-foreground/80">
          Our simple enrollment process gets you learning in just 4 steps
        </p>
      </div>

      {/* Steps */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
        {steps.map((step, idx) => (
          <div key={idx} className="relative">
            {/* Connector Line */}
            {idx < steps.length - 1 && (
              <div className="absolute top-12 -right-3 hidden h-0.5 w-6 bg-gradient-to-r from-accent to-transparent lg:block"></div>
            )}

            <div className="rounded-lg border border-border bg-card p-6">
              <div className="mb-4 inline-block rounded-lg bg-gradient-to-r from-primary to-accent px-4 py-2 font-bold text-white">
                {step.number}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="mb-16 rounded-lg bg-secondary/50 p-8">
        <h3 className="mb-6 text-2xl font-bold text-primary">Frequently Asked Questions</h3>
        <div className="space-y-6">
          <div>
            <h4 className="mb-2 font-semibold text-foreground">What are the prerequisites?</h4>
            <p className="text-muted-foreground">
              Most of our programs are designed for beginners. Some advanced programs may require basic knowledge in the subject area.
            </p>
          </div>
          <div>
            <h4 className="mb-2 font-semibold text-foreground">How long do the programs take?</h4>
            <p className="text-muted-foreground">
              Program duration varies from intensive bootcamps (4-12 weeks) to comprehensive courses (3-6 months). We offer flexible scheduling.
            </p>
          </div>
          <div>
            <h4 className="mb-2 font-semibold text-foreground">Do you offer certificates?</h4>
            <p className="text-muted-foreground">
              Yes! All our programs include certificates of completion. These are recognized in the industry and valued by employers.
            </p>
          </div>
          <div>
            <h4 className="mb-2 font-semibold text-foreground">Is there job placement support?</h4>
            <p className="text-muted-foreground">
              Absolutely. We provide mentorship, CV review, interview preparation, and connect graduates with potential employers.
            </p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="rounded-lg border border-accent/30 bg-gradient-to-r from-primary/5 to-accent/5 p-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-primary">Ready to Begin Your Learning Journey?</h2>
        <p className="mb-8 text-lg text-foreground/80">
          Don't wait—transform your skills and career today. Contact us for more information or enroll in a program.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Browse All Programs
          </Button>
          <Button size="lg" variant="outline">
            Request More Info
          </Button>
        </div>
      </div>

      {/* Contact Info */}
      <div className="mt-16 grid gap-6 md:grid-cols-3 text-center">
        <div>
          <div className="mb-3 text-3xl">📧</div>
          <h4 className="mb-2 font-semibold text-foreground">Email</h4>
          <p className="text-muted-foreground">academy@oraotech.com</p>
        </div>
        <div>
          <div className="mb-3 text-3xl">📱</div>
          <h4 className="mb-2 font-semibold text-foreground">Phone</h4>
          <p className="text-muted-foreground">+234 (0) 123 456 7890</p>
        </div>
        <div>
          <div className="mb-3 text-3xl">📍</div>
          <h4 className="mb-2 font-semibold text-foreground">Visit Us</h4>
          <p className="text-muted-foreground">Orao Technologies Hub</p>
        </div>
      </div>
    </section>
  );
};

export default AcademyEnrollment;
