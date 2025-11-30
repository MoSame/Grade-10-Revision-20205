import React, { useState, useEffect } from 'react';
import { Question } from '../types';
import { Button } from './Button';
import { CheckCircle2, XCircle, HelpCircle, Volume2 } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  onComplete: (isCorrect: boolean) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question, onComplete }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [textInput, setTextInput] = useState('');
  const [status, setStatus] = useState<'idle' | 'correct' | 'incorrect'>('idle');
  const [showHint, setShowHint] = useState(false);
  const [gapAnswers, setGapAnswers] = useState<string[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Reset state when question changes
  useEffect(() => {
    setSelectedOption(null);
    setTextInput('');
    setStatus('idle');
    setShowHint(false);
    setGapAnswers([]);
    window.speechSynthesis.cancel(); // Stop any previous speech
    setIsSpeaking(false);
  }, [question]);

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      if (isSpeaking) {
        setIsSpeaking(false);
        return;
      }
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9; // Slightly slower for better comprehension
      utterance.onend = () => setIsSpeaking(false);
      
      setIsSpeaking(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleCheck = () => {
    let isCorrect = false;

    if (question.type === 'mcq') {
      isCorrect = selectedOption === question.correctAnswer;
    } else if (question.type === 'word-form' || question.type === 'rewrite') {
      const normalizedInput = textInput.toLowerCase().trim().replace(/\s+/g, ' ');
      const normalizedAnswer = (question.correctAnswer as string).toLowerCase().trim();
      isCorrect = normalizedInput === normalizedAnswer || normalizedInput.includes(normalizedAnswer);
    } else if (question.type === 'gap-fill') {
        const correctAnswers = question.correctAnswer as string[];
        const allCorrect = gapAnswers.length === correctAnswers.length && gapAnswers.every((ans, idx) => ans === correctAnswers[idx]);
        isCorrect = allCorrect;
    } else if (question.type === 'text-input') {
       isCorrect = textInput.trim().length > 3;
    }

    setStatus(isCorrect ? 'correct' : 'incorrect');
    
    if (isCorrect) {
      setTimeout(() => onComplete(true), 1500);
    }
  };

  const renderContent = () => {
    const lines = question.content.split('\n');
    return (
      <div className="mb-6 relative group">
        <button 
          onClick={() => speakText(question.content)}
          className={`absolute -right-2 -top-2 p-2 rounded-full transition-colors ${isSpeaking ? 'bg-blue-200 text-blue-700' : 'bg-slate-100 text-slate-500 hover:bg-blue-50 hover:text-blue-600'}`}
          title="Read Aloud"
        >
          <Volume2 size={20} />
        </button>
        {lines.map((line, idx) => (
          <p key={idx} className="text-xl md:text-2xl font-medium leading-relaxed mb-4 text-slate-800 pr-8">
            {line}
          </p>
        ))}
      </div>
    );
  };

  const renderInputs = () => {
    switch (question.type) {
      case 'mcq':
        return (
          <div className="grid grid-cols-1 gap-3">
            {question.options?.map((opt) => (
              <Button
                key={opt}
                variant={selectedOption === opt ? 'primary' : 'secondary'}
                onClick={() => setSelectedOption(opt)}
                disabled={status === 'correct'}
                className="text-left justify-start"
              >
                {opt}
              </Button>
            ))}
          </div>
        );

      case 'gap-fill':
        const subQuestions = question.content.split('\n').filter(s => s.trim().length > 0);
        return (
            <div className="space-y-6">
                <div className="p-4 bg-slate-100 rounded-lg border-2 border-slate-200 mb-4">
                     <p className="font-bold text-slate-500 mb-2 uppercase text-sm tracking-wider">Word Box</p>
                     <div className="flex flex-wrap gap-2">
                        {question.options?.map(opt => (
                            <span key={opt} className="px-3 py-1 bg-white border border-slate-300 rounded shadow-sm font-mono text-lg">
                                {opt}
                            </span>
                        ))}
                     </div>
                </div>

                {subQuestions.map((qText, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 relative">
                         <button 
                            onClick={() => speakText(qText)}
                            className="absolute right-2 top-2 text-slate-400 hover:text-blue-500"
                         >
                            <Volume2 size={16} />
                         </button>
                        <p className="text-lg mb-2 pr-6">{qText}</p>
                        <select 
                            className="w-full p-3 border-2 border-blue-200 rounded-lg text-lg bg-blue-50"
                            onChange={(e) => {
                                const newAnswers = [...gapAnswers];
                                newAnswers[idx] = e.target.value;
                                setGapAnswers(newAnswers);
                            }}
                            value={gapAnswers[idx] || ''}
                        >
                            <option value="">Choose a word...</option>
                            {question.options?.map(opt => (
                                <option key={opt} value={opt}>{opt}</option>
                            ))}
                        </select>
                    </div>
                ))}
            </div>
        );
        
      case 'text-input':
        return (
          <textarea
            className="w-full p-4 text-xl border-2 border-slate-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 min-h-[150px]"
            placeholder="Type your answer here..."
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          />
        );

      default:
        return (
          <div className="space-y-2">
             <input
              type="text"
              className="w-full p-4 text-xl border-2 border-slate-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              placeholder="Type your answer here..."
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              disabled={status === 'correct'}
            />
            {status === 'incorrect' && (
                <div className="text-sm text-slate-500 mt-2">
                    Tip: Check your spelling and punctuation.
                </div>
            )}
          </div>
        );
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-slate-100">
      <div className="bg-blue-50 p-4 border-b border-blue-100 flex items-center justify-between">
         <span className="font-display font-bold text-blue-800 text-lg flex items-center gap-2">
            📝 Question
         </span>
         {question.hint && (
             <button 
                onClick={() => setShowHint(!showHint)}
                className="text-blue-600 flex items-center gap-1 hover:underline text-sm font-bold"
            >
                <HelpCircle size={18} />
                {showHint ? 'Hide Help' : 'Need Help?'}
             </button>
         )}
      </div>

      <div className="p-6 md:p-8">
        <div className="mb-6 flex items-start gap-3 bg-yellow-50 p-4 rounded-xl border border-yellow-100 text-yellow-900">
            <span className="text-2xl mt-1">👉</span>
            <p className="font-bold text-lg">{question.instruction}</p>
        </div>

        {showHint && (
            <div className="mb-6 bg-blue-100 p-4 rounded-xl text-blue-900 animate-in fade-in slide-in-from-top-2">
                <strong>💡 Guide:</strong> {question.hint}
            </div>
        )}

        {question.type !== 'gap-fill' && renderContent()}
        {renderInputs()}

        {status !== 'idle' && (
          <div className={`mt-6 p-4 rounded-xl flex items-center gap-3 ${status === 'correct' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {status === 'correct' ? <CheckCircle2 size={32} /> : <XCircle size={32} />}
            <div>
                <p className="font-bold text-lg">{status === 'correct' ? 'Great Job!' : 'Try Again'}</p>
                {status === 'correct' && <p>Moving to next question...</p>}
            </div>
          </div>
        )}

        <div className="mt-8">
            <Button 
                onClick={handleCheck} 
                variant={status === 'incorrect' ? 'incorrect' : 'primary'}
                size="lg"
                disabled={status === 'correct' || (!selectedOption && !textInput && gapAnswers.length === 0)}
            >
                {status === 'incorrect' ? 'Retry' : 'Check Answer'}
            </Button>
            {status === 'incorrect' && (
                 <button 
                 onClick={() => onComplete(false)} 
                 className="mt-4 w-full text-slate-400 hover:text-slate-600 text-sm font-semibold underline"
                >
                 Skip this question
                </button>
            )}
        </div>
      </div>
    </div>
  );
};