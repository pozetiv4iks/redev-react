import { useEffect, useState } from "react";
import getDogs, { allBreeds } from "../services/get-dogs";
import Control from "./Control";
import DogsGallery from "./DogsGallery";

export default function DogsComponent() {
  const [upload, setUpload] = useState(0);
  const [imgNum, setImgNum] = useState(3);
  const [data, setData] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
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

        <Control
          imgNum={imgNum}
          onImgNumChange={handleImgNumChange}
          onRefresh={handleRefresh}
          selectedValue={selectedValue}
          onSelectChange={handleSelectChange}
          attributes={attributes}
        />

        {loading ? (
          <div>Загрузка...</div>
        ) : (
          <DogsGallery data={data} />
        )}
      </div>
    </>
  );
}
