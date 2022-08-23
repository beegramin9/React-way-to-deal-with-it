import React, {useState} from 'react'

type Props = {}

export function Button({}: Props) {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("Hi");
  const onClickExit = () => setMessage("Bye");
  //* div, button, input, form등의 DOM 엘레먼트에는 이벤트를 설정할 수 있지만
  //* 직접 만든 컴포넌트는 자체적으로 이벤트를 설정할 수 없다
  //* MyComponent에 onClick를 설정하면, 이벤트를 설정하는것이 아니라 props를 전달하는 것
  //! 단, 전달한 props를 렌더되는 dom에 propagate down할 수 있습니다
  return (
    <div>
      <button onClick={onClickEnter}>Enter</button>          
      <button onClick={onClickExit}>Exit</button>          
    </div>
  )
}