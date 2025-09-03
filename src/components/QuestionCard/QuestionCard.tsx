import type { Question } from '../../types';
import AnswerButton from '../AnswerButton/AnswerButton';
import styles from './QuestionCard.module.css';

interface QuestionCardProps {
  question: Question;
  onAnswerSubmit: (selectedAnswerIndex: number) => void;
}

const QuestionCard = ({ question, onAnswerSubmit }: QuestionCardProps) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.questionText}>
        <span>{question.questionText}</span>
      </h2>
      <div className={styles.optionsGrid}>
        {question.options.map((optionText, index) => (
          <AnswerButton
            key={index}
            text={optionText}
            onClick={() => onAnswerSubmit(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
