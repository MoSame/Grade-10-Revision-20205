import { Section } from './types';

export const SECTIONS: Section[] = [
  {
    id: 'p1-vocab',
    title: 'Part 1: Vocabulary',
    subTitle: 'Words & Meanings',
    emoji: '🧠',
    color: 'bg-pastel-blue',
    questions: [
      {
        id: '1.1',
        instruction: '👀 Read the sentence. Choose the best word.',
        content: 'She has a lot of _______________ in teaching children in schools. 🏫👩‍🏫',
        type: 'mcq',
        options: ['experience', 'salary', 'position', 'income'],
        correctAnswer: 'experience'
      },
      {
        id: '1.2',
        instruction: '❓ Can you help? Choose the correct verb.',
        content: 'Can you _________ me a favor and open the door please? 🚪✨',
        type: 'mcq',
        options: ['do', 'make', 'chat', 'discuss'],
        correctAnswer: 'do'
      },
      {
        id: '1.3a',
        instruction: '🔧 Fix the word in brackets.',
        content: 'We saw a big __________________ (advertise) for the new phone on TV. 📺📱',
        type: 'word-form',
        correctAnswer: 'advertisement'
      },
      {
        id: '1.3b',
        instruction: '📶 Fix the word in brackets.',
        content: 'There is a bad internet __________________ (connect) in this room. 📉🌐',
        type: 'word-form',
        correctAnswer: 'connection'
      },
      {
        id: '1.4',
        instruction: '📦 Drag the word from the box to the gap.',
        content: 'A. Ali is very ______________________; he likes talking to people and making friends. 🗣️🤝\nB. Close friends usually _______________ with each other using new technologies. 📱💬',
        type: 'gap-fill',
        options: ['sociable', 'chat', 'discuss'],
        correctAnswer: ['sociable', 'chat'] 
      }
    ]
  },
  {
    id: 'p1-grammar',
    title: 'Part 1: Grammar',
    subTitle: 'Fixing Sentences',
    emoji: '🗣️',
    color: 'bg-pastel-green',
    questions: [
      {
        id: '1.5',
        instruction: '⏳ Choose the correct verb form.',
        content: 'I ………………….. to London before. 🇬🇧✈️',
        type: 'mcq',
        options: ['am being', 'have been', 'was', 'go'],
        correctAnswer: 'have been'
      },
      {
        id: '1.6a',
        instruction: '🐘 Make it the most!',
        content: 'The elephant is the _________________ (big) animal in the zoo. 🐘',
        type: 'word-form',
        correctAnswer: 'biggest'
      },
      {
        id: '1.6b',
        instruction: '💡 Give advice using "should".',
        content: 'I suggest you sleep early tonight. 😴🌙\nYou _____________________________________',
        type: 'rewrite',
        correctAnswer: 'should sleep early tonight',
        hint: 'Start with: You should...'
      },
      {
        id: '1.7a',
        instruction: '🔗 Join the sentences using "who".',
        content: 'This is a teacher. He teaches us English. 👨‍🏫📘',
        type: 'rewrite',
        correctAnswer: 'This is a teacher who teaches us English',
        hint: 'Replace "He" with "who"'
      },
      {
        id: '1.7b',
        instruction: '🔙 Use Passive Voice (was/were + verb3).',
        content: 'The room ______________ (clean) by the maid yesterday. 🧹✨',
        type: 'word-form',
        correctAnswer: 'was cleaned'
      }
    ]
  },
  {
    id: 'p2-vocab',
    title: 'Part 2: Vocabulary',
    subTitle: 'Jobs & Actions',
    emoji: '💼',
    color: 'bg-pastel-blue',
    questions: [
      {
        id: '2.1',
        instruction: '💰 Choose the best word.',
        content: 'He gets a good _______ every month from his company. 💵🏢',
        type: 'mcq',
        options: ['salary', 'knowledge', 'job', 'position'],
        correctAnswer: 'salary'
      },
      {
        id: '2.2',
        instruction: '🎂 Choose the best verb.',
        content: 'I want to ______ a cake for my brother’s birthday. 🎂🎈',
        type: 'mcq',
        options: ['make', 'do', 'complain', 'gossip'],
        correctAnswer: 'make'
      },
      {
        id: '2.3a',
        instruction: '📢 Fix the word.',
        content: 'The school made an __________________ (announce) about the exam date. 📅🎤',
        type: 'word-form',
        correctAnswer: 'announcement'
      },
      {
        id: '2.3b',
        instruction: '📈 Fix the word.',
        content: 'I need to make an __________________ (improve) in my writing skills. ✍️🆙',
        type: 'word-form',
        correctAnswer: 'improvement'
      },
      {
        id: '2.4',
        instruction: '📦 Use words from the box.',
        content: 'A. He is a very ____________________ man, he thinks well before making up his mind. 🧠🤔\nB. Never _________________ with your friends during the lesson. 🚫🗣️',
        type: 'gap-fill',
        options: ['honest', 'chat', 'rational'],
        correctAnswer: ['rational', 'chat']
      }
    ]
  },
  {
    id: 'p2-grammar',
    title: 'Part 2: Grammar',
    subTitle: 'Tenses & Rules',
    emoji: '📝',
    color: 'bg-pastel-green',
    questions: [
      {
        id: '2.5',
        instruction: '⏱️ Choose the correct word.',
        content: 'She ………………….. finished her homework yet. 📚❌',
        type: 'mcq',
        options: ['hasn\'t', 'didn\'t', 'don\'t', 'haven\'t'],
        correctAnswer: 'hasn\'t'
      },
      {
        id: '2.6a',
        instruction: '☀️ Make it the most!',
        content: 'Summer is the _____________ (hot) season of the year. ☀️🌡️',
        type: 'word-form',
        correctAnswer: 'hottest'
      },
      {
        id: '2.6b',
        instruction: '💡 Give advice using "should".',
        content: 'It is a good idea to drink water. 💧🥤\nYou _____________________________________',
        type: 'rewrite',
        correctAnswer: 'should drink water',
        hint: 'Start with: You should...'
      },
      {
        id: '2.7a',
        instruction: '🔗 Join using "which".',
        content: 'I like the book. I read it yesterday. 📖❤️',
        type: 'rewrite',
        correctAnswer: 'I like the book which I read yesterday',
        hint: 'Use "which" to talk about the book.'
      },
      {
        id: '2.7b',
        instruction: '⚽ Use Passive Voice (is/are + verb3).',
        content: 'Football __________________ (play) every Friday. ⚽🗓️',
        type: 'word-form',
        correctAnswer: 'is played'
      }
    ]
  },
  {
    id: 'p3-vocab',
    title: 'Part 3: Vocabulary',
    subTitle: 'Work & Connection',
    emoji: '🏦',
    color: 'bg-pastel-blue',
    questions: [
      {
        id: '3.1',
        instruction: '👔 Choose the best word.',
        content: 'She has a high _______ in the bank; she is a manager. 🏦👩‍💼',
        type: 'mcq',
        options: ['position', 'document', 'knowledge', 'sense'],
        correctAnswer: 'position'
      },
      {
        id: '3.2',
        instruction: '📝 Choose the best verb.',
        content: 'I have to ______ my homework before I watch TV. 📺📓',
        type: 'mcq',
        options: ['do', 'make', 'advertise', 'connect'],
        correctAnswer: 'do'
      },
      {
        id: '3.3a',
        instruction: '🚂 Fix the word in brackets.',
        content: 'The __________________ (connect) between the two cities is by train. 🛤️🚆',
        type: 'word-form',
        correctAnswer: 'connection'
      },
      {
        id: '3.3b',
        instruction: '📰 Fix the word in brackets.',
        content: 'They placed an __________________ (advertise) in the newspaper. 🗞️👀',
        type: 'word-form',
        correctAnswer: 'advertisement'
      },
      {
        id: '3.4',
        instruction: '📦 Choose words from the box.',
        content: 'A. The artist is very ______________________; he draws new and strange worlds. 🎨🖌️\nB. He always _________________ about the cold food in the new restaurant. 🍜😤',
        type: 'gap-fill',
        options: ['complains', 'imaginative', 'connects'],
        correctAnswer: ['imaginative', 'complains']
      }
    ]
  },
  {
    id: 'p3-grammar',
    title: 'Part 3: Grammar',
    subTitle: 'Reading & Advice',
    emoji: '📖',
    color: 'bg-pastel-green',
    questions: [
      {
        id: '3.5',
        instruction: '📚 Choose the correct form.',
        content: 'She _________________ three pages of this interesting book so far. 📖✨',
        type: 'mcq',
        options: ['read', 'reads', 'are reading', 'has read'],
        correctAnswer: 'has read'
      },
      {
        id: '3.6a',
        instruction: '📏 Make it the most!',
        content: 'Ahmed is the _____________________ (short) student in the class. 📉👦',
        type: 'word-form',
        correctAnswer: 'shortest'
      },
      {
        id: '3.6b',
        instruction: '💡 Give advice using "should".',
        content: 'I advise you to clean your room regularly. 🧹✨\nYou ______________________________________________________________________',
        type: 'rewrite',
        correctAnswer: 'should clean your room regularly',
        hint: 'Start with: You should...'
      },
      {
        id: '3.7a',
        instruction: '🗓️ Join using "when".',
        content: 'Friday is the off day. We go to the park then. 🌳🗓️',
        type: 'rewrite',
        correctAnswer: 'Friday is the off day when we go to the park',
        hint: 'Use "when" to talk about the time.'
      },
      {
        id: '3.7b',
        instruction: '✍️ Use Passive Voice (was/were + verb3).',
        content: 'The letter _______________ (write) by Sara last week. ✉️✒️',
        type: 'word-form',
        correctAnswer: 'was written'
      }
    ]
  },
  {
    id: 'p4-vocab',
    title: 'Part 4: Vocabulary',
    subTitle: 'Jobs & Gossip',
    emoji: '🏢',
    color: 'bg-pastel-blue',
    questions: [
      {
        id: '4.1',
        instruction: '🏢 Choose the best word.',
        content: 'He wants a new _______ because he doesn\'t like this company. 👔🚪',
        type: 'mcq',
        options: ['job', 'hire', 'salary', 'rent'],
        correctAnswer: 'job'
      },
      {
        id: '4.2',
        instruction: '🤫 Choose the best verb.',
        content: 'Don\'t ______ a noise; the baby is sleeping. 👶💤',
        type: 'mcq',
        options: ['make', 'do', 'chat', 'discuss'],
        correctAnswer: 'make'
      },
      {
        id: '4.3a',
        instruction: '📊 Fix the word.',
        content: 'There is a big _______________________ (improve) in your marks this term. 🅰️➕',
        type: 'word-form',
        correctAnswer: 'improvement'
      },
      {
        id: '4.3b',
        instruction: '🎤 Fix the word.',
        content: 'Did you hear the ________________________ (announce) at the airport? ✈️🔊',
        type: 'word-form',
        correctAnswer: 'announcement'
      },
      {
        id: '4.4',
        instruction: '📦 Choose words from the box.',
        content: 'A. The firefighter was very ______________________ and saved the girl from the fire. 👨‍🚒🚒\nB. It is not nice to _________________ about other people\'s secrets. 🙊🤫',
        type: 'gap-fill',
        options: ['courageous', 'gossip', 'announce'],
        correctAnswer: ['courageous', 'gossip']
      }
    ]
  },
  {
    id: 'p4-grammar',
    title: 'Part 4: Grammar',
    subTitle: 'Experiences & Rules',
    emoji: '🍣',
    color: 'bg-pastel-green',
    questions: [
      {
        id: '4.5',
        instruction: '🍽️ Choose the correct form.',
        content: 'He ………………….. sushi before. 🍣🇯🇵',
        type: 'mcq',
        options: ['eats', 'has never eaten', 'eating', 'ate'],
        correctAnswer: 'has never eaten'
      },
      {
        id: '4.6a',
        instruction: '📚 Make it the most!',
        content: 'This is the ________________________ (interesting) book in the library. 📖✨',
        type: 'word-form',
        correctAnswer: 'most interesting'
      },
      {
        id: '4.6b',
        instruction: '💡 Give advice using "ought to".',
        content: 'It is a good idea to study hard. 📚🧠\nYou _____________________________________________________________________',
        type: 'rewrite',
        correctAnswer: 'ought to study hard',
        hint: 'Start with: You ought to...'
      },
      {
        id: '4.7a',
        instruction: '👤 Join using "who".',
        content: 'This is the man. He helped me carry the bag. 🛍️🤝',
        type: 'rewrite',
        correctAnswer: 'This is the man who helped me carry the bag',
        hint: 'Use "who" to talk about the man.'
      },
      {
        id: '4.7b',
        instruction: '🇺🇸 Use Passive Voice (is/are + verb3).',
        content: 'English __________________ (speak) in the USA. 🗣️🗺️',
        type: 'word-form',
        correctAnswer: 'is spoken'
      }
    ]
  },
  {
    id: 'p5-vocab',
    title: 'Part 5: Vocabulary',
    subTitle: 'Knowledge & Logic',
    emoji: '💻',
    color: 'bg-pastel-blue',
    questions: [
      {
        id: '5.1',
        instruction: '🖥️ Choose the best word.',
        content: 'You need good ___________ of computers for this job. 💻⌨️',
        type: 'mcq',
        options: ['knowledge', 'salary', 'income', 'position'],
        correctAnswer: 'knowledge'
      },
      {
        id: '5.2',
        instruction: '🏃 Choose the best verb.',
        content: 'I need to ___________ the some exercise this afternoon. 🏃‍♂️💪',
        type: 'mcq',
        options: ['do', 'make', 'improve', 'advertise'],
        correctAnswer: 'do'
      },
      {
        id: '5.3a',
        instruction: '🌐 Fix the word.',
        content: 'The internet _________________________ (connect) is very slow today. 🐌📉',
        type: 'word-form',
        correctAnswer: 'connection'
      },
      {
        id: '5.3b',
        instruction: '🚌 Fix the word.',
        content: 'The teacher made an ________________________ (announce) about the trip. 🚌🗺️',
        type: 'word-form',
        correctAnswer: 'announcement'
      },
      {
        id: '5.4',
        instruction: '📦 Choose words from the box.',
        content: 'A. Please be ______________________ and think before you act. 🧠💭\nB. Never ____________________ with your parents! 👪🚫',
        type: 'gap-fill',
        options: ['rational', 'argue', 'make'],
        correctAnswer: ['rational', 'argue']
      }
    ]
  },
  {
    id: 'p5-grammar',
    title: 'Part 5: Grammar',
    subTitle: 'Visits & Suggestions',
    emoji: '🏛️',
    color: 'bg-pastel-green',
    questions: [
      {
        id: '5.5',
        instruction: '🏛️ Choose the correct word.',
        content: 'They ………………….. visited the museum yet. 🖼️❌',
        type: 'mcq',
        options: ['haven\'t', 'didn\'t', 'isn\'t', 'wasn\'t'],
        correctAnswer: 'haven\'t'
      },
      {
        id: '5.6a',
        instruction: '😞 Make it the most!',
        content: 'That was the _________________ (bad) day of my life. ⛈️',
        type: 'word-form',
        correctAnswer: 'worst'
      },
      {
        id: '5.6b',
        instruction: '💡 Give advice using "should".',
        content: 'I suggest you brush your teeth twice a day. 🦷🪥\nYou ___________________________________________________________________',
        type: 'rewrite',
        correctAnswer: 'should brush your teeth twice a day',
        hint: 'Start with: You should...'
      },
      {
        id: '5.7a',
        instruction: '🍰 Join using "which".',
        content: 'I ate the cake. My mom made it. 👩‍🍳🍰',
        type: 'rewrite',
        correctAnswer: 'I ate the cake which my mom made',
        hint: 'Use "which" to talk about the cake.'
      },
      {
        id: '5.7b',
        instruction: '🚗 Use Passive Voice (was/were + verb3).',
        content: 'The car _______________ (wash) by my dad yesterday. 🚘🧽',
        type: 'word-form',
        correctAnswer: 'was washed'
      }
    ]
  },
  {
    id: 'p6-vocab',
    title: 'Part 6: Vocabulary',
    subTitle: 'Skills & Calls',
    emoji: '📞',
    color: 'bg-pastel-blue',
    questions: [
      {
        id: '6.1',
        instruction: '🔍 Choose the best word.',
        content: 'Finding a good ________ nowadays in any field requires a lot of skills and experience. 🛠️📄',
        type: 'mcq',
        options: ['favour', 'sense', 'job', 'knowledge'],
        correctAnswer: 'job'
      },
      {
        id: '6.2',
        instruction: '📱 Choose the best verb.',
        content: 'I want to _________ a phone call to right now, it’s urgent! ☎️🚨',
        type: 'mcq',
        options: ['make', 'do', 'improve', 'advertise'],
        correctAnswer: 'make'
      },
      {
        id: '6.3a',
        instruction: '📰 Fix the word.',
        content: 'I saw an __________________ (advertise) for a job in the paper. 🗞️👀',
        type: 'word-form',
        correctAnswer: 'advertisement'
      },
      {
        id: '6.3b',
        instruction: '📈 Fix the word.',
        content: 'He needs to make an __________________ (improve) in his work. 💼⬆️',
        type: 'word-form',
        correctAnswer: 'improvement'
      },
      {
        id: '6.4',
        instruction: '📦 Choose words from the box.',
        content: 'A. She is very ______________________; she does things suddenly without planning. ⚡🎢\nB. Girls usually _________________ on the phone in their free time. 🗣️📱',
        type: 'gap-fill',
        options: ['spontaneous', 'chat', 'do'],
        correctAnswer: ['spontaneous', 'chat']
      }
    ]
  },
  {
    id: 'p6-grammar',
    title: 'Part 6: Grammar',
    subTitle: 'Experiences & Routines',
    emoji: '🐫',
    color: 'bg-pastel-green',
    questions: [
      {
        id: '6.5',
        instruction: '🐫 Choose the correct form.',
        content: 'Have you ………………….. a camel before? 🏜️',
        type: 'mcq',
        options: ['ride', 'ridden', 'rode', 'riding'],
        correctAnswer: 'ridden'
      },
      {
        id: '6.6a',
        instruction: '🎬 Make it the most!',
        content: 'This is the ___________________ (good) film I have ever seen. 🍿🎥',
        type: 'word-form',
        correctAnswer: 'best'
      },
      {
        id: '6.6b',
        instruction: '💡 Give advice using "should".',
        content: 'I advise you to wear a coat. 🧥❄️\nYou _________________________________________________________________',
        type: 'rewrite',
        correctAnswer: 'should wear a coat',
        hint: 'Start with: You should...'
      },
      {
        id: '6.7a',
        instruction: '👨‍⚕️ Join using "who".',
        content: 'That is the doctor. He checked my eyes. 🏥👁️',
        type: 'rewrite',
        correctAnswer: 'That is the doctor who checked my eyes',
        hint: 'Use "who" to talk about the doctor.'
      },
      {
        id: '6.7b',
        instruction: '🍲 Use Passive Voice (is/are + verb3).',
        content: 'Lunch _______________ (cook) every day at 1 PM. 🥘🕐',
        type: 'word-form',
        correctAnswer: 'is cooked'
      }
    ]
  },
  {
    id: 'p7-vocab',
    title: 'Part 7: Vocabulary',
    subTitle: 'Experience & Effort',
    emoji: '🏆',
    color: 'bg-pastel-blue',
    questions: [
      {
        id: '7.1',
        instruction: '🗓️ Choose the best word.',
        content: 'She has five years of _______ in this company. 🏢🖐️',
        type: 'mcq',
        options: ['experience', 'job', 'salary', 'income'],
        correctAnswer: 'experience'
      },
      {
        id: '7.2',
        instruction: '💪 Choose the best verb.',
        content: 'I will ______ my best to pass the test. 📝💯',
        type: 'mcq',
        options: ['do', 'make', 'connect', 'announce'],
        correctAnswer: 'do'
      },
      {
        id: '7.3a',
        instruction: '🤝 Fix the word.',
        content: 'We have a good _______________________ (connect) with our neighbors. 🏘️❤️',
        type: 'word-form',
        correctAnswer: 'connection'
      },
      {
        id: '7.3b',
        instruction: '📢 Fix the word.',
        content: 'The _______________________ (announce) was very loud in the hall. 🔊🏢',
        type: 'word-form',
        correctAnswer: 'announcement'
      },
      {
        id: '7.4',
        instruction: '📦 Choose words from the box.',
        content: 'A. Please be ______________________ and tell me the truth. 🤞🗣️\nB. Stop _________________ about the hot weather it’s normal in this time of the year. ☀️🌡️',
        type: 'gap-fill',
        options: ['honest', 'complain', 'make'],
        correctAnswer: ['honest', 'complain']
      }
    ]
  },
  {
    id: 'p7-grammar',
    title: 'Part 7: Grammar',
    subTitle: 'Speed & Time',
    emoji: '🐆',
    color: 'bg-pastel-green',
    questions: [
      {
        id: '7.5',
        instruction: '👀 Choose the correct word.',
        content: 'I ………………….. seen him so far today. 👁️❌',
        type: 'mcq',
        options: ['haven\'t', 'didn\'t', 'don\'t', 'wasn\'t'],
        correctAnswer: 'haven\'t'
      },
      {
        id: '7.6a',
        instruction: '🐆 Make it the most!',
        content: 'The cheetah is the _______________________ (fast) animal in the world. 🌍💨',
        type: 'word-form',
        correctAnswer: 'fastest'
      },
      {
        id: '7.6b',
        instruction: '💡 Give advice using "should".',
        content: 'It is good for you to eat fruit. 🍎🍇\nYou _________________________________________________________________',
        type: 'rewrite',
        correctAnswer: 'should eat fruit',
        hint: 'Start with: You should...'
      },
      {
        id: '7.7a',
        instruction: '🏊 Join using "when".',
        content: 'Summer is the time. We go swimming then. ☀️🏊',
        type: 'rewrite',
        correctAnswer: 'Summer is the time when we go swimming',
        hint: 'Use "when" to talk about the time.'
      },
      {
        id: '7.7b',
        instruction: '📧 Use Passive Voice (was/were + verb3).',
        content: 'The emails _______________ (send) yesterday. 📨📅',
        type: 'word-form',
        correctAnswer: 'were sent'
      }
    ]
  },
  {
    id: 'p8-vocab',
    title: 'Part 8: Vocabulary',
    subTitle: 'Seeking & Mistakes',
    emoji: '🔎',
    color: 'bg-pastel-blue',
    questions: [
      {
        id: '8.1',
        instruction: '🔎 Choose the best word.',
        content: 'She is looking for a new _______ with a better salary. 👩‍💼💰',
        type: 'mcq',
        options: ['job', 'knowledge', 'favour', 'sense'],
        correctAnswer: 'job'
      },
      {
        id: '8.2',
        instruction: '🎮 Choose the best verb.',
        content: 'Don\'t ______ any mistakes in the game! This is your last chance to win! 🎮🚫',
        type: 'mcq',
        options: ['make', 'do', 'discuss', 'gossip'],
        correctAnswer: 'make'
      },
      {
        id: '8.3a',
        instruction: '📈 Fix the word.',
        content: 'Her ______________________ (improve) in math is amazing. ➕➗',
        type: 'word-form',
        correctAnswer: 'improvement'
      },
      {
        id: '8.3b',
        instruction: '📺 Fix the word.',
        content: 'That is a funny TV _________________________ (advertise). 😂🎬',
        type: 'word-form',
        correctAnswer: 'advertisement'
      },
      {
        id: '8.4',
        instruction: '📦 Choose words from the box.',
        content: 'A. My brother is ______________________; he likes meeting new people. 🤝😄\nB. I don\'t like to listen to _________________ about friends. 🙉👯',
        type: 'gap-fill',
        options: ['sociable', 'gossip', 'advertise'],
        correctAnswer: ['sociable', 'gossip']
      }
    ]
  },
  {
    id: 'p8-grammar',
    title: 'Part 8: Grammar',
    subTitle: 'Costs & Rules',
    emoji: '💲',
    color: 'bg-pastel-green',
    questions: [
      {
        id: '8.5',
        instruction: '🍽️ Choose the correct form.',
        content: 'We ………………….. anything yet. 🍽️❌',
        type: 'mcq',
        options: ['haven\'t eaten', 'don\'t eat', 'didn\'t eat', 'not eat'],
        correctAnswer: 'haven\'t eaten'
      },
      {
        id: '8.6a',
        instruction: '🏎️ Make it the most!',
        content: 'This is the ________________________ (expensive) car in the shop. 🚘💎',
        type: 'word-form',
        correctAnswer: 'most expensive'
      },
      {
        id: '8.6b',
        instruction: '💡 Give advice using "should".',
        content: 'I advise you to wake up early. ⏰🌅\nYou ________________________________________________________________',
        type: 'rewrite',
        correctAnswer: 'should wake up early',
        hint: 'Start with: You should...'
      },
      {
        id: '8.7a',
        instruction: '💻 Join using "which".',
        content: 'This is the computer. I use it for work. 🖥️🏢',
        type: 'rewrite',
        correctAnswer: 'This is the computer which I use for work',
        hint: 'Use "which" to talk about the computer.'
      },
      {
        id: '8.7b',
        instruction: '🎨 Use Passive Voice (is/are + verb3).',
        content: 'The room _______________ (paint) every year. 🏠🖌️',
        type: 'word-form',
        correctAnswer: 'is painted'
      }
    ]
  },
  {
    id: 'reading',
    title: 'Reading Comprehension 📖',
    subTitle: 'Dolphins',
    emoji: '🐬',
    color: 'bg-pastel-yellow',
    readingPassage: [
      "(1) Dolphins are marine mammals famous for their intelligence and playful nature. Found in oceans worldwide, these animals belong to the family of toothed whales. One of the most fascinating facts about dolphins is their complex social life. They live in groups called pods, which can range from a few individuals to several hundred. Living in a pod helps them hunt, protect themselves, and even take care of the young dolphins.",
      "(2) Dolphins communicate using a variety of sounds, including clicks and whistles. Scientists believe that each dolphin has a unique signature whistle, much like a person’s name! They also use a special technique called echolocation to navigate and find food. They send out clicks and listen for the echoes to determine the size, shape, and location of objects underwater.",
      "(3) These clever animals are known to be fast swimmers, sometimes reaching speeds of over 30 kilometers per hour. Their diet mainly consists of fish and squid. Unfortunately, dolphins face threats from pollution, hits by ships and tankers, and accidental capture in fishing nets. Marine life is essential for the health of our planet, and dolphins play a vital role in maintaining ocean ecosystems.",
      "(4) Protecting these creatures means reducing pollution, preventing overfishing, and safeguarding their habitats from destruction. Plastic waste and chemical runoff threaten dolphins and countless other species, so proper waste management and sustainable practices are crucial.",
      "(5) By supporting eco-friendly initiatives and reducing our carbon footprint, we can ensure that dolphins and marine life thrive for future generations and balance of our oceans."
    ],
    questions: [
      {
        id: 'r.1',
        instruction: '📌 Main Idea',
        content: 'What is the text MAINLY about? 🌊',
        type: 'mcq',
        options: ['Dolphins’ lifestyle', 'Studying marine life', 'How dolphins swim', 'The main food of dolphins'],
        correctAnswer: 'Dolphins’ lifestyle'
      },
      {
        id: 'r.2',
        instruction: '🔍 Vocabulary',
        content: 'What does the underlined word "unique" in paragraph 2 close in meaning? 🔑',
        type: 'mcq',
        options: ['cheap', 'difficult', 'single', 'frequent'],
        correctAnswer: 'single'
      },
      {
        id: 'r.3.1',
        instruction: '✅ True or False?',
        content: '1. Dolphins can send and receive messages from each other. 🗣️',
        type: 'mcq',
        options: ['True', 'False', 'Not Mentioned'],
        correctAnswer: 'True'
      },
      {
        id: 'r.3.2',
        instruction: '✅ True or False?',
        content: '2. Dolphins never eat fish. 🐟🚫',
        type: 'mcq',
        options: ['True', 'False', 'Not Mentioned'],
        correctAnswer: 'False'
      },
      {
        id: 'r.4',
        instruction: '📝 Short Answer (Paragraph 1)',
        content: 'How do dolphins get benefited from living in groups? (Mention Two) 🐬🐬',
        type: 'text-input',
        hint: 'Look for "hunt", "protect", or "care".'
      },
      {
        id: 'r.5',
        instruction: '⚠️ Short Answer (Paragraph 3)',
        content: 'What dangers do dolphins face? (Mention Two) ⚓🕸️',
        type: 'text-input',
        hint: 'Look for "pollution", "ships", or "nets".'
      }
    ]
  },
  {
    id: 'writing',
    title: 'Writing Prompt ✍️',
    subTitle: 'Choose one topic',
    emoji: '✍️',
    color: 'bg-pastel-purple',
    questions: [
      {
        id: 'w.1',
        instruction: '📝 Write your response.',
        content: 'Topic A: Write an ARTICLE about a famous place you know. 🕌🏰\nOR\nTopic B: You saw an advertisement about Language program in Doha university. Write an EMAIL to the university requesting more information. 📧🎓',
        type: 'text-input',
        hint: 'Remember to use capital letters and full stops.'
      }
    ]
  }
];
