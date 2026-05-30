import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Budget from './pages/Budget.jsx';
import UseCase from './pages/UseCase.jsx';
import Cuisine from './pages/Cuisine.jsx';
import Collection from './pages/Collection.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import SelectionList from './pages/SelectionList.jsx';
import SampleRequest from './pages/SampleRequest.jsx';
import Consultation from './pages/Consultation.jsx';
import FAQ from './pages/FAQ.jsx';
import Contact from './pages/Contact.jsx';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/use-case" element={<UseCase />} />
        <Route path="/cuisine" element={<Cuisine />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/selection-list" element={<SelectionList />} />
        <Route path="/sample-request" element={<SampleRequest />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
}
