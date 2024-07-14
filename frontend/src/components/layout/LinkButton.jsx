import { Link } from "react-router-dom"
import "./LinkButton.css"

const LinkButton = ({to, text}) => {
  return (
    <Link to={to}>
      {text}
    </Link>
  )
}

export default LinkButton