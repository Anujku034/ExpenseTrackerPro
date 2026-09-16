import React from "react";
import {
  IndianRupee,
  TrendingUp,
  TrendingDown,
  PiggyBank,
} from "lucide-react";

function Reports() {
  return (
    <div className="space-y-6">

      {/* Page Heading */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          Reports
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Analyze your income, expenses and spending habits
        </p>
      </div>

      {/* Filter */}
      <div className="flex justify-end">
        <select className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm outline-none">
          <option>September 2026</option>
          <option>August 2026</option>
          <option>July 2026</option>
          <option>June 2026</option>
        </select>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">

        {/* Income */}
        <div className="rounded-xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Total Income
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-800">
                ₹85,000
              </h2>
            </div>

            <div className="rounded-full bg-green-100 p-3">
              <TrendingUp
                size={22}
                className="text-green-600"
              />
            </div>
          </div>
        </div>

        {/* Expense */}
        <div className="rounded-xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Total Expense
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-800">
                ₹52,400
              </h2>
            </div>

            <div className="rounded-full bg-red-100 p-3">
              <TrendingDown
                size={22}
                className="text-red-600"
              />
            </div>
          </div>
        </div>

        {/* Savings */}
        <div className="rounded-xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Total Savings
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-800">
                ₹32,600
              </h2>
            </div>

            <div className="rounded-full bg-indigo-100 p-3">
              <PiggyBank
                size={22}
                className="text-indigo-600"
              />
            </div>
          </div>
        </div>

        {/* Savings Rate */}
        <div className="rounded-xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Savings Rate
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-800">
                38.4%
              </h2>
            </div>

            <div className="rounded-full bg-blue-100 p-3">
              <IndianRupee
                size={22}
                className="text-blue-600"
              />
            </div>
          </div>
        </div>

      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">

        {/* Income Expense */}
        <div className="rounded-xl bg-white p-6 shadow-sm">

          <h2 className="text-lg font-bold text-slate-800">
            Income vs Expense
          </h2>

          <p className="mb-5 text-sm text-slate-500">
            Monthly financial comparison
          </p>

          <div className="flex h-64 items-center justify-center rounded-lg bg-slate-50">
            <p className="text-slate-400">
              Bar Chart
            </p>
          </div>

        </div>

        {/* Monthly Spending */}
        <div className="rounded-xl bg-white p-6 shadow-sm">

          <h2 className="text-lg font-bold text-slate-800">
            Monthly Spending
          </h2>

          <p className="mb-5 text-sm text-slate-500">
            Track your spending over time
          </p>

          <div className="flex h-64 items-center justify-center rounded-lg bg-slate-50">
            <p className="text-slate-400">
              Line Chart
            </p>
          </div>

        </div>

      </div>

      {/* Category Section */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">

        {/* Pie Chart */}
        <div className="rounded-xl bg-white p-6 shadow-sm">

          <h2 className="text-lg font-bold text-slate-800">
            Expense by Category
          </h2>

          <p className="mb-5 text-sm text-slate-500">
            See where your money is going
          </p>

          <div className="flex h-64 items-center justify-center rounded-lg bg-slate-50">
            <p className="text-slate-400">
              Pie Chart
            </p>
          </div>

        </div>

        {/* Top Categories */}
        <div className="rounded-xl bg-white p-6 shadow-sm">

          <h2 className="text-lg font-bold text-slate-800">
            Top Spending Categories
          </h2>

          <div className="mt-5 space-y-5">

            <div className="flex items-center justify-between">
              <span className="text-slate-600">
                Food
              </span>
              <span className="font-semibold text-slate-800">
                ₹12,500
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-600">
                Shopping
              </span>
              <span className="font-semibold text-slate-800">
                ₹8,200
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-600">
                Transport
              </span>
              <span className="font-semibold text-slate-800">
                ₹5,400
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-600">
                Bills
              </span>
              <span className="font-semibold text-slate-800">
                ₹4,800
              </span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Reports;