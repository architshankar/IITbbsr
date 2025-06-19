
// import React, { useState, useEffect } from 'react';
// import { CreditCard, Zap, Layers, Calendar } from 'lucide-react';

// const features = [
//   {
//     id: 'billing',
//     name: 'BILLING',
//     icon: CreditCard,
//     title: 'Real-Time Convergent Billing',
//     description: 'Instantaneous, accurate billing across all services and platforms with advanced rating capabilities.',
//     className: 'billing'
//   },
//   {
//     id: 'charging',
//     name: 'CHARGING',
//     icon: Zap,
//     title: 'Smart Charging Engine',
//     description: 'Dynamic, flexible charging solutions with real-time policy enforcement and revenue optimization.',
//     className: 'charging'
//   },
//   {
//     id: 'catalog',
//     name: 'CATALOG',
//     icon: Layers,
//     title: 'Service Catalog Management',
//     description: 'Comprehensive catalog management with automated provisioning and lifecycle management.',
//     className: 'catalog'
//   },
//   {
//     id: 'events',
//     name: 'EVENTS',
//     icon: Calendar,
//     title: 'Event Processing Hub',
//     description: 'High-volume event processing with real-time analytics and intelligent workflow automation.',
//     className: 'events'
//   }
// ];

// const HeroSection = () => {
//   const [activeFeature, setActiveFeature] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveFeature((prev) => (prev + 1) % features.length);
//     }, 4000); // Change every 4 seconds

//     return () => clearInterval(interval);
//   }, []);

//   const currentFeature = features[activeFeature];

//   return (
//     <section className="hero-section min-h-screen pt-16 pb-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
//             EFFICIENCY, SCALABILITY, AND AGILITY
//           </p>
//           <h1 className="text-6xl md:text-8xl font-bold mb-4">
//             <span className="text-foreground">Unparalleled</span>
//             <br />
//             <span className="text-primary">BSS/OSS Capabilities</span>
//           </h1>
//         </div>

//         {/* Feature Cards */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
//           {features.map((feature, index) => (
//             <div
//               key={feature.id}
//               className={`relative feature-card ${feature.className} p-4 rounded-xl cursor-pointer transition-transform duration-300 flex flex-col items-center text-center overflow-hidden ${
//                 index === activeFeature
//                   ? 'ring-2 ring-primary scale-105 bg-muted'
//                   : 'bg-muted hover:scale-105'
//               }`}
//               onClick={() => setActiveFeature(index)}
//             >
//               {/* Shimmer bar effect */}
//               {index === activeFeature && (
//                 <div className="absolute bottom-0 left-0 h-1 bg-primary/70 animate-shimmer-bar rounded-b-md" />
//               )}

//               {/* Card content */}
//               <feature.icon className="h-8 w-8 mb-3 text-primary z-10" />
//               <h3 className="font-semibold text-sm tracking-wider z-10">{feature.name}</h3>
//             </div>
//           ))}
//         </div>

//         {/* Feature Details */}
//         <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-border">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-4xl md:text-5xl font-bold mb-6">
//                 {currentFeature.title}
//               </h2>
//               <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
//                 {currentFeature.description}
//               </p>
//               <div className="flex flex-wrap gap-4">
//                 <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
//                   Learn More
//                 </button>
//                 <button className="border border-border px-6 py-3 rounded-lg font-semibold hover:bg-muted transition-colors">
//                   View Demo
//                 </button>
//               </div>
//             </div>
//             <div className="relative">
//               <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 h-80 flex items-center justify-center">
//                 <currentFeature.icon className="h-32 w-32 text-primary/60" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


// import React, { useState, useEffect } from "react";
// import { CreditCard, Zap, Layers, Calendar } from "lucide-react";

// const features = [
//   {
//     id: "billing",
//     name: "BILLING",
//     icon: CreditCard,
//     title: "Real-Time Convergent Billing",
//     description:
//       "Instantaneous, accurate billing across all services and platforms with advanced rating capabilities.",
//     className: "bg-red-200 text-red-900",
//     iconBg: "bg-red-300",
//   },
//   {
//     id: "charging",
//     name: "CHARGING",
//     icon: Zap,
//     title: "Smart Charging Engine",
//     description:
//       "Dynamic, flexible charging solutions with real-time policy enforcement and revenue optimization.",
//     className: "bg-yellow-200 text-yellow-900",
//     iconBg: "bg-yellow-300",
//   },
//   {
//     id: "catalog",
//     name: "CATALOG",
//     icon: Layers,
//     title: "Service Catalog Management",
//     description:
//       "Comprehensive catalog management with automated provisioning and lifecycle management.",
//     className: "bg-green-200 text-green-900",
//     iconBg: "bg-green-300",
//   },
//   {
//     id: "events",
//     name: "EVENTS",
//     icon: Calendar,
//     title: "Event Processing Hub",
//     description:
//       "High-volume event processing with real-time analytics and intelligent workflow automation.",
//     className: "bg-cyan-200 text-cyan-900",
//     iconBg: "bg-cyan-300",
//   },
// ];

// const HeroSection = () => {
//   const [activeFeature, setActiveFeature] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveFeature((prev) => (prev + 1) % features.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   const currentFeature = features[activeFeature];

//   return (
//     <section className="hero-section min-h-screen pt-16 pb-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
//             EFFICIENCY, SCALABILITY, AND AGILITY
//           </p>
//           <h1 className="text-6xl md:text-8xl font-bold mb-4">
//             <span className="text-foreground">Unparalleled</span>
//             <br />
//             <span className="text-primary">BSS/OSS Capabilities</span>
//           </h1>
//         </div>

//         {/* Feature Cards */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
//           {features.map((feature, index) => {
//             const isActive = index === activeFeature;
//             return (
//               <div
//                 key={feature.id}
//                 className={`relative feature-card group cursor-pointer transition-all duration-300 overflow-hidden rounded-xl ${
//                   isActive ? "scale-105" : ""
//                 }`}
//                 onClick={() => setActiveFeature(index)}
//               >
//                 {/* Background shimmer loader */}
//                 {isActive && (
//                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer-bar z-0" />
//                 )}

//                 {/* Inner card */}
//                 <div
//                   className={`relative z-10 flex items-center gap-4 p-4 rounded-xl ${
//                     isActive ? feature.className : "bg-muted"
//                   }`}
//                 >
//                   <div
//                     className={`h-10 w-10 rounded-lg flex items-center justify-center ${
//                       isActive ? feature.iconBg : "bg-muted"
//                     }`}
//                   >
//                     <feature.icon className="h-6 w-6" />
//                   </div>
//                   <h3 className="text-sm font-semibold tracking-wider">
//                     {feature.name}
//                   </h3>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Feature Details */}
//         <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-border">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-4xl md:text-5xl font-bold mb-6">
//                 {currentFeature.title}
//               </h2>
//               <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
//                 {currentFeature.description}
//               </p>
//               <div className="flex flex-wrap gap-4">
//                 <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
//                   Learn More
//                 </button>
//                 <button className="border border-border px-6 py-3 rounded-lg font-semibold hover:bg-muted transition-colors">
//                   View Demo
//                 </button>
//               </div>
//             </div>
//             <div className="relative">
//               <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 h-80 flex items-center justify-center">
//                 <currentFeature.icon className="h-32 w-32 text-primary/60" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


import React, { useState, useEffect } from "react";
import { CreditCard, Zap, Layers, Calendar } from "lucide-react";

// const features = [
//   {
//     id: "billing",
//     name: "BILLING",
//     icon: CreditCard,
//     title: "Real-Time Convergent Billing",
//     description:
//       "Instantaneous, accurate billing across all services and platforms with advanced rating capabilities.",
//     iconBg: "bg-pink-300",
//   },
//   {
//     id: "charging",
//     name: "CHARGING",
//     icon: Zap,
//     title: "Smart Charging Engine",
//     description:
//       "Dynamic, flexible charging solutions with real-time policy enforcement and revenue optimization.",
//     iconBg: "bg-yellow-300",
//   },
//   {
//     id: "catalog",
//     name: "CATALOG",
//     icon: Layers,
//     title: "Service Catalog Management",
//     description:
//       "Comprehensive catalog management with automated provisioning and lifecycle management.",
//     iconBg: "bg-green-300",
//   },
//   {
//     id: "events",
//     name: "EVENTS",
//     icon: Calendar,
//     title: "Event Processing Hub",
//     description:
//       "High-volume event processing with real-time analytics and intelligent workflow automation.",
//     iconBg: "bg-cyan-300",
//   },
// ];


const features = [
  {
    id: "billing",
    name: "BILLING",
    icon: CreditCard,
    title: "Real-Time Convergent Billing",
    description:
      "Instantaneous, accurate billing across all services and platforms with advanced rating capabilities.",
    iconBg: "bg-pink-300",
    image: "/images/billing.png", // 🖼️ Add image path here
  },
  {
    id: "charging",
    name: "CHARGING",
    icon: Zap,
    title: "Online Charging Engine",
    description:
      "AI powered insights that predict customer needs and drive personalized services.",
    iconBg: "bg-yellow-300",
    image: "/images/charging.png",
  },
  {
    id: "catalog",
    name: "CATALOG",
    icon: Layers,
    title: "Product Catalog ",
    description:
      "Intutive tools that help you manage your product catalog and provide personalized services.",
    iconBg: "bg-green-300",
    image: "/images/catalog.png",
  },
  {
    id: "events",
    name: "EVENTS",
    icon: Calendar,
    title: "Event Processing Hub",
    description:
      "High-volume event processing with real-time analytics and intelligent workflow automation.",
    iconBg: "bg-cyan-300",
    image: "/images/events.png",
  },
];

const HeroSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentFeature = features[activeFeature];

  return (
    <section className="hero-section min-h-screen pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
            EFFICIENCY, SCALABILITY, AND AGILITY
          </p>
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            <span className="text-foreground">Unparalleled</span>
            <br />
            <span className="text-primary">BSS/OSS Capabilities</span>
          </h1>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {features.map((feature, index) => {
            const isActive = index === activeFeature;
            return (
              <div
                key={feature.id}
                className={`relative group transition-all duration-300 overflow-hidden rounded-xl ${isActive ? "scale-105" : ""
                  }`}
                onClick={() => setActiveFeature(index)}
              >
                {/* Loader effect */}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer-bar z-0" />
                )}

                {/* Background base */}
                <div className="relative z-10 bg-muted p-4 rounded-xl flex items-center gap-4">
                  {/* Colored icon container */}
                  <div
                    className={`h-10 w-10 rounded-lg flex items-center justify-center ${feature.iconBg}`}
                  >
                    <feature.icon className="h-6 w-6 text-black" />
                  </div>
                  {/* Label */}
                  <h3 className="text-sm font-semibold tracking-wider">
                    {feature.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Details */}
        <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-border">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {currentFeature.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {currentFeature.description}
              </p>
              
            </div>
            {/* <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 h-80 flex items-center justify-center">
                <currentFeature.icon className="h-32 w-32 text-primary/60" />
              </div>
            </div> */}
            <div className="relative">
              {/* Background Container */}
              <div className="relative bg-[rgba(146,166,176,1)] rounded-2xl p-8 h-80 flex items-center justify-center overflow-hidden">
                {/* Background Image - full coverage */}
                {currentFeature.image && (
                  <img
                    src={currentFeature.image}
                    alt={currentFeature.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
                  />
                )}

                
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
