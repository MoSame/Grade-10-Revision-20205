import React from 'react';
import { Button } from './Button';
import { Trophy, CheckCircle2, RotateCcw } from 'lucide-react';
import { StudentInfo } from '../types';

interface SummaryScreenProps {
  studentInfo: StudentInfo;
  completedCount: number;
  totalCount: number;
  onBackToMenu: () => void;
}

export const SummaryScreen: React.FC<SummaryScreenProps> = ({ 
  studentInfo, 
  completedCount, 
  totalCount,
  onBackToMenu 
}) => {
  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 flex flex-col items-center">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-slate-100 p-8 text-center mt-10">
        <Trophy size={64} className="text-yellow-400 mx-auto mb-6" />
        
        <h2 className="text-3xl font-display font-bold text-slate-800 mb-2">
          Great Job, {studentInfo.name}!
        </h2>
        <p className="text-slate-500 text-lg mb-8">
          Class: {studentInfo.className}
        </p>

        <div className="bg-blue-50 rounded-2xl p-6 mb-8 border border-blue-100">
          <p className="text-blue-800 font-bold text-lg mb-2">Current Progress</p>
          <div className="text-4xl font-display font-bold text-blue-600 mb-2">
            {completedCount} / {totalCount}
          </div>
          <p className="text-blue-400 font-medium uppercase tracking-wide text-sm">Sections Completed</p>
        </div>

        <div className="space-y-4">
            <p className="text-slate-600">
                {completedCount === totalCount 
                    ? "🎉 You have finished the entire worksheet! Take a screenshot to send to your teacher."
                    : "You are doing great! Go back to the menu to finish the rest."}
            </p>
            
            <Button onClick={onBackToMenu} className="w-full sm:w-auto">
                <RotateCcw className="inline mr-2" size={20} />
                Back to Menu
            </Button>
        </div>
      </div>
    </div>
  );
};