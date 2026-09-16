import React from "react";
import {
  UserCircle,
  Pencil,
  Trash2,
  Download,
  CircleAlert,
  X,
} from "lucide-react";
function Settings() {
  return (
    <div className="shadow-xl">

      {/* Main */}
      <main >

        {/* Heading */}
        <div className="mb-5">

          <h1 className="text-2xl font-bold text-slate-800">
            Settings
          </h1>

          <p className="mt-1 text-sm text-slate-400">
            Customize your experience
          </p>

        </div>


        <div className="max-w-3xl space-y-5">


          {/* Profile */}
          <div className="rounded-2xl bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-white">
                  <UserCircle size={30} />
                </div>

                <div>

                  <p className="text-sm font-bold text-slate-800">
                    Anuj Kumar
                  </p>

                  <p className="text-xs text-slate-400">
                    anuj@example.com
                  </p>

                </div>

              </div>


              <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-xs font-medium text-slate-600">

                <Pencil size={13} />

                Edit Profile

              </button>

            </div>

          </div>


          {/* Preferences */}
          <div className="rounded-2xl bg-white p-5 shadow-sm">

            <h2 className="mb-5 text-sm font-bold text-slate-800">
              Preferences
            </h2>


            {/* Currency */}
            <div className="mb-5 flex items-center justify-between">

              <div>

                <p className="text-xs font-semibold text-slate-700">
                  Currency
                </p>

                <p className="mt-1 text-[10px] text-slate-400">
                  Choose your preferred currency
                </p>

              </div>


              <select className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs outline-none">

                <option>₹ INR (Indian Rupee)</option>
                <option>$ USD (US Dollar)</option>
                <option>€ EUR (Euro)</option>

              </select>

            </div>


            {/* Theme */}
            <div className="flex items-center justify-between">

              <div>

                <p className="text-xs font-semibold text-slate-700">
                  Theme
                </p>

                <p className="mt-1 text-[10px] text-slate-400">
                  Choose application theme
                </p>

              </div>


              <div className="flex rounded-lg border border-slate-200 p-1">

                <button className="rounded-md bg-indigo-600 px-4 py-1.5 text-[10px] font-medium text-white">
                  Light
                </button>

                <button className="px-4 py-1.5 text-[10px] text-slate-500">
                  Dark
                </button>

                <button className="px-4 py-1.5 text-[10px] text-slate-500">
                  System
                </button>

              </div>

            </div>

          </div>


          {/* Data Management */}
          <div className="rounded-2xl bg-white p-5 shadow-sm">

            <h2 className="mb-5 text-sm font-bold text-slate-800">
              Data Management
            </h2>


            {/* Export */}
            <div className="mb-4 flex items-center justify-between rounded-xl border border-slate-100 p-4">

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50">
                  <Download
                    size={17}
                    className="text-green-600"
                  />
                </div>

                <div>

                  <p className="text-xs font-semibold text-slate-700">
                    Export Data
                  </p>

                  <p className="text-[10px] text-slate-400">
                    Download your transactions
                  </p>

                </div>

              </div>


              <button className="rounded-lg border border-slate-200 px-4 py-2 text-[10px] font-medium text-slate-600">
                Export
              </button>

            </div>


            {/* Clear */}
            <div className="flex items-center justify-between rounded-xl border border-slate-100 p-4">

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-50">
                  <CircleAlert
                    size={17}
                    className="text-red-500"
                  />
                </div>

                <div>

                  <p className="text-xs font-semibold text-slate-700">
                    Clear All Data
                  </p>

                  <p className="text-[10px] text-slate-400">
                    This action cannot be undone
                  </p>

                </div>

              </div>


              <button className="flex items-center gap-1 rounded-lg bg-red-50 px-4 py-2 text-[10px] font-medium text-red-500">

                <Trash2 size={12} />

                Clear

              </button>

            </div>

          </div>


          {/* Bottom Message */}
          <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-50">

              <CircleAlert
                size={17}
                className="text-green-600"
              />

            </div>

            <div>

              <p className="text-xs font-semibold text-slate-700">
                Discipline today,
              </p>

              <p className="text-xs text-slate-400">
                brighter tomorrow.
              </p>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Settings;