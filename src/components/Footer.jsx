import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.jsx';
import LanguageSwitcher from './LanguageSwitcher.jsx';

export default function Footer() {
  const { t } = useLanguage();
  const links = [
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
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">ARITA RESTAURANT COLLECTION</div>
          <p>{t('footer.description')}</p>
          <Link className="button button-light" to="/contact">{t('cta.requestQuote')}</Link>
        </div>
        <div className="footer-links">
          {links.map(([to, label]) => <Link key={to} to={to}>{label}</Link>)}
        </div>
        <div>
          <p className="small-label">Language</p>
          <LanguageSwitcher />
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} ARITA RESTAURANT COLLECTION. {t('footer.rights')}</div>
    </footer>
  );
}
