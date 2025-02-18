export interface Course {
  id: string;
  title: string;
  description: string;
  content: string;
  image: {
    uri: string;
    alt: string;
  };
  quizzes: string[]; // Array of quiz IDs or names associated with the course
  keyPoints: string[];
  examples: string[];
}

export const courses: Course[] = [
  {
    id: '1',
    title: 'Patent 101',
    description: 'Learn about patents and how inventors protect their new ideas!',
    content: `A **patent** is a form of intellectual property that grants the inventor exclusive rights to make, use, or sell their invention for a certain period of time. It is designed to protect new and innovative inventions.`,
    image: { 
      uri: 'https://example.com/patent.png', 
      alt: 'Patent Image'
    },
    quizzes: ["patentQuiz"],
    keyPoints: [
      "Patents are typically valid for 20 years from the filing date.",
      "To apply for a patent, you must submit an application to the government.",
      "Once granted, no one else can make, use, or sell the patented invention without permission."
    ],
    examples: [
      "Smartphone Technology: Apple patented its unique design for the iPhone.",
      "Folding Bicycle: A company invents a new type of bike that folds into a compact size.",
      "Medicine Formula: A pharmaceutical company develops a new drug and patents the formula."
    ],
  },
  {
    id: '2',
    title: 'Copyright Basics',
    description: 'Understand how creative works like books and music are protected by copyright.',
    content: `A **copyright** protects original creative works, such as books, movies, music, art, and software, by giving the creator exclusive rights to reproduce, distribute, and perform their work.`,
    image: { 
      uri: 'https://example.com/copyright.png', 
      alt: 'Copyright Image'
    },
    quizzes: ["copyrightQuiz"],
    keyPoints: [
      "Copyright protection typically lasts for the lifetime of the creator plus 70 years (for works created after 1977 in the U.S.).",
      "You do not need to apply for copyright protection; it is automatically granted when the work is created and fixed in a tangible form (e.g., written down or recorded).",
      "You can apply for a copyright registration for legal protection and the ability to sue in court."
    ],
    examples: [
      "J.K. Rowling holds the copyright to the Harry Potter series.",
      "Taylor Swift holds the copyright to her songs.",
      "The movie 'Avatar' is protected by copyright."
    ],
  },
  {
    id: '3',
    title: 'What is a Trade Secret?',
    description: 'Discover how businesses keep their secret formulas or processes safe from competitors.',
    content: `A **trade secret** is a type of intellectual property that consists of any confidential business information that gives a company a competitive edge.`,
    image: { 
      uri: 'https://example.com/tradesecret.png', 
      alt: 'Trade Secret Image'
    },
    quizzes: ["tradeSecretQuiz"],
    keyPoints: [
      "There is no set time limit for a trade secret; it lasts as long as the information remains secret.",
      "You don't need to apply for trade secret protection, but you must take steps to keep the information confidential, such as using non-disclosure agreements (NDAs) with employees.",
      "If someone illegally obtains or discloses a trade secret, you can sue them for damages."
    ],
    examples: [
      "Coca-Cola's drink formula.",
      "Google's search algorithm.",
      "KFC's chicken recipe."
    ],
  },
  {
    id: '4',
    title: 'Trademark 101',
    description: 'Learn about trademarks and how companies protect their logos and brands.',
    content: `A **trademark** is a symbol, word, or other identifier used by a company to distinguish its products or services from others.`,
    image: { 
      uri: 'https://example.com/trademark.png', 
      alt: 'Trademark Image'
    },
    quizzes: ["trademarkQuiz"],
    keyPoints: [
      "Trademarks can last indefinitely as long as they are being used in commerce and are renewed periodically (usually every 10 years).",
      "To apply for a trademark, you need to file an application with the trademark office and prove that your trademark is unique and is being used in commerce.",
      "Once granted, no one else can use your trademark or something similar in a way that could confuse consumers."
    ],
    examples: [
      "Nike swoosh logo.",
      "McDonald's golden arches.",
      "Apple logo."
    ],
  }
];
