import React from "react";
import {
  ArrowLeft,
  MoreVertical,
  Utensils,
  Tag,
  CalendarDays,
  Clock,
  CreditCard,
  FileText,
} from "lucide-react";

import Sidebar from "./Dashboard/sidebar.jsx";
import Header from "./Dashboard/Header.jsx";

function TransactionDetails() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Sidebar */}
      <Sidebar />

      {/* Header */}
      <div className="fixed top-0 left-[246px] right-4 z-50">
        <Header />
      </div>


      {/* Main */}
      <main className="ml-[246px] mr-4 mt-[60px] min-h-[calc(100vh-60px)] px-6 pb-6">

        {/* Back */}
        <button className="mb-4 flex items-center gap-2 text-xs font-medium text-slate-500">
          <ArrowLeft size={15} />
          Back to Transactions
        </button>


        {/* Heading */}
        <div className="mb-5 flex items-center justify-between">

          <div>

            <h1 className="text-2xl font-bold text-slate-800">
              Transaction Details
            </h1>

          </div>

          <button>
            <MoreVertical
              size={20}
              className="text-slate-500"
            />
          </button>

        </div>


        {/* Details Card */}
        <div className="max-w-3xl rounded-2xl bg-white p-6 shadow-sm">


          {/* Top Transaction */}
          <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-6">

            <div className="flex items-center gap-4">

              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50">
                <Utensils
                  size={25}
                  className="text-orange-500"
                />
              </div>


              {/* Name */}
              <div>

                <h2 className="text-base font-bold text-slate-800">
                  Pizza Hut
                </h2>

                <span className="mt-1 inline-block rounded-md bg-red-50 px-2 py-1 text-[10px] font-medium text-red-500">
                  Expense
                </span>

              </div>

            </div>


            {/* Amount */}
            <div className="text-right">

              <p className="text-lg font-bold text-slate-800">
                - ₹500
              </p>

              <p className="text-xs text-slate-400">
                Sep 10, 2026
              </p>

              <p className="text-xs text-slate-400">
                7:30 PM
              </p>

            </div>

          </div>


          {/* Details */}
          <div className="space-y-5">


            {/* Category */}
            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <Tag
                  size={16}
                  className="text-slate-500"
                />

                <span className="text-sm text-slate-500">
                  Category
                </span>

              </div>

              <span className="rounded-md bg-blue-50 px-3 py-1 text-xs text-blue-600">
                Food
              </span>

            </div>


            {/* Date */}
            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <CalendarDays
                  size={16}
                  className="text-slate-500"
                />

                <span className="text-sm text-slate-500">
                  Date
                </span>

              </div>

              <span className="text-sm text-slate-700">
                Sep 10, 2026
              </span>

            </div>


            {/* Time */}
            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <Clock
                  size={16}
                  className="text-slate-500"
                />

                <span className="text-sm text-slate-500">
                  Time
                </span>

              </div>

              <span className="text-sm text-slate-700">
                7:30 PM
              </span>

            </div>


            {/* Payment */}
            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <CreditCard
                  size={16}
                  className="text-slate-500"
                />

                <span className="text-sm text-slate-500">
                  Payment Method
                </span>

              </div>

              <span className="text-sm text-slate-700">
                UPI
              </span>

            </div>


            {/* Notes */}
            <div className="flex items-start justify-between">

              <div className="flex items-center gap-3">

                <FileText
                  size={16}
                  className="text-slate-500"
                />

                <span className="text-sm text-slate-500">
                  Notes
                </span>

              </div>

              <span className="max-w-[250px] text-right text-sm text-slate-700">
                Dinner with friends 🍕
              </span>

            </div>

          </div>


          {/* Buttons */}
          <div className="mt-7 flex gap-3 border-t border-slate-100 pt-5">

            <button className="flex-1 rounded-lg border border-slate-200 py-2.5 text-xs font-medium text-slate-600">
              Edit
            </button>

            <button className="flex-1 rounded-lg border border-red-200 bg-red-50 py-2.5 text-xs font-medium text-red-500">
              Delete
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}

export default TransactionDetails;