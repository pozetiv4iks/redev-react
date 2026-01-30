import { useState } from "react"

export default function HiddenText(){
    const [visibility, setVisibility] = useState(true)
    return(
        <>
        <div style={`overflow: ${visibility ? "visible" : "hidden"}`}>Видно</div>
        <button onClick={visibility => setVisibility(!visibility)}>Поменять видимость</button>
        </>
    )
}