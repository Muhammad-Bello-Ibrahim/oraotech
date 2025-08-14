import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Github, Filter, Users, Heart, ShoppingCart, GraduationCap, Blocks, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const navigate = useNavigate();

  const categories = ['All', 'Software', 'Blockchain', 'HealthTech', 'EdTech', 'Ecommerce', 'EdServices'];

  const projects = [
    {
      id: 'connectrix',
      title: 'Connectrix',
      category: 'Software',
      description: 'Comprehensive dues collection, student engagement, and club management system specifically designed for higher institutions like GSU.',
      features: ['Dues Management', 'Student Engagement', 'Club Administration', 'Financial Tracking'],
      tech: ['React', 'Node.js', 'MongoDB', 'Payment Gateway'],
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      audience: 'Higher Education Institutions',
    },
    {
      id: 'mesafe',
      title: 'meSafe',
      category: 'HealthTech',
      description: 'Digital Health Record Management System with biometric access control and secure cloud storage for patient data.',
      features: ['Biometric Access', 'Cloud Storage', 'Health Records', 'Data Security'],
      tech: ['React Native', 'Node.js', 'Blockchain', 'Biometric SDK'],
      icon: Heart,
      color: 'from-green-500 to-emerald-500',
      audience: 'Healthcare Providers & Patients',
    },
    {
      id: 'shopmon',
      title: 'Shopmon',
      category: 'Ecommerce',
      description: 'Location-based buying and selling platform that connects local buyers with sellers for products and services.',
      features: ['Location-Based', 'Product Listings', 'Service Marketplace', 'Real-time Chat'],
      tech: ['React', 'Express.js', 'Google Maps API', 'Socket.io'],
      icon: ShoppingCart,
      color: 'from-purple-500 to-pink-500',
      audience: 'Local Businesses & Consumers',
    },
    {
      id: 'elevatex',
      title: 'Elevatex',
      category: 'Blockchain',
      description: 'Referral-based financial system with pack rewards and blockchain-powered transparency for network marketing.',
      features: ['Referral System', 'Pack Rewards', 'Blockchain Ledger', 'Financial Tracking'],
      tech: ['Solidity', 'Web3.js', 'React', 'Smart Contracts'],
      icon: Blocks,
      color: 'from-orange-500 to-red-500',
      audience: 'Network Marketing Companies',
    },
    {
      id: 'bigtailor',
      title: 'BigTailor',
      category: 'Ecommerce',
      description: 'Revolutionary clothing e-commerce platform featuring virtual fitting technology for both tailors and customers.',
      features: ['Virtual Fitting', 'Custom Tailoring', 'Size Matching', 'Order Management'],
      tech: ['React', 'AR/VR SDK', 'Node.js', 'Computer Vision'],
      icon: ShoppingCart,
      color: 'from-indigo-500 to-blue-500',
      audience: 'Fashion Industry & Consumers',
    },
    {
      id: 'lectrocloud',
      title: 'Lectrocloud',
      category: 'EdTech',
      description: 'Cloud-based student engagement platform designed specifically for the University of Maiduguri and similar institutions.',
      features: ['Student Portal', 'Course Management', 'Assessment Tools', 'Communication Hub'],
      tech: ['React', 'Firebase', 'Node.js', 'Cloud Infrastructure'],
      icon: GraduationCap,
      color: 'from-teal-500 to-cyan-500',
      audience: 'University of Maiduguri',
    },
    {
      id: 'libolt',
      title: 'Libolt',
      category: 'EdServices',
      description: 'JAMB practice system with intelligent subject combination advice to help students optimize their exam performance.',
      features: ['Practice Tests', 'Subject Advice', 'Performance Analytics', 'Study Plans'],
      tech: ['React', 'Machine Learning', 'Python', 'Analytics'],
      icon: GraduationCap,
      color: 'from-yellow-500 to-orange-500',
      audience: 'JAMB Candidates & Students',
    },
    {
      id: 'arks-xpress',
      title: 'Arks Xpress',
      category: 'Ecommerce',
      description: 'Comprehensive e-commerce and payment gateway solution tailored for the Nigerian market with local payment methods.',
      features: ['E-commerce Platform', 'Payment Gateway', 'Local Payments', 'Merchant Tools'],
      tech: ['React', 'Node.js', 'Payment APIs', 'Nigerian Banks'],
      icon: Building,
      color: 'from-green-600 to-teal-600',
      audience: 'Nigerian Businesses',
    },
    {
      id: 'vrs-data',
      title: 'VRS Data',
      category: 'Software',
      description: 'VTU (Virtual Top-Up) platform for airtime, data, and utility payments with automated processing and real-time transactions.',
      features: ['Airtime Top-up', 'Data Bundles', 'Utility Payments', 'Automated Processing'],
      tech: ['React', 'Node.js', 'Payment APIs', 'Real-time Processing'],
      icon: Building,
      color: 'from-blue-600 to-purple-600',
      audience: 'Telecom & Utility Customers',
    },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6">
            <Filter className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-foreground">Our Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Projects That
            <span className="text-accent"> Make Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our diverse portfolio of innovative solutions across multiple industries, 
            each designed to solve real-world problems and drive digital transformation.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? 'hero' : 'outline'}
              size="sm"
              onClick={() => setActiveFilter(category)}
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-2xl overflow-hidden hover:shadow-card transition-all duration-500 hover:scale-105"
            >
              {/* Project Header */}
              <div className={`relative p-6 bg-gradient-to-br ${project.color}`}>
                <div className="flex items-center justify-between mb-4">
                  <project.icon className="h-8 w-8 text-white" />
                  <span className="px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/80 text-sm">{project.audience}</p>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 group"
                    onClick={() => navigate(`/projects/${project.id}`)}
                  >
                    <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    View Details
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how we can bring your vision to life with our proven expertise.
            </p>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start a Conversation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;