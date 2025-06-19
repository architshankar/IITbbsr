
import React from 'react';
import { useState } from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import StatsSection from '@/components/StatsSection';
import BottomNavigation from '@/components/BottomNavigation';
import Loader from '@/components/Loader';

const Index = () => {
    const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <Loader onLoadingComplete={handleLoadingComplete} />;
  }
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pb-16">
          <HeroSection />
          <FeaturesSection />
          <StatsSection />
          
          {/* Additional content sections for scrolling */}
          <section id="products" className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl font-bold mb-6">Products</h2>
              <p className="text-xl text-muted-foreground">
                Explore our comprehensive suite of BSS/OSS solutions
              </p>
            </div>
          </section>

          <section id="solutions" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl font-bold mb-6">Solutions</h2>
              <p className="text-xl text-muted-foreground">
                Tailored solutions for telecommunications providers of all sizes
              </p>
            </div>
          </section>

          <section id="resources" className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl font-bold mb-6">Resources</h2>
              <p className="text-xl text-muted-foreground">
                Documentation, guides, and best practices for implementation
              </p>
            </div>
          </section>

          <section id="services" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-4xl font-bold mb-6">Services</h2>
              <p className="text-xl text-muted-foreground">
                Professional services and support for your digital transformation
              </p>
            </div>
          </section>
        </main>

        <BottomNavigation />
      </div>
    </ThemeProvider>
  );
};

export default Index;
