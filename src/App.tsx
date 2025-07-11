import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Suspense, lazy } from 'react'
import Layout from './components/layout/Layout'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import PricingPage from './pages/PricingPage'
import HowItWorksPage from './pages/HowItWorksPage'
import ContactPage from './pages/ContactPage'

// Lazy load secondary pages
const PaymentIssuePage = lazy(() => import('./pages/PaymentIssuePage'))
const PrivacyPage = lazy(() => import('./pages/legal/PrivacyPage'))
const CookiesPage = lazy(() => import('./pages/legal/CookiesPage'))
const TermsPage = lazy(() => import('./pages/legal/TermsPage'))
const DPAPage = lazy(() => import('./pages/legal/DPAPage'))
const SLAPage = lazy(() => import('./pages/legal/SLAPage'))
const BuyoutPage = lazy(() => import('./pages/legal/BuyoutPage'))

// Lazy load dashboard components
const LoginPage = lazy(() => import('./pages/auth/LoginPage'))
const DashboardLayout = lazy(() => import('./pages/dashboard/DashboardLayout'))
const OverviewPage = lazy(() => import('./pages/dashboard/OverviewPage'))
const WebsitePage = lazy(() => import('./pages/dashboard/WebsitePage'))
const SubscriptionPage = lazy(() => import('./pages/dashboard/SubscriptionPage'))
const AddOnsPage = lazy(() => import('./pages/dashboard/AddOnsPage'))
const SupportPage = lazy(() => import('./pages/dashboard/SupportPage'))

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-accent-1"></div>
  </div>
)

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Main website routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="pricing" element={<PricingPage />} />
            <Route path="how-it-works" element={<HowItWorksPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="privacy" element={
              <Suspense fallback={<PageLoader />}>
                <PrivacyPage />
              </Suspense>
            } />
            <Route path="cookies" element={
              <Suspense fallback={<PageLoader />}>
                <CookiesPage />
              </Suspense>
            } />
            <Route path="legal/tos" element={
              <Suspense fallback={<PageLoader />}>
                <TermsPage />
              </Suspense>
            } />
            <Route path="legal/dpa" element={
              <Suspense fallback={<PageLoader />}>
                <DPAPage />
              </Suspense>
            } />
            <Route path="legal/sla" element={
              <Suspense fallback={<PageLoader />}>
                <SLAPage />
              </Suspense>
            } />
            <Route path="legal/buyout" element={
              <Suspense fallback={<PageLoader />}>
                <BuyoutPage />
              </Suspense>
            } />
          </Route>
          <Route path="/payment-issue" element={
            <Suspense fallback={<PageLoader />}>
              <PaymentIssuePage />
            </Suspense>
          } />
          
          {/* Authentication routes */}
          <Route path="/login" element={
            <Suspense fallback={<PageLoader />}>
              <LoginPage />
            </Suspense>
          } />
          
          {/* Dashboard routes */}
          <Route path="/dashboard" element={
            <Suspense fallback={<PageLoader />}>
              <DashboardLayout />
            </Suspense>
          }>
            <Route index element={
              <Suspense fallback={<PageLoader />}>
                <OverviewPage />
              </Suspense>
            } />
            <Route path="website" element={
              <Suspense fallback={<PageLoader />}>
                <WebsitePage />
              </Suspense>
            } />
            <Route path="subscription" element={
              <Suspense fallback={<PageLoader />}>
                <SubscriptionPage />
              </Suspense>
            } />
            <Route path="add-ons" element={
              <Suspense fallback={<PageLoader />}>
                <AddOnsPage />
              </Suspense>
            } />
            <Route path="support" element={
              <Suspense fallback={<PageLoader />}>
                <SupportPage />
              </Suspense>
            } />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  )
}

export default App
