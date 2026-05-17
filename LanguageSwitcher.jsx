import { languages } from '../data/translations.js';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  return (
    <label className="language-switcher" aria-label="Language selector">
      <span className="sr-only">Language</span>
      <select value={language} onChange={(event) => setLanguage(event.target.value)}>
        {languages.map((entry) => (
          <option key={entry.code} value={entry.code}>{entry.label}</option>
        ))}
      </select>
    </label>
  );
}
