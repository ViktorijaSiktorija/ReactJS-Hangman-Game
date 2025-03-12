import { clsx } from 'clsx';
import { getFarewellText } from './utils';
import { languages } from './languages';

export default function Header({
  isGameOver,
  isGameWon,
  isGameLost,
  isLastGuessIncorrect,
  wrongGuessCount,
}) {
  const gameStatusClass = clsx('header-div', {
    won: isGameWon,
    lost: isGameLost,
    farewell: !isGameOver && isLastGuessIncorrect,
  });

  function renderGameStatus() {
    if (!isGameOver && isLastGuessIncorrect) {
      return (
        <p className="farewell-message">
          {getFarewellText(languages[wrongGuessCount - 1].name)}
        </p>
      );
    }

    if (isGameWon) {
      return (
        <>
          <h1>You win!</h1>
          <p>Well done! 🎉</p>
        </>
      );
    }
    if (isGameLost) {
      return (
        <>
          <h1>Game over!</h1>
          <p>You lose! Better start learning Assembly 😭</p>
        </>
      );
    }
    return null;
  }

  return (
    <div className="header-div">
      <h1 className="title">Assembly: Endgame</h1>
      <p className="description">
        Guess the word in under 8 attempts to keep the programming world safe
        from Assembly!
      </p>
      <section aria-live="polite" role="satus" className={gameStatusClass}>
        {renderGameStatus()}
      </section>
    </div>
  );
}
