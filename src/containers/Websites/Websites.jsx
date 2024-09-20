import "./Websites.css"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

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
          console.warn('could not generate a suitable margin within the attempt limit');
          break;
        }
      }

      setMatrixMargins(margins);
    };

    randomMargins();
  }, []);
      


  return (
    <div className="homeWebsites_container">
      <div  className="websites_matrix_container">
      <h3 className="websites_titles">WEBSITES</h3>
         {matrixMargins.map((margins, index) => <span style={{marginLeft:`${margins}px`, animationDelay: `${index * 0.2}s`}} key={margins}>{matrix.map((number) => <p>{number}</p>)}</span>
         )}
      </div>

{/* another section */}          
   
        <div className="websites_white_text_contianer">
        <h1>Website de succes</h1>
        <p>În era digitală, prezența online a afacerii tale este esențială pentru a atrage și reține clienți. Echipa noastră îți oferă soluții complete de dezvoltare web, de la design personalizat până la optimizare pentru performanță și suport continuu. Indiferent de nevoile tale, creăm website-uri care impresionează vizitatorii și generează rezultate reale.</p>
        </div>

        <div className="websites_first_parallax website_computer_parallax">
           <div className="website_ceata"></div> 
           <h3 className="websites_titles">WEBSITEURI UNICE</h3>
        </div>

        <div className="websites_green_text_contianer">
          <h1>Website care impresioneaza</h1>
          <p>Ne specializăm în designul de website-uri personalizate care reflectă identitatea brandului tău și se adaptează nevoilor tale specifice. Fie că ai nevoie de un site simplu și elegant sau de o platformă complexă, echipa noastră asigură un design unic, o experiență de utilizare captivantă și o funcționalitate fără cusur, care îți vor pune afacerea în evidență online.</p>
        </div>

        <div className="websites_first_parallax website_computer_parallax" style={{backgroundImage: `url(${require("../../assets/images/websites/website_circuit.jpg")})`}}>
        <div className="website_ceata"></div>
           <h3 className="websites_titles">Optimizare & Performanță</h3>
        </div>

        <div className="websites_white_text_contianer">
        <h1>Optimizare si SEO</h1>
        <p>Website-urile noastre sunt construite având în vedere performanța și optimizarea pentru motoarele de căutare (SEO), asigurând timpi de încărcare rapizi și o clasare mai bună pe Google și alte motoare de căutare. Cu ajutorul nostru, website-ul tău nu doar va arăta bine, ci va și performa eficient, atrăgând mai mult trafic și generând rezultate mai bune pentru afacerea ta.</p>
      </div>

        <div className="websites_forth_parallax website_computer_parallax" style={{backgroundImage: `url(${require("../../assets/images/websites/websites_servers.jpg")})`}}>
        <div className="website_ceata"></div>
           <h3 className="websites_titles">UPDATEURI</h3>
        </div>

        
        <div className="websites_green_text_contianer">
        <h1>Suport & mentenanta</h1>
        <p>Nu ne limităm doar la crearea de website-uri; ne asigurăm că acestea rămân actualizate și funcționează fără probleme. Serviciile noastre includ actualizări periodice, mentenanță și gestionarea domeniilor personalizate. Astfel, tu te poți concentra pe dezvoltarea afacerii tale, în timp ce noi ne ocupăm de tot ceea ce ține de website-ul tău.</p>        
        </div>


        <div className="websites_button_container">
        <Link to="/contact" className="websites_button" aria-label="contact">CERE OFERTA</Link>
        </div>

      </div>
  )
}
export default HomeWebsites