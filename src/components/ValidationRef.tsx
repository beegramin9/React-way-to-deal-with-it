import React, {useState, useRef} from 'react'

type Props = {}

export function ValidationRef({}: Props) {
  const [state, setState] = useState({
    password:"",
    clicked:false,
    validated:false,
  });
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name] : e.target.value
    })
  }
  const handleButtonClick = (e) => {
    setState({
      ...state,
      clicked: true,
      validated: state.password === "0000"
    })
  }
  const inputRef = useRef(null);

  return (
    <div>
      <input type="password" name="password" placeholder='Type here' value={state.password} onChange={handleChange}
      className={state.clicked ? (state.validated? "success":"failure") : ""}/>
      <button onClick={handleButtonClick}>
        Check
      </button>
    </div>
  )
}