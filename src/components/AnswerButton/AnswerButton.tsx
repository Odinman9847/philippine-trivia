import styles from './AnswerButton.module.css';
export type ButtonState = 'default' | 'correct' | 'incorrect';

interface AnswerButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  state?: ButtonState;
}

const AnswerButton = ({
  text,
  onClick,
  className,
  disabled,
  state = 'default',
}: AnswerButtonProps) => {
  const classNames = [styles.button, styles[state], className || ''];
  const buttonClasses = classNames.join(' ');

  return (
    <button onClick={onClick} className={buttonClasses} disabled={disabled}>
      {text}
    </button>
  );
};

export default AnswerButton;
