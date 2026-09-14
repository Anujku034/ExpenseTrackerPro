import React from "react";
import {
  Search,
  SlidersHorizontal,
  MoreHorizontal,
} from "lucide-react";

import Sidebar from "./Dashboard/Sidebar.jsx";
import Header from "./Dashboard/Header.jsx";

function Transactions() {
  const transactions = [
    {
      id: 1,
      name: "Pizza Hut",
      category: "Food",
      type: "Expense",
      amount: "- ₹500",
      date: "Sep 10, 2026",
    },
    {
      id: 2,
      name: "Salary",
      category: "Income",
      type: "Income",
      amount: "+ ₹40,000",
      date: "Sep 5, 2026",
    },
    {
      id: 3,
      name: "Uber Ride",
      category: "Travel",
      type: "Expense",
      amount: "- ₹320",
      date: "Sep 3, 2026",
    },
    {
      id: 4,
      name: "Amazon",
      category: "Shopping",
      type: "Expense",
      amount: "- ₹2,499",
      date: "Sep 1, 2026",
    },
    {
      id: 5,
      name: "Electricity Bill",
      category: "Bills",
      type: "Expense",
      amount: "- ₹1,200",
      date: "Aug 30, 2026",
    },
    {
      id: 6,
      name: "Freelance",
      category: "Others",
      type: "Income",
      amount: "+ ₹10,000",
      date: "Aug 25, 2026",
    },
    {
      id: 7,
      name: "Swiggy",
      category: "Food",
      type: "Expense",
      amount: "- ₹450",
      date: "Aug 20, 2026",
    },
    {
      id: 8,
      name: "Movie",
      category: "Entertainment",
      type: "Expense",
      amount: "- ₹800",
      date: "Aug 10, 2026",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Sidebar */}
      <Sidebar />

      {/* Header */}
      <div className="fixed top-0 left-[246px] right-4 z-50">
        <Header />
      </div>

      {/* Main Content */}
      <main className="ml-[246px] mr-4 mt-[60px] min-h-[calc(100vh-60px)] px-6 pb-6">

        {/* Page Heading */}
        <div className="mb-5">

          <h1 className="text-2xl font-bold text-slate-800">
            All Transactions
          </h1>

          <p className="mt-1 text-sm text-slate-400">
            View and manage all your transactions.
          </p>

        </div>


        {/* Main Card */}
        <div className="rounded-2xl bg-white p-5 shadow-sm">

          {/* Top Controls */}
          <div className="mb-5 flex items-center justify-between">

            {/* Filter Tabs */}
            <div className="flex items-center gap-2">

              <button className="rounded-lg bg-indigo-600 px-4 py-2 text-xs font-medium text-white">
                All
              </button>

              <button className="rounded-lg border border-slate-200 px-4 py-2 text-xs text-slate-500">
                Income
              </button>

              <button className="rounded-lg border border-slate-200 px-4 py-2 text-xs text-slate-500">
                Expense
              </button>

            </div>


            {/* Search + Filter */}
            <div className="flex items-center gap-3">

              <div className="relative w-64">

                <Search
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  placeholder="Search transactions..."
                  className="w-full rounded-lg border border-slate-200 py-2 pl-9 pr-3 text-xs outline-none"
                />

              </div>

              <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200">
                <SlidersHorizontal size={16} className="text-slate-500" />
              </button>

            </div>

          </div>


          {/* Table */}
          <div className="overflow-x-auto">

            <table className="w-full border-collapse">

              <thead>

                <tr className="border-b border-slate-100">

                  <th className="px-3 py-3 text-left text-xs font-semibold text-slate-400">
                    #
                  </th>

                  <th className="px-3 py-3 text-left text-xs font-semibold text-slate-400">
                    Title
                  </th>

                  <th className="px-3 py-3 text-left text-xs font-semibold text-slate-400">
                    Category
                  </th>

                  <th className="px-3 py-3 text-left text-xs font-semibold text-slate-400">
                    Type
                  </th>

                  <th className="px-3 py-3 text-left text-xs font-semibold text-slate-400">
                    Amount
                  </th>

                  <th className="px-3 py-3 text-left text-xs font-semibold text-slate-400">
                    Date
                  </th>

                  <th className="px-3 py-3 text-left text-xs font-semibold text-slate-400">
                    Action
                  </th>

                </tr>

              </thead>


              <tbody>

                {transactions.map((transaction) => (

                  <tr
                    key={transaction.id}
                    className="border-b border-slate-50 hover:bg-slate-50"
                  >

                    <td className="px-3 py-3 text-xs text-slate-500">
                      {transaction.id}
                    </td>

                    <td className="px-3 py-3 text-xs font-medium text-slate-700">
                      {transaction.name}
                    </td>

                    <td className="px-3 py-3 text-xs text-slate-500">
                      {transaction.category}
                    </td>

                    <td className="px-3 py-3">

                      <span
                        className={`rounded-md px-2 py-1 text-[10px] font-medium ${
                          transaction.type === "Income"
                            ? "bg-green-50 text-green-600"
                            : "bg-red-50 text-red-500"
                        }`}
                      >
                        {transaction.type}
                      </span>

                    </td>

                    <td
                      className={`px-3 py-3 text-xs font-semibold ${
                        transaction.type === "Income"
                          ? "text-green-600"
                          : "text-red-500"
                      }`}
                    >
                      {transaction.amount}
                    </td>

                    <td className="px-3 py-3 text-xs text-slate-400">
                      {transaction.date}
                    </td>

                    <td className="px-3 py-3">

                      <button className="flex h-7 w-7 items-center justify-center rounded-md border border-slate-100">
                        <MoreHorizontal
                          size={15}
                          className="text-slate-500"
                        />
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>


          {/* Bottom */}
          <div className="mt-5 flex items-center justify-between">

            <p className="text-xs text-slate-400">
              8 items
            </p>

            <div className="flex items-center gap-2">

              <button className="h-7 w-7 rounded-md border border-slate-200 text-xs text-slate-500">
                ‹
              </button>

              <button className="h-7 w-7 rounded-md bg-indigo-600 text-xs text-white">
                1
              </button>

              <button className="h-7 w-7 rounded-md border border-slate-200 text-xs text-slate-500">
                2
              </button>

              <button className="h-7 w-7 rounded-md border border-slate-200 text-xs text-slate-500">
                3
              </button>

              <button className="h-7 w-7 rounded-md border border-slate-200 text-xs text-slate-500">
                ›
              </button>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Transactions;