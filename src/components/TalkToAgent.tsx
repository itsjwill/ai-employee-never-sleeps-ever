import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

export const TalkToAgent = () => {
  return (
    <section id="talk-to-agent" className="py-16 px-4 bg-slate-800/20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-slate-800/80 backdrop-blur-md shadow-2xl border border-blue-500/20 p-8 rounded-xl">
          <div className="space-y-6">
            <div className="flex justify-center">
              <div className="bg-blue-500/20 border border-blue-500/30 rounded-full p-4">
                <MessageCircle className="w-8 h-8 text-blue-300" />
              </div>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Talk To Agent
            </h2>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to see how our AI Employee can transform your business? 
              Speak directly with one of our specialists.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-lg px-8 py-6 rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Schedule Call
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-blue-400/50 text-blue-300 hover:bg-blue-500/20 text-lg px-8 py-6 rounded-full backdrop-blur-sm hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Live Chat
              </Button>
            </div>
            
            <p className="text-sm text-gray-400">
              Available 24/7 • Response within 5 minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};