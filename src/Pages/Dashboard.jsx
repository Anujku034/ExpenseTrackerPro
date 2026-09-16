import React from "react";
import Card from "../Components/card.jsx";
import IncomeExpenseChart from "../Components/bargraph.jsx";
import ExpenseCategories from "../Components/pieChart.jsx";
import RecentTransactions from "../Components/RecentTransaction.jsx";
import Mountain from "../Components/dashboardright.jsx";

import {
  Wallet,
  ArrowUp,
  ArrowDown,
  Receipt,
} from "lucide-react";

function Dashboard() {
  return (
    <div >

      {/* ================= DASHBOARD CONTENT ================= */}
      <main
       className="shadow-xl"
      >

        {/* ================= TOP HEADING ================= */}
        <div className="flex items-center justify-between">

          <div>
            <p className="font-serif text-2xl font-bold">
              Good Morning, Anuj 👋
            </p>

            <p className="text-slate-500">
              Here's your financial overview for this Month.
            </p>
          </div>

          {/* Calendar */}
          <div className="flex h-16 w-48 items-center justify-center rounded-xl border border-white bg-white shadow-xl">
            <input
              type="month"
              className="outline-none"
            />
          </div>

        </div>


        {/* ================= SUMMARY CARDS ================= */}
        <div className="mt-5 grid grid-cols-4 gap-5">

          <Card
            icon={Wallet}
            title="Total Balance"
            amount="₹25,000"
            percentage="12%"
            bottomText="from last month"
            cardColor="bg-green-50"
            iconBg="bg-green-100"
            iconColor="text-green-700"
          />

          <Card
            icon={ArrowUp}
            title="Total Income"
            amount="₹40,000"
            percentage="8%"
            bottomText="from last month"
            cardColor="bg-blue-50"
            iconBg="bg-blue-100"
            iconColor="text-blue-700"
          />

          <Card
            icon={ArrowDown}
            title="Total Expenses"
            amount="₹15,000"
            percentage="5%"
            bottomText="from last month"
            cardColor="bg-red-50"
            iconBg="bg-red-100"
            iconColor="text-red-600"
          />

          <Card
            icon={Receipt}
            title="Transactions"
            amount="12"
            percentage="2 new"
            bottomText="this week"
            cardColor="bg-purple-50"
            iconBg="bg-purple-100"
            iconColor="text-purple-700"
          />

        </div>


        {/* ================= CHARTS ================= */}
        <div className="mt-5 grid grid-cols-2 gap-5">

          <IncomeExpenseChart />

          <ExpenseCategories />

        </div>


        {/* ================= BOTTOM SECTION ================= */}
        <div className="mt-5 grid grid-cols-2 gap-5">

          <RecentTransactions />

          <Mountain />

        </div>

      </main>

    </div>
  );
}

export default Dashboard;