import React from "react";
import { Laptop, MoreVertical } from "lucide-react";
import MonuntainImg from "../assets/MountainImg.png";

function DashboardRight() {
  return (
    // Main container
    <div className="flex w-full flex-col gap-4">

      {/* ================= SAVING PART ================= */}
      <div className="rounded-2xl bg-white p-4 shadow-sm">

        <div className="flex items-center justify-between">

          {/* Left side */}
          <div className="flex min-w-0 items-center gap-4">

            {/* Laptop Icon */}
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-green-50">
              <Laptop
                size={30}
                className="text-green-500"
              />
            </div>

            {/* Goal Details */}
            <div className="min-w-0 flex-1">

              <p className="text-xs text-slate-500">
                Your Goal
              </p>

              <p className="truncate text-base font-bold text-slate-800">
                Save for a New Laptop
              </p>

              <p className="text-sm text-slate-400">
                ₹25,000 / ₹80,000
              </p>

              {/* Progress Bar */}
              <div className="mt-2 flex items-center gap-3">

                <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full w-[31%] rounded-full bg-indigo-500"></div>
                </div>

                <span className="text-sm font-semibold text-slate-700">
                  31%
                </span>

              </div>

            </div>
          </div>

          {/* Three Dot Menu */}
          <button className="ml-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-100">
            <MoreVertical
              size={20}
              className="text-slate-600"
            />
          </button>

        </div>
      </div>


      {/* ================= MOUNTAIN IMAGE PART ================= */}
      <div className=" relative h-48 w-full overflow-hidden rounded-2xl">

        <img
          src={MonuntainImg}
          alt="Money habits"
          className="h-full w-full object-cover"
        />
          {/* Text on image */}
        <p className="absolute left-5 top-1/2 -translate-y-1/2 max-w-[350px] text-lg font-semibold text-white">
            "A small step towards better 
            <br />
            money habits makes a big difference."
        </p>


      </div>

    </div>
  );
}

export default DashboardRight;