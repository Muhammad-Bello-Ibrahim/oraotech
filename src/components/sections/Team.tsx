import { Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Team = () => {
  const navigate = useNavigate();

  const members = [
    { id: 'almustapha-ibrahim-gurama', name: 'Almustapha Ibrahim Gurama', role: 'President' },
    { id: 'muhammad-bello-ibrahim', name: 'Muhammad Bello Ibrahim MCS', role: 'CEO' },
    { id: 'andurrahman-grema', name: 'Engr. Andurrahman Grema', role: 'CTO' },
    { id: 'abbas-abdullahi', name: 'Abbas Abdullahi', role: 'Developer Lead - Frontend' },
    { id: 'esin-ridollah-abdulrazaq', name: 'Engr. Esin Ridollah Abdulrazaq', role: 'Software Engineer' },
    { id: 'abdullahi-lawan', name: 'Abdullahi Lawan', role: 'UI/UX Designer' },
    { id: 'zayad-nuhu-jidda', name: 'Zayad Nuhu Jidda', role: 'UI/UX Designer' },
    { id: 'isah-muhammad-jalo', name: 'Isah Muhammad Jalo', role: 'Human Resource Manager' },
  ];

  const getInitials = (fullName: string) => {
    const parts = fullName.trim().split(/\s+/);
    const first = parts[0]?.[0] ?? '';
    const last = parts[parts.length - 1]?.[0] ?? '';
    return (first + last).toUpperCase();
  };

  return (
    <section id="team" className="bg-muted/35 py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Team</p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">People behind the work.</h2>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            A multidisciplinary team of builders, engineers, and designers delivering thoughtful digital products.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <button
              key={member.id}
              type="button"
              className="rounded-2xl border border-border bg-card p-6 text-left shadow-soft transition-smooth hover:border-primary/35"
              onClick={() => navigate(`/team/${member.id}`)}
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                {getInitials(member.name)}
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">{member.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
              <Users className="mt-4 h-4 w-4 text-accent" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
