import "./App.css"
import { Suspense, lazy } from 'react'
import { HashRouter as Router, Routes, Route} from 'react-router-dom'
import logo from "./assets/images/artech_logo.webp"
import { ContextProvider } from "./context/Context"

const Navbar = lazy(() => import("./components/Navbar/Navbar"))
const Home = lazy(() => import("./containers/Home/Home"))
const Branding = lazy(() => import("./containers/Branding/Branding"))
const Websites = lazy(() => import("./containers/Websites/Websites"))
const Marketing = lazy(() => import("./containers/Marketing/Marketing"))
const Help = lazy(() => import("./containers/Help/Help"))
const Contact = lazy(() => import("./components/Contact/Contact"))
const Footer = lazy(() => import("./components/Footer/Footer"))
const Plans = lazy(() => import("./components/Plans/Plans"))
const Privacy = lazy(() => import("./agreements/privacy/Privacy"))
const Terms = lazy(() => import("./agreements/terms/Terms"))
const OfferBanner = lazy(() => import("./containers/OfferBanner/OfferBanner"))
const Offer = lazy(() => import("./containers/Offer/Offer"))

const App = () => {

  return (
  <div className="app_contianer">
    <Suspense fallback={<div id="loading_container">
      <img src={logo} alt="logo" />
     </div>}>

     
     <ContextProvider>
      <Router>
      <Navbar />
     <OfferBanner />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/branding" element={<Branding/>} />
        <Route path="/websites" element={<Websites />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/help" element={<Help />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} /> 
        
       </Routes>
       <Footer/>
      </Router>
      </ContextProvider>
    </Suspense>
    
  </div>
  )
}

export default App

