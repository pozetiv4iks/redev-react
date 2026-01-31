import { useEffect, useState } from "react";
import getDogs, { allBreeds } from "../services/get-dogs";
import DogsCard from "./DogsCard";

export default function DogsComponent() {
  const [upload, setUpload] = useState(0);
  const [imgNum, setImgNum] = useState(3);
  const [data, setData] = useState([]);
  const [selectedValue, setSelectedValue] = useState();
  const [attributes, setAttributes] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBreeds();
  });

  useEffect(() => {
    fetchDogs(imgNum, selectedValue);
    setUpload((upload) => upload + 1);
  }, [selectedValue]);

  const fetchDogs = async (num, breed) => {
    setLoading(true);
    try {
      const response = await getDogs(num, breed);
      setData(response.message);
    } catch (error) {
      console.error(error.name);
    } finally {
      setLoading(false);
    }
  };

  const fetchBreeds = async () => {
    try {
      const response = await allBreeds();
      setAttributes(response.message);
    } catch (error) {
      console.error(error.name);
    }
  };

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleImgNumChange = (event) => {
    const value = parseInt(event.target.value);
    if (value >= 1 && value <= 50) {
      setImgNum(value);
    }
  };

  const handleRefresh = () => {
    fetchDogs(imgNum, selectedValue);
    setUpload((prev) => prev + 1);
  };

  return (
    <>
      <div>
        <h2>Галерея собак</h2>
        <p>Картинки обновлены {upload} раз(а)</p>

        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="imgNumInput">Количество картинок (1-50): </label>
          <input
            id="imgNumInput"
            type="number"
            min="1"
            max="50"
            value={imgNum}
            onChange={handleImgNumChange}
            style={{
              width: "60px",
              padding: "5px",
              margin: "0 10px",
            }}
          />

          <button
            onClick={handleRefresh}
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
            onChange={handleSelectChange}
            style={{
              padding: "5px",
              minWidth: "200px",
            }}
          >
            <option value="">Все породы</option>
            {Object.keys(attributes).map((breed, idx) => (
              <option key={idx} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </div>

        {loading ? (
          <div>
            Загрузка...
          </div>
        ) : (
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
        )}
      </div>
    </>
  );
}
