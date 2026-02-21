export default function Button ({func, children, type="submit"}) {

    return(
        <button type={type} onClick={func} className="button">
        {children}
        </button>
    )
}