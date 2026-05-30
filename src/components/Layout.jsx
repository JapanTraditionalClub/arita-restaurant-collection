import Header from './Header.jsx';
import Footer from './Footer.jsx';
import SelectionDrawer from './SelectionDrawer.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';
import { useSelection } from '../context/SelectionContext.jsx';

export default function Layout({ children }) {
  const { t } = useLanguage();
  const { notice } = useSelection();

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <SelectionDrawer />
      {notice && <div className="toast">{notice} {t('product.addedNotice')}</div>}
    </>
  );
}
