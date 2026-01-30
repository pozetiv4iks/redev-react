import { useState } from "react";

function ChangeColor () {
    const [TextColor, setTextColor] = useState("black");
    const getRandomColor = () => {
        const colors = ["red", "blue", "green", "purple"];
        return colors[Math.floor(Math.random() * colors.length)];
    };
    
    return (
        <>
            <div style={{color:TextColor}}>Color</div>
            <button onClick={() => setTextColor(getRandomColor())}>Смена цвета</button>
        </>
    )
}

export default ChangeColor