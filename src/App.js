import { useState } from 'react';
import Header from './Header';
import LanguageChips from './LanguageChips';
import CurrentWord from './Word';
import Keyboard from './Keyboard';
import { languages } from './languages';
import { getRandomWord } from './utils';
import Confetti from 'react-confetti';

export default function AssemblyEndgame() {
  const [currentWord, setCurrentWord] = useState(() => getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState([]);

  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter)
  ).length;

  const isGameWon = currentWord
    .split('')
    .every((letter) => guessedLetters.includes(letter));
  const isGameLost = wrongGuessCount >= languages.length - 1;
  const isGameOver = isGameWon || isGameLost;

  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
  const isLastGuessIncorrect =
    lastGuessedLetter && !currentWord.includes(lastGuessedLetter);

  function startNewGame() {
    setCurrentWord(getRandomWord());
    setGuessedLetters([]);
  }

  return (
    <main>
      {isGameWon && <Confetti recycle={false} numberOfPieces={1000} />}
      <Header
        isGameOver={isGameOver}
        isGameWon={isGameWon}
        isGameLost={isGameLost}
        isLastGuessIncorrect={isLastGuessIncorrect}
        wrongGuessCount={wrongGuessCount}
      />
      <LanguageChips
        isGameOver={isGameOver}
        wrongGuessCount={wrongGuessCount}
      />
      <CurrentWord
        currentWord={currentWord}
        guessedLetters={guessedLetters}
        isGameLost={isGameLost}
      />
      <Keyboard
        currentWord={currentWord}
        guessedLetters={guessedLetters}
        setGuessedLetters={setGuessedLetters}
        isGameOver={isGameOver}
      />
      {isGameOver && (
        <button className="new-game" onClick={startNewGame}>
          New Game
        </button>
      )}
    </main>
  );
}
