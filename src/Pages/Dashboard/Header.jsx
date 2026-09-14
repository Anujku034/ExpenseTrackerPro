import React from "react";
import {
  Search,
  Bell,
  Moon,
  ChevronDown,
} from "lucide-react";

function Header() {
  return (
    <div className="flex w-full flex-row items-center justify-between bg-slate-50 px-4 py-1">

      {/* Search */}
      <div className="relative w-96">

        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
        />

        <input
          type="text"
          placeholder="Search Transactions, Categories..."
          className="
            w-full
            rounded-lg
            border
            border-slate-200
            bg-white
            py-2
            pl-9
            pr-3
            text-sm
            outline-none
            placeholder:font-bold
            placeholder:text-black
          "
        />

      </div>


      {/* Right Section */}
      <div className="flex flex-row items-center gap-5">

        {/* Dark Mode */}
        <Moon
          size={20}
          className="text-slate-600"
        />

        {/* Notifications */}
        <Bell
          size={20}
          className="text-slate-600"
        />

        {/* User */}
        <div className="m-1 flex flex-row items-center gap-2">

          <div className="h-10 w-10 overflow-hidden rounded-full bg-black pt-1">

            <img
              src="https://imgs.search.brave.com/2A6J6iIv22HGXRMPjpfzJ8gUH8t2UP69LP2hLjGwSXQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVldmV6/eS5jb20vc3lzdGVt/L3Jlc291cmNlcy90/aHVtYm5haWxzLzA3/Ny85NDMvMzczL3Nt/YWxsL2hhbmRzb21l/LWJ1c2luZXNzbWFu/LWF2YXRhci1pbi1i/bHVlLXN1aXQtcG9ydHJh/aXQtaWxsdXN0cmF0/aW9uLXBuZy5wbmc"
              alt="Avatar"
              className="h-full w-full object-cover"
            />

          </div>

          <p className="font-bold">
            Anuj Kumar
          </p>

          <ChevronDown size={18} />

        </div>

      </div>

    </div>
  );
}

export default Header;