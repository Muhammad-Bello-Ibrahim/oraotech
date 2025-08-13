import { Users } from 'lucide-react';

const Team = () => {
  const members = [
    { name: 'Almustapha Ibrahim Gurama', role: 'President' },
    { name: 'Muhammad Bello Ibrahim MCS', role: 'CEO' },
    { name: 'Engr. Andurrahman Grema', role: 'CTO' },
    { name: 'Abbas Abdullahi', role: 'Developer Lead - Frontend' },
    { name: 'Engr. Esin Ridollah Abdulrazaq', role: 'Software Engineer' },
    { name: 'Abdullahi Lawan', role: 'UI/UX Designer' },
    { name: 'Zayad Nuhu Jidda', role: 'UI/UX Designer' },
    { name: 'Isah Muhammad Jalo', role: 'Human Resource Manager' },
  ];

  const getInitials = (fullName: string) => {
    const parts = fullName.trim().split(/\s+/);
    const first = parts[0]?.[0] ?? '';
    const last = parts[parts.length - 1]?.[0] ?? '';
    return (first + last).toUpperCase();
  };

  return (
    <section id="team" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6">
            <Users className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-foreground">Our Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet the <span className="text-accent">Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A diverse team of innovators, engineers, and designers driving Orao Technologies forward.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, idx) => (
            <div key={idx} className="group glass p-6 rounded-2xl hover:shadow-card transition-all duration-500 hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white text-2xl font-bold mb-4 group-hover:scale-110 transition-transform duration-500">
                  {getInitials(member.name)}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                <p className="text-accent font-medium mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
