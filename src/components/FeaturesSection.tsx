
import React from 'react';
import { Shield, Zap, Globe, BarChart } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security with advanced encryption and compliance frameworks.'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Sub-second response times with distributed architecture and caching.'
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Multi-region deployment with 99.99% uptime and disaster recovery.'
  },
  {
    icon: BarChart,
    title: 'Advanced Analytics',
    description: 'Real-time insights with AI-powered predictive analytics and reporting.'
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built for the future of telecommunications with cutting-edge technology 
            and unmatched reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
