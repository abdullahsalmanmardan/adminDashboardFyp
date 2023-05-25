import React from "react";
import Topbar from "./Navbar/Topbar";
import Sidebar from "./Navbar/Sidebar";
import Dashboard from "./Pages/Dashboard";
import Chart from "./Pages/Chart";
import Activities from "./Pages/Activities";
import DailyActivities from "./Pages/DailyActivities";
import AddManger from "./Pages/AddManger";
import AssestManagment from "./Pages/AssestManagment";
const App = () => {
  return (
    <div>
      <div className="w-full">
        <Topbar></Topbar>
      </div>
      <div className="flex">
        <div className="lg:w-1/5 hidden lg:block lg:h-screen lg:px-4 lg:py-3  bg-white">
          <Sidebar></Sidebar>
        </div>
        {/* idher content aay ga page ka */}
        <div className="lg:w-4/5 w-full">
          <AssestManagment></AssestManagment>
          {/* <DailyActivities></DailyActivities> */}
          {/* <AddManger></AddManger> */}
          {/* <Dashboard></Dashboard>
          <Chart></Chart> */}
        </div>
      </div>
    </div>
  );
};

export default App;
