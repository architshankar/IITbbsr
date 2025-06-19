
import React, { useState, useEffect } from 'react';
import { Calendar, ArrowUp, Plus } from 'lucide-react';

const BottomNavigation = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 font-mono">
  <div className="bg-slate-800 text-white rounded-full px-4 py-2 shadow-lg backdrop-blur-md">
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-1">
        <span className="text-xs font-medium">PRODUCTS</span>
        <Plus className="h-3 w-3" />
      </div>

      <div className="flex items-center space-x-1">
        <span className="text-xs font-medium">SOLUTIONS</span>
        <Plus className="h-3 w-3" />
      </div>

      <div className="flex items-center space-x-1">
        <span className="text-xs font-medium">RESOURCES</span>
        <Plus className="h-3 w-3" />
      </div>

      <div className="text-xs font-medium">SERVICES</div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="p-1.5 rounded-full bg-slate-700 hover:bg-slate-600 transition-colors ml-2"
        >
          <ArrowUp className="h-3 w-3" />
        </button>
      )}

      <button className="bg-cyan-400 text-black px-4 py-1.5 rounded-full hover:bg-cyan-300 transition-colors font-medium text-xs ml-2">
        BOOK A MEETING
      </button>
    </div>
  </div>
</div>

  );
};

export default BottomNavigation;
