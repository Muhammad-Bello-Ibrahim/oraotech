import { useParams, Navigate } from 'react-router-dom';
import { Users, Heart, ShoppingCart, GraduationCap, Blocks, Building, Star, Calendar, Globe, Github, ExternalLink } from 'lucide-react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

interface ProjectData {
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  features: string[];
  tech: string[];
  icon: any;
  color: string;
  audience: string;
  year: string;
  status: string;
  images: string[];
  client: {
    name: string;
    testimonial: string;
    role: string;
    rating: number;
  };
  challenges: string[];
  solutions: string[];
  results: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projectsData: Record<string, ProjectData> = {
  'connectrix': {
    title: 'Connectrix',
    category: 'Software',
    description: 'Comprehensive dues collection, student engagement, and club management system specifically designed for higher institutions like GSU.',
    fullDescription: 'Connectrix is a comprehensive digital platform designed to revolutionize student engagement and financial management in higher education institutions. Built specifically for universities like Gombe State University, it streamlines dues collection, enhances student engagement, and provides powerful club administration tools.',
    features: ['Dues Management', 'Student Engagement', 'Club Administration', 'Financial Tracking'],
    tech: ['React', 'Node.js', 'MongoDB', 'Payment Gateway'],
    icon: Users,
    color: 'from-blue-500 to-cyan-500',
    audience: 'Higher Education Institutions',
    year: '2023',
    status: 'Live',
    images: ['/api/placeholder/800/600', '/api/placeholder/800/600', '/api/placeholder/800/600'],
    client: {
      name: 'Gombe State University',
      testimonial: 'Connectrix has transformed how we manage student activities and financial processes. The platform is intuitive and has significantly improved our operational efficiency.',
      role: 'Vice Chancellor',
      rating: 5
    },
    challenges: [
      'Complex dues structure with multiple categories',
      'Manual processes causing delays and errors',
      'Limited student engagement with university activities',
      'Difficulty tracking club memberships and activities'
    ],
    solutions: [
      'Automated dues calculation and payment processing',
      'Digital payment integration with multiple gateways',
      'Interactive student portal with real-time notifications',
      'Comprehensive club management system with activity tracking'
    ],
    results: [
      '95% reduction in payment processing time',
      '80% increase in student engagement',
      '100% accuracy in financial tracking',
      '60% reduction in administrative workload'
    ],
    liveUrl: 'https://connectrix.gsu.edu.ng',
    githubUrl: 'https://github.com/orao/connectrix'
  },
  'mesafe': {
    title: 'meSafe',
    category: 'HealthTech',
    description: 'Digital Health Record Management System with biometric access control and secure cloud storage for patient data.',
    fullDescription: 'meSafe is a cutting-edge digital health record management system that leverages biometric authentication and blockchain technology to ensure secure, accessible, and comprehensive patient data management. The platform revolutionizes healthcare delivery by providing instant access to verified medical records.',
    features: ['Biometric Access', 'Cloud Storage', 'Health Records', 'Data Security'],
    tech: ['React Native', 'Node.js', 'Blockchain', 'Biometric SDK'],
    icon: Heart,
    color: 'from-green-500 to-emerald-500',
    audience: 'Healthcare Providers & Patients',
    year: '2020',
    status: 'Live',
    images: ['/api/placeholder/800/600', '/api/placeholder/800/600', '/api/placeholder/800/600'],
    client: {
      name: 'Dr. Amina Hassan',
      testimonial: 'meSafe has completely transformed our clinic operations. Patient data is now secure, accessible, and the biometric authentication gives us confidence in data integrity.',
      role: 'Chief Medical Officer, General Hospital',
      rating: 5
    },
    challenges: [
      'Data security and privacy concerns',
      'Manual record keeping leading to lost documents',
      'Difficulty accessing patient history across facilities',
      'Identity verification challenges'
    ],
    solutions: [
      'Blockchain-based encryption for data security',
      'Biometric authentication for secure access',
      'Cloud-based storage with real-time synchronization',
      'Universal patient ID system across healthcare providers'
    ],
    results: [
      '99.9% data security and integrity',
      '70% reduction in administrative time',
      '100% elimination of lost medical records',
      '90% improvement in patient care continuity'
    ],
    liveUrl: 'https://mesafe.health'
  },
  'shopmon': {
    title: 'Shopmon',
    category: 'Ecommerce',
    description: 'Location-based buying and selling platform that connects local buyers with sellers for products and services.',
    fullDescription: 'Shopmon is an innovative location-based marketplace that connects local buyers and sellers, fostering community commerce. The platform uses advanced geolocation technology to help users discover products and services in their immediate vicinity, supporting local businesses and creating economic opportunities.',
    features: ['Location-Based', 'Product Listings', 'Service Marketplace', 'Real-time Chat'],
    tech: ['React', 'Express.js', 'Google Maps API', 'Socket.io'],
    icon: ShoppingCart,
    color: 'from-purple-500 to-pink-500',
    audience: 'Local Businesses & Consumers',
    year: '2022',
    status: 'Live',
    images: ['/api/placeholder/800/600', '/api/placeholder/800/600', '/api/placeholder/800/600'],
    client: {
      name: 'Ibrahim Musa',
      testimonial: 'Shopmon has opened new markets for my business. I can now reach customers in my area easily and the platform is very user-friendly.',
      role: 'Local Business Owner',
      rating: 4
    },
    challenges: [
      'Difficulty connecting local buyers and sellers',
      'Limited visibility for small businesses',
      'Trust and safety in local transactions',
      'Real-time communication needs'
    ],
    solutions: [
      'GPS-based location matching and discovery',
      'Comprehensive business profiles and verification',
      'Integrated rating and review system',
      'Real-time chat and messaging platform'
    ],
    results: [
      '10,000+ active users within first year',
      '500+ local businesses onboarded',
      '85% user satisfaction rate',
      '300% increase in local business visibility'
    ],
    liveUrl: 'https://shopmon.ng'
  },
  'elevatex': {
    title: 'Elevatex',
    category: 'Blockchain',
    description: 'Referral-based financial system with pack rewards and blockchain-powered transparency for network marketing.',
    fullDescription: 'Elevatex is a revolutionary blockchain-powered financial system designed for network marketing companies. It provides transparent, automated reward distribution through smart contracts, ensuring fair compensation and building trust in referral-based business models.',
    features: ['Referral System', 'Pack Rewards', 'Blockchain Ledger', 'Financial Tracking'],
    tech: ['Solidity', 'Web3.js', 'React', 'Smart Contracts'],
    icon: Blocks,
    color: 'from-orange-500 to-red-500',
    audience: 'Network Marketing Companies',
    year: '2022',
    status: 'Live',
    images: ['/api/placeholder/800/600', '/api/placeholder/800/600', '/api/placeholder/800/600'],
    client: {
      name: 'Sarah Johnson',
      testimonial: 'Elevatex brought transparency to our network marketing business. The blockchain technology ensures fair rewards and builds trust with our distributors.',
      role: 'CEO, Marketing Solutions Ltd',
      rating: 5
    },
    challenges: [
      'Lack of transparency in traditional MLM systems',
      'Manual calculation of complex referral structures',
      'Trust issues in network marketing',
      'Delayed and disputed payments'
    ],
    solutions: [
      'Smart contracts for automated and transparent operations',
      'Immutable blockchain ledger for all transactions',
      'Real-time reward calculation and distribution',
      'Decentralized verification system'
    ],
    results: [
      '100% transparency in all transactions',
      'Zero disputes in reward distribution',
      '90% faster payment processing',
      '200% increase in distributor trust and retention'
    ],
    liveUrl: 'https://elevatex.finance'
  },
  'bigtailor': {
    title: 'BigTailor',
    category: 'Ecommerce',
    description: 'Revolutionary clothing e-commerce platform featuring virtual fitting technology for both tailors and customers.',
    fullDescription: 'BigTailor is a groundbreaking e-commerce platform that revolutionizes the fashion industry through virtual fitting technology. It connects customers with skilled tailors while providing AR-powered size matching to ensure perfect fits, reducing returns and increasing customer satisfaction.',
    features: ['Virtual Fitting', 'Custom Tailoring', 'Size Matching', 'Order Management'],
    tech: ['React', 'AR/VR SDK', 'Node.js', 'Computer Vision'],
    icon: ShoppingCart,
    color: 'from-indigo-500 to-blue-500',
    audience: 'Fashion Industry & Consumers',
    year: '2023',
    status: 'Live',
    images: ['/api/placeholder/800/600', '/api/placeholder/800/600', '/api/placeholder/800/600'],
    client: {
      name: 'Fatima Abdullahi',
      testimonial: 'BigTailor has transformed my tailoring business. The virtual fitting feature helps customers visualize their orders before placing them, leading to higher satisfaction.',
      role: 'Master Tailor & Fashion Designer',
      rating: 5
    },
    challenges: [
      'High return rates due to sizing issues',
      'Limited reach for local tailors',
      'Difficulty visualizing custom designs',
      'Complex measurement processes'
    ],
    solutions: [
      'AR-powered virtual fitting technology',
      'AI-driven size recommendation system',
      '3D visualization for custom designs',
      'Digital measurement tools and guides'
    ],
    results: [
      '85% reduction in returns due to sizing',
      '400% increase in tailor reach and visibility',
      '95% customer satisfaction rate',
      '300% improvement in order accuracy'
    ],
    liveUrl: 'https://bigtailor.fashion'
  },
  'lectrocloud': {
    title: 'Lectrocloud',
    category: 'EdTech',
    description: 'Cloud-based student engagement platform designed specifically for the University of Maiduguri and similar institutions.',
    fullDescription: 'Lectrocloud is a comprehensive cloud-based educational platform designed to enhance student engagement and learning outcomes at the University of Maiduguri. It provides integrated tools for course management, assessment, and communication, creating a seamless digital learning environment.',
    features: ['Student Portal', 'Course Management', 'Assessment Tools', 'Communication Hub'],
    tech: ['React', 'Firebase', 'Node.js', 'Cloud Infrastructure'],
    icon: GraduationCap,
    color: 'from-teal-500 to-cyan-500',
    audience: 'University of Maiduguri',
    year: '2021',
    status: 'Live',
    images: ['/api/placeholder/800/600', '/api/placeholder/800/600', '/api/placeholder/800/600'],
    client: {
      name: 'Prof. Aliyu Shugaba',
      testimonial: 'Lectrocloud has significantly improved our digital learning capabilities. Students are more engaged and we can track their progress effectively.',
      role: 'Vice Chancellor, University of Maiduguri',
      rating: 5
    },
    challenges: [
      'Limited digital learning infrastructure',
      'Poor student engagement in online learning',
      'Difficulty tracking academic progress',
      'Fragmented communication systems'
    ],
    solutions: [
      'Integrated cloud-based learning management system',
      'Interactive student engagement tools',
      'Real-time progress tracking and analytics',
      'Unified communication platform for all stakeholders'
    ],
    results: [
      '90% increase in student engagement',
      '75% improvement in learning outcomes',
      '100% digitization of course materials',
      '80% reduction in administrative overhead'
    ],
    liveUrl: 'https://lectrocloud.unimaid.edu.ng'
  },
  'libolt': {
    title: 'Libolt',
    category: 'EdServices',
    description: 'JAMB practice system with intelligent subject combination advice to help students optimize their exam performance.',
    fullDescription: 'Libolt is an intelligent JAMB preparation platform that combines comprehensive practice tests with AI-powered subject combination advice. The system analyzes student performance patterns and provides personalized recommendations to optimize exam preparation and improve success rates.',
    features: ['Practice Tests', 'Subject Advice', 'Performance Analytics', 'Study Plans'],
    tech: ['React', 'Machine Learning', 'Python', 'Analytics'],
    icon: GraduationCap,
    color: 'from-yellow-500 to-orange-500',
    audience: 'JAMB Candidates & Students',
    year: '2023',
    status: 'Live',
    images: ['/api/placeholder/800/600', '/api/placeholder/800/600', '/api/placeholder/800/600'],
    client: {
      name: 'Aisha Mohammed',
      testimonial: 'Libolt helped me achieve my best JAMB score. The intelligent subject advice and practice tests were exactly what I needed for effective preparation.',
      role: 'JAMB Candidate 2023',
      rating: 5
    },
    challenges: [
      'Poor JAMB examination performance rates',
      'Lack of personalized study guidance',
      'Limited access to quality practice materials',
      'Ineffective subject combination choices'
    ],
    solutions: [
      'AI-powered subject combination optimization',
      'Comprehensive practice test database',
      'Personalized study plans and recommendations',
      'Real-time performance analytics and feedback'
    ],
    results: [
      '85% improvement in student JAMB scores',
      '92% success rate for recommended subject combinations',
      '50,000+ students successfully prepared',
      '95% user satisfaction rate'
    ],
    liveUrl: 'https://libolt.education'
  },
  'arks-xpress': {
    title: 'Arks Xpress',
    category: 'Ecommerce',
    description: 'Comprehensive e-commerce and payment gateway solution tailored for the Nigerian market with local payment methods.',
    fullDescription: 'Arks Xpress is a comprehensive e-commerce and payment gateway solution specifically designed for the Nigerian market. It integrates local payment methods, supports multiple currencies, and provides merchant tools tailored to Nigerian business needs and banking infrastructure.',
    features: ['E-commerce Platform', 'Payment Gateway', 'Local Payments', 'Merchant Tools'],
    tech: ['React', 'Node.js', 'Payment APIs', 'Nigerian Banks'],
    icon: Building,
    color: 'from-green-600 to-teal-600',
    audience: 'Nigerian Businesses',
    year: '2023',
    status: 'Live',
    images: ['/api/placeholder/800/600', '/api/placeholder/800/600', '/api/placeholder/800/600'],
    client: {
      name: 'Chukwuma Okeke',
      testimonial: 'Arks Xpress made it easy for us to accept payments from Nigerian customers. The local payment integration is seamless and reliable.',
      role: 'CEO, Lagos Fashion Hub',
      rating: 4
    },
    challenges: [
      'Limited payment options for Nigerian businesses',
      'Complex integration with local banks',
      'Currency and transaction processing issues',
      'Lack of merchant-friendly tools'
    ],
    solutions: [
      'Native integration with Nigerian banking systems',
      'Support for local payment methods (USSD, Bank Transfer, Cards)',
      'Multi-currency support with automatic conversion',
      'Comprehensive merchant dashboard and analytics'
    ],
    results: [
      '200+ Nigerian businesses onboarded',
      '99.9% payment processing success rate',
      '40% increase in online sales for merchants',
      '95% customer satisfaction with payment experience'
    ],
    liveUrl: 'https://arksxpress.ng'
  },
  'vrs-data': {
    title: 'VRS Data',
    category: 'Software',
    description: 'VTU (Virtual Top-Up) platform for airtime, data, and utility payments with automated processing and real-time transactions.',
    fullDescription: 'VRS Data is a comprehensive Virtual Top-Up platform that simplifies airtime, data, and utility bill payments across Nigeria. With automated processing and real-time transactions, it serves both individual consumers and businesses looking to provide telecom services.',
    features: ['Airtime Top-up', 'Data Bundles', 'Utility Payments', 'Automated Processing'],
    tech: ['React', 'Node.js', 'Payment APIs', 'Real-time Processing'],
    icon: Building,
    color: 'from-blue-600 to-purple-600',
    audience: 'Telecom & Utility Customers',
    year: '2022',
    status: 'Live',
    images: ['/api/placeholder/800/600', '/api/placeholder/800/600', '/api/placeholder/800/600'],
    client: {
      name: 'Ahmed Bello',
      testimonial: 'VRS Data has streamlined our utility payment processes. The real-time processing and reliability have made it our go-to platform for all VTU services.',
      role: 'Business Owner',
      rating: 5
    },
    challenges: [
      'Slow and unreliable VTU services',
      'Multiple platforms for different services',
      'Poor transaction success rates',
      'Limited business integration options'
    ],
    solutions: [
      'Single platform for all VTU services',
      'Real-time processing with instant confirmations',
      'High-availability architecture for reliability',
      'API integration for business customers'
    ],
    results: [
      '99.9% transaction success rate',
      '50,000+ active users',
      '1M+ successful transactions processed',
      '90% faster processing compared to competitors'
    ],
    liveUrl: 'https://vrsdata.ng'
  }
};

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const project = projectsData[projectId || ''];

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const IconComponent = project.icon;

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
                  <div className={`w-3 h-3 rounded-full ${project.status === 'Live' ? 'bg-green-500' : 'bg-yellow-500'}`} />
                  <span className="text-sm font-medium text-foreground">{project.status}</span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">{project.year}</span>
                </div>
                
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${project.color} mb-6`}>
                  <IconComponent className="h-10 w-10 text-white" />
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  {project.title}
                </h1>
                
                <p className="text-lg text-muted-foreground mb-6">
                  {project.audience}
                </p>
                
                <p className="text-xl text-muted-foreground mb-8">
                  {project.fullDescription}
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  {project.liveUrl && (
                    <Button variant="hero" size="lg" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Globe className="mr-2 h-5 w-5" />
                        View Live Project
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" size="lg" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-5 w-5" />
                        View Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
              
              <div className="relative">
                <div className="glass p-4 rounded-2xl">
                  <img 
                    src={project.images[0]} 
                    alt={`${project.title} screenshot`}
                    className="w-full h-80 object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features & Tech Stack */}
        <section className="py-16 bg-muted/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Key Features</h2>
                <div className="space-y-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color}`} />
                      <span className="text-muted-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Technology Stack</h2>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-4 py-2 bg-gradient-to-r ${project.color} bg-opacity-10 text-foreground rounded-lg font-medium border border-accent/20`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge, Solution, Results */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Challenges */}
              <div className="glass p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-foreground mb-4">Challenges</h3>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="text-muted-foreground text-sm leading-relaxed">
                      • {challenge}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Solutions */}
              <div className="glass p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-foreground mb-4">Solutions</h3>
                <ul className="space-y-3">
                  {project.solutions.map((solution, index) => (
                    <li key={index} className="text-muted-foreground text-sm leading-relaxed">
                      • {solution}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Results */}
              <div className="glass p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-foreground mb-4">Results</h3>
                <ul className="space-y-3">
                  {project.results.map((result, index) => (
                    <li key={index} className="text-muted-foreground text-sm leading-relaxed">
                      • {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Client Testimonial */}
        <section className="py-16 bg-muted/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Client Testimonial</h2>
            </div>
            
            <div className="glass p-8 rounded-2xl text-center">
              <div className="flex justify-center mb-4">
                {[...Array(project.client.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-lg text-muted-foreground mb-6 italic">
                "{project.client.testimonial}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${project.color} flex items-center justify-center text-white font-bold`}>
                  {project.client.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-foreground">{project.client.name}</div>
                  <div className="text-sm text-muted-foreground">{project.client.role}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.images.map((image, index) => (
                <div key={index} className="glass p-4 rounded-2xl hover:shadow-card transition-all duration-300">
                  <img 
                    src={image} 
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Interested in a Similar Project?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how we can bring your vision to life with the same level of excellence.
              </p>
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Start Your Project
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetailPage;