import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

function ExpenseCategories() {
  const data = [
    { name: "Food", value: 30 },
    { name: "Travel", value: 20 },
    { name: "Shopping", value: 15 },
    { name: "Bills", value: 15 },
    { name: "Entertainment", value: 10 },
    { name: "Others", value: 10 },
  ];

  const COLORS = [
    "#4F46E5",
    "#F59E0B",
    "#10B981",
    "#EF4444",
    "#EC4899",
    "#94A3B8",
  ];

  return (
    <div className="w-full h-70 rounded-2xl bg-white p-5 shadow-sm mt-2 ">

      {/* Heading */}
      <h2 className="mb-5 text-center text-sm font-bold text-slate-800">
        Expense Categories
      </h2>

      <div className="flex items-center ">

        {/* Donut Chart */}
        <div className="relative h-48 w-1/2">

          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={48}
                outerRadius={70}
                paddingAngle={1}
                stroke="none"
              >
                {data.map((item, index) => (
                  <Cell
                    key={item.name}
                    fill={COLORS[index]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-sm font-bold text-slate-800">
              ₹15,000
            </p>

            <p className="text-[9px] text-slate-400">
              Total Expenses
            </p>
          </div>

        </div>

        {/* Categories */}
        <div className="w-1/2 space-y-2">

          <div className="flex justify-between text-xs">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
              Food
            </span>
            <span>30%</span>
          </div>

          <div className="flex justify-between text-xs">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-500"></span>
              Travel
            </span>
            <span>20%</span>
          </div>

          <div className="flex justify-between text-xs">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              Shopping
            </span>
            <span>15%</span>
          </div>

          <div className="flex justify-between text-xs">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500"></span>
              Bills
            </span>
            <span>15%</span>
          </div>

          <div className="flex justify-between text-xs">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-pink-500"></span>
              Entertainment
            </span>
            <span>10%</span>
          </div>

          <div className="flex justify-between text-xs">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-slate-400"></span>
              Others
            </span>
            <span>10%</span>
          </div>

        </div>

      </div>
    </div>
  );
}

export default ExpenseCategories;