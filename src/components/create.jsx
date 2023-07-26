import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

function Create() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [harga, setHarga] = useState("");
  const [layar, setLayar] = useState("");
  const [prosesor, setProsesor] = useState("");
  const [kamera, setKamera] = useState("");
  const [baterai, setBaterai] = useState("");

  const submitData = (event) => {
    event.preventDefault();
    const formElement = document.getElementById("form");
    try {
      axios.post("https://648afd5417f1536d65ea15b8.mockapi.io/api/data", {
        brand,
        model,
        layar,
        prosesor,
        kamera,
        baterai,
        harga,
      });
      Toastify({
        text: "Berhasil Ditambahkan",
        duration: 1000,
        position: "center",
      }).showToast();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="w-3/4 mx-auto flex justify-center items-center h-full">
        <form className="bg-slate-800 px-14 py-5 my-8 rounded-lg uppercase w-1/2 shadow-md shadow-purple-300" id="form">
          <h1 className="text-center text-neutral-100 font-semibold mb-8">Masukkan Data</h1>
          <div className="mb-4">
            <label htmlFor="brand" className="block text-neutral-100 text-sm mb-2 font-medium">
              Brand
            </label>
            <input
              type="text"
              name="brand"
              id="brand"
              className="rounded bg-slate-500 focus:bg-slate-200 py-2 px-3 uppercase text-xs w-full font-medium focus:outline-none focus:ring focus:ring-violet-400"
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="model" className="block text-neutral-100 text-sm mb-2 font-medium">
              Model
            </label>
            <input
              type="text"
              name="model"
              id="model"
              className="rounded bg-slate-500 focus:bg-slate-200 py-2 px-3 uppercase text-xs w-full font-medium focus:outline-none focus:ring focus:ring-violet-400"
              onChange={(e) => setModel(e.target.value)}
            />
          </div>
          <div className="mb-10">
            <label htmlFor="harga" className="block text-neutral-100 text-sm mb-2 font-medium">
              Harga
            </label>
            <input
              type="text"
              name="harga"
              id="harga"
              className="rounded bg-slate-500 focus:bg-slate-200 py-2 px-3 uppercase text-xs w-full font-medium focus:outline-none focus:ring focus:ring-violet-400"
              onChange={(e) => setHarga(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="layar" className="block text-neutral-100 text-sm mb-2 font-medium">
              Nilai Layar
            </label>
            <input
              type="number"
              name="layar"
              id="layar"
              step="0.01"
              className="rounded bg-slate-500 focus:bg-slate-200 py-2 px-3 uppercase text-xs w-full font-medium focus:outline-none focus:ring focus:ring-violet-400"
              onChange={(e) => setLayar(parseFloat(e.target.value))}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="prosesor" className="block text-neutral-100 text-sm mb-2 font-medium">
              Nilai Prosesor
            </label>
            <input
              type="number"
              name="prosesor"
              id="prosesor"
              step="0.01"
              className="rounded bg-slate-500 focus:bg-slate-200 py-2 px-3 uppercase text-xs w-full font-medium focus:outline-none focus:ring focus:ring-violet-400"
              onChange={(e) => setProsesor(parseFloat(e.target.value))}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="layar" className="block text-neutral-100 text-sm mb-2 font-medium">
              Nilai Kamera
            </label>
            <input
              type="number"
              name="kamera"
              id="kamera"
              step="0.01"
              className="rounded py-2 bg-slate-500 focus:bg-slate-200 px-3 uppercase text-xs w-full font-medium focus:outline-none focus:ring focus:ring-violet-400"
              onChange={(e) => setKamera(parseFloat(e.target.value))}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="layar" className="block text-neutral-100 text-sm mb-2 font-medium">
              Nilai Baterai
            </label>
            <input
              type="number"
              name="baterai"
              id="baterai"
              step="0.01"
              className="rounded py-2 bg-slate-500 focus:bg-slate-200 px-3 uppercase text-xs w-full font-medium focus:outline-none focus:ring focus:ring-violet-400"
              onChange={(e) => setBaterai(parseFloat(e.target.value))}
            />
          </div>

          <div className="flex justify-end gap-4">
            <div>
              <Link to={"/hasil"}>
                <button type="button" className="text-white bg-sky-700 hover:bg-sky-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 duration-200">
                  Kembali
                </button>
              </Link>
            </div>
            <button type="submit" className="text-white bg-green-500 hover:bg-green-600 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 duration-200" onClick={submitData}>
              Tambah
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Create;
