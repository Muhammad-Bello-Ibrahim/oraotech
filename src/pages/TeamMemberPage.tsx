import { useParams, Navigate } from 'react-router-dom';
import { Users, Mail, Phone, MapPin, Calendar, Award, Code, Briefcase, Linkedin, Twitter, Github, Globe } from 'lucide-react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

interface TeamMemberData {
  id: string;
  name: string;
  role: string;
  bio: string;
  fullBio: string;
  skills: string[];
  specialties: string[];
  experience: string;
  education: string[];
  achievements: string[];
  projects: string[];
  contact: {
    email: string;
    phone?: string;
    location: string;
  };
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    website?: string;
  };
  joinDate: string;
  department: string;
  avatar: string;
}

const teamMembersData: Record<string, TeamMemberData> = {
  'almustapha-ibrahim-gurama': {
    id: 'almustapha-ibrahim-gurama',
    name: 'Almustapha Ibrahim Gurama',
    role: 'President',
    bio: 'Visionary leader driving Orao Technologies towards innovative solutions and sustainable growth.',
    fullBio: 'Almustapha Ibrahim Gurama serves as the President of Orao Technologies, bringing over a decade of leadership experience in technology and business development. With a strong background in strategic planning and organizational management, he has been instrumental in positioning Orao Technologies as a leading technology company in Nigeria. His vision for technology-driven solutions has guided the company through significant growth and expansion into multiple service areas.',
    skills: ['Strategic Leadership', 'Business Development', 'Organizational Management', 'Technology Strategy', 'Stakeholder Relations'],
    specialties: ['Corporate Strategy', 'Business Expansion', 'Partnership Development', 'Technology Innovation', 'Market Analysis'],
    experience: '10+ years in leadership and business development',
    education: ['Master of Business Administration - Strategic Management', 'Bachelor of Science - Business Administration'],
    achievements: [
      'Led Orao Technologies to achieve 300% growth in 3 years',
      'Established strategic partnerships with 50+ organizations',
      'Recognized as Technology Leader of the Year 2023',
      'Successfully expanded company operations to 5 Nigerian states'
    ],
    projects: ['Orao Technologies Strategic Expansion', 'Partnership Development Program', 'Technology Innovation Initiative'],
    contact: {
      email: 'president@orao.tech',
      phone: '+234 (0) 123 456 7891',
      location: 'Lagos, Nigeria'
    },
    social: {
      linkedin: 'https://linkedin.com/in/almustapha-gurama',
      twitter: 'https://twitter.com/almustaphagurama'
    },
    joinDate: '2019',
    department: 'Executive',
    avatar: '/api/placeholder/300/300'
  },
  'muhammad-bello-ibrahim': {
    id: 'muhammad-bello-ibrahim',
    name: 'Muhammad Bello Ibrahim MCS',
    role: 'CEO',
    bio: 'Experienced technology executive leading innovation and operational excellence at Orao Technologies.',
    fullBio: 'Muhammad Bello Ibrahim serves as the Chief Executive Officer of Orao Technologies, bringing extensive experience in software development, project management, and technology leadership. With a Master of Computer Science degree and years of hands-on experience in the technology industry, he oversees the day-to-day operations and drives the technical vision of the company. Under his leadership, Orao Technologies has delivered over 50 successful projects and established itself as a trusted technology partner.',
    skills: ['Software Architecture', 'Project Management', 'Team Leadership', 'Technology Strategy', 'Client Relations'],
    specialties: ['Full-Stack Development', 'System Architecture', 'DevOps', 'Agile Methodologies', 'Technology Consulting'],
    experience: '8+ years in software development and technology leadership',
    education: ['Master of Computer Science - Software Engineering', 'Bachelor of Technology - Computer Science'],
    achievements: [
      'Successfully delivered 50+ software projects',
      'Led development of award-winning meSafe health platform',
      'Certified Project Management Professional (PMP)',
      'Speaker at 10+ technology conferences'
    ],
    projects: ['meSafe Health Platform', 'Lectrocloud Education System', 'BigTailor E-commerce Platform'],
    contact: {
      email: 'ceo@orao.tech',
      phone: '+234 (0) 123 456 7892',
      location: 'Lagos, Nigeria'
    },
    social: {
      linkedin: 'https://linkedin.com/in/muhammad-bello-ibrahim',
      github: 'https://github.com/devmufteem',
      twitter: 'https://twitter.com/devmufteem'
    },
    joinDate: '2019',
    department: 'Executive',
    avatar: '/api/placeholder/300/300'
  },
  'andurrahman-grema': {
    id: 'andurrahman-grema',
    name: 'Engr. Andurrahman Grema',
    role: 'CTO',
    bio: 'Technical visionary driving innovation and technology excellence across all company projects.',
    fullBio: 'Engineer Andurrahman Grema serves as the Chief Technology Officer at Orao Technologies, bringing deep technical expertise and innovation leadership to the company. With an engineering background and extensive experience in emerging technologies, he oversees the technical architecture and ensures the adoption of cutting-edge technologies across all projects. His expertise spans blockchain development, AI/ML integration, and cloud infrastructure design.',
    skills: ['Blockchain Development', 'AI/ML Engineering', 'Cloud Architecture', 'Technical Leadership', 'Innovation Strategy'],
    specialties: ['Smart Contracts', 'Machine Learning', 'Distributed Systems', 'Cybersecurity', 'Tech Innovation'],
    experience: '7+ years in engineering and technology leadership',
    education: ['Bachelor of Engineering - Computer Engineering', 'Professional Certifications in Blockchain and AI'],
    achievements: [
      'Architected Elevatex blockchain financial system',
      'Led implementation of AI-powered features in 5+ projects',
      'Certified Blockchain Developer and AI Specialist',
      'Published 3 research papers on emerging technologies'
    ],
    projects: ['Elevatex Blockchain Platform', 'Libolt AI Advisory System', 'Connectrix Architecture'],
    contact: {
      email: 'cto@orao.tech',
      phone: '+234 (0) 123 456 7893',
      location: 'Maiduguri, Nigeria'
    },
    social: {
      linkedin: 'https://linkedin.com/in/andurrahman-grema',
      github: 'https://github.com/andurrahman-grema'
    },
    joinDate: '2020',
    department: 'Technology',
    avatar: '/api/placeholder/300/300'
  },
  'abbas-abdullahi': {
    id: 'abbas-abdullahi',
    name: 'Abbas Abdullahi',
    role: 'Developer Lead - Frontend',
    bio: 'Frontend development expert creating exceptional user experiences and leading the frontend development team.',
    fullBio: 'Abbas Abdullahi leads the frontend development team at Orao Technologies, specializing in creating beautiful, responsive, and user-friendly interfaces. With expertise in modern frontend frameworks and a keen eye for design, he ensures that all projects deliver exceptional user experiences. He has been instrumental in establishing frontend development standards and mentoring junior developers.',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Frontend Architecture', 'Team Leadership'],
    specialties: ['React Development', 'UI/UX Implementation', 'Performance Optimization', 'Mobile-First Design', 'Component Libraries'],
    experience: '5+ years in frontend development and team leadership',
    education: ['Bachelor of Science - Computer Science', 'Frontend Development Certifications'],
    achievements: [
      'Led frontend development for 15+ successful projects',
      'Developed reusable component library used across projects',
      'Mentored 10+ junior developers',
      'Achieved 95+ Lighthouse scores on all projects'
    ],
    projects: ['Shopmon Frontend', 'BigTailor User Interface', 'VRS Data Dashboard'],
    contact: {
      email: 'abbas@orao.tech',
      location: 'Lagos, Nigeria'
    },
    social: {
      linkedin: 'https://linkedin.com/in/abbas-abdullahi',
      github: 'https://github.com/abbas-abdullahi'
    },
    joinDate: '2021',
    department: 'Development',
    avatar: '/api/placeholder/300/300'
  },
  'esin-ridollah-abdulrazaq': {
    id: 'esin-ridollah-abdulrazaq',
    name: 'Engr. Esin Ridollah Abdulrazaq',
    role: 'Software Engineer',
    bio: 'Full-stack software engineer with expertise in building scalable applications and robust backend systems.',
    fullBio: 'Engineer Esin Ridollah Abdulrazaq is a skilled software engineer at Orao Technologies, specializing in full-stack development with a strong focus on backend systems and database design. With engineering training and practical experience in various programming languages and frameworks, she contributes to the development of robust, scalable applications that power the company\'s diverse project portfolio.',
    skills: ['Node.js', 'Python', 'Database Design', 'API Development', 'System Integration'],
    specialties: ['Backend Development', 'Database Optimization', 'RESTful APIs', 'Cloud Integration', 'System Security'],
    experience: '4+ years in software development',
    education: ['Bachelor of Engineering - Software Engineering', 'Professional Development Certifications'],
    achievements: [
      'Developed backend systems for 12+ major projects',
      'Optimized database performance by 40% across projects',
      'Implemented security protocols for sensitive applications',
      'Certified in AWS and Google Cloud platforms'
    ],
    projects: ['meSafe Backend Architecture', 'Arks Xpress Payment System', 'Connectrix Database Design'],
    contact: {
      email: 'esin@orao.tech',
      location: 'Abuja, Nigeria'
    },
    social: {
      linkedin: 'https://linkedin.com/in/esin-abdulrazaq',
      github: 'https://github.com/esin-ridollah'
    },
    joinDate: '2021',
    department: 'Development',
    avatar: '/api/placeholder/300/300'
  },
  'abdullahi-lawan': {
    id: 'abdullahi-lawan',
    name: 'Abdullahi Lawan',
    role: 'UI/UX Designer',
    bio: 'Creative UI/UX designer crafting intuitive and engaging user experiences for digital products.',
    fullBio: 'Abdullahi Lawan is a talented UI/UX designer at Orao Technologies, responsible for creating intuitive and visually appealing user interfaces. With a strong background in design principles and user psychology, he ensures that all digital products deliver exceptional user experiences. His work spans from initial user research and wireframing to final visual design and prototyping.',
    skills: ['UI Design', 'UX Research', 'Prototyping', 'User Testing', 'Design Systems'],
    specialties: ['Mobile App Design', 'Web Interface Design', 'User Journey Mapping', 'Design Thinking', 'Accessibility Design'],
    experience: '4+ years in UI/UX design',
    education: ['Bachelor of Arts - Graphic Design', 'UI/UX Design Certifications'],
    achievements: [
      'Designed interfaces for 20+ successful applications',
      'Improved user engagement by 60% through redesign projects',
      'Created comprehensive design system for company projects',
      'Won Best Mobile App Design Award 2023'
    ],
    projects: ['BigTailor Mobile App Design', 'Libolt User Interface', 'Shopmon UX Research'],
    contact: {
      email: 'abdullahi.designer@orao.tech',
      location: 'Kano, Nigeria'
    },
    social: {
      linkedin: 'https://linkedin.com/in/abdullahi-lawan-designer',
      website: 'https://abdullahilawan.design'
    },
    joinDate: '2022',
    department: 'Design',
    avatar: '/api/placeholder/300/300'
  },
  'zayad-nuhu-jidda': {
    id: 'zayad-nuhu-jidda',
    name: 'Zayad Nuhu Jidda',
    role: 'UI/UX Designer',
    bio: 'User-focused designer specializing in creating accessible and delightful digital experiences.',
    fullBio: 'Zayad Nuhu Jidda is a passionate UI/UX designer at Orao Technologies, focusing on user-centered design approaches and accessibility. With expertise in modern design tools and methodologies, he collaborates closely with development teams to ensure designs are both beautiful and functional. His attention to detail and commitment to user accessibility sets high standards for the design quality of all projects.',
    skills: ['User Experience Design', 'Interface Design', 'Design Research', 'Accessibility', 'Visual Design'],
    specialties: ['Accessibility Design', 'Design Research', 'Interaction Design', 'Design Documentation', 'Cross-platform Design'],
    experience: '3+ years in UI/UX design',
    education: ['Bachelor of Science - Computer Science with Design Focus', 'UX Design Certifications'],
    achievements: [
      'Designed accessible interfaces for 15+ applications',
      'Led user research for 8 major product launches',
      'Achieved WCAG 2.1 AA compliance on all designs',
      'Mentored 5 junior designers in accessibility best practices'
    ],
    projects: ['Lectrocloud Interface Design', 'VRS Data User Experience', 'meSafe Accessibility Features'],
    contact: {
      email: 'zayad@orao.tech',
      location: 'Maiduguri, Nigeria'
    },
    social: {
      linkedin: 'https://linkedin.com/in/zayad-jidda',
      website: 'https://zayaddesign.com'
    },
    joinDate: '2022',
    department: 'Design',
    avatar: '/api/placeholder/300/300'
  },
  'isah-muhammad-jalo': {
    id: 'isah-muhammad-jalo',
    name: 'Isah Muhammad Jalo',
    role: 'Human Resource Manager',
    bio: 'HR professional fostering team growth, talent development, and positive workplace culture.',
    fullBio: 'Isah Muhammad Jalo serves as the Human Resource Manager at Orao Technologies, responsible for talent acquisition, employee development, and maintaining a positive workplace culture. With extensive experience in human resources and organizational development, he ensures that the company attracts top talent and provides an environment where team members can thrive and grow professionally.',
    skills: ['Talent Acquisition', 'Employee Development', 'Performance Management', 'HR Strategy', 'Team Building'],
    specialties: ['Recruitment', 'Training & Development', 'HR Policies', 'Employee Relations', 'Organizational Culture'],
    experience: '6+ years in human resources and organizational development',
    education: ['Master of Arts - Human Resource Management', 'Bachelor of Science - Psychology'],
    achievements: [
      'Successfully recruited 50+ talented professionals',
      'Implemented comprehensive employee development program',
      'Achieved 95% employee satisfaction rate',
      'Established internship program benefiting 100+ students'
    ],
    projects: ['SIWES Program Development', 'Employee Training Initiative', 'Company Culture Enhancement'],
    contact: {
      email: 'hr@orao.tech',
      phone: '+234 (0) 123 456 7898',
      location: 'Lagos, Nigeria'
    },
    social: {
      linkedin: 'https://linkedin.com/in/isah-jalo-hr'
    },
    joinDate: '2020',
    department: 'Human Resources',
    avatar: '/api/placeholder/300/300'
  }
};

const TeamMemberPage = () => {
  const { memberId } = useParams();
  const member = teamMembersData[memberId || ''];

  if (!member) {
    return <Navigate to="/404" replace />;
  }

  const getInitials = (fullName: string) => {
    const parts = fullName.trim().split(/\s+/);
    const first = parts[0]?.[0] ?? '';
    const last = parts[parts.length - 1]?.[0] ?? '';
    return (first + last).toUpperCase();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-background relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6">
                  <Users className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium text-foreground">{member.department}</span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">Since {member.joinDate}</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  {member.name}
                </h1>
                
                <p className="text-xl text-accent font-semibold mb-6">
                  {member.role}
                </p>
                
                <p className="text-lg text-muted-foreground mb-8">
                  {member.fullBio}
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  {member.contact.email && (
                    <Button variant="hero" size="lg" asChild>
                      <a href={`mailto:${member.contact.email}`}>
                        <Mail className="mr-2 h-5 w-5" />
                        Contact
                      </a>
                    </Button>
                  )}
                  {member.social.linkedin && (
                    <Button variant="outline" size="lg" asChild>
                      <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="mr-2 h-5 w-5" />
                        LinkedIn
                      </a>
                    </Button>
                  )}
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="glass p-8 rounded-2xl">
                  <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white text-6xl font-bold">
                    {getInitials(member.name)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Specialties */}
        <section className="py-16 bg-muted/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Core Skills</h2>
                <div className="flex flex-wrap gap-3">
                  {member.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-accent/10 text-accent rounded-lg font-medium border border-accent/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Specialties</h2>
                <div className="flex flex-wrap gap-3">
                  {member.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium border border-primary/20"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience & Education */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Experience */}
              <div className="glass p-6 rounded-2xl">
                <div className="flex items-center mb-4">
                  <Briefcase className="h-6 w-6 text-accent mr-3" />
                  <h3 className="text-xl font-bold text-foreground">Experience</h3>
                </div>
                <p className="text-muted-foreground mb-6">{member.experience}</p>
                
                <h4 className="font-semibold text-foreground mb-3">Key Projects:</h4>
                <ul className="space-y-2">
                  {member.projects.map((project, index) => (
                    <li key={index} className="flex items-center text-muted-foreground">
                      <Code className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                      {project}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Education */}
              <div className="glass p-6 rounded-2xl">
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-accent mr-3" />
                  <h3 className="text-xl font-bold text-foreground">Education</h3>
                </div>
                <ul className="space-y-3">
                  {member.education.map((edu, index) => (
                    <li key={index} className="text-muted-foreground">
                      • {edu}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16 bg-muted/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Key Achievements
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {member.achievements.map((achievement, index) => (
                <div key={index} className="glass p-6 rounded-2xl">
                  <div className="flex items-start space-x-3">
                    <Award className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">{achievement}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Social */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-foreground text-center mb-8">
                Get in Touch
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-accent" />
                      <a href={`mailto:${member.contact.email}`} className="text-muted-foreground hover:text-accent transition-colors">
                        {member.contact.email}
                      </a>
                    </div>
                    {member.contact.phone && (
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-accent" />
                        <span className="text-muted-foreground">{member.contact.phone}</span>
                      </div>
                    )}
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-accent" />
                      <span className="text-muted-foreground">{member.contact.location}</span>
                    </div>
                  </div>
                </div>
                
                {/* Social Links */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Connect Online</h3>
                  <div className="flex flex-wrap gap-3">
                    {member.social.linkedin && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="mr-2 h-4 w-4" />
                          LinkedIn
                        </a>
                      </Button>
                    )}
                    {member.social.twitter && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                          <Twitter className="mr-2 h-4 w-4" />
                          Twitter
                        </a>
                      </Button>
                    )}
                    {member.social.github && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    {member.social.website && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={member.social.website} target="_blank" rel="noopener noreferrer">
                          <Globe className="mr-2 h-4 w-4" />
                          Website
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default TeamMemberPage;