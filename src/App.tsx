import { useState } from 'react';
import styles from './App.module.css';
import QuestionCard from './components/QuestionCard/QuestionCard';
import { triviaQuestions } from './data/triviaData';
import ResultsScreen from './components/screens/ResultsScreen/ResultsScreen';
import WelcomeScreen from './components/screens/WelcomeScreen/WelcomeScreen';

type GameState = 'welcome' | 'playing' | 'results';

function App() {
  const [gameState, setGameState] = useState<GameState>('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  const handleStart = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setGameState('playing');
  };

  const handleRestart = () => {
    setGameState('welcome');
  };

  const currentQuestion = triviaQuestions[currentQuestionIndex];

  const handleAnswer = (selectedIndex: number) => {
    let isCorrect = selectedIndex === currentQuestion.correctAnswerIndex;

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;

    if (nextQuestionIndex < triviaQuestions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setGameState('results');
    }
  };

  return (
    <main className={styles.appWrapper}>
      <h1 className={styles.title}>Philippine Trivia</h1>
      <div className={styles.gameContainer}>
        {gameState === 'welcome' && <WelcomeScreen onStart={handleStart} />}
        {gameState === 'playing' && (
          <QuestionCard
            question={currentQuestion}
            onAnswerSubmit={handleAnswer}
          />
        )}
        {gameState === 'results' && (
          <ResultsScreen
            score={score}
            totalQuestions={triviaQuestions.length}
            onRestart={handleRestart}
          />
        )}
      </div>
    </main>
  );
}

export default App;
