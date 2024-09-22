import "./Help.css"
import help from "../../assets/images/artech_help_img.webp"
import { lazy, useEffect, useState } from "react"
import questionsData from "../../assets/questionsData"

const Question = lazy(() => import("../../components/Question/Question"))
 

const Help = () => {
  const [opacity, setOpacity] = useState(null)

// scroll to top
useEffect(() => {
  window.scrollTo(0, 0)
}, [])
  useEffect(( ) => {
 const handleScroll = (() => {
  if(window.innerWidth >= 1000){
   setOpacity(document.body.scrollHeight / 1.6 <= window.scrollY)
  }else{
    setOpacity(false)
  }
})

    window.addEventListener("scroll", handleScroll)
   
    return() => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

 
  return (
    <div className="help_container">

      <div className="help_question_title">
        <h1>Gaseste o intrebare</h1>
        <h2>BRANDING</h2>
        {questionsData.slice(0, 8).map((question, index) => <Question key={index} question={question.question} answer={question.answer} color={index}/>)}

        <h2 className="help_title_spacing">WEB DEVELOPMENT</h2>
        {questionsData.slice(8, 17).map((question, index) => <Question key={index} question={question.question} answer={question.answer} color={index}/>)}

        <h2 className="help_title_spacing">MARKETING</h2>
        {questionsData.slice(17, 27).map((question, index) => <Question key={index} question={question.question} answer={question.answer} color={index}/>)}
      </div>
 
     <div className="help_img_container">
      <img src={help} alt="help" className={`${opacity ? "help_img_dissapear" : "help_img_appear"}`}/>
     </div>
    </div>
  )
}

export default Help