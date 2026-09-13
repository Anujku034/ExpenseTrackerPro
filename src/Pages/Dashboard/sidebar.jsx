import React from "react";
import {
  House,
  ArrowLeftRight,
  Plus,
  Tags,
  ChartNoAxesColumn,
  Settings,
} from "lucide-react";

import ExpenseTrackerProImg from "../../assets/ExpenseTrackerProImg.png";
import AnalyseYourSpendingImg from "../../assets/AnalyseYourSpendingImg.png";

function Sidebar() {
  return (
    // Sidebar container
    <div className="h-screen w-60 m-1.5 bg-white rounded-xl shadow-2xl">

      {/* Icon + Heading */}
      <div className="bg-black flex w-55 h-14 justify-between rounded-br-lg">
        <img
          src={ExpenseTrackerProImg}
          alt="Expense Tracker Pro"
          className="w-12 m-1 rounded-full"
        />

        <div className="text-white flex items-center justify-center p-2.5">
          <p>Expense Tracker Pro</p>
        </div>
      </div>

      {/* Main Sidebar Components */}
      <div className="flex flex-col justify-between h-[calc(100vh-60px)]">

        {/* 1st Component - Navigation */}
        <div className="flex flex-col">

          <div className="flex items-center p-2 mt-2 ml-2 w-53 gap-3 rounded-lg shadow-md bg-indigo-200">
            <House size={22} className="text-indigo-600" />
            <span className="text-indigo-600">Dashboard</span>
          </div>

          <div className="flex items-center p-2 mt-2 ml-2 w-53 gap-3 rounded-lg shadow-md bg-indigo-200">
            <ArrowLeftRight size={22} className="text-indigo-600" />
            <span className="text-indigo-600">Transactions</span>
          </div>

          <div className="flex items-center p-2 mt-2 ml-2 w-53 gap-3 rounded-lg shadow-md bg-indigo-200">
            <Plus size={22} className="text-indigo-600" />
            <span className="text-indigo-600">Add Transaction</span>
          </div>

          <div className="flex items-center p-2 mt-2 ml-2 w-53 gap-3 rounded-lg shadow-md bg-indigo-200">
            <Tags size={22} className="text-indigo-600" />
            <span className="text-indigo-600">Categories</span>
          </div>

          <div className="flex items-center p-2 mt-2 ml-2 w-53 gap-3 rounded-lg shadow-md bg-indigo-200">
            <ChartNoAxesColumn size={22} className="text-indigo-600" />
            <span className="text-indigo-600">Reports</span>
          </div>

          <div className="flex items-center p-2 mt-2 ml-2 w-53 gap-3 rounded-lg shadow-md bg-indigo-200">
            <Settings size={22} className="text-indigo-600" />
            <span className="text-indigo-600">Settings</span>
          </div>

        </div>

        {/* 2nd Component - Stay on Track */}
        <div className="relative ml-2 rounded-md w-45 shadow-xl">

          <img
            className="w-12 rounded-full absolute top-0 right-0"
            src={AnalyseYourSpendingImg}
            alt="Analyse your spending"
          />

          <p className="pt-14 pl-2 pb-2">
            <span className="font-bold">Stay on track</span>
            <br />
            Achieve your goals
            <br />
            one step at a time.
          </p>

        </div>

      </div>
    </div>
  );
}

export default Sidebar;