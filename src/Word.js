import { clsx } from 'clsx';

export default function CurrentWord({
  currentWord,
  guessedLetters,
  isGameLost,
}) {
  const letterElements = currentWord.split('').map((letter, index) => {
    const shouldRevealLetter = isGameLost || guessedLetters.includes(letter);
    const letterClassName = clsx(
      isGameLost && !guessedLetters.includes(letter) && 'missed-letter'
    );

    return (
      <div key={index} className="letter-box ">
        <span className={letterClassName}>
          {shouldRevealLetter ? letter : ''}
        </span>
      </div>
    );
  });

  return <section className="word">{letterElements}</section>;
}
