import React from "react";
import { CalendarDays, ChevronDown } from "lucide-react";

import Sidebar from "./Dashboard/sidebar.jsx";
import Header from "./Dashboard/Header.jsx";

function AddTransaction() {
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

        {/* Heading */}
        <div className="mb-5">

          <h1 className="text-2xl font-bold text-slate-800">
            Add New Transaction
          </h1>

          <p className="mt-1 text-sm text-slate-400">
            Keep track of your income and expenses.
          </p>

        </div>


        {/* Form + Side Card */}
        <div className="grid grid-cols-3 gap-5">


          {/* Form */}
          <div className="col-span-2 rounded-2xl bg-white p-6 shadow-sm">

            {/* Title */}
            <div className="mb-5">

              <label className="mb-2 block text-xs font-semibold text-slate-600">
                Title
              </label>

              <input
                type="text"
                placeholder="e.g. Pizza, Salary"
                className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-indigo-400"
              />

            </div>


            {/* Amount */}
            <div className="mb-5">

              <label className="mb-2 block text-xs font-semibold text-slate-600">
                Amount
              </label>

              <input
                type="number"
                placeholder="0.00"
                className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-indigo-400"
              />

            </div>


            {/* Type */}
            <div className="mb-5">

              <label className="mb-2 block text-xs font-semibold text-slate-600">
                Type
              </label>

              <div className="grid grid-cols-2 gap-3">

                <button className="rounded-lg border border-red-300 bg-red-50 py-2.5 text-sm font-medium text-red-500">
                  Expense
                </button>

                <button className="rounded-lg border border-green-200 bg-green-50 py-2.5 text-sm font-medium text-green-600">
                  Income
                </button>

              </div>

            </div>


            {/* Category */}
            <div className="mb-5">

              <label className="mb-2 block text-xs font-semibold text-slate-600">
                Category
              </label>

              <div className="relative">

                <select className="w-full appearance-none rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-400 outline-none">
                  <option>Select a category</option>
                  <option>Food</option>
                  <option>Travel</option>
                  <option>Shopping</option>
                  <option>Bills</option>
                  <option>Entertainment</option>
                </select>

                <ChevronDown
                  size={16}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

              </div>

            </div>


            {/* Date */}
            <div className="mb-5">

              <label className="mb-2 block text-xs font-semibold text-slate-600">
                Date
              </label>

              <div className="relative">

                <input
                  type="date"
                  className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-500 outline-none"
                />

                <CalendarDays
                  size={16}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

              </div>

            </div>


            {/* Notes */}
            <div className="mb-6">

              <label className="mb-2 block text-xs font-semibold text-slate-600">
                Notes (Optional)
              </label>

              <textarea
                rows="3"
                placeholder="Add a note..."
                className="w-full resize-none rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none"
              />

            </div>


            {/* Buttons */}
            <div className="flex justify-end gap-3">

              <button className="rounded-lg border border-slate-200 px-6 py-2.5 text-xs font-medium text-slate-600">
                Cancel
              </button>

              <button className="rounded-lg bg-indigo-600 px-6 py-2.5 text-xs font-medium text-white shadow-sm">
                Add Transaction
              </button>

            </div>

          </div>


          {/* Right Info Card */}
          <div className="h-fit rounded-2xl bg-white p-5 shadow-sm">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
              ₹
            </div>

            <p className="mt-4 text-sm font-semibold text-slate-700">
              Every rupee counts
            </p>

            <p className="mt-1 text-xs leading-5 text-slate-400">
              Make it work for you.
            </p>

          </div>

        </div>

      </main>

    </div>
  );
}

export default AddTransaction;