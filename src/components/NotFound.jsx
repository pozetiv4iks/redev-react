import { Link } from "react-router";

export default function NotFound () {

    return(
        <>
        404
        <Link to= {{pathname:"/todo"}}>На главную</Link>
        </>
    )
}