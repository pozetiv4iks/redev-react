export default function Control({
  imgNum,
  onImgNumChange,
  onRefresh,
  selectedValue,
  onSelectChange,
  attributes,
}) {
  return (
    <>
      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="imgNumInput">Количество картинок (1-50): </label>
        <input
          id="imgNumInput"
          type="number"
          min="1"
          max="50"
          value={imgNum}
          onChange={onImgNumChange}
          style={{ padding: "5px", margin: "0 10px" }}
        />
        <button
          onClick={onRefresh}
          style={{
            padding: "8px 16px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Обновить
        </button>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="breedSelect">Выберите породу: </label>
        <select
          id="breedSelect"
          value={selectedValue}
          onChange={onSelectChange}
          style={{ padding: "5px", minWidth: "200px" }}
        >
          <option value="">Все породы</option>
          {Object.keys(attributes).map((breed, idx) => (
            <option key={idx} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
