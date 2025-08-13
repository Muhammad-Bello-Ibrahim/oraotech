import { useState } from 'react';
import { ArrowLeft, School, Users, BadgeCheck, Clock, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const SiwesPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    university: '',
    course: '',
    level: '',
    duration: '',
    track: '',
    motivation: ''
  });

  const tracks = [
    { value: 'basic-it', label: 'Basic IT & Productivity Tools' },
    { value: 'frontend', label: 'Frontend Development (React, Tailwind)' },
    { value: 'backend', label: 'Backend Development (Node.js, APIs)' },
    { value: 'ai-ml', label: 'AI/ML Fundamentals (Python, Models)' },
    { value: 'blockchain', label: 'Blockchain & Smart Contracts (Solidity, Web3)' }
  ];

  const durations = [
    { value: '3-months', label: '3 Months' },
    { value: '6-months', label: '6 Months' },
    { value: '12-months', label: '12 Months' }
  ];

  const levels = [
    { value: '100', label: '100 Level' },
    { value: '200', label: '200 Level' },
    { value: '300', label: '300 Level' },
    { value: '400', label: '400 Level' },
    { value: '500', label: '500 Level' },
    { value: 'graduate', label: 'Graduate' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/siwes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Application Submitted Successfully!",
          description: result.message,
        });
        
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          university: '',
          course: '',
          level: '',
          duration: '',
          track: '',
          motivation: ''
        });
      } else {
        toast({
          title: "Submission Failed",
          description: result.message || "Please check your input and try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Network Error",
        description: "Unable to submit application. Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={goBack}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-foreground">SIWES Application</h1>
              <p className="text-muted-foreground">Student Industrial Work Experience Scheme</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Program Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="glass p-6 rounded-2xl">
              <div className="flex items-center space-x-3 mb-4">
                <School className="h-6 w-6 text-accent" />
                <h2 className="text-xl font-bold text-foreground">About SIWES Program</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Our SIWES program provides hands-on industry experience for students, 
                combining practical learning with mentorship from experienced professionals.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Users className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">Structured Mentorship</h4>
                    <p className="text-sm text-muted-foreground">Weekly one-on-one sessions with industry experts</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <BadgeCheck className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">Real Projects</h4>
                    <p className="text-sm text-muted-foreground">Work on actual products and solutions</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">Certification</h4>
                    <p className="text-sm text-muted-foreground">Industry-recognized certificates upon completion</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">Flexible Duration</h4>
                    <p className="text-sm text-muted-foreground">3-12 months based on your academic requirements</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-foreground mb-4">Training Tracks</h3>
              <div className="space-y-2">
                {tracks.map((track) => (
                  <div key={track.value} className="px-3 py-2 bg-primary/10 text-primary text-sm rounded-lg">
                    {track.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="glass p-6 rounded-2xl bg-gradient-to-br from-accent/5 to-primary/5">
              <h4 className="font-bold text-foreground mb-3">Program Benefits</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Industry experience certificate</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Letter of recommendation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Portfolio development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Networking opportunities</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Possible job placement</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Application Form */}
          <div className="lg:col-span-2">
            <div className="glass p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-foreground mb-6">Apply for SIWES Program</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="university" className="block text-sm font-medium text-foreground mb-2">
                      University/Institution *
                    </label>
                    <input
                      type="text"
                      id="university"
                      name="university"
                      value={formData.university}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="Enter your university"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="course" className="block text-sm font-medium text-foreground mb-2">
                      Course of Study *
                    </label>
                    <input
                      type="text"
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="e.g., Computer Science"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="level" className="block text-sm font-medium text-foreground mb-2">
                      Current Level *
                    </label>
                    <select
                      id="level"
                      name="level"
                      value={formData.level}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      required
                    >
                      <option value="">Select your level</option>
                      {levels.map((level) => (
                        <option key={level.value} value={level.value}>
                          {level.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="duration" className="block text-sm font-medium text-foreground mb-2">
                      Preferred Duration *
                    </label>
                    <select
                      id="duration"
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      required
                    >
                      <option value="">Select duration</option>
                      {durations.map((duration) => (
                        <option key={duration.value} value={duration.value}>
                          {duration.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="track" className="block text-sm font-medium text-foreground mb-2">
                      Training Track *
                    </label>
                    <select
                      id="track"
                      name="track"
                      value={formData.track}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      required
                    >
                      <option value="">Select training track</option>
                      {tracks.map((track) => (
                        <option key={track.value} value={track.value}>
                          {track.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="motivation" className="block text-sm font-medium text-foreground mb-2">
                    Why do you want to join our SIWES program? *
                  </label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your goals, expectations, and how this program aligns with your career aspirations..."
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Submitting Application...
                    </>
                  ) : (
                    'Submit SIWES Application'
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiwesPage;