import "./Marketing.css"
import { lazy } from "react"
const ReusableComponent = lazy(() => import("../ReusableComponent/ReusableComponent"))


const HomeMarketing = () => {

  return (
   <ReusableComponent />
  )
}

export default HomeMarketing