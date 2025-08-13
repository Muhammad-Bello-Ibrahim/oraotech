import { Target, Eye, Heart, Users, Award, TrendingUp } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We constantly push boundaries and embrace cutting-edge technologies to deliver exceptional solutions.',
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Our clients success is our priority. We build lasting partnerships through trust and exceptional service.',
    },
    {
      icon: Heart,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to user experience.',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Growth',
      description: 'We believe in constant learning and improvement, staying ahead of industry trends and technologies.',
    },
  ];

  const milestones = [
    { year: '2019', title: 'Company Founded', description: 'Started with a vision to transform technology solutions' },
    { year: '2020', title: 'First Major Project', description: 'Delivered meSafe health record management system' },
    { year: '2021', title: 'Education Focus', description: 'Launched Lectrocloud for University of Maiduguri' },
    { year: '2022', title: 'Blockchain Integration', description: 'Introduced Elevatex referral-based financial system' },
    { year: '2023', title: 'Market Expansion', description: 'Expanded to e-commerce with Shopmon and BigTailor' },
    { year: '2024', title: 'Industry Recognition', description: 'Recognized as leading tech innovator in Nigeria' },
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6">
            <Heart className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-foreground">About Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Building the Future
            <span className="text-accent"> Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            At Orao Technologies, we believe in thinking bold and building smart. 
            Our mission is to innovate technology solutions that transform industries and improve lives.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="glass p-8 rounded-2xl">
            <Target className="h-12 w-12 text-accent mb-6" />
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To deliver innovative technology solutions that empower businesses and individuals 
              to achieve their full potential. We strive to create software that not only meets 
              current needs but anticipates future challenges and opportunities.
            </p>
          </div>

          <div className="glass p-8 rounded-2xl">
            <Eye className="h-12 w-12 text-primary mb-6" />
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be the leading technology partner in Africa, recognized for our innovation, 
              quality, and commitment to client success. We envision a future where technology 
              seamlessly integrates with human needs to create meaningful impact.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">{value.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Our Journey</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent to-primary rounded-full" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="glass p-6 rounded-xl hover:shadow-card transition-all duration-300">
                      <div className="text-2xl font-bold text-accent mb-2">{milestone.year}</div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">{milestone.title}</h4>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10 w-4 h-4 bg-accent rounded-full border-4 border-background" />
                  
                  <div className="w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="glass p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">Our Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Projects Completed', icon: Award },
              { number: '25+', label: 'Happy Clients', icon: Users },
              { number: '5+', label: 'Years Experience', icon: TrendingUp },
              { number: '10+', label: 'Technologies Mastered', icon: Target },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;