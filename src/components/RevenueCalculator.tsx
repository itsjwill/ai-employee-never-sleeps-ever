import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator } from "lucide-react";

export const RevenueCalculator = () => {
  const [callsPerDay, setCallsPerDay] = useState("");
  const [missedPercent, setMissedPercent] = useState("");
  const [valuePerPatient, setValuePerPatient] = useState("");
  const [results, setResults] = useState<string | null>(null);

  const calculateLoss = () => {
    const calls = parseFloat(callsPerDay) || 0;
    const missed = parseFloat(missedPercent) || 0;
    const value = parseFloat(valuePerPatient) || 0;

    const missedCallsPerMonth = calls * 30 * (missed / 100);
    const revenueLost = missedCallsPerMonth * value * 0.67; // Assuming 67% never call back

    setResults(`$${revenueLost.toLocaleString(undefined, {maximumFractionDigits: 0})}`);
  };

  return (
    <Card className="max-w-md mx-auto bg-slate-800/80 border-blue-500/20 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <Calculator className="w-6 h-6 text-blue-400" />
            <h2 className="text-2xl font-bold text-white">Free Missed Call Revenue Audit</h2>
          </div>
          <p className="text-gray-300">See how much revenue your practice may be losing from missed calls.</p>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="callsPerDay" className="text-gray-200">Average Calls Per Day:</Label>
            <Input
              id="callsPerDay"
              type="number"
              placeholder="e.g. 20"
              value={callsPerDay}
              onChange={(e) => setCallsPerDay(e.target.value)}
              className="mt-1 bg-slate-700/50 border-slate-600 text-white placeholder-gray-400"
            />
          </div>

          <div>
            <Label htmlFor="missedPercent" className="text-gray-200">Estimated Missed Call %:</Label>
            <Input
              id="missedPercent"
              type="number"
              placeholder="e.g. 25"
              value={missedPercent}
              onChange={(e) => setMissedPercent(e.target.value)}
              className="mt-1 bg-slate-700/50 border-slate-600 text-white placeholder-gray-400"
            />
          </div>

          <div>
            <Label htmlFor="valuePerPatient" className="text-gray-200">Average Patient Value ($):</Label>
            <Input
              id="valuePerPatient"
              type="number"
              placeholder="e.g. 500"
              value={valuePerPatient}
              onChange={(e) => setValuePerPatient(e.target.value)}
              className="mt-1 bg-slate-700/50 border-slate-600 text-white placeholder-gray-400"
            />
          </div>

          <Button 
            onClick={calculateLoss}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 rounded-lg transition-all duration-300 hover:scale-105"
          >
            Run My Free Audit
          </Button>

          {results && (
            <div className="mt-6 p-4 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-lg">
              <p className="text-red-200 text-lg">
                📉 Estimated Revenue Lost: <strong className="text-red-100">{results}</strong> per month
              </p>
              <p className="text-gray-300 mt-3 text-sm">
                Want to stop losing that revenue? Our AI receptionist can help you capture every call.
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};