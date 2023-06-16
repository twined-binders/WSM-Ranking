import { useEffect, useState } from "react";
import getData from "./api";

const hitungData = () => {
  const [resultData, setData] = useState([]);

  useEffect(() => {
    getData().then((result) => {
      setData(result);
    });
  }, []);

  const weights = {
    layar: 0.25,
    prosesor: 0.25,
    kamera: 0.25,
    baterai: 0.25,
  };

  const newData = resultData.map((data) => {
    const score = data.layar * weights.layar + data.prosesor * weights.prosesor + data.kamera * weights.kamera + data.baterai * weights.baterai;

    return score;
  });
  return newData;
};

export default hitungData;
