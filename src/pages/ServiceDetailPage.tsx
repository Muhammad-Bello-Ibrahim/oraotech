import { useParams, Navigate } from 'react-router-dom';
import { UserCheck, CreditCard, FileText, CheckCircle, Clock, DollarSign, HelpCircle } from 'lucide-react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

interface ServiceData {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  process: string[];
  documents: string[];
  pricing: {
    service: string;
    price: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

const serviceData: Record<string, ServiceData> = {
  'nimc-enrollment': {
    id: 'nimc-enrollment',
    title: 'NIMC Enrollment',
    description: 'National Identity Management Commission enrollment services with expert guidance and support. We provide comprehensive assistance for all NIMC-related services.',
    icon: UserCheck,
    color: 'from-green-600 to-emerald-600',
    process: [
      'Complete our pre-enrollment form online',
      'Book an appointment at our facility',
      'Bring all required documents for verification',
      'Biometric data capture (fingerprints, photograph, signature)',
      'Data verification and validation',
      'Receive temporary slip and tracking number',
      'NIN card delivery within 3-6 weeks'
    ],
    documents: [
      'Birth Certificate or Declaration of Age',
      'Educational Certificate (Primary School Certificate minimum)',
      'Attestation Letter from Local Government Area',
      'Valid Passport Photograph (recent)',
      'Parent/Guardian consent (for minors)',
      'Marriage Certificate (for married women)'
    ],
    pricing: [
      { service: 'New Enrollment', price: '₦2,500' },
      { service: 'NIN Retrieval', price: '₦1,500' },
      { service: 'Card Replacement', price: '₦5,000' },
      { service: 'Data Modification', price: '₦3,000' }
    ],
    faqs: [
      {
        question: 'How long does the enrollment process take?',
        answer: 'The enrollment process typically takes 30-45 minutes. However, processing time may vary depending on the number of applicants.'
      },
      {
        question: 'What is the minimum age for NIMC enrollment?',
        answer: 'There is no minimum age for NIMC enrollment. Even newborns can be enrolled with proper documentation.'
      },
      {
        question: 'Can I retrieve my NIN if I lost it?',
        answer: 'Yes, we offer NIN retrieval services using your biometric data or personal information for verification.'
      },
      {
        question: 'How long does it take to receive my NIN card?',
        answer: 'NIN cards are typically delivered within 3-6 weeks after successful enrollment.'
      }
    ]
  },
  'bvn-enrollment': {
    id: 'bvn-enrollment',
    title: 'BVN Enrollment',
    description: 'Bank Verification Number enrollment and update services for seamless banking operations. Expert assistance for all BVN-related requirements.',
    icon: CreditCard,
    color: 'from-blue-600 to-indigo-600',
    process: [
      'Visit our BVN enrollment center',
      'Fill out the BVN enrollment form',
      'Provide valid identification documents',
      'Biometric capture (fingerprints and photograph)',
      'Voice recording for verification',
      'Signature capture',
      'Receive BVN immediately after processing'
    ],
    documents: [
      'Valid Government-issued ID (Driver\'s License, Voter\'s Card, etc.)',
      'Proof of Address (Utility Bill, Tenancy Agreement)',
      'Birth Certificate or Declaration of Age',
      'Passport Photograph (recent)',
      'Phone number for SMS notification'
    ],
    pricing: [
      { service: 'New BVN Registration', price: '₦1,000' },
      { service: 'BVN Update/Modification', price: '₦1,500' },
      { service: 'Biometric Re-capture', price: '₦800' },
      { service: 'BVN Status Verification', price: '₦500' }
    ],
    faqs: [
      {
        question: 'What is BVN and why do I need it?',
        answer: 'BVN (Bank Verification Number) is a unique identifier for all bank customers in Nigeria. It\'s mandatory for all banking transactions and account operations.'
      },
      {
        question: 'Can I use one BVN for multiple bank accounts?',
        answer: 'Yes, one BVN can be linked to multiple bank accounts across different banks in Nigeria.'
      },
      {
        question: 'What happens if my BVN expires?',
        answer: 'BVN doesn\'t expire, but you may need to update your information if there are significant changes in your details.'
      },
      {
        question: 'How quickly can I get my BVN?',
        answer: 'Your BVN is generated immediately after successful biometric capture and can be used right away.'
      }
    ]
  },
  'passport-application': {
    id: 'passport-application',
    title: 'Passport Application Assistance',
    description: 'Complete passport application support services from documentation to submission. We guide you through every step of the passport application process.',
    icon: FileText,
    color: 'from-purple-600 to-violet-600',
    process: [
      'Document verification and preparation',
      'Complete online application form',
      'Schedule appointment at passport office',
      'Accompany you to passport office (optional)',
      'Biometric capture and interview',
      'Payment processing',
      'Application submission and tracking',
      'Passport collection assistance'
    ],
    documents: [
      'Birth Certificate or Declaration of Age',
      'Local Government Identification Letter',
      'Passport Photographs (recent)',
      'Completed Application Form',
      'Previous Passport (for renewal)',
      'Marriage Certificate (if applicable)',
      'Change of Name Certificate (if applicable)'
    ],
    pricing: [
      { service: 'New Passport Application (32 pages)', price: '₦25,000' },
      { service: 'New Passport Application (64 pages)', price: '₦35,000' },
      { service: 'Passport Renewal', price: '₦20,000' },
      { service: 'Document Preparation Service', price: '₦5,000' },
      { service: 'Application Assistance', price: '₦10,000' }
    ],
    faqs: [
      {
        question: 'How long does it take to get a new passport?',
        answer: 'Standard passport processing takes 6-8 weeks. Express service (additional fee) can reduce this to 2-3 weeks.'
      },
      {
        question: 'Can you help with passport renewal?',
        answer: 'Yes, we provide complete assistance for passport renewal, including document preparation and application submission.'
      },
      {
        question: 'What if my documents are not complete?',
        answer: 'We offer document preparation services to help you gather and prepare all required documents before application.'
      },
      {
        question: 'Do you provide tracking services?',
        answer: 'Yes, we help you track your application status and notify you of any updates throughout the process.'
      }
    ]
  }
};

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const service = serviceData[serviceId || ''];

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const IconComponent = service.icon;

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
            <div className="text-center mb-12">
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} mb-6`}>
                <IconComponent className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {service.description}
              </p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-muted/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6">
                <Clock className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-foreground">Step-by-Step Process</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                How It <span className="text-accent">Works</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.process.map((step, index) => (
                <div key={index} className="glass p-6 rounded-2xl">
                  <div className="flex items-center mb-4">
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br ${service.color} text-white font-bold text-sm mr-3`}>
                      {index + 1}
                    </div>
                    <CheckCircle className="h-5 w-5 text-accent" />
                  </div>
                  <p className="text-muted-foreground">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Documents Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Required Documents */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Required Documents</h3>
                <div className="space-y-4">
                  {service.documents.map((doc, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Pricing */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Pricing</h3>
                <div className="space-y-4">
                  {service.pricing.map((item, index) => (
                    <div key={index} className="glass p-4 rounded-xl flex justify-between items-center">
                      <span className="text-foreground font-medium">{item.service}</span>
                      <span className={`text-lg font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6">
                <HelpCircle className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-foreground">FAQ</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Frequently Asked <span className="text-accent">Questions</span>
              </h2>
            </div>
            
            <div className="space-y-6">
              {service.faqs.map((faq, index) => (
                <div key={index} className="glass p-6 rounded-2xl">
                  <h4 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h4>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-muted-foreground mb-6">
                Contact us today to begin your {service.title.toLowerCase()} process.
              </p>
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <DollarSign className="mr-2 h-5 w-5" />
                Start Your Application
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServiceDetailPage;