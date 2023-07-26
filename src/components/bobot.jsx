import React from "react";
import { useEffect, useState } from "react";
import getBobot from "./bobot_api";
import { Link } from "react-router-dom";

function EditBobot() {
  const [bobot, setBobot] = useState([]);

  useEffect(() => {
    getBobot().then((result) => {
      setBobot(result);
    });
  }, []);

  const setData = (data) => {
    let { id, name, nilai } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("Nama", name);
    localStorage.setItem("Nilai", nilai);
  };

  const DispBobot = () => {
    let nomor = 1;
    return bobot.map((data, i) => {
      return (
        <tr key={i} className="h-7 odd:bg-slate-800 even:bg-slate-700 hover:bg-slate-600">
          <td className="p-2 pl-6">{nomor++}</td>
          <td className="p-2 uppercase">{data.name}</td>
          <td className="p-2 pl-6">{data.nilai}</td>
          <td className="py-3">
            <Link to={"/update"}>
              <button onClick={() => setData(data)} className="text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm px-2 py-2 mb-2 duration-200">
                Update
              </button>
            </Link>
          </td>
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
            <th className="p-2">Kriteria</th>
            <th className="p-2">Bobot</th>
            <th className="p-2">Update</th>
          </tr>
        </thead>
        <tbody>
          <DispBobot />
        </tbody>
      </table>
      <div className="flex justify-end w-2/3 mx-auto">
        <Link to="/hasil">
          <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
            Kembali
          </button>
        </Link>
      </div>
    </>
  );
}

export default EditBobot;
