import { useState } from 'react';
import styles from './App.module.css';
import QuestionCard from './components/QuestionCard/QuestionCard';
import { triviaQuestions } from './data/triviaData';
import ResultsScreen from './components/screens/ResultsScreen/ResultsScreen';
import WelcomeScreen from './components/screens/WelcomeScreen/WelcomeScreen';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  const currentQuestion = triviaQuestions[currentQuestionIndex];

  const handleAnswer = (selectedIndex: number) => {
    let isCorrect = selectedIndex === currentQuestion.correctAnswerIndex;

    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;

    if (nextQuestionIndex < triviaQuestions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      const finalScore = isCorrect ? score + 1 : score;
      console.log(`End of the quiz! Final score: ${finalScore}`);
    }
  };

  const handleRestart = () => {
    console.log('Restarting quiz!');
  };

  const handleStart = () => {
    console.log('Starting quiz!');
  };

  return (
    <main className={styles.appWrapper}>
      <h1 className={styles.title}>Philippine Trivia</h1>
      <div className={styles.gameContainer}>
        <QuestionCard
          question={currentQuestion}
          onAnswerSubmit={handleAnswer}
        />
      </div>
    </main>
  );
}

export default App;
