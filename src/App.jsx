import { useState, useEffect } from "react";
import getData from "./components/api";
import HitungData from "./components/wsm";
import "./App.css";

function App() {
  const [resultData, setData] = useState([]);
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    getData().then((result) => {
      setData(result);
    });
  }, []);

  console.log(resultData);

  const DispData = () => {
    return resultData.map((data, i) => {
      return (
        <tr key={i} className="h-7 odd:bg-slate-800 even:bg-slate-700 hover:bg-slate-600">
          <td className="p-2 pl-6">{data.brand}</td>
          <td className="p-2">{data.model}</td>
          <td className="p-2 text-center">{data.prosesor}</td>
          <td className="p-2 text-center">{data.baterai}</td>
          <td className="p-2 text-center">{data.layar}</td>
          <td className="p-2 text-center">{data.kamera}</td>
        </tr>
      );
    });
  };

  return (
    <>
      <table className="mx-auto m-10 w-2/3 text-sm text-left text-gray-500 dark:text-gray-400 rounded-lg">
        <thead className="text-xs text-slate-100 uppercase bg-slate-950">
          <tr className="h-9">
            <th className="p-2 pl-6">Brand</th>
            <th className="p-2">Model</th>
            <th className="p-2 text-center">Prosesor</th>
            <th className="p-2 text-center">Baterai</th>
            <th className="p-2 text-center">Layar</th>
            <th className="p-2 text-center">Kamera</th>
          </tr>
        </thead>
        <tbody>
          <DispData />
        </tbody>
      </table>
      <table className="mx-auto m-10 w-2/3 text-sm text-left text-gray-500 dark:text-gray-400 rounded-lg">
        <thead className="text-xs text-slate-100 uppercase bg-slate-950">
          <tr className="h-9">
            <th className="p-2 pl-6">No.</th>
            <th className="p-2">Brand</th>
            <th className="p-2">Model</th>
            <th className="p-2">Nilai</th>
          </tr>
        </thead>
        <tbody>
          <HitungData data={resultData} />
        </tbody>
      </table>
    </>
  );
}

export default App;
