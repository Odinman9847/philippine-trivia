import AnswerButton from '../../AnswerButton/AnswerButton';
import styles from './WelcomeScreen.module.css';

interface WelcomeScreenProps {
  onStart: () => void;
  categories: string[];
  onSelectCategory: (category: string) => void;
  selectedCategory: string;
}

const WelcomeScreen = ({
  onStart,
  categories,
  onSelectCategory,
  selectedCategory,
}: WelcomeScreenProps) => {
  return (
    <div className={styles.welcomeCard}>
      <h2 className={styles.title}>Welcome to the Quiz!</h2>
      <p className={styles.instructions}>Select a category to begin.</p>
      <div className={styles.categoryGrid}>
        {categories.map((category) => {
          const isSelected = selectedCategory === category;
          const buttonClasses = `${styles.categoryButton} ${
            isSelected ? styles.selected : ''
          }`;

          return (
            <button
              key={category}
              onClick={() => onSelectCategory(category)} //
              className={buttonClasses}
            >
              {category}
            </button>
          );
        })}

        <button
          onClick={() => onSelectCategory('Everything')}
          className={`${styles.categoryButton} ${
            selectedCategory === 'Everything' ? styles.selected : ''
          }`}
        >
          Everything
        </button>
      </div>

      <AnswerButton
        text="Start Quiz"
        onClick={onStart}
        className={styles.startButton}
      />
    </div>
  );
};

export default WelcomeScreen;
