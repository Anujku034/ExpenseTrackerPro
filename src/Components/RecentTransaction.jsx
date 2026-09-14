import React from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

function RecentTransactions() {
  return (
    <div className="w-full rounded-2xl bg-white p-5 shadow-sm">

      {/* Header */}
      <div className="mb-5 flex items-center justify-between ">
        <h2 className="text-sm font-bold text-slate-800">
          Recent Transactions
        </h2>

        <button className="text-xs font-medium text-indigo-600 hover:text-indigo-700">
          View All
        </button>
      </div>

      {/* Transaction 1 */}
      <div className="flex items-center justify-between border-b border-slate-100 py-3">

        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-50">
            <ArrowDown size={17} className="text-red-500" />
          </div>

          <div>
            <p className="text-sm font-medium text-slate-700">
              Grocery Shopping
            </p>
            <p className="text-xs text-slate-400">
              Food • Sep 12
            </p>
          </div>
        </div>

        <span className="text-sm font-semibold text-red-500">
          - ₹2,500
        </span>

      </div>

      {/* Transaction 2 */}
      <div className="flex items-center justify-between border-b border-slate-100 py-3">

        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-50">
            <ArrowUp size={17} className="text-green-600" />
          </div>

          <div>
            <p className="text-sm font-medium text-slate-700">
              Salary
            </p>
            <p className="text-xs text-slate-400">
              Income • Sep 10
            </p>
          </div>
        </div>

        <span className="text-sm font-semibold text-green-600">
          + ₹40,000
        </span>

      </div>

      {/* Transaction 3 */}
      <div className="flex items-center justify-between border-b border-slate-100 py-3">

        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-50">
            <ArrowDown size={17} className="text-red-500" />
          </div>

          <div>
            <p className="text-sm font-medium text-slate-700">
              Electricity Bill
            </p>
            <p className="text-xs text-slate-400">
              Bills • Sep 08
            </p>
          </div>
        </div>

        <span className="text-sm font-semibold text-red-500">
          - ₹1,800
        </span>

      </div>

      {/* Transaction 4 */}
      <div className="flex items-center justify-between py-3">

        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-50">
            <ArrowDown size={17} className="text-red-500" />
          </div>

          <div>
            <p className="text-sm font-medium text-slate-700">
              Uber Ride
            </p>
            <p className="text-xs text-slate-400">
              Transport • Sep 06
            </p>
          </div>
        </div>

        <span className="text-sm font-semibold text-red-500">
          - ₹450
        </span>

      </div>

    </div>
  );
}

export default RecentTransactions;