import { memo } from "react"

function SearchInput({func}) {
    
    const handleOnChange = (e) => {
        func(e.target.value)
    }

    return(
        <input onChange={e => handleOnChange(e)} style={{border:"1px solid #ffffff", marginBottom:'10px'}} type="text" />
    )
}


export default memo(SearchInput)