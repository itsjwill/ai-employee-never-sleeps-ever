import { ArrowDown, Brain, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
const steps = [{
  number: "01",
  title: "Connect & Configure",
  description: "Link Vantum AI to your existing systems, define your business rules, and set objectives. Our AI learns your company's unique processes and culture.",
  icon: Brain,
  gradient: "from-purple-500 to-pink-500"
}, {
  number: "02",
  title: "Deploy & Integrate",
  description: "Your AI Employee begins working immediately, handling tasks, making decisions, and collaborating with your team across all touchpoints.",
  icon: Zap,
  gradient: "from-cyan-500 to-blue-500"
}, {
  number: "03",
  title: "Learn & Optimize",
  description: "Vantum AI continuously improves, learning from every interaction and adapting to your evolving business needs for maximum efficiency.",
  icon: TrendingUp,
  gradient: "from-green-500 to-emerald-500"
}];
export const HowItWorks = () => {
  return <section id="how-it-works" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full px-6 py-2 mb-8">
            <Zap className="w-4 h-4 text-cyan-300" />
            <span className="text-cyan-200 text-sm font-medium">Simple Implementation</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            How It
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Get your AI Employee up and running in minutes, not months. 
            Our streamlined process ensures rapid deployment and immediate value.
          </p>
        </div>

        <div className="relative">
          {/* Connection lines */}
          <div className="hidden lg:block absolute left-1/2 top-24 bottom-24 w-px bg-gradient-to-b from-purple-500 via-cyan-500 to-green-500 transform -translate-x-1/2"></div>
          
          <div className="space-y-24">
            {steps.map((step, index) => <div key={step.number} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col gap-12`}>
                {/* Content */}
                <div className="lg:w-1/2 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-2xl flex items-center justify-center shadow-xl`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className={`text-6xl font-bold bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>
                      {step.number}
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Visual */}
                <div className="lg:w-1/2">
                  <div className="bg-slate-800/50 backdrop-blur-md rounded-3xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 bg-gradient-to-r ${step.gradient} rounded-full animate-pulse`}></div>
                          <span className="text-white font-medium">Step {step.number}</span>
                        </div>
                        <span className="text-green-400 text-sm">● Active</span>
                      </div>
                      
                      <div className="h-32 bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-xl flex items-center justify-center">
                        <step.icon className={`w-16 h-16 text-transparent bg-gradient-to-r ${step.gradient} bg-clip-text`} />
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2">
                        {[...Array(6)].map((_, i) => <div key={i} className="h-2 bg-slate-700 rounded-full overflow-hidden">
                            <div className={`h-full bg-gradient-to-r ${step.gradient} rounded-full transition-all duration-1000`} style={{
                        width: `${Math.random() * 100}%`,
                        animationDelay: `${i * 200}ms`
                      }}></div>
                          </div>)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-20">
          <div className="bg-slate-800/50 backdrop-blur-md rounded-3xl p-12 border border-slate-700/50">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to deploy your AI Employee?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Join thousands of companies already transforming their operations with Vantum AI.
            </p>
            <Button 
              asChild
              className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white text-lg px-12 py-4 rounded-full shadow-xl hover:scale-105 transition-all duration-300"
            >
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLScVpGDYem7-awVEnevrcNY_YnuU3gAy3nwH73QtEGRJynh_MA/viewform?usp=sharing&ouid=104084549135784044791"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ready to Upgrade your business ?
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};