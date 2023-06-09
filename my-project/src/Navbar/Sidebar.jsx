import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import AnalyticsIcon from "@mui/icons-material/Analytics";
const Sidebar = () => {
  return (
    <div>
      <div className="dashboard py-4 px-2 flex gap-4 text-[14px] font-semibold hover:transition hover:ease-in-out  hover:bg-teal-500 hover:rounded-md hover:text-white">
        <div className="">
          <DashboardIcon></DashboardIcon>
        </div>
        <div>
          <h1>DashBoard</h1>
        </div>
      </div>

      <div className="dashboard px-2 py-2 flex gap-2 text-[14px] font-semibold hover:transition hover:ease-in-out hover:bg-teal-500 hover:rounded-md hover:text-white">
        <div className="text-green-500 ">
          <AddCircleIcon></AddCircleIcon>
        </div>
        <div>
          <h1>Add Manager</h1>
        </div>
      </div>
      <div className="dashboard px-2 py-2 flex gap-2 text-[14px] font-semibold hover:transition hover:ease-in-out hover:bg-teal-500 hover:rounded-md hover:text-white">
        <div className="text-red-500 ">
          <PersonRemoveIcon></PersonRemoveIcon>
        </div>
        <div>
          <h1>Remove Manager</h1>
        </div>
      </div>

      <div className="dashboard px-2 py-2 flex gap-2 text-[14px] font-semibold hover:transition hover:ease-in-out hover:bg-teal-500 hover:rounded-md hover:text-white">
        <div className="text-green-500 ">
          <AddCircleIcon></AddCircleIcon>
        </div>
        <div>
          <h1>Add Employee</h1>
        </div>
      </div>
      <div className="dashboard px-2 py-2 flex gap-2 text-[14px] font-semibold hover:transition hover:ease-in-out hover:bg-teal-500 hover:rounded-md hover:text-white">
        <div className="text-red-500 ">
          <PersonRemoveIcon></PersonRemoveIcon>
        </div>
        <div>
          <h1>Remove Employee</h1>
        </div>
      </div>

      <div className="dashboard px-2 py-2 flex gap-2 text-[14px] font-semibold hover:transition hover:ease-in-out hover:bg-teal-500 hover:rounded-md hover:text-white">
        <div className="text-green-500 ">
          <AccountBalanceIcon></AccountBalanceIcon>
        </div>
        <div>
          <h1>Accounts Info</h1>
        </div>
      </div>
      <div className="dashboard px-2 py-2 flex gap-2 text-[14px] font-semibold hover:transition hover:ease-in-out hover:bg-teal-500 hover:rounded-md hover:text-white">
        <div className="text-red-500 ">
          <LocalActivityIcon></LocalActivityIcon>
        </div>
        <div>
          <h1>Daily Activities</h1>
        </div>
      </div>
      <div className="dashboard px-2 py-2 flex gap-2 text-[12px] font-semibold hover:transition hover:ease-in-out hover:bg-teal-500 hover:rounded-md hover:text-white">
        <div className="text-red-500 ">
          <AnalyticsIcon></AnalyticsIcon>
        </div>
        <div>
          <h1>Assest Managment</h1>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
