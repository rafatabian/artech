import "./Websites.css"
import { useEffect, useState } from "react"
import homePrevProject  from "../../assets/images/home_show_prevous_project.webp"
import { GiWireframeGlobe } from "react-icons/gi"

const HomeWebsites = () => {
    const [matrix, setMatrix] = useState([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1])
    const [matrixMargins, setMatrixMargins] = useState([])

// changing matrix number
    useEffect(() => {
        setTimeout(() => {
         setMatrix(matrix.map((number) => number === 1 ? 0 : 1))
        }, 400)
    }, [matrix])


// NEW IMPROVED LOGIC FOR MATRIX
useEffect(() => {
    const randomMargins = () => {
      let margins = [];
      const minDistance = 20;
      const maxIterations = 100; // To prevent infinite loop in case of very narrow conditions

      for (let i = 0; i < 30; i++) {
        let attempts = 0;
        let marginGenerated;

        do {
          marginGenerated = Math.floor(Math.random() * window.innerWidth);
          attempts++;
        } while (
          margins.some(number => Math.abs(marginGenerated - number) < minDistance) &&
          attempts < maxIterations
        );

        if (attempts < maxIterations) {
          margins.push(marginGenerated);
        } else {
          console.warn('Could not generate a suitable margin within the attempt limit');
          break;
        }
      }

      setMatrixMargins(margins);
    };

    randomMargins();
  }, []);


// TO DO
// addd examples for the users to see and 
// maybe they gonna have more ideas on how to build the page


  return (
    <div className="homeWebsites_container">
        {matrixMargins.map((margins, index) => <span style={{marginLeft:`${margins}px`, animationDelay: `${index * 0.3}s`}} key={margins}>{matrix.map((number) => <p>{number}</p>)}</span>
)}
       
       <div className="homeWebsite_content">
        <div>
            <a href="">
                <img src={homePrevProject} alt="project"/>
            </a>
            <button className="homeWebsite_content_proiect">DESCOPERA PROIECT</button>
        </div>
        <div>
            <h1>Creare Site Web <GiWireframeGlobe/></h1>
          <p>Creează-ți Prezența Online cu Serviciile Noastre de Web Development și Web Design!
          O prezență online puternică este esențială pentru succesul oricărei afaceri. Dacă dorești un website care nu doar să arate bine, dar și să performeze excelent, ai ajuns în locul potrivit!</p>
          <button className="homeWebsite_content_detalii">AFLA MAI MULTE</button>
        </div>
         
       </div>
    </div>
  )
}
export default HomeWebsites