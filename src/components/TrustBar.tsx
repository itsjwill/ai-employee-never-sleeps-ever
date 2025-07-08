import { Building2 } from "lucide-react";

const companies = [
  "TechCorp",
  "InnovateCo", 
  "FutureGen",
  "NextWave",
  "SmartSys",
  "DataFlow",
  "CloudTech",
  "AIVentures"
];

export const TrustBar = () => {
  return (
    <section className="py-16 relative border-b border-slate-800/50">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gray-400 text-lg font-medium">
            Trusted by modern, forward-thinking businesses
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
          {companies.map((company, index) => (
            <div 
              key={company}
              className="group flex items-center justify-center space-x-2 opacity-60 hover:opacity-100 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Building2 className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
              <span className="text-gray-500 group-hover:text-gray-300 font-semibold text-sm lg:text-base transition-colors">
                {company}
              </span>
            </div>
          ))}
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
};