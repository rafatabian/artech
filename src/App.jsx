import "./App.css"
import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import logo from "./assets/images/artech_logo.webp"
import { ContextProvider } from "./context/Context"

const Navbar = lazy(() => import("./components/Navbar/Navbar"))
const Home = lazy(() => import("./components/Home/Home"))
const Branding = lazy(() => import("./components/Branding/Branding"))
const Websites = lazy(() => import("./components/Websites/Websites"))
const Marketing = lazy(() => import("./components/Marketing/Marketing"))
const Help = lazy(() => import("./containers/Help/Help"))
const Contact = lazy(() => import("./components/Contact/Contact"))

// react-router-dom is installed in this project

const App = () => {
  return (
  <div className="app_contianer">
    <Suspense fallback={<div id="loading_container">
      <img src={logo} alt="logo" />
     </div>}>
     
     <ContextProvider>
      <Router>
      <Navbar />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/branding" element={<Branding/>} />
        <Route path="/websites" element={<Websites />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/help" element={<Help />} />
        <Route path="/contact" element={<Contact />} />
        
       </Routes>
      </Router>
      </ContextProvider>
    </Suspense>
    
  </div>
  )
}

export default App

