
import { Button } from "@/components/ui/button";
import { Brain, Menu, X } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-md border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl flex items-center justify-center transform rotate-12 shadow-lg">
                <Brain className="w-6 h-6 text-white transform -rotate-12" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Vantum AI
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#calculator-section" 
              className="text-gray-300 hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                console.log('Navigation: Calculator tab clicked');
                document.getElementById('calculator-section')?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}
            >
              Calculator
            </a>
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a>
            <a href="https://dashboard.vantumai.com/login" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-blue-500 text-blue-300 hover:bg-blue-500 hover:text-white">
                Log In
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-md rounded-lg mt-2 p-4 space-y-4">
            <a 
              href="#calculator-section" 
              className="block text-gray-300 hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                console.log('Navigation: Mobile Calculator tab clicked');
                document.getElementById('calculator-section')?.scrollIntoView({
                  behavior: 'smooth'
                });
                setIsMenuOpen(false);
              }}
            >
              Calculator
            </a>
            <a href="#features" className="block text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="block text-gray-300 hover:text-white transition-colors">How It Works</a>
            <a href="#pricing" className="block text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="#faq" className="block text-gray-300 hover:text-white transition-colors">FAQ</a>
            <div className="flex flex-col space-y-2 pt-4">
              <a href="https://dashboard.vantumai.com/login" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-blue-500 text-blue-300 hover:bg-blue-500 hover:text-white w-full">
                  Log In
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
