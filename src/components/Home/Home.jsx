import { useEffect } from "react"
import "./Home.css"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { useLocation } from "react-router-dom"
import desert from "../../assets/images/desert-Photoroom.png"
import desertSky from "../../assets/images/desert_sky-Photoroom.png"

const Home = () => {
  const location = useLocation()

// allowing only parallax to scroll
useEffect(() => {
  document.body.style.overflow = `${location.pathname === "/" ? "hidden" : "auto"}`
})


  return (
    <div className="home_container">
      <Parallax pages={3}>
        <ParallaxLayer
        style={{backgroundImage: `url(${desertSky})`}}>
          <h1 className="home_title">ARTECH</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.3}><h1 className="home_title">ARTECH</h1></ParallaxLayer>
        <ParallaxLayer
        offset={0}
        speed={0.3}
        style={{backgroundImage: `url(${desert})`}}>
        </ParallaxLayer>
      </Parallax>
    </div>


  )}
{/* <h1 className="home_title">Transforma-ti afacerea cu servicii Business de Top</h1></ParallaxLayer> */}
{/* <p>Ești pregătit să duci afacerea ta la următorul nivel? Într-o lume în continuă schimbare, primul impact contează mai mult ca niciodată. Noi suntem aici să îți oferim servicii complete care să te ajute să ieși în evidență și să atragi clienții pe care îi meriți.</p> */}


export default Home