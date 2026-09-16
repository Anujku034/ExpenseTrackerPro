import React from "react";
import {
  Plus,
  Search,
  Utensils,
  ShoppingBag,
  Car,
  Wallet,
  MoreVertical,
} from "lucide-react";

function Categories() {
  const categories = [
    {
      name: "Food",
      description: "Food & restaurants",
      type: "Expense",
      transactions: 24,
      amount: "₹12,500",
      icon: <Utensils size={22} />,
    },
    {
      name: "Shopping",
      description: "Shopping and purchases",
      type: "Expense",
      transactions: 18,
      amount: "₹8,200",
      icon: <ShoppingBag size={22} />,
    },
    {
      name: "Transport",
      description: "Travel and transportation",
      type: "Expense",
      transactions: 12,
      amount: "₹5,400",
      icon: <Car size={22} />,
    },
    {
      name: "Salary",
      description: "Monthly salary",
      type: "Income",
      transactions: 3,
      amount: "₹85,000",
      icon: <Wallet size={22} />,
    },
  ];

  return (
    <div className="space-y-6">

      {/* Heading */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            Categories
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage your income and expense categories
          </p>
        </div>

        {/* Add Category */}
        <button className="flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 font-medium text-white shadow-sm transition hover:bg-indigo-700">
          <Plus size={19} />
          Add Category
        </button>

      </div>

      {/* Search + Filter */}
      <div className="flex flex-col gap-3 rounded-xl bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">

        {/* Search */}
        <div className="relative w-full md:w-80">

          <Search
            size={19}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search categories..."
            className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-indigo-500"
          />

        </div>

        {/* Filter */}
        <div className="flex gap-2">

          <button className="rounded-lg bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-600">
            All
          </button>

          <button className="rounded-lg px-4 py-2 text-sm text-slate-500 hover:bg-slate-100">
            Income
          </button>

          <button className="rounded-lg px-4 py-2 text-sm text-slate-500 hover:bg-slate-100">
            Expense
          </button>

        </div>

      </div>

      {/* Categories */}
      <div className="space-y-4">

        {categories.map((category, index) => (

          <div
            key={index}
            className="flex flex-col gap-4 rounded-xl bg-white p-5 shadow-sm transition hover:shadow-md sm:flex-row sm:items-center sm:justify-between"
          >

            {/* Left */}
            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                {category.icon}
              </div>

              <div>
                <h2 className="font-semibold text-slate-800">
                  {category.name}
                </h2>

                <p className="text-sm text-slate-500">
                  {category.description}
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  {category.transactions} transactions
                </p>
              </div>

            </div>

            {/* Right */}
            <div className="flex items-center justify-between gap-6 sm:justify-end">

              <div className="text-right">

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    category.type === "Income"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {category.type}
                </span>

                <p className="mt-2 font-bold text-slate-800">
                  {category.amount}
                </p>

              </div>

              <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600">
                <MoreVertical size={20} />
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Categories;