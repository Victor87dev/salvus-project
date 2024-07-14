import "./SubmitButton.css"

const SubmitButton = ({ text })=>{
  return(
    <div>
        <button className="btn">{text}</button>
    </div>
  )
}

export default SubmitButton