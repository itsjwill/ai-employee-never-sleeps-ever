import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Zap, Crown, Rocket } from "lucide-react";
const plans = [{
  name: "Enterprise",
  price: "Custom",
  period: "month",
  description: "For large organizations with complex requirements",
  icon: Rocket,
  gradient: "from-orange-500 to-red-500",
  features: ["Unlimited AI Employees", "Custom AI training", "Enterprise integrations", "Dedicated analytics platform", "24/7 dedicated support", "Unlimited interactions", "Custom security & compliance", "On-premise deployment options"],
  popular: false
}];
export const Pricing = () => {
  return <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-green-500/20 border border-green-500/30 rounded-full px-6 py-2 mb-8">
            <Crown className="w-4 h-4 text-green-300" />
            
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Choose Your
            <span className="block bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              AI Workforce
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Scale your business with AI employees that work 24/7. No hiring costs, 
            no training time, no benefits—just intelligent automation that grows with you.
          </p>
        </div>

        <div className="flex justify-center mb-16">
          {plans.map((plan, index) => <Card key={plan.name} className={`relative bg-slate-800/50 border-slate-700/50 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:shadow-2xl ${plan.popular ? 'ring-2 ring-purple-500/50 hover:ring-purple-400/70 shadow-purple-500/20' : 'hover:border-purple-500/50 hover:shadow-purple-500/10'}`} style={{
          animationDelay: `${index * 200}ms`
        }}>
              {plan.popular && <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                    Most Popular
                  </div>
                </div>}
              
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    {plan.price === "Custom" ? <div className="text-4xl font-bold text-white">Custom</div> : <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-white">${plan.price}</span>
                        <span className="text-gray-400 ml-2">/{plan.period}</span>
                      </div>}
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>)}
                </div>

                <Button className={`w-full py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${plan.popular ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-xl' : 'bg-slate-700 hover:bg-slate-600 text-white border border-slate-600 hover:border-slate-500'}`}>
                  {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                </Button>
              </CardContent>
            </Card>)}
        </div>

        {/* Money back guarantee */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-green-500/20 border border-green-500/30 rounded-full px-6 py-3">
            <Check className="w-5 h-5 text-green-400" />
            <span className="text-green-200 font-medium">7-day money-back guarantee</span>
          </div>
        </div>
      </div>
    </section>;
};