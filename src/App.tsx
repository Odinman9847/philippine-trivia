import { useState } from 'react';
import type { Question } from './types';
import styles from './App.module.css';
import QuestionCard from './components/QuestionCard/QuestionCard';
import {
  CATEGORIES,
  QUESTIONS_PER_GAME,
  triviaQuestions,
} from './data/triviaData';
import ResultsScreen from './components/screens/ResultsScreen/ResultsScreen';
import WelcomeScreen from './components/screens/WelcomeScreen/WelcomeScreen';

type GameState = 'welcome' | 'playing' | 'results';

function App() {
  const [gameState, setGameState] = useState<GameState>('welcome');
  const [activeQuiz, setActiveQuiz] = useState<Question[]>([]);
  const [selectedCategory, setSelectedCategory] =
    useState<string>('Everything');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    null
  );
  const currentQuestion = activeQuiz[currentQuestionIndex];

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const handleStart = () => {
    let filteredQuestions: Question[];

    if (selectedCategory === 'Everything') {
      filteredQuestions = triviaQuestions;
    } else {
      filteredQuestions = triviaQuestions.filter(
        (q) => q.category === selectedCategory
      );
    }

    const shuffledQuestions = filteredQuestions.sort(() => Math.random() - 0.5);
    const quizQuestions = shuffledQuestions.slice(0, QUESTIONS_PER_GAME);

    setActiveQuiz(quizQuestions);
    setScore(0);
    setCurrentQuestionIndex(0);
    setSelectedAnswerIndex(null);
    setGameState('playing');
  };

  const handleRestart = () => {
    setGameState('welcome');
  };

  const handleAnswer = (selectedIndex: number) => {
    if (selectedAnswerIndex !== null) return;

    let isCorrect = selectedIndex === currentQuestion.correctAnswerIndex;

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    setSelectedAnswerIndex(selectedIndex);
  };

  const handleNext = () => {
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < activeQuiz.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
      setSelectedAnswerIndex(null);
    } else {
      setGameState('results');
    }
  };

  return (
    <main className={styles.appWrapper}>
      <h1 className={styles.title}>Philippine Trivia</h1>
      <div className={styles.gameContainer}>
        {gameState === 'welcome' && (
          <WelcomeScreen
            onStart={handleStart}
            categories={CATEGORIES}
            onSelectCategory={handleSelectCategory}
            selectedCategory={selectedCategory}
          />
        )}
        {gameState === 'playing' && (
          <QuestionCard
            question={currentQuestion}
            onAnswerSubmit={handleAnswer}
            selectedAnswerIndex={selectedAnswerIndex}
            onNext={handleNext}
            currentQuestionNumber={currentQuestionIndex + 1}
            totalQuestions={activeQuiz.length}
          />
        )}
        {gameState === 'results' && (
          <ResultsScreen
            score={score}
            totalQuestions={activeQuiz.length}
            onRestart={handleRestart}
          />
        )}
      </div>
    </main>
  );
}

export default App;
