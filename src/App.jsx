import { useState, useEffect } from "react";
import getData from "./components/api";
import HitungData from "./components/wsm";
import AddData from "./components/addData";
import EditBobot from "./components/editBobot";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import getBobot from "./components/bobot";

function App() {
  const [resultData, setData] = useState([]);
  const [resultBobot, setBobot] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [loadingBobot, setLoadingBobot] = useState(true);

  useEffect(() => {
    getData().then((result) => {
      setData(result);
      setLoadingData(false);
    });
  }, []);

  useEffect(() => {
    getBobot().then((result) => {
      setBobot(result);
      setLoadingBobot(false);
    });
  }, []);

  if (loadingData || loadingBobot) {
    return <div>Data sedang diproses....</div>;
  }

  const DispData = () => {
    let nomor = 1;
    return resultData.map((data, i) => {
      return (
        <tr key={i} className="h-7 odd:bg-slate-800 even:bg-slate-700 hover:bg-slate-600">
          <td className="p-2 pl-6">{nomor++}</td>
          <td className="p-2 ">{data.brand}</td>
          <td className="p-2">{data.model}</td>
          <td className="p-2 text-center">{data.layar}</td>
          <td className="p-2 text-center">{data.prosesor}</td>
          <td className="p-2 text-center">{data.kamera}</td>
          <td className="p-2 text-center">{data.baterai}</td>
        </tr>
      );
    });
  };

  return (
    <>
      <table className="mx-auto m-10 w-2/3 text-sm text-left text-gray-500 dark:text-gray-400 rounded-lg">
        <thead className="text-xs text-slate-100 uppercase bg-slate-950">
          <tr className="h-9">
            <th className="p-2 pl-6">No.</th>
            <th className="p-2">Brand</th>
            <th className="p-2">Model</th>
            <th className="p-2 text-center">Layar</th>
            <th className="p-2 text-center">Prosesor</th>
            <th className="p-2 text-center">Kamera</th>
            <th className="p-2 text-center">Bateria</th>
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
          <HitungData data={resultData} bobot={resultBobot} />
        </tbody>
      </table>
    </>
  );
}

export default App;
