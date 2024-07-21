import "./Home.css"
import montain from "../../assets/images/artech_montain-Photoroom.png"
import stars from "../../assets/images/artech_stars.jpg"
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax"
import { Parallax } from 'react-scroll-parallax';
import shape1 from "../../assets/images/shapes/artech_purple_shape_1.png"
import shape2 from "../../assets/images/shapes/artech_purple_shape_2.png"
import shape3 from "../../assets/images/shapes/artech_purple_shape_3.png"
import shape4 from "../../assets/images/shapes/artech_purple_shape_4.png"
import purpleBackgorund from "../../assets/images/shapes/purple_background.jpg"


const Home = () => {

//for parallax
const sky = {
  children: (
    <div className="parallax_sky_clone"></div>
  )
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
  image: montain,
translateY: [0, 15],
scale: [1, 1.15, 'easeOutCubic'],
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
  image: shape1,
  // image: purpleBackgorund,
  translateY: [0, 50],
  scale: [0.5, 0.9],
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
      layers={[sky, desertParallax, text]}
      ></ParallaxBanner>
   
  
       <div className="home_shapes_container">
       <Parallax speed={-5} translateY={[0, 100]} rotate={[0, 90]}className="texst">
      <img src={shape1} alt="purple shape" className="some_shape"/>
      </Parallax> 

      <Parallax speed={-5} translateY={[0, 30]}>
      <img src={shape2} alt="purple shape" className="some_shape"/>
      </Parallax> 

      <Parallax speed={-5} translateY={[0, 60]} className="texst">
      <img src={shape3} alt="purple shape" className="some_shape"/>
      </Parallax> 

      <Parallax speed={-5} translateY={[0, 100]} className="texst">
      <img src={shape4} alt="purple shape" className="some_shape"/>
      </Parallax> 
       </div>
      </ParallaxProvider>

     
      
 </div>
  )}



export default Home