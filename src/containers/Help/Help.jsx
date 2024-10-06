import "./Help.css"
import help from "../../assets/images/artech_help_img.webp"
import { lazy, useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"

const Question = lazy(() => import("../../components/Question/Question"))
 

const Help = () => {
  const [opacity, setOpacity] = useState(null)
  const [t] = useTranslation("global")



  // questions data
  const questionsData = [
    {question: t("help_branding_1")[0],
     answer: t("help_branding_1")[1],
    },
    {question: t("help_branding_2")[0],
     answer: t("help_branding_2")[1]
    },
    {question:t("help_branding_3")[0],
     answer:t("help_branding_3")[1]
    },
    {question: t("help_branding_4")[0],
     answer: t("help_branding_4")[1]
    },
    {question: t("help_branding_5")[0],
     answer: t("help_branding_5")[1]
    },
    {question: t("help_branding_6")[0],
    answer: t("help_branding_6")[1]
    },
    {question: t("help_branding_7")[0],
    answer: t("help_branding_7")[1]
    },
    {question: t("help_branding_8")[0],
    answer: t("help_branding_8")[1]
    },
    {question: t("help_websites_1")[0],
    answer: t("help_websites_1")[1]
    },
    {question: t("help_websites_2")[0],
    answer: t("help_websites_2")[1]
    },
    {question: t("help_websites_3")[0],
    answer: t("help_websites_3")[1]
    },
    {question:  t("help_websites_4")[0],
    answer: t("help_websites_4")[1]
    },
    {question: t("help_websites_5")[0],
    answer: t("help_websites_5")[1]
    },
    {question: t("help_websites_6")[0],
    answer: t("help_websites_6")[1]
    },
    {question: t("help_websites_7")[0],
    answer: t("help_websites_7")[1]
    },
    {question: t("help_websites_8")[0],
     answer:t("help_websites_8")[1]
    },
    {question: t("help_websites_9")[0],
     answer:t("help_websites_9")[1]
    },
    {question: t("help_marketing_1")[0],
     answer: t("help_marketing_1")[1]
    },
    {question: t("help_marketing_2")[0],
     answer: t("help_marketing_2")[1]
    },
    {question: t("help_marketing_3")[0],
    answer:t("help_marketing_3")[1]
    },
    {question: t("help_marketing_4")[0],
     answer: t("help_marketing_4")[1]
    },
    {
      question: t("help_marketing_5")[0],
      answer: t("help_marketing_5")[1]
    },
    {
      question: t("help_marketing_6")[0],
      answer: t("help_marketing_6")[1]
    },
    {
      question: t("help_marketing_7")[0],
      answer: t("help_marketing_7")[1]
    },
    {
      question: t("help_marketing_8")[0],
      answer: t("help_marketing_8")[1]
    },
    {
      question: t("help_marketing_9")[0],
      answer: t("help_marketing_9")[1]
    },
    {
      question: t("help_marketing_10")[0],
      answer: t("help_marketing_10")[1]
    }
    
]

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
    <>
     <Helmet>
      <title>Ajutor</title>
      <meta name="description" content="Aici gasesti intrebarile frecvente de care ai nevoie. Brading, websites, marketing, pachete si altele."/>
      <link rel="canonical" href="https://artech-agency.co/#/help"/>
    </Helmet>
    <div className="help_container">

      <div className="help_question_title">
        <h1>{t("help_title")}</h1>
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
    </>
  )
}

export default Help