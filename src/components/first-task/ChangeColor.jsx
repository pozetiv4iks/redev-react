import { useState } from "react";

export default function ChangeColor () {
    const [color, setColor] = useState("black");
    
    return (
        <>
            <div style={`color:${color}`}>Color</div>
        </>
    )
}