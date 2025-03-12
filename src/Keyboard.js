import { clsx } from 'clsx';

export default function Keyboard({
  currentWord,
  guessedLetters,
  setGuessedLetters,
  isGameOver,
}) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  function addGuessedLetter(letter) {
    setGuessedLetters((prev) =>
      prev.includes(letter) ? prev : [...prev, letter]
    );
  }

  return (
    <section className="keyboard">
      {alphabet.split('').map((key, index) => {
        const isGuessed = guessedLetters.includes(key);
        const isCorrect = isGuessed && currentWord.includes(key);
        const isWrong = isGuessed && !currentWord.includes(key);
        const className = clsx({
          correct: isCorrect,
          wrong: isWrong,
        });

        return (
          <button
            className={className}
            key={index}
            disabled={isGameOver}
            aria-disabled={guessedLetters.includes(key)}
            onClick={() => addGuessedLetter(key)}
          >
            {key}
          </button>
        );
      })}
    </section>
  );
}
