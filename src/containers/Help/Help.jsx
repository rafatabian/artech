import "./Help.css"
import help from "../../assets/images/artech_help.webp"
import { lazy } from "react"
import questionsData from "../../assets/questionsData"

const Question = lazy(() => import("../../components/Question/Question"))


const Help = () => {

 
  return (
    <div className="help_container">

      <div className="help_question_title">
        <h1>Gaseste o intrebare</h1>
        <h2>BRANDING</h2>
        {questionsData.slice(0, 8).map((question, index) => <Question key={index} question={question.question} answer={question.answer}/>)}

        <h2>WEB DEVELOPMENT</h2>
        {questionsData.slice(8, 17).map((question, index) => <Question key={index} question={question.question} answer={question.answer}/>)}

        <h2>MARKETING</h2>
        {questionsData.slice(17, 27).map((question, index) => <Question key={index} question={question.question} answer={question.answer}/>)}
      </div>
 
 {/* make sure img is always in the center for example if questions are 200vh image will be at 100vh from the top */}
     <div className="help_img_container">
      <img src={help} alt="help"/>
     </div>
    </div>
  )
}

export default Help