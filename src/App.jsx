import { lazy } from 'react'

const Navbar = lazy(() => import("./components/Navbar/Navbar"))
const Home = lazy(() => import("./components/Home/Home"))

const App = () => {
  return (
  <div className='app contianer'>
     <Navbar />
     <Home />
  </div>
  )
}

export default App

