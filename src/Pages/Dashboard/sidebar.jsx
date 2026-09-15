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
import { SidebarItem } from "../../Components/sidebaritem.jsx";

function Sidebar() {
  return (
    // Sidebar container
    <div className="fixed top-0 left-0 flex h-screen w-60 flex-col rounded-xl bg-white shadow-2xl">

      {/* Icon + Heading */}
      <div className="flex h-14 w-55 shrink-0 justify-between rounded-br-lg bg-black">

        <img
          src={ExpenseTrackerProImg}
          alt="Expense Tracker Pro"
          className="m-1 w-12 rounded-full"
        />

        <div className="flex items-center justify-center p-2.5 text-white">
          <p>Expense Tracker Pro</p>
        </div>

      </div>


      {/* Main Sidebar Components */}
      <div className="flex flex-1 flex-col justify-between">

        {/* Navigation */}
        <div className="flex flex-col">

          <SidebarItem
            icon={<House size={22} className="text-indigo-600" />}
            text="Dashboard"
          />

          <SidebarItem
            icon={<ArrowLeftRight size={22} className="text-indigo-600" />}
            text="Transactions"
          />

          <SidebarItem
            icon={<Plus size={22} className="text-indigo-600" />}
            text="Add Transaction"
          />

          <SidebarItem
            icon={<Tags size={22} className="text-indigo-600" />}
            text="Categories"
          />

          <SidebarItem
            icon={
              <ChartNoAxesColumn
                size={22}
                className="text-indigo-600"
              />
            }
            text="Reports"
          />

          <SidebarItem
            icon={<Settings size={22} className="text-indigo-600" />}
            text="Settings"
          />

        </div>


        {/* Stay on Track */}
        <div className="relative mb-4 ml-2 w-45 rounded-md shadow-xl">

          <img
            className="absolute right-0 top-0 w-12 rounded-full"
            src={AnalyseYourSpendingImg}
            alt="Analyse your spending"
          />

          <p className="pb-2 pl-2 pt-14">
            <span className="font-bold">
              Stay on track
            </span>

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