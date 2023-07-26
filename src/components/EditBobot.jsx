import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

function Update() {
  const [nama, setNama] = useState("");
  const [nilai, setNilai] = useState("");
  const [id, setID] = useState(null);

  const [isUpdateSuccessful, setIsUpdateSuccessful] = useState(null);

  const updateBobot = async (id) => {
    try {
      await axios.put(`https://648afd5417f1536d65ea15b8.mockapi.io/api/bobot/${id}`, {
        nama,
        nilai,
      });

      setIsUpdateSuccessful(true);
      Toastify({
        text: "Berhasil Update",
        duration: 1000,
        position: "center",
      }).showToast();
    } catch (error) {
      setIsUpdateSuccessful(false);
      Toastify({
        text: "Gagal Update",
        duration: 1000,
        position: "center",
        style: {
          background: "red",
        },
      }).showToast();
    }
  };

  console.log(id);

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setNama(localStorage.getItem("Nama"));
    setNilai(localStorage.getItem("Nilai"));
  }, []);

  const handleUpdate = async (event) => {
    event.preventDefault();
    updateBobot(id);
  };

  return (
    <>
      <div className="w-3/4 mx-auto flex justify-center items-center h-full">
        <form className="bg-slate-800 px-14 py-5 my-8 rounded-lg uppercase w-1/2 shadow-md shadow-purple-300" id="form">
          <h1 className="text-center text-neutral-100 font-semibold mb-8">Masukkan Bobot</h1>
          <div className="mb-4">
            <label htmlFor="kriteria" className="block text-neutral-100 text-sm mb-2 font-medium">
              Kriteria
            </label>
            <input
              type="text"
              name="kriteria"
              id="kriteria"
              placeholder="Nama"
              value={nama}
              disabled={true}
              className="rounded bg-slate-500 focus:bg-slate-200 py-2 px-3 uppercase text-xs w-full font-medium focus:outline-none focus:ring focus:ring-violet-400"
              onChange={(e) => setNama(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="nilai" className="block text-neutral-100 text-sm mb-2 font-medium">
              Nilai
            </label>
            <input
              type="number"
              name="nilai"
              id="nilai"
              value={nilai}
              step="0.01"
              className="rounded bg-slate-200 focus:bg-slate-100 py-2 px-3 uppercase text-xs w-full font-medium focus:outline-none focus:ring focus:ring-violet-400"
              onChange={(e) => setNilai(parseFloat(e.target.value))}
            />
          </div>
          <div className="flex justify-end gap-4">
            <Link to={"/bobot"}>
              <button className="text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 duration-200">Kembali</button>
            </Link>
            <button className="text-white bg-green-500 hover:bg-green-600 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 duration-200" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Update;
