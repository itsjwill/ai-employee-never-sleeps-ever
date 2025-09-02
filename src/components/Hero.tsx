import { Button } from "@/components/ui/button";
import { Mic, Sparkles, Brain } from "lucide-react";
import { useEffect } from "react";
export const Hero = () => {
  useEffect(() => {
    // Insert the script exactly as provided
    if ((window as any).chatWidgetScriptLoaded) return;
    (window as any).ChatWidgetConfig = {
      projectId: "686c36009edd0f0a4b4a419d"
    };
    var chatWidgetScript = document.createElement("script");
    chatWidgetScript.type = 'text/javascript';
    chatWidgetScript.src = "https://storage.googleapis.com/cdwidget/dist/assets/js/main.js";
    document.body.appendChild(chatWidgetScript);
    (window as any).chatWidgetScriptLoaded = true;
  }, []);
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated wave background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <svg className="absolute w-[200%] h-auto animate-[moveWave_10s_linear_infinite]" viewBox="0 0 1200 200" preserveAspectRatio="none" style={{
        fill: 'rgba(59, 130, 246, 0.1)'
      }}>
          <path d="M0,100 C300,200 900,0 1200,100 L1200,200 L0,200 Z"></path>
        </svg>
        <svg className="absolute w-[200%] h-auto animate-[moveWave_12s_linear_infinite]" viewBox="0 0 1200 200" preserveAspectRatio="none" style={{
        fill: 'rgba(96, 165, 250, 0.08)',
        animationDelay: '2s',
        transform: 'translateY(20px)'
      }}>
          <path d="M0,120 C400,220 800,20 1200,120 L1200,200 L0,200 Z"></path>
        </svg>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-blue-400/5 rounded-full blur-3xl animate-pulse" style={{
        animationDelay: '2s'
      }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-full p-1 border border-blue-500/20">
            <a href="#talk-to-agent" className="inline-flex items-center px-6 py-2 rounded-full bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition-colors duration-200">
              Talk To Agent
            </a>
          </div>
        </div>
        
        <div className="space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-6 py-2 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-blue-300" />
            <span className="text-blue-200 text-sm font-medium">The Future of AI Workforce</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
              <span className="block text-white">Meet Your</span>
              <span className="block bg-gradient-to-r from-blue-400 via-blue-300 to-white bg-clip-text text-transparent animate-pulse">
                AI Employee
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">Turn Missed Calls Into Booked Appointments — With an AI Receptionist That Works 24/7</p>
          </div>
          
          {/* CTA Button */}
          <div className="flex justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-lg px-12 py-6 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 hover:shadow-blue-500/25" onClick={() => document.getElementById('ai-widget')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              <Mic className="mr-2 w-5 h-5" />
              Test Your Future Employee
            </Button>
          </div>
          
          {/* Revenue recovery message */}
          <div className="text-center pt-6">
            <p className="text-lg text-blue-200 font-medium max-w-3xl mx-auto">Our clients recover a minimum of $5,000/month in lost revenue by answering every call, booking every lead, and never missing another client</p>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400 pt-8">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Enterprise-grade security</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Self Hosted</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>HIPAA & GDPR compliant</span>
            </div>
          </div>
        </div>
        
          {/* Chat Widget */}
        <div id="ai-widget" className="relative mt-16 animate-fade-in" style={{
        animationDelay: '0.5s'
      }}>
          <div className="relative max-w-4xl mx-auto">
            <div id="talk-to-agent" className="bg-slate-800/80 backdrop-blur-md shadow-2xl border border-blue-500/20 p-8 hover:scale-105 transition-all duration-500 rounded-md">
              <div className="relative min-h-[600px]">
                <div id="cd-widget" className="w-full min-h-[600px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};