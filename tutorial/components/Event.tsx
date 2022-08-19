import React, {useState} from 'react';

type Data = {
    username: string;
    message: string;
}


export function Event() {
    const [data, setData] = useState<Data>({
        username: "",
        message: ""
    });

  //* SyntheticEvent: 브라우저의 네이티브 이벤트를 감싸는 객체, 인터페이스가 같으므로 순수 JS 이벤트처럼 사용가능
  //! 단, 순수 이벤트와 달리 이벤트가 끝나고 나면 이벤트가 초기화되므로 정보를 참조할 수 없다
  //! .5초 뒤에 e 객체를 참조하면 내부 모든 값이 비워진 e를 받게 된다
  //* 비동기적으로 이벤트 객체를 참조할 일이 있다면 e.persist() 함수를 호출해줘야 한다
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value, data);
    //! Computed property를 이용한 여러개 input의 state를 관리하기
    setData( {...data,
        [e.target.name]: e.target.value
        });
    }

  const handleClick = (e?: React.MouseEvent) => {
    alert(data.message);
    setData({
        username: "",
        message: ""
    });
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if(e.key === "Enter") {
        handleClick();
    }
  }

  return (
    <div>
        <input type="text" name="message" placeholder='Type here' value={data.message} onChange={handleChange}/>
        <input type="text" name="username" placeholder='Type here' value={data.username} onChange={handleChange} onKeyPress={handleKeyPress}/>
        <button onClick={handleClick}>Check</button>
    </div>
  )
}