import React, {useRef} from 'react'

type Props = {}

const style: React.CSSProperties = {
    border: '1px solid black',
    height: "300px",
    width: "300px",
    overflow: "auto",
    position: 'relative'
}

const innerStyle = {
    width: "100%",
    height: "605px",
    background: "linear-gradient(white, black)"
}

export function ScrollBoxRef({}: Props) {
    const scrollBoxRef = useRef<HTMLDivElement>(null!);
    
    const scrollToBottom = () => {
        const {scrollHeight, clientHeight} = scrollBoxRef.current;
        scrollBoxRef.current.scrollTop = scrollHeight - clientHeight;
    }
    return (
        <div style={style}
        ref={scrollBoxRef}>
        <button onClick={scrollToBottom}>To the bottom</button>
        <div style={innerStyle}></div>
    </div>
    )
}

