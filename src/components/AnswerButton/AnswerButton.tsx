import styles from './AnswerButton.module.css';

interface AnswerButtonProps {
  text: string;
  onClick: () => void;
}

const AnswerButton = ({ text, onClick }: AnswerButtonProps) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {text}
    </button>
  );
};

export default AnswerButton;
