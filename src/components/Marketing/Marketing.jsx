import "./Marketing.css"
import { MdOutlinePhonelink } from "react-icons/md"
import WhiteBackground from "../../assets/images/home_marketing_white_backgorund.jpg"

const HomeMarketing = () => {
  return (
    <div className="homeMarketing_container" style={{backgroundImage: `url(${WhiteBackground})`}}>
      <div className="homeMarketing_text">
        <span>
          <h1>Marketing</h1>
          <MdOutlinePhonelink  />
        </span>
        <p>Într-o lume evoluțională, marketing-ul eficient este cheia succesului oricărei afaceri. Dacă dorești să îți crești vizibilitatea, să atragi mai mulți clienți și să îți consolidezi brand-ul, noi suntem partenerul ideal pentru tine. Hai să îți arătăm cum putem transforma visul tău în realitate cu ajutorul serviciilor noastre de marketing.</p>
        <button>AFLA MAI MULTE</button>
      </div>
    </div>
  )
}

export default HomeMarketing