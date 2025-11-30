import React, { useState } from 'react';
import { SECTIONS } from './data';
import { Section, StudentInfo, AppState } from './types';
import { QuestionCard } from './components/QuestionCard';
import { WelcomeScreen } from './components/WelcomeScreen';
import { SummaryScreen } from './components/SummaryScreen';
import { ArrowLeft, BookOpen, Star, Trophy, Volume2 } from 'lucide-react';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('welcome');
  const [studentInfo, setStudentInfo] = useState<StudentInfo>({ name: '', className: '' });
  const [activeSection, setActiveSection] = useState<Section | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [completedSections, setCompletedSections] = useState<string[]>([]);

  const handleStart = (name: string, className: string) => {
    setStudentInfo({ name, className });
    setAppState('menu');
  };

  const handleSectionSelect = (section: Section) => {
    setActiveSection(section);
    setCurrentQuestionIndex(0);
    setAppState('working');
  };

  const handleQuestionComplete = (isCorrect: boolean) => {
    if (activeSection) {
      if (currentQuestionIndex < activeSection.questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        // Section Complete
        if (!completedSections.includes(activeSection.id)) {
            setCompletedSections(prev => [...prev, activeSection.id]);
        }
        setActiveSection(null);
        setAppState('menu');
      }
    }
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
       window.speechSynthesis.cancel();
       const utterance = new SpeechSynthesisUtterance(text);
       utterance.rate = 0.9; 
       window.speechSynthesis.speak(utterance);
    }
  }

  const renderMenu = () => (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8 text-center bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
        <h1 className="text-3xl md:text-5xl font-display font-bold text-blue-900 mb-2 tracking-tight">
          Welcome, {studentInfo.name}! 👋
        </h1>
        <p className="text-lg text-slate-500 mb-4">Class: {studentInfo.className}</p>
        <p className="text-slate-600">
          Choose a colored card below to start your practice.
        </p>
        {completedSections.length > 0 && (
             <div className="mt-4 inline-flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-full text-yellow-800 font-bold text-sm">
                 <Trophy size={16} /> Progress: {completedSections.length} / {SECTIONS.length}
                 <button 
                    onClick={() => setAppState('summary')}
                    className="ml-2 underline text-yellow-900"
                 >
                    View Summary
                 </button>
             </div>
        )}
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
        {SECTIONS.map((section) => {
          const isDone = completedSections.includes(section.id);
          return (
            <button
              key={section.id}
              onClick={() => handleSectionSelect(section)}
              className={`relative overflow-hidden group p-6 rounded-3xl border-4 text-left transition-all transform hover:-translate-y-1 hover:shadow-xl ${
                isDone 
                ? 'bg-gray-50 border-gray-200 opacity-80' 
                : 'bg-white border-blue-100 hover:border-blue-300'
              }`}
            >
              <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-8xl`}>
                {section.emoji}
              </div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <span className={`text-4xl p-3 rounded-2xl ${section.color}`}>
                    {section.emoji}
                  </span>
                  {isDone && <Star className="text-yellow-400 fill-current animate-bounce" size={32} />}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2 font-display">{section.title}</h3>
                <p className="text-slate-500 font-medium">{section.subTitle}</p>
                <div className={`mt-6 inline-flex items-center font-bold px-4 py-2 rounded-lg transition-all ${isDone ? 'bg-green-100 text-green-700' : 'bg-blue-600 text-white group-hover:translate-x-2'}`}>
                    {isDone ? 'Completed ✅' : 'Start Now ➔'} 
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );

  const renderActiveSection = () => {
    if (!activeSection) return null;
    const question = activeSection.questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex) / activeSection.questions.length) * 100;

    return (
      <div className="min-h-screen bg-slate-50 flex flex-col">
        {/* Sticky Header */}
        <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
            <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
                <button 
                    onClick={() => {
                        setActiveSection(null);
                        setAppState('menu');
                    }}
                    className="flex items-center gap-2 text-slate-600 hover:text-blue-600 font-bold transition-colors"
                >
                    <ArrowLeft size={24} />
                    <span className="hidden sm:inline">Menu</span>
                </button>
                <div className="text-center">
                     <h2 className="font-display font-bold text-lg md:text-xl text-slate-800">{activeSection.title}</h2>
                </div>
                <div className="font-mono text-sm font-bold bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    {currentQuestionIndex + 1} / {activeSection.questions.length}
                </div>
            </div>
            <div className="h-2 bg-slate-100 w-full">
                <div 
                    className="h-full bg-blue-500 transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>

        <main className="flex-grow p-4 md:p-8 flex flex-col items-center">
            
            {activeSection.id === 'reading' && activeSection.readingPassage && (
                <div className="w-full max-w-4xl mb-8 bg-white p-6 rounded-2xl border-2 border-orange-100 shadow-sm relative">
                    <button 
                        onClick={() => speakText(activeSection.readingPassage?.join(' ') || '')}
                        className="absolute right-4 top-4 text-orange-400 hover:text-orange-600"
                        title="Read Passage"
                    >
                        <Volume2 size={24} />
                    </button>
                    <div className="flex items-center gap-2 mb-4 text-orange-600 font-bold uppercase tracking-wider text-sm border-b border-orange-100 pb-2">
                        <BookOpen size={18} /> Reading Passage
                    </div>
                    <div className="prose prose-lg max-w-none text-slate-700 space-y-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                        {activeSection.readingPassage.map((para, i) => (
                            <p key={i}>{para}</p>
                        ))}
                    </div>
                </div>
            )}

            <QuestionCard 
                question={question}
                onComplete={handleQuestionComplete}
            />
        </main>
      </div>
    );
  };

  return (
    <div className="min-h-screen font-sans bg-slate-50">
      {appState === 'welcome' && <WelcomeScreen onStart={handleStart} />}
      {appState === 'menu' && renderMenu()}
      {appState === 'working' && renderActiveSection()}
      {appState === 'summary' && (
          <SummaryScreen 
            studentInfo={studentInfo}
            completedCount={completedSections.length}
            totalCount={SECTIONS.length}
            onBackToMenu={() => setAppState('menu')}
          />
      )}
    </div>
  );
};

export default App;