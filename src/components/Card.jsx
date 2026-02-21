export default function Card ({item}) {

    return(
        <div style={{marginBottom:'10px'}} className="block">
        {item.id} {item.text}
        </div>
    )
}