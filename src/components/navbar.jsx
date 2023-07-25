import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="h-screen" id="mulai">
        <div className="flex justify-center items-center h-full flex-col gap-9">
          <h1 className="text-6xl text-neutral-100 font-bold">Website Perangkingan SmartPhone</h1>
          <div className="">
            <h2 className="text-6xl font-bold text-neutral-100">
              Dengan Metode <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-blue-400">WSM</span>
            </h2>
          </div>
          <div className="text-center mt-10">
            <Link to={"/hasil"}>
              <button className="bg-gradient-to-r from-sky-500 to-violet-500 px-8 py-4 font-semibold rounded-lg text-neutral-100 uppercase transition-all duration-300 hover:scale-105 hover:from-sky-400 hover:to-violet-400 hover:shadow-2xl hover:shadow-sky-300 hover:border hover:border-sky-100">
                Mulai
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-transparent to-violet-800 h-screen text-center">
        <div>
          <h1 className="text-4xl font-bold text-neutral-100">Apa itu WSM ?</h1>
        </div>
        <div className="mx-10 mt-16">
          <div className="bg-violet-700 px-10 rounded-lg h-44 flex items-center shadow-xl">
            <p class="text-xl text-neutral-100 text-justify">
              <span className="font-semibold">Weighted Sum Model (WSM)</span> adalah metode dalam pengambilan keputusan yang digunakan untuk mengevaluasi berbagai pilihan berdasarkan kriteria tertentu. Setiap pilihan dinilai berdasarkan
              bobot kriteria yang berbeda-beda sesuai dengan tingkat kepentingannya.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-violet-800 to-sky-700 h-screen text-center">
        <div>
          <h1 className="text-4xl font-bold text-neutral-100">Cara Kerja ?</h1>
        </div>
        <div className="mx-10 mt-16">
          <div className="bg-violet-700 px-10 rounded-lg h-44 flex items-center shadow-xl">
            <p class="text-xl text-neutral-100 text-justify">
              Dalam WSM, setiap kriteria memiliki bobot yang menggambarkan tingkat kontribusinya terhadap keputusan akhir. Pilihan yang dinilai akan diberikan skor atau nilai pada setiap kriteria, kemudian dikalikan dengan bobotnya
              masing-masing, dan hasilnya dijumlahkan untuk mendapatkan nilai akhir.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-sky-700 to-sky-500 h-2/3 text-center">
        <div>
          <h1 className="text-4xl font-bold text-neutral-100">Jadi ?</h1>
        </div>
        <div className="mx-10 mt-16">
          <div className="bg-sky-400 px-10 rounded-lg h-44 flex items-center shadow-xl">
            <p class="text-xl text-neutral-100 text-justify">Metode ini sering digunakan dalam berbagai aplikasi, seperti sistem pendukung keputusan, analisis kinerja, dan pengambilan keputusan dalam lingkungan bisnis maupun riset.</p>
          </div>
        </div>
      </div>
      <div className="py-40 bg-sky-500 flex justify-center">
        <a href="#mulai" className="">
          <button className="bg-gradient-to-r from-sky-70000 to-violet-700 border border-sky-100 px-8 py-4 font-semibold rounded-lg text-neutral-100 uppercase transition-all duration-300 hover:scale-105 hover:from-sky-400 hover:to-violet-400 hover:shadow-2xl hover:border hover:border-sky-100">
            Kembali ke Atas
          </button>
        </a>
      </div>
    </>
  );
}

export default Navbar;
