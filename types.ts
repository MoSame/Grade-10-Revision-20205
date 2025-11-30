export type QuestionType = 'mcq' | 'gap-fill' | 'word-form' | 'rewrite' | 'text-input';

export interface Question {
  id: string;
  instruction: string;
  content: string;
  options?: string[];
  correctAnswer?: string | string[];
  type: QuestionType;
  hint?: string;
  userAnswer?: string;
  isCorrect?: boolean;
}

export interface Section {
  id: string;
  title: string;
  subTitle: string;
  emoji: string;
  color: string;
  questions: Question[];
  readingPassage?: string[];
}

export interface StudentInfo {
  name: string;
  className: string;
}

export type AppState = 'welcome' | 'menu' | 'working' | 'summary';