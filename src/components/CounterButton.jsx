import { memo } from "react"

function CounterButton({func}) {
    console.log("rerender buttom");
    
    return(
        <button onClick={func}>+1</button>
    )
}


export default memo(CounterButton)