import { useEffect, useState } from "react"
import React from "react"
import "./HomeWebsites.css"
import homePrevProject  from "../../assets/images/home_show_prevous_project.webp"
import { GiWireframeGlobe } from "react-icons/gi"

const HomeWebsites = React.forwardRef((props, ref) => {
    const [matrix, setMatrix] = useState([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1])
    const [a, setA] = useState(253)
    const [b, setB] = useState(5)
    const [c, setC] = useState(517)
    const [d, setD] = useState(448)
    const [e, setE] = useState(145)
    const [f, setF] = useState(846)
    const [g, setG] = useState(1246)
    const [h, setH] = useState(1241)
    const [i, setI] = useState(295)

    // TO DO add some default dinamic margins based on the device width to a,b,c,d, etc...

// changing matrix number
    useEffect(() => {
        setTimeout(() => {
         setMatrix(matrix.map((number) => number === 1 ? 0 : 1))
        }, 400)
    }, [matrix])

//choosing random margins for matrix numbers
useEffect(() => {
    
    setTimeout(() => {setA(Math.floor(Math.random() * window.innerWidth))}, 5500)
    setTimeout(() => {setB(Math.floor(Math.random() * window.innerWidth))}, 6000)
    setTimeout(() => {setC(Math.floor(Math.random() * window.innerWidth))}, 6500)
    setTimeout(() => {setD(Math.floor(Math.random() * window.innerWidth))}, 7500)
    setTimeout(() => {setE(Math.floor(Math.random() * window.innerWidth))}, 8500)
    setTimeout(() => {setF(Math.floor(Math.random() * window.innerWidth))}, 10500)
    setTimeout(() => {setG(Math.floor(Math.random() * window.innerWidth))}, 13500)
    setTimeout(() => {setH(Math.floor(Math.random() * window.innerWidth))}, 15500)
    setTimeout(() => {setI(Math.floor(Math.random() * window.innerWidth))}, 13500)


}, [])

  return (
    <div className="homeWebsites_container" ref={ref}>
       <span style={{marginLeft:`${a}px`}}>{matrix.map((number) => <p>{number}</p>)}</span>
       <span style={{marginLeft:`${b}px`}}>{matrix.map((number) => <p>{number}</p>)}</span>
       <span style={{marginLeft:`${c}px`}}>{matrix.map((number) => <p>{number}</p>)}</span>
       <span style={{marginLeft:`${d}px`}}>{matrix.map((number) => <p>{number}</p>)}</span>
       <span style={{marginLeft:`${e}px`}}>{matrix.map((number) => <p>{number}</p>)}</span>
       <span style={{marginLeft:`${f}px`}}>{matrix.map((number) => <p>{number}</p>)}</span>
       <span style={{marginLeft:`${g}px`}}>{matrix.map((number) => <p>{number}</p>)}</span>
       <span style={{marginLeft:`${h}px`}}>{matrix.map((number) => <p>{number}</p>)}</span>
       <span style={{marginLeft:`${i}px`}}>{matrix.map((number) => <p>{number}</p>)}</span>

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
})
export default HomeWebsites