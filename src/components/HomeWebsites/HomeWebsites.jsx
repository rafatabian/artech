import { useEffect, useState } from "react"
import "./HomeWebsites.css"

const HomeWebsites = () => {
    const [matrix, setMatrix] = useState([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1])
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)
    const [c, setC] = useState(0)
    const [d, setD] = useState(0)
    const [e, setE] = useState(0)
    const [f, setF] = useState(0)
    const [g, setG] = useState(0)
    const [h, setH] = useState(0)
    const [i, setI] = useState(0)

// changing matrix number
    useEffect(() => {
        setTimeout(() => {
         setMatrix(matrix.map((number) => number === 1 ? 0 : 1))
        }, 400)
    }, [matrix])

//choosing random margins for matrix numbers
useEffect(() => {
    
    setInterval(() => {setA(Math.floor(Math.random() * window.innerWidth))}, 2000)
    setInterval(() => {setB(Math.floor(Math.random() * window.innerWidth))}, 4000)
    setInterval(() => {setC(Math.floor(Math.random() * window.innerWidth))}, 5000)
    setInterval(() => {setD(Math.floor(Math.random() * window.innerWidth))}, 5500)
    setInterval(() => {setE(Math.floor(Math.random() * window.innerWidth))}, 4500)
    setInterval(() => {setF(Math.floor(Math.random() * window.innerWidth))}, 3500)
    setInterval(() => {setG(Math.floor(Math.random() * window.innerWidth))}, 3200)
    setInterval(() => {setH(Math.floor(Math.random() * window.innerWidth))}, 4000)
    setInterval(() => {setI(Math.floor(Math.random() * window.innerWidth))}, 4500)
    
}, [])


  return (
    <div className="homeWebsites_container">
       <span style={{marginLeft:`${a}px`}}>{matrix.map((number) => <p>{number}</p>)}</span>
       <span style={{marginLeft:`${b}px`}}>{matrix.map((number) => <p>{number}</p>)}</span>
       <span style={{marginLeft:`${c}px`}}>{matrix.map((number) => <p>{number}</p>)}</span>
       <span style={{marginLeft:`${d}px`}}>{matrix.map((number) => <p>{number}</p>)}</span>
       <span style={{marginLeft:`${e}px`}}>{matrix.map((number) => <p>{number}</p>)}</span>
       <span style={{marginLeft:`${f}px`}}>{matrix.map((number) => <p>{number}</p>)}</span>
       <span style={{marginLeft:`${g}px`}}>{matrix.map((number) => <p>{number}</p>)}</span>
       <span style={{marginLeft:`${h}px`}}>{matrix.map((number) => <p>{number}</p>)}</span>
       <span style={{marginLeft:`${i}px`}}>{matrix.map((number) => <p>{number}</p>)}</span>
    </div>
  )
}

export default HomeWebsites