import React, { useState } from "react";
import { categories } from "../assets/data";
const UpdateProduct = () => {
  const [data, setData] = useState(categories);
  return (
    // overflow hidden ki waja se navbar ab sticky rhy gi
    <div className="w-full py-2 overflow-x-hidden grid h-[350px] grid-cols-2 lg:grid-cols-3 lg:gap-2">
      {data.map((cate, id) => (
        <div key={id} className="flex-col group">
          <div className="px-2 pb-2  bg-slate-200">
            <img className="w-full h-full bg-cover" src={cate.img} />
          </div>
          <div>
            <h1 className="flex group-hover:hidden justify-center relative top-[-60px] text-white text-2xl">
              ProductName
            </h1>
          </div>

          <div className="hidden group-hover:opacity-100  group-hover:block  group-hover:transition-transform group-hover:ease-in-out	group-hover:duration-800 group-hover:relative group-hover:top-[-220px]">
            <div>
              <h1 className="flex justify-center text-white text-2xl">
                Product Name
              </h1>
              <h1 className="flex justify-center text-white text-2xl">
                Company
              </h1>
              <h1 className="flex justify-center text-white text-2xl">Units</h1>
            </div>
            <div className="flex justify-center text-white text-2xl gap-2 py-2">
              <div className="color1 bg-red-600 rounded-full w-6 h-6"></div>
              <div className="color1 bg-green-600 rounded-full w-6 h-6"></div>
              <div className="color1 bg-blue-800 rounded-full w-6 h-6"></div>
            </div>
            <div className="flex justify-center">
              <button className="px-2 py-2 bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white hover:text-lg flex justify-center rounded-2xl">
                More Info
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpdateProduct;
