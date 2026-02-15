export default function Modal({ data, func }) {
  function handleClose() {
    func(false);
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 15,
        backgroundColor:'#000000'
      }}
    >
      <div
        style={{
          padding: "30px",
          borderRadius: "10px",
          maxWidth: "500px",
          width: "90%",
          maxHeight: "80vh",
          overflow: "auto",
        }}
      >
        <div
          style={{
            padding: "15px",
            borderRadius: "5px",
            margin: "20px 0",
            overflow: "auto",
          }}
        >
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>

        <button onClick={handleClose}>Закрыть</button>
      </div>
    </div>
  );
}
