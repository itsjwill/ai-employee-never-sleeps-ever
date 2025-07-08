
import { Brain, Zap, Shield, Users, TrendingUp, Clock, MessageSquare, Database } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Brain,
    title: "Advanced Decision Making",
    description: "Goes beyond simple responses. Analyzes context, weighs options, and makes intelligent business decisions autonomously.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Zap,
    title: "Instant Integration",
    description: "Seamlessly connects with your existing tools, CRM, databases, and workflows. No complex setup required.",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    icon: TrendingUp,
    title: "Continuous Learning",
    description: "Adapts to your business processes, learns from every interaction, and improves performance over time.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Works alongside human team members, understanding roles, responsibilities, and company culture.",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Database,
    title: "Data Intelligence",
    description: "Processes vast amounts of information, identifies patterns, and provides actionable business insights.",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption, compliance with industry standards, and complete data sovereignty.",
    gradient: "from-slate-600 to-slate-800"
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Never sleeps, never takes breaks. Provides consistent, high-quality work around the clock.",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: MessageSquare,
    title: "Natural Communication",
    description: "Communicates naturally with customers, colleagues, and stakeholders across all channels.",
    gradient: "from-pink-500 to-rose-500"
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-6 py-2 mb-8">
            <Brain className="w-4 h-4 text-purple-300" />
            <span className="text-purple-200 text-sm font-medium">Intelligent Capabilities</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            What You Get with VantumAI — and Why It Works
            <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              True Intelligence.
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Vantum AI doesn't just follow scripts—it thinks, adapts, and evolves. Experience the next generation 
            of AI that understands your business and acts like a real team member.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="group bg-slate-800/50 border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 backdrop-blur-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-20">
          <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white text-lg px-8 py-4 rounded-full shadow-xl hover:scale-105 transition-all duration-300">
            Explore All Capabilities
            <Zap className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
