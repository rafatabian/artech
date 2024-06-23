import { lazy } from 'react'

const Navbar = lazy(() => import("./components/Navbar/Navbar"))
const Home = lazy(() => import("./components/Home/Home"))
const HomeBranding = lazy(() => import("./components/HomeBranding/HomeBranding"))
const HomeWebsites = lazy(() => import("./components/HomeWebsites/HomeWebsites"))

const App = () => {
  return (
  <div className="app contianer">
     <Navbar />
     <Home />
     <HomeBranding />
     <HomeWebsites />
  </div>
  )
}

export default App

