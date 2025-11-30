import React, { useState } from 'react';
import { Button } from './Button';
import { Pencil, GraduationCap } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: (name: string, className: string) => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  const [name, setName] = useState('');
  const [className, setClassName] = useState('');

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-slate-100 p-8 text-center">
        <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <GraduationCap size={40} className="text-blue-600" />
        </div>
        
        <h1 className="text-3xl font-display font-bold text-slate-800 mb-2">
          English Revision
        </h1>
        <p className="text-slate-500 font-medium mb-8">
          End of First Semester 2025-2026
        </p>

        <div className="space-y-6 text-left">
          <div>
            <label className="block text-slate-700 font-bold mb-2 flex items-center gap-2">
              <Pencil size={18} />
              Student Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 text-lg border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              placeholder="Enter your name..."
            />
          </div>

          <div>
            <label className="block text-slate-700 font-bold mb-2 flex items-center gap-2">
              <GraduationCap size={18} />
              Class
            </label>
            <input
              type="text"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              className="w-full p-4 text-lg border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              placeholder="e.g. 10A"
            />
          </div>

          <div className="pt-4">
            <Button 
              size="lg" 
              className="w-full"
              onClick={() => onStart(name, className)}
              disabled={!name.trim() || !className.trim()}
            >
              Start Worksheet 🚀
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};