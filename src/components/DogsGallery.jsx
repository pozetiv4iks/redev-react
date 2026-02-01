import DogsCard from "./DogsCard"

export default function DogsGallery ({data}) {
    return (
        <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
            }}
          >
            {data.map((imageUrl, index) => (
              <DogsCard key={index} imageUrl={imageUrl} />
            ))}
          </div>
    )
}