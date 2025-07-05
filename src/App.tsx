import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import PricingPage from './pages/PricingPage'
import HowItWorksPage from './pages/HowItWorksPage'
import ContactPage from './pages/ContactPage'
import PaymentIssuePage from './pages/PaymentIssuePage'
import PrivacyPage from './pages/legal/PrivacyPage'
import CookiesPage from './pages/legal/CookiesPage'
import TermsPage from './pages/legal/TermsPage'
import DPAPage from './pages/legal/DPAPage'
import SLAPage from './pages/legal/SLAPage'
import BuyoutPage from './pages/legal/BuyoutPage'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="pricing" element={<PricingPage />} />
            <Route path="how-it-works" element={<HowItWorksPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="privacy" element={<PrivacyPage />} />
            <Route path="cookies" element={<CookiesPage />} />
            <Route path="legal/tos" element={<TermsPage />} />
            <Route path="legal/dpa" element={<DPAPage />} />
            <Route path="legal/sla" element={<SLAPage />} />
            <Route path="legal/buyout" element={<BuyoutPage />} />
          </Route>
          <Route path="/payment-issue" element={<PaymentIssuePage />} />
        </Routes>
      </Router>
    </HelmetProvider>
  )
}

export default App
