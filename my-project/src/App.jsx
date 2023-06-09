import React from "react";
import Topbar from "./Navbar/Topbar";
import Sidebar from "./Navbar/Sidebar";
import Dashboard from "./AdminPages/Dashboard";
import Chart from "./AdminPages/Chart";
import Activities from "./AdminPages/Activities";
import DailyActivities from "./AdminPages/DailyActivities";
import AddManger from "./AdminPages/AddManger";
import AssestManagment from "./AdminPages/AssestManagment";
import UpdateAssests from "./AdminPages/UpdateAssests";
import Footer from "./Footer/Footer";
import DataGridView from "./DataGridView/DataGridView";
import UpdateAssestsInfo from "./AdminPages/UpdateAssestsInfo";
import AddProduct from "./InventoryManager/AddProduct";
const App = () => {
  return (
    <div className="relative">
      <div className="w-full sticky top-0 overflow-hidden z-50">
        <Topbar></Topbar>
      </div>
      <div className="flex w-full ">
        <div className=" lg:fixed lg:left-0 lg:w-1/5 hidden lg:block lg:h-screen lg:px-4 lg:py-3  bg-white">
          <Sidebar></Sidebar>
        </div>
        {/* idher content aay ga page ka */}
        <div className="lg:pl-[20%] absloute  w-full">
          {/* <AssestManagment></AssestManagment> */}
          {/* <DailyActivities></DailyActivities> */}
          {/* <AddManger></AddManger> */}
          <Dashboard></Dashboard>
          <Chart></Chart>
          {/* <DataGridView></DataGridView> */}
          {/* <UpdateAssests></UpdateAssests>
          <UpdateAssestsInfo></UpdateAssestsInfo> */}
          <AddProduct></AddProduct>
        </div>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default App;
