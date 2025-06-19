
import React from 'react';

const stats = [
  { number: '99.99%', label: 'Uptime Guarantee' },
  { number: '< 100ms', label: 'Response Time' },
  { number: '500M+', label: 'Transactions/Day' },
  { number: '50+', label: 'Countries Served' }
];

const StatsSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground">
            Our platform powers some of the world's largest telecommunications providers
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
