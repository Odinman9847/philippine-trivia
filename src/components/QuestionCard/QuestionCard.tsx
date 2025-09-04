import type { Question } from '../../types';
import AnswerButton from '../AnswerButton/AnswerButton';
import type { ButtonState } from '../AnswerButton/AnswerButton';
import styles from './QuestionCard.module.css';

interface QuestionCardProps {
  question: Question;
  selectedAnswerIndex: number | null;
  onAnswerSubmit: (selectedAnswerIndex: number) => void;
  onNext: () => void;
}

const QuestionCard = ({
  question,
  selectedAnswerIndex,
  onAnswerSubmit,
  onNext,
}: QuestionCardProps) => {
  const isAnswered = selectedAnswerIndex != null;

  return (
    <div className={styles.card}>
      <h2 className={styles.questionText}>
        <span>{question.questionText}</span>
      </h2>
      <div className={styles.optionsGrid}>
        {question.options.map((optionText, index) => {
          let buttonState: ButtonState = 'default';
          if (isAnswered) {
            if (index === question.correctAnswerIndex) {
              buttonState = 'correct';
            } else if (index === selectedAnswerIndex) {
              buttonState = 'incorrect';
            }
          }
          return (
            <AnswerButton
              key={index}
              text={optionText}
              onClick={() => onAnswerSubmit(index)}
              disabled={isAnswered}
              state={buttonState}
            />
          );
        })}
      </div>
      {isAnswered && (
        <div className={styles.nextButtonWrapper}>
          <AnswerButton
            text="Next"
            onClick={onNext}
            className={styles.nextButton}
          />
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
