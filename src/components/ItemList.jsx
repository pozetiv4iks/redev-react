import { memo, useMemo } from "react";

function ItemList({data , value}) {
    console.log("rerender list");
    
    const filtredData = useMemo(() => {
        if(value === ''){
            return data
        }
        return data.filter((item) => JSON.stringify(item) === value)
    }, [value])

    
    return(
        <ol>
        {filtredData.map(item => 
            <li>{item}</li>
        )}
        </ol>
    )
}


export default memo(ItemList, (prevProps, nextProps) => {
    return prevProps.value === nextProps.value
})