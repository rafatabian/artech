import { useEffect } from "react"
import "../privacy/Privacy.css"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

const Terms = () => {
  const [t] = useTranslation("global")

  // scroll to top when redirecting to this page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='privacy_container'>
        <h1>{t("terms_title")}</h1>
        <h2>{t("terms_title1")}</h2>
        <p>{t("terms_text1")}</p>
        <h2>{t("terms_title2")}</h2>
        <p>{t("terms_text2")}</p>
        <h2>{t("terms_title3")}</h2>
        <p>{t("terms_text3")}</p>
        <h2>{t("terms_title4")}</h2>
        <p>{t("terms_text4")}</p>
        <h2>{t("terms_title5")}</h2>
        <p>{t("terms_text5")}</p>
        <h2>{t("terms_title6")}</h2>
        <p>{t("terms_text6")}</p>
        <h2>{t("terms_title7")}</h2>
        <p>{t("terms_text7")}</p>
        <h2>{t("terms_title8")}</h2>
        <p>{t("terms_text8")}</p>
        <h2>{t("terms_title9")}</h2>
        <p>{t("terms_text9")} <Link to="/privacy" className="privacy_policy_link">Privacy Policy</Link></p>
        <h2>{t("terms_title10")}</h2>
        <p>{t("terms_text10")}</p>

    </div>
  )
}

export default Terms