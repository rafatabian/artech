import "./Home.css"
import desert from "../../assets/images/desert-Photoroom.png"
import stars from "../../assets/images/artech_stars.jpg"
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax"

const Home = () => {


//for parallax
const sky = {
  image:stars,
  translateY: [0, 50],
  opacity: [1, 0.3],
  scale: [1.05, 1, 'easeOutCubic'],
  shouldAlwaysCompleteAnimation: true,
};
const text = {
  translateY: [0, 30],
  scale: [1, 1.05, 'easeOutCubic'],
  shouldAlwaysCompleteAnimation: true,
  expanded: false,
  children: (
    <div className="parallax_text">
      <h1>
        ARTECH
      </h1>
    </div>
  )
}
const desertParallax = {
  image: desert,
translateY: [0, 15],
scale: [1, 1.1, 'easeOutCubic'],
shouldAlwaysCompleteAnimation: true,
}
const gradientOverlay = {
  opacity: [0, 0.9],
  shouldAlwaysCompleteAnimation: true,
  expanded: false,
  children: (
    <div className="gradient_overlay" />
  ),
};
// second parallax
const secondParallaxSky = {
  image: stars,
  translateY: [0, 50],
  // scale: [1.05, 1, 'easeOutCubic'],
  shouldAlwaysCompleteAnimation: true,
} 
const secondParallaxText = {
  scale: [1, 1.1, 'easeOutCubic'],
  shouldAlwaysCompleteAnimation: true,
  expanded: false,
  children: (
    <div className="secondParallax_text">
      <h1>
      Transforma-ti afacerea cu servicii Business de Top
      </h1>
      <p>Ești pregătit să duci afacerea ta la următorul nivel? Într-o lume în continuă schimbare, primul impact contează mai mult ca niciodată. Noi suntem aici să îți oferim servicii complete care să te ajute să ieși în evidență și să atragi clienții pe care îi meriți</p>
    </div>
  )
 }
  return (
    <div className="home_container">
      <ParallaxProvider>
      <ParallaxBanner
      className="parallax"
      layers={[sky,text, desertParallax, gradientOverlay]}
      ></ParallaxBanner>
   <div className="separation_div">
    <h1>Transforma-ti afacerea cu servicii Business de Top</h1>
    <p>Ești pregătit să duci afacerea ta la următorul nivel? Într-o lume în continuă schimbare, primul impact contează mai mult ca niciodată. Noi suntem aici să îți oferim servicii complete care să te ajute să ieși în evidență și să atragi clienții pe care îi meriți</p>
   </div>
      <ParallaxBanner className="secondParallax"
      layers={[secondParallaxSky, secondParallaxText]}>

      </ParallaxBanner>
      </ParallaxProvider>
 </div>
  )}



export default Home