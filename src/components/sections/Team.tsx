import { Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ceoImage from '@/assets/ceo.png';
import presidentImage from '@/assets/ChatGPT Image Sep 14, 2026, 04_36_27 AM (8).png';
import ctoImage from '@/assets/ChatGPT Image Sep 14, 2026, 04_36_26 AM (7).png';
import frontendImage from '@/assets/ChatGPT Image Sep 14, 2026, 04_36_26 AM (6).png';

const members = [
  { id: 'almustapha-ibrahim-gurama', name: 'Almustapha Ibrahim Gurama', role: 'President', image: presidentImage },
  { id: 'muhammad-bello-ibrahim', name: 'Muhammad Bello Ibrahim', role: 'Chief Executive Officer', image: ceoImage },
  { id: 'andurrahman-grema', name: 'Engr. Andurrahman Grema', role: 'Chief Technology Officer', image: ctoImage },
  { id: 'abbas-abdullahi', name: 'Abbas Abdullahi', role: 'Frontend Lead', image: frontendImage },
];

const Team = () => {
  const navigate = useNavigate();

  return (
    <section id="team" className="bg-muted/40 py-20">
      <div className="section-shell">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Team</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">People leading delivery and innovation.</h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <button
              key={member.id}
              onClick={() => navigate(`/team/${member.id}`)}
              className="rounded-2xl border border-border bg-card p-5 text-left shadow-soft transition-smooth hover:border-primary/35"
            >
              <div className="image-placeholder min-h-[160px] overflow-hidden p-0" aria-label={`${member.name} profile image`}>
                <img src={member.image} alt={`${member.name} profile`} className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-4 text-base font-semibold">{member.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
              <Users className="mt-4 h-4 w-4 text-primary" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
