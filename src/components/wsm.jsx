import React from "react";

const HitungData = ({ data, bobot }) => {
  const hitungWSM = (data) => {
    const wsm = data.layar * bobot[0].nilai + data.prosesor * bobot[1].nilai + data.kamera * bobot[2].nilai + data.baterai * bobot[3].nilai;
    return wsm;
  };

  const sortedData = data.sort((a, b) => hitungWSM(b) - hitungWSM(a));
  let nomor = 1;

  return sortedData.map((result, i) => {
    return (
      <tr key={i} className="h-7 odd:bg-slate-800 even:bg-slate-700 hover:bg-slate-600">
        <td className="p-2 pl-7">{nomor++}</td>
        <td className="p-2">{result.brand}</td>
        <td className="p-2">{result.model}</td>
        <td className="p-2 pl-4">{hitungWSM(result)}</td>
      </tr>
    );
  });
};

export default HitungData;
