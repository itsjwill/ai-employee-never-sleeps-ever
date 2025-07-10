import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
export const CallToAction = () => {
  return <section className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-cyan-900/20"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-pink-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse" style={{
        animationDelay: '2s'
      }}></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full px-6 py-2 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-purple-300" />
            <span className="text-purple-200 text-sm font-medium">Limited Time Offer</span>
          </div>

          {/* Main heading */}
          <div className="space-y-6">
            <h2 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="block text-white">Ready to hire your</span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                first AI Employee?
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Join thousands of forward-thinking companies that have already transformed their operations. 
              Your AI Employee is ready to start working today.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            
            <Button variant="outline" size="lg" className="border-2 border-purple-400/50 text-purple-300 hover:bg-purple-500/20 text-xl px-16 py-8 rounded-full backdrop-blur-sm hover:scale-105 transition-all duration-300">
              Schedule a Demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex justify-center mt-16">
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-cyan-300">Support</div>
              <div className="text-gray-400 text-sm mt-2">Dedicated success team</div>
            </div>
          </div>

          {/* Social proof */}
          <div className="mt-16 pt-8 border-t border-slate-700/50">
            <p className="text-gray-400 mb-4">Trusted by innovative companies worldwide</p>
            <div className="flex justify-center items-center space-x-12 opacity-60">
              {['TechCorp', 'InnovateCo', 'FutureGen', 'NextWave', 'SmartSys'].map(company => <div key={company} className="text-gray-500 font-semibold text-lg">
                  {company}
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};