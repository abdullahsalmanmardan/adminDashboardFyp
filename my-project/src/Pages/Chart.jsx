import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// todo idher real data database se aay ga
const Chart = () => {
  const data = [
    {
      name: "jan",
      uv: 4000,
    },
    {
      name: "feb",
      uv: 3000,
    },
    {
      name: "March",
      uv: 2000,
    },
    {
      name: "May",
      uv: 2780,
    },
    {
      name: "June",
      uv: 1890,
    },
    {
      name: "july",
      uv: 4000,
    },
    {
      name: "August",
      uv: 3000,
    },
    {
      name: "september",
      uv: 2000,
    },
    {
      name: "october",
      uv: 2780,
    },
    {
      name: "november",
      uv: 1890,
    },
  ];
  return (
    <div className="flex">
      <div className="px-2 w-3/5">
        <div className="px-3 shadow-2xl bg-white">
          <h2 className="py-4 font-extrabold text-2xl">Analytics</h2>
          <ResponsiveContainer width="100%" aspect={6 / 2}>
            {/* data ma hamrar real data aa jay ga */}
            <LineChart data={data}>
              {/* jo cheez hum ne xasix ye daikhani ha  */}
              <XAxis dataKey="name" />
              {/* is se jab hum points pe hover karin gay to data nazar ay ga */}
              <Tooltip />
              <Line type="monotone" dataKey="uv" stroke="#ff7f16" />
              {/* is se matrix type bna jayga */}
              <CartesianGrid strokeDasharray="3 3" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* todo idher Daily Activity show karin gay */}
      <div className="w-2/5  px-3">
        <div className="px-3 shadow-2xl bg-white">
          <h1 className="flex text-2xl font-bold py-3 justify-center">
            Daily Tasks
          </h1>
          <div className="task flex pb-4">
            <div className="w-2 mt-2 h-2 bg-red-500 rounded-2xl"></div>
            <div className="px-4 font-semibold">
              Title : Explantaion of the title
            </div>
          </div>
          <div className="task flex pb-4">
            <div className="w-2 mt-2 h-2 bg-red-500 rounded-2xl"></div>
            <div className="px-4 font-semibold">
              Title : Explantaion of the title
            </div>
          </div>
          <div className="task flex pb-4">
            <div className="w-2 mt-2 h-2 bg-red-500 rounded-2xl"></div>
            <div className="px-4 font-semibold">
              Title : Explantaion of the title
            </div>
          </div>
          <div className="task flex pb-4">
            <div className="w-2 mt-2 h-2 bg-red-500 rounded-2xl"></div>
            <div className="px-4 font-semibold">
              Title : Explantaion of the title
            </div>
          </div>
          <div className="task flex pb-4">
            <div className="w-2 mt-2 h-2 bg-red-500 rounded-2xl"></div>
            <div className="px-4 font-semibold">
              Title : Explantaion of the title
            </div>
          </div>
          <div className="task flex pb-4">
            <div className="w-2 mt-2 h-2 bg-red-500 rounded-2xl"></div>
            <div className="px-4 font-semibold">
              Title : Explantaion of the title
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
