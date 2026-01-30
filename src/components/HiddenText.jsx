import { useState } from "react"

export default function HiddenText() {
    const [visibility, setVisibility] = useState(true)
    
    return (
        <>
           {visibility && (<div style={{ overflow: visibility ? "visible" : "hidden" }}>
                Тута
            </div>)}
            <button onClick={() => setVisibility(!visibility)}>
                {visibility ? "Скрыть текст" : "Показать текст"}
            </button>
        </>
    )
}