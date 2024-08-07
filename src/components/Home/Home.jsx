import "./Home.css"
import homeVideo from "../../assets/videos/artech_home_video.webm"
import { Link } from "react-router-dom";


const Home = () => {


  return (
    <div className="home_container">
      {/* new home section */}
      <div className="home_new_container"> 
        <div className="home_new_presentation">
            <div className="home_moving_background"></div>
            <div className="home_new_title">
              <h1>ARTECH</h1>
              <h1>REDEFINED</h1>
           </div>
          
          
          <p>Echipă de profesioniști în IT, specializați în dezvoltare web, design și marketing. Oferim servicii de calitate pentru a ajuta companiile să își atingă obiectivele online și să își realizeze potențialul maxim</p>
          <div className="home_new_btns_container">
            {/* add link to section */}
              <Link>Pachete</Link>
              <Link to="">Descopera</Link>
          </div>
        </div>
        
        <div className="home_video">
          <video src={homeVideo} autoPlay loop muted />
        </div>
         
      </div>
     
 </div>
  )}



export default Home