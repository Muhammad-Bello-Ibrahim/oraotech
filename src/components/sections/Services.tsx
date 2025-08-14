import { Code, Blocks, Heart, GraduationCap, ShoppingCart, Users, CreditCard, FileText, UserCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions built with cutting-edge technologies to drive your business forward.',
      features: ['Web Applications', 'Mobile Apps', 'Desktop Software', 'API Development'],
      color: 'from-blue-500 to-cyan-500',
      detailPage: null,
    },
    {
      icon: Blocks,
      title: 'Blockchain Solutions',
      description: 'Decentralized applications and smart contracts that revolutionize how businesses operate.',
      features: ['Smart Contracts', 'DeFi Platforms', 'NFT Marketplaces', 'Crypto Wallets'],
      color: 'from-purple-500 to-pink-500',
      detailPage: null,
    },
    {
      icon: Heart,
      title: 'Digital Health Systems',
      description: 'Healthcare technology solutions that improve patient outcomes and streamline operations.',
      features: ['Health Records', 'Telemedicine', 'Medical Devices', 'Patient Portals'],
      color: 'from-green-500 to-emerald-500',
      detailPage: null,
    },
    {
      icon: GraduationCap,
      title: 'Educational Technology',
      description: 'Learning platforms and educational tools that enhance the teaching and learning experience.',
      features: ['LMS Platforms', 'E-Learning', 'Assessment Tools', 'Student Engagement'],
      color: 'from-orange-500 to-red-500',
      detailPage: null,
    },
    {
      icon: GraduationCap,
      title: 'School Management Systems',
      description: 'End-to-end platforms for primary, secondary, and tertiary institutions.',
      features: ['Admissions & Enrollment', 'Attendance & Timetables', 'Results & Transcripts', 'Fees, Payroll & Finance'],
      color: 'from-sky-500 to-blue-600',
      detailPage: null,
    },
    {
      icon: Users,
      title: 'Training & Capacity Building',
      description: 'Practical training from basic IT to programming, AI, Blockchain and more.',
      features: ['Basic IT & Productivity', 'Frontend/Backend Programming', 'AI/ML Fundamentals', 'Blockchain & Smart Contracts'],
      color: 'from-emerald-500 to-teal-500',
      detailPage: null,
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Complete online shopping platforms with advanced features and seamless user experiences.',
      features: ['Online Stores', 'Payment Systems', 'Inventory Management', 'Analytics'],
      color: 'from-indigo-500 to-blue-500',
      detailPage: null,
    },
    {
      icon: Users,
      title: 'Enterprise Solutions',
      description: 'Scalable business solutions that optimize workflows and enhance productivity.',
      features: ['CRM Systems', 'ERP Solutions', 'Workflow Automation', 'Data Analytics'],
      color: 'from-teal-500 to-cyan-500',
      detailPage: null,
    },
    {
      icon: UserCheck,
      title: 'NIMC Enrollment',
      description: 'National Identity Management Commission enrollment services with expert guidance and support.',
      features: ['New Enrollment', 'NIN Retrieval', 'Card Replacement', 'Data Modification'],
      color: 'from-green-600 to-emerald-600',
      detailPage: 'nimc-enrollment',
    },
    {
      icon: CreditCard,
      title: 'BVN Enrollment',
      description: 'Bank Verification Number enrollment and update services for seamless banking operations.',
      features: ['New BVN Registration', 'BVN Update', 'Biometric Capture', 'Status Verification'],
      color: 'from-blue-600 to-indigo-600',
      detailPage: 'bvn-enrollment',
    },
    {
      icon: FileText,
      title: 'Passport Application Assistance',
      description: 'Complete passport application support services from documentation to submission.',
      features: ['Document Preparation', 'Application Submission', 'Status Tracking', 'Renewal Services'],
      color: 'from-purple-600 to-violet-600',
      detailPage: 'passport-application',
    },
    {
      icon: FileText,
      title: 'CAC Registration',
      description: 'Corporate Affairs Commission business registration and incorporation services.',
      features: ['Business Name Registration', 'Company Incorporation', 'CAC Search', 'Annual Returns'],
      color: 'from-orange-600 to-red-600',
      detailPage: 'cac-registration',
    },
  ];

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6">
            <Code className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-foreground">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Technology Solutions That
            <span className="text-accent"> Transform</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We deliver comprehensive technology solutions across multiple industries, 
            helping businesses innovate and grow in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative glass p-8 rounded-2xl hover:shadow-card transition-all duration-500 hover:scale-105 cursor-pointer"
              onClick={() => service.detailPage && navigate(`/services/${service.detailPage}`)}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <service.icon className="h-7 w-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/20 rounded-2xl transition-colors duration-500" />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to transform your business with our technology solutions?
          </p>
          <button 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-8 py-3 bg-gradient-primary text-white font-semibold rounded-lg hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            Start Your Project
            <Code className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;