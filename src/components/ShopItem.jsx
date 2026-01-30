export default function ShopItem({ onUpdateCount, onRemove, cartItem }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "5px",
        border: "1px solid #ffffff",
        padding: "5px",
        alignItems:"center"
      }}
    >
      <span>
        {cartItem.title}(Кол-во: {cartItem.count})
      </span>
      <div style={{ display: "flex", gap: "3px" }}>
        <button onClick={() => onUpdateCount()}>+1</button>
        <button onClick={() => onRemove()}>Удалить</button>
      </div>
    </div>
  );
}
