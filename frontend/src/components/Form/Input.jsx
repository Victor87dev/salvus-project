import "./Input.css"

const Input = ({ type, text, name, placeholder, handleOnChange, value })=>{
  return(
    <div className="form_control">
        <label htmlFor={name}>{text}</label>
        <input className="input" type={type} name={name} id={name} placeholder={placeholder} onChange={handleOnChange} value={value}/>
    </div>
  )
}

export default Input