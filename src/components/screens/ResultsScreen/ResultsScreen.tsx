import AnswerButton from '../../AnswerButton/AnswerButton';
import styles from './ResultsScreen.module.css';

interface ResultsScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const ResultsScreen = ({
  score,
  totalQuestions,
  onRestart,
}: ResultsScreenProps) => {
  const getRank = () => {
    const percentage = (score / totalQuestions) * 100;
    if (percentage === 100) return 'Pinoy Henyo Ka!';
    if (percentage >= 70) return 'Dalubhasa!';
    if (percentage >= 40) return 'Marunong!';
    return 'Baguhan pa lang!';
  };

  return (
    <div className={styles.resultsCard}>
      <h2 className={styles.title}>Quiz Complete!</h2>
      <h3 className={styles.rank}>{getRank()}</h3>
      <p className={styles.score}>
        Your Score: {score}/{totalQuestions}
      </p>
      <AnswerButton
        text="Play Again"
        onClick={onRestart}
        className={styles.restartButton}
      />
    </div>
  );
};

export default ResultsScreen;
