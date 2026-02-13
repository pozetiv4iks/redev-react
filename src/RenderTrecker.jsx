import { useEffect, useRef } from "react"

 const withRenderTracker = (HocCOMP) => {
    const count = useRef(1)
    console.log(`${HocCOMP.name} отрендерен ${count.current}`);

    useEffect(() => {
        count.current += 1
    }, [])
    
    return (props) => {
        return <HocCOMP {...props} />
    }
}

export default withRenderTracker