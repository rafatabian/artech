import "./App.css"
import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import logo from "./assets/images/artech_logo.webp"
import { ContextProvider } from "./context/Context"
import Macbook from "./components/ui/macbook-scroll.tsx"

const Navbar = lazy(() => import("./components/Navbar/Navbar"))
const Home = lazy(() => import("./components/Home/Home"))
const App = () => {
  return (
  <div className="app_contianer">
    <Suspense fallback={<div id="loading_container">
      <img src={logo} alt="logo" />
     </div>}>
     
     <ContextProvider>
      <Navbar />
       <Router>
       <Routes>
        <Route path="/" element={<Home />} />
        <Macbook />
       </Routes>
      </Router>
      </ContextProvider>
    </Suspense>
    
  </div>
  )
}

export default App

