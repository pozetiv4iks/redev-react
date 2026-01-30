import { useState } from "react"

export default function Counter () {
    const [count, setCount] = useState(0)
    return (
        <>
        {count}
        <button onClick={() => setCount(count => count + 1)}>Увеличить</button>
        <button onClick={() => setCount(count => count - 1)}>Уменьшить</button>
        <button onClick={() => setCount(Math.floor(Math.random()*10))}>Увеличить</button>
        </>
    )
}