import React from "react";

const AddManger = () => {
  return (
    <div className="w-full">
      <div className="bg-white mx-4 my-5 px-4 py-4">
        <h1 className="text-xl  flex justify-center font-bold">Add Manager</h1>
        <label className="">Name</label>
        <input
          type="text"
          className="border border-t-white border-l-white border-r-white border-b-red-700 rounded-lg w-full "
        />
      </div>
    </div>
  );
};

export default AddManger;
