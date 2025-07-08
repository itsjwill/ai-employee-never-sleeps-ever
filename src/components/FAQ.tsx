
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "How is Vantum AI different from other automation tools?",
    answer: "Unlike traditional automation that follows rigid scripts, Vantum AI thinks, learns, and adapts. It makes decisions based on context, understands nuanced situations, and continuously improves its performance. It's not just automation—it's intelligence."
  },
  {
    question: "How quickly can I deploy my AI Employee?",
    answer: "Most businesses are up and running within 24-48 hours. Our streamlined onboarding process includes automated integration with your existing systems, AI training on your business processes, and immediate deployment of your first AI Employee."
  },
  {
    question: "What kind of tasks can my AI Employee handle?",
    answer: "Your AI Employee can handle complex business tasks including customer service, lead qualification, data analysis, project management, content creation, scheduling, research, and decision-making processes. It adapts to your specific business needs."
  },
  {
    question: "Is my data secure with Vantum AI?",
    answer: "Absolutely. We use enterprise-grade encryption, comply with SOC 2 Type II, GDPR, and other industry standards. Your data is processed securely and never shared with third parties. We offer on-premise deployment for additional security requirements."
  },
  {
    question: "Can Vantum AI integrate with my existing tools?",
    answer: "Yes, Vantum AI seamlessly integrates with over 1,000+ popular business tools including CRMs, project management platforms, communication tools, databases, and custom APIs. Our integration team helps ensure smooth connectivity."
  },
  {
    question: "What happens if my AI Employee makes a mistake?",
    answer: "Vantum AI includes built-in safeguards and escalation protocols. Critical decisions can be routed to human oversight, and the AI learns from any corrections to prevent similar issues. We also provide comprehensive audit trails and rollback capabilities."
  },
  {
    question: "How does pricing scale as my business grows?",
    answer: "Our pricing is designed to grow with you. You can add more AI Employees, increase interaction limits, or upgrade features as needed. Enterprise customers get custom pricing based on their specific requirements and volume."
  },
  {
    question: "Do I need technical expertise to manage my AI Employee?",
    answer: "No technical expertise required. Vantum AI is designed for business users with an intuitive interface for training, monitoring, and managing your AI Employee. Our support team provides ongoing assistance and best practices guidance."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-transparent"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-6 py-2 mb-8">
            <HelpCircle className="w-4 h-4 text-blue-300" />
            <span className="text-blue-200 text-sm font-medium">Frequently Asked Questions</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Got Questions?
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              We've Got Answers
            </span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300"
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-white pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-6 h-6 text-purple-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <Button asChild className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-3 rounded-full">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScVpGDYem7-awVEnevrcNY_YnuU3gAy3nwH73QtEGRJynh_MA/viewform?usp=sharing&ouid=104084549135784044791"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
