import QuestionCard from './components/QuestionCard/QuestionCard';
import { triviaQuestions } from './data/triviaData';

function App() {
  const currentQuestion = triviaQuestions[0];
  const handleAnswer = (selectedIndex: number) => {
    console.log('User selected answer index:', selectedIndex);
    console.log('Correct answer index is:', currentQuestion.correctAnswerIndex);
  };

  return (
    <main>
      <h1>Philippine Trivia</h1>
      <QuestionCard question={currentQuestion} onAnswerSubmit={handleAnswer} />
    </main>
  );
}

export default App;
