import { NavLink, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.jsx';
import { useSelection } from '../context/SelectionContext.jsx';
import LanguageSwitcher from './LanguageSwitcher.jsx';

export default function Header() {
  const { t } = useLanguage();
  const { totals, setDrawerOpen } = useSelection();

  const nav = [
    ['/', t('nav.home')],
    ['/use-case', t('nav.useCase')],
    ['/budget', t('nav.budget')],
    ['/cuisine', t('nav.cuisine')],
    ['/collection', t('nav.collection')],
    ['/consultation', t('nav.consultation')],
    ['/sample-request', t('nav.sampleRequest')],
    ['/faq', t('nav.faq')],
    ['/contact', t('nav.contact')]
  ];

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand" aria-label="ARITA RESTAURANT COLLECTION home">
          <span className="brand-mark">有</span>
          <span>ARITA RESTAURANT COLLECTION</span>
        </Link>
        <nav className="main-nav" aria-label="Primary navigation">
          {nav.map(([to, label]) => (
            <NavLink key={to} to={to} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="header-actions">
          <LanguageSwitcher />
          <Link className="button button-ghost" to="/contact">{t('cta.requestCatalog')}</Link>
          <button className="button button-dark selection-button" onClick={() => setDrawerOpen(true)}>
            {t('cta.selectionList')}
            <span className="badge">{totals.count}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
