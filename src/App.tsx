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

// Dashboard imports
import LoginPage from './pages/auth/LoginPage'
import DashboardLayout from './pages/dashboard/DashboardLayout'
import OverviewPage from './pages/dashboard/OverviewPage'
import WebsitePage from './pages/dashboard/WebsitePage'
import SubscriptionPage from './pages/dashboard/SubscriptionPage'
import AddOnsPage from './pages/dashboard/AddOnsPage'
import SupportPage from './pages/dashboard/SupportPage'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          {/* Main website routes */}
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
          
          {/* Authentication routes */}
          <Route path="/login" element={<LoginPage />} />
          
          {/* Dashboard routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<OverviewPage />} />
            <Route path="website" element={<WebsitePage />} />
            <Route path="subscription" element={<SubscriptionPage />} />
            <Route path="add-ons" element={<AddOnsPage />} />
            <Route path="support" element={<SupportPage />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  )
}

export default App
