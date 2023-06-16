import React from "react";

const HitungData = ({ data }) => {
  const calculateWSM = (data) => {
    // Lakukan perhitungan WSM pada data di sini
    const wsm = data.layar * 0.25 + data.kamera * 0.25 + data.prosesor * 0.25 + data.baterai * 0.25; // Rumus perhitungan WSM
    console.log({ wsm: wsm });
  };

  return (
    <div>
      <h2>Data WSM:</h2>
      <ul className="text-white">
        {data.map((data, i) => (
          <li key={i}>
            {data.nama} - WSM: {calculateWSM(data)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HitungData;
