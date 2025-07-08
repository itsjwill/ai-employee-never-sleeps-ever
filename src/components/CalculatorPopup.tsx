import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Calculator, X } from "lucide-react";

interface CalculatorPopupProps {
  onClose: () => void;
}

export const CalculatorPopup = ({ onClose }: CalculatorPopupProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after a short delay when component mounts
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleGoToCalculator = () => {
    document.getElementById('calculator-section')?.scrollIntoView({
      behavior: 'smooth'
    });
    setIsOpen(false);
    onClose();
  };

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md bg-slate-800/95 border-blue-500/20 backdrop-blur-md relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2 text-white">
            <Calculator className="w-5 h-5 text-blue-400" />
            <span>Free Revenue Audit</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <p className="text-gray-300">
            Discover how much revenue your practice might be losing from missed calls with our free calculator.
          </p>
          
          <div className="flex flex-col space-y-3">
            <Button 
              onClick={handleGoToCalculator}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
            >
              <Calculator className="w-4 h-4 mr-2" />
              Calculate My Lost Revenue
            </Button>
            
            <Button 
              variant="outline" 
              onClick={handleClose}
              className="border-gray-600 text-black hover:bg-gray-700 hover:text-black bg-white"
            >
              Maybe Later
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};