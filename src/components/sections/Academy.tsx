import { BookOpen, BriefcaseBusiness, CheckCircle2, Code2, Palette, UsersRound } from 'lucide-react';
import { Button } from '@/components/ui/button';

const programmeGroups = [
  {
    icon: BookOpen,
    title: 'Digital Skills & Basic Computing',
    items: ['Basic Computer Appreciation and Digital Literacy', 'Microsoft Word, Excel and PowerPoint', 'Internet, Email and Online Productivity', 'Typing and Office Productivity Skills', 'File, Folder and Document Management', 'Basic Computer Troubleshooting and Maintenance'],
  },
  {
    icon: Code2,
    title: 'Programming & Software Development',
    items: ['Programming fundamentals', 'HTML and CSS', 'JavaScript and modern web technologies', 'Frontend Web Development', 'Backend and Full-Stack Web Development', 'PHP, Node.js and other relevant programming technologies', 'Database Management and SQL', 'API Development and Integration', 'Mobile Application Development', 'Software Engineering fundamentals', 'Version Control and collaborative development using Git/GitHub', 'AI-assisted software development and responsible use of AI tools'],
  },
  {
    icon: Palette,
    title: 'Graphics Design & Creative Technology',
    items: ['CorelDRAW', 'Adobe Photoshop', 'Adobe Illustrator', 'Canva and related design tools', 'Logo and Brand Identity Design', 'Flyer, Poster and Social Media Design', 'UI/UX Design', 'Basic Video Editing and Multimedia Design'],
  },
  {
    icon: UsersRound,
    title: 'SIWES, Internship & Practical Training',
    items: ['SIWES student training and supervision', 'Industrial and practical technology training', 'Structured student projects', 'Assignments, assessments and practical examinations', 'Project supervision and mentoring', 'Training documentation and progress tracking', 'Final project development and presentation', 'Certificates of completion where applicable'],
  },
  {
    icon: BriefcaseBusiness,
    title: 'Bootcamps, Short Courses & Professional Training',
    items: ['Web Development Bootcamps', 'Graphics Design Bootcamps', 'Computer Appreciation and Digital Literacy programmes', 'Frontend, Backend and Full-Stack Development programmes', 'Python and other programming courses', 'UI/UX Design programmes', 'Digital Marketing and digital business skills', 'AI Tools for Productivity and Technology', 'Freelancing and remote-work skills', 'Entrepreneurship and technology business programmes', 'Holiday and youth technology programmes'],
  },
  {
    icon: Code2,
    title: 'Developer Workspace & Technology Hub',
    items: ['Software and product development', 'Team-based development projects', 'Client project development', 'Developer collaboration and coworking', 'Coding practice and technical problem-solving', 'Code review and project mentoring', 'Software testing and experimentation', 'Startup and MVP development', 'Research and development activities'],
  },
  {
    icon: UsersRound,
    title: 'Mentorship, Career & Professional Development',
    items: ['Technical mentorship', 'Project supervision', 'Career guidance', 'CV and portfolio development', 'Professional branding and LinkedIn development', 'Freelancing and client management education', 'Interview and workplace-readiness preparation', 'Peer-learning and student presentation sessions'],
  },
  {
    icon: BookOpen,
    title: 'Workshops, Seminars & Technology Events',
    items: ['Technology workshops', 'Career seminars and talks', 'Developer meetups', 'Guest lectures and specialist sessions', 'Student presentations', 'Hackathons and coding competitions', 'Design competitions', 'Project demo days', 'Innovation and entrepreneurship events'],
  },
  {
    icon: BriefcaseBusiness,
    title: 'Corporate & Institutional Training',
    items: ['Customized staff technology training', 'Digital literacy programmes for organizations', 'Microsoft Office and productivity training', 'Programming and technical upskilling', 'Graphics and digital communication training', 'Customized workshops for schools, businesses, NGOs and institutions'],
  },
  {
    icon: CheckCircle2,
    title: 'Technology & Innovation Programmes',
    items: ['Technology research and development', 'Prototype and MVP development', 'Student innovation projects', 'Startup incubation and early-stage product support', 'Emerging technology workshops', 'Digital transformation education and projects'],
  },
  {
    icon: Palette,
    title: 'Commercial Technology Services',
    items: ['Website Design and Development', 'Web Application and Software Development', 'Mobile Application Development', 'UI/UX Design', 'Graphics Design and Brand Identity Services', 'Social Media Creative Design', 'Software Maintenance and Technical Support', 'Database and API Development', 'IT Consultancy and Technical Advisory Services', 'Digital Transformation Services', 'Corporate Technology Training', 'Website, software and digital product maintenance contracts', 'Prototype, MVP and startup product development'],
  },
];

const Academy = () => {
  const scrollToContact = () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="academy" className="bg-background py-20">
      <div className="section-shell space-y-12">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Orao Academy</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">A calm place to learn, practise, and become employable.</h2>
          </div>
          <p className="text-base leading-8 text-muted-foreground">
            We train students, interns, young professionals, organizations, and founders through structured lessons, project supervision, career mentoring, and real client exposure. The academy is designed for practical confidence — not noisy hype.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr]">
          <div className="image-placeholder min-h-[340px] p-8" aria-label="Academy training image placeholder">
            <div className="space-y-3">
              <p className="text-base font-semibold text-foreground">Placeholder: students in class</p>
              <p className="max-w-md text-xs leading-6">Use a warm image of learners working on laptops, presenting projects, or receiving mentorship in the Orao hub.</p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {['Beginner-friendly pathways', 'Project-based assessments', 'Mentorship and portfolio support'].map((item) => (
              <article key={item} className="rounded-3xl border border-border bg-card p-6 shadow-soft">
                <CheckCircle2 className="h-5 w-5 text-accent-dark" />
                <h3 className="mt-4 text-lg font-semibold">{item}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">Designed to help learners move gently from fundamentals to visible, reviewable work.</p>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {programmeGroups.map((group) => (
            <article key={group.title} className="rounded-3xl border border-border bg-card p-6 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-card">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-primary/10 p-3 text-primary"><group.icon className="h-5 w-5" /></div>
                <div>
                  <h3 className="text-lg font-semibold leading-tight">{group.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground">{group.items.length} focus areas</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-6 text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="rounded-[2rem] border border-primary/15 bg-gradient-to-br from-primary/10 via-white to-accent/10 p-8 text-center shadow-soft sm:p-12">
          <h3 className="text-2xl font-semibold sm:text-4xl">Ready to train a student cohort or enrol as a learner?</h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            Talk to Orao Academy about course guidance, SIWES placement, institutional training, or a custom technology programme.
          </p>
          <Button className="mt-7" size="lg" onClick={scrollToContact}>Contact the academy</Button>
        </div>
      </div>
    </section>
  );
};

export default Academy;
