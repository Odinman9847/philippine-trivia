import styles from './AnswerButton.module.css';

interface AnswerButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

const AnswerButton = ({ text, onClick, className }: AnswerButtonProps) => {
  const buttonClasses = `${styles.button} ${className || ''}`;

  return (
    <button onClick={onClick} className={buttonClasses}>
      {text}
    </button>
  );
};

export default AnswerButton;
