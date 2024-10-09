import "./Privacy.css"
import { useTranslation } from 'react-i18next'

const Privacy = () => {
    const [t] = useTranslation("global")

  return (
    <div className='privacy_container'>
        <h1>{t("privacy_title")}</h1>
        <h2>{t("privacy_title1")}</h2>
        <p>{t("privacy_text1")}</p>
        <h2>{t("privacy_title2")}</h2>
        <p>{t("privacy_text2")}</p>
        <h2>{t("privacy_title3")}</h2>
        <p>{t("privacy_text3")}</p>
        <h2>{t("privacy_title4")}</h2>
        <p>{t("privacy_text4")}</p>
        <h2>{t("privacy_title5")}</h2>
        <p>{t("privacy_text5")}</p>
        <h2>{t("privacy_title6")}</h2>
        <p>{t("privacy_text6")}</p>
        <h2>{t("privacy_title7")}</h2>
        <p>{t("privacy_text7")}</p>
        <h2>{t("privacy_title8")}</h2>
        <p>{t("privacy_text8")}</p>
        <h2>{t("privacy_title9")}</h2>
        <p>{t("privacy_text9")}</p>

    </div>
  )
}

export default Privacy