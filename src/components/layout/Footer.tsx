import { Mail, Phone, MapPin, Twitter, Linkedin, Github, Facebook } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-neon/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-2xl font-bold">Orao Technologies</span>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-neon mb-2">Think Bold, Build Smart</h3>
                <p className="text-white/80 leading-relaxed max-w-md">
                  We're a forward-thinking tech company specializing in software development, 
                  blockchain solutions, digital health systems, and educational technology 
                  that transforms industries and drives innovation.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-accent" />
                  <span className="text-white/80">hello@orao.tech</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-accent" />
                  <span className="text-white/80">+234 (0) 123 456 7890</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span className="text-white/80">Lagos, Nigeria</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { name: 'Home', href: '#home' },
                  { name: 'About Us', href: '#about' },
                  { name: 'Services', href: '#services' },
                  { name: 'Portfolio', href: '#portfolio' },
                  { name: 'Team', href: '#team' },
                  { name: 'SIWES', href: '#siwes' },
                  { name: 'Contact', href: '#contact' }
                ].map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/80 hover:text-accent transition-colors"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Our Services</h3>
              <ul className="space-y-3">
                {[
                  'Software Development',
                  'Blockchain Solutions',
                  'Digital Health Systems',
                  'Educational Technology',
                  'School Management Systems',
                  'Training & Capacity Building',
                  'E-commerce Solutions',
                  'Enterprise Solutions'
                ].map((service) => (
                  <li key={service} className="text-white/80">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Media & Newsletter */}
          <div className="border-t border-white/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              {/* Social Media */}
              <div className="flex items-center space-x-6">
                <span className="text-white/80 font-medium">Follow Us:</span>
                <div className="flex space-x-4">
                  {[
                    { icon: Twitter, href: 'https://www.twitter.com/devmufteem' },
                    { icon: Linkedin, href: 'https://www.linkedin.com/oraoacademy' },
                    { icon: Github, href: 'https://www.github.com/oraoacademy' },
                    { icon: Facebook, href: 'https://www.facebook.com/oraoacademy' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300"
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="flex items-center space-x-4">
                <span className="text-white/80 font-medium">Stay Updated:</span>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 bg-white/10 border border-white/20 rounded-l-lg focus:outline-none focus:border-accent text-white placeholder-white/60"
                  />
                  <button className="px-6 py-2 bg-accent text-primary font-semibold rounded-r-lg hover:bg-accent-light transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-white/60 text-sm">
                © {new Date().getFullYear()} Orao Technologies. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-white/60 hover:text-accent transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-white/60 hover:text-accent transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-white/60 hover:text-accent transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;