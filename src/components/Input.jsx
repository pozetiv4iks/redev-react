import { useState } from "react"

export default function Input() {
    const [value, setValue] = useState("")
    
    const handleClear = () => {
        setValue("") 
    }
    
    return (
        <div style={{ margin: "10px 0" }}>
            <input 
                type="text" 
                placeholder="Введите текст"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                style={{ marginRight: "10px", padding: "5px" }}
            />
            <button onClick={handleClear}>
                Очистить
            </button>
        </div>
    )
}