export default function DogsCard ({imageUrl}) {
    return (
        <div>
            <img src={imageUrl} alt="dog" style={{width: '250px'}}/>
            <p>dog</p>
        </div>
    )
}