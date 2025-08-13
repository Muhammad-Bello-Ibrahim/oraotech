import { BadgeCheck, Users, School } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Siwes = () => {
  const perks = [
    { title: 'Structured Mentorship', desc: 'Get paired with experienced engineers and weekly check-ins.', icon: Users },
    { title: 'Hands-on Projects', desc: 'Work on real products across frontend, backend, AI and blockchain.', icon: BadgeCheck },
    { title: 'Certification', desc: 'Receive completion certificates and recommendation letters.', icon: School },
  ];

  const tracks = [
    'Basic IT & Productivity Tools',
    'Frontend Development (React, Tailwind)',
    'Backend Development (Node.js, APIs)',
    'AI/ML Fundamentals (Python, Models)',
    'Blockchain & Smart Contracts (Solidity, Web3)',
  ];

  return (
    <section id="siwes" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6">
            <School className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-foreground">SIWES & Internships</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Learn by <span className="text-accent">Doing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We accept SIWES and internship students, providing a dedicated training section to build practical skills.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Perks */}
          <div className="space-y-6">
            {perks.map((perk, idx) => (
              <div key={idx} className="glass p-6 rounded-xl flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <perk.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="text-foreground font-semibold">{perk.title}</h4>
                  <p className="text-muted-foreground text-sm">{perk.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Tracks */}
          <div className="lg:col-span-2 glass p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-4">Training Tracks</h3>
            <p className="text-muted-foreground mb-6">Our programs span fundamentals to advanced topics:</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {tracks.map((t, i) => (
                <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-md">{t}</span>
              ))}
            </div>
            <div className="text-center">
              <Button
                variant="hero"
                onClick={() => window.location.href = '/siwes'}
              >
                Apply for SIWES/Internship
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Siwes;
