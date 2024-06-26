import "./Home.css"
import { lazy, useContext, useEffect } from "react"
import { GeneralContext } from "../../context/Context"
import { useRef } from "react"
const HomeBranding = lazy(() => import("../HomeBranding/HomeBranding"))
const HomeWebsites = lazy(() => import("../HomeWebsites/HomeWebsites"))
const Homemarketing = lazy(() => import("../HomeMarketing/HomeMarketing"))

const Home = () => {
  const websitesRef = useRef()
  const { setNavbarColor } = useContext(GeneralContext)

  //check where the user is and change navbar background color
  const handleScroll = () => {
    const websiteComponent = websitesRef.current
    const websiteComponentTop = websiteComponent.offsetTop + websiteComponent.offsetHeight - 45
    const websiteComponentBottom = websiteComponent.offsetTop + websiteComponent.offsetHeight
    const scrollPosition = window.scrollY + window.innerHeight

    if(scrollPosition > websiteComponentTop && window.scrollY < websiteComponentBottom){
      setNavbarColor("black")
    }else{
      setNavbarColor("white")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
     
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  

  return (
    <div className="home_container">
      <div className="home_text">
        <h1>Transforma-ti afacerea cu servicii Business de Top</h1>
        <p>Ești pregătit să duci afacerea ta la următorul nivel? Într-o lume în continuă schimbare, primul impact contează mai mult ca niciodată. Noi suntem aici să îți oferim servicii complete care să te ajute să ieși în evidență și să atragi clienții pe care îi meriți.</p>
      </div>
      <HomeBranding/>
      <HomeWebsites  ref={websitesRef}/>
      <Homemarketing />
    </div>
  )
}

export default Home