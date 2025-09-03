import AnswerButton from '../../AnswerButton/AnswerButton';
import styles from './WelcomeScreen.module.css';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  return (
    <div className={styles.welcomeCard}>
      <h2 className={styles.title}>Welcome to the Quiz!</h2>
      <p className={styles.instructions}>
        Test your knowledge about the Philippines.
      </p>
      <AnswerButton
        text="Start Quiz"
        onClick={onStart}
        className={styles.startButton}
      />
    </div>
  );
};

export default WelcomeScreen;
