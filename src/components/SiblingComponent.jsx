import { useState } from "react"

export default function SiblingComponent () {
    const [text, setText] = useState("Что-то")
    return(
        <>
        <div>{text}</div>
        <button onClick={() => setText("REDEV")}>Поменять текст</button>
        </>
    )
}