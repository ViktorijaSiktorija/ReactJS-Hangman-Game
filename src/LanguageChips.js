import { clsx } from 'clsx';
import { languages } from './languages';

export default function LanguageChips({ wrongGuessCount }) {
  return (
    <section className="languages-list">
      {languages.map((language, index) => {
        const isLanguageLost = index < wrongGuessCount;

        return (
          <span
            key={language.name}
            className={clsx('chip', isLanguageLost && 'lost')}
            style={{
              backgroundColor: language.backgroundColor,
              color: language.color,
            }}
          >
            {language.name}
          </span>
        );
      })}
    </section>
  );
}
