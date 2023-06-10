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

import UpdateAssestsInfo from "./AdminPages/UpdateAssestsInfo";
import AddProduct from "./InventoryManager/AddProduct";
import UpdateProduct from "./InventoryManager/UpdateProduct";
import UpdateProductInfo from "./InventoryManager/UpdateProductInfo";
import PayrollManagment from "./HR Manager/PayrollManagment";
import UpdatePay from "./HR Manager/UpdatePay";
import EmployeeAttendence from "./HR Manager/EmployeeAttendence";
import EmployeeLeave from "./HR Manager/EmployeeLeave";
import ExpenseManagment from "./HR Manager/ExpenseManagment";
import AddExpense from "./HR Manager/AddExpense";
import ProductInfo from "./OrderManager/ProductInfo";
import CartAndOrder from "./OrderManager/CartAndOrder";
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
          {/* <Dashboard></Dashboard>
          <Chart></Chart> */}
          {/* <DataGridView></DataGridView> */}
          {/* <UpdateAssests></UpdateAssests> */}
          {/* <UpdateAssestsInfo></UpdateAssestsInfo> */}
          {/* <AddProduct></AddProduct> */}
          {/* <UpdateProduct></UpdateProduct> */}
          {/* <UpdateProductInfo></UpdateProductInfo> */}
          {/* <PayrollManagment></PayrollManagment> */}
          {/* <UpdatePay></UpdatePay> */}
          {/* <EmployeeAttendence></EmployeeAttendence> */}
          {/* <EmployeeLeave></EmployeeLeave>
          <ExpenseManagment></ExpenseManagment>
          <AddExpense></AddExpense>
          <ProductInfo></ProductInfo> */}
          <CartAndOrder></CartAndOrder>
        </div>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default App;
