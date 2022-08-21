import React, {useState} from 'react'

type State = {
    password: string;
    clicked: boolean;
    validated: boolean;
}
//! DOM을 꼭 사용해야되는 순간(ref)
// 특정 돔에 포커스 
// 스크롤 박스 조작
// Canvas 요소에 그림 그리기

export function Validation() {
    const [state, setState] = useState<State>({
        password: "",
        clicked: false,
        validated: false
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
        console.log(state);
        console.log(1);
    }

    const handleButtonClick = (e: React.MouseEvent) => {
        setState({
            ...state,
            clicked: true,
            validated: state.password === "0000"
        })
        console.log(state);
    }

    return (
        <div>
            <input type="password" name="password" placeholder='Type here' value={state.password} onChange={handleChange}
            className={state.clicked ? (state.validated? "success":"failure") : ""}/>
            <button onClick={handleButtonClick}>Check</button>
        </div>
    )
}