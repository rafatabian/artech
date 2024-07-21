import { useState } from "react"
import "./Question.css"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"


const Question = ({question, answer}) => {
    const [showQuestion, setShowQuestion] = useState(false)


  return (
    <div className="question_container" onClick={() => setShowQuestion(!showQuestion)}>
        <div>
            <div>
              <p>{question}</p>
              {showQuestion 
              ?<IoIosArrowUp/>
              :<IoIosArrowDown/>}
            </div>
        {showQuestion &&
        <div className="help_answer">
            <p>{answer}</p>
        </div>}
        </div>
       
        
    </div>
  )
}

export default Question