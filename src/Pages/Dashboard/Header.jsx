import React from "react";
import { Search, Bell, Moon } from "lucide-react";

function Header() {
  return (
    <div className="flex w-210 flex-row items-center justify-between  ml-1 mt-1 shadow-xl ml-20">

      {/* Search */}
      <div className="relative w-96">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search Transactions, Categories..."
          className="w-full rounded-lg border border-slate-200 py-2 pl-9 pr-3 text-sm outline-none"
        />
      </div>

      {/* Right Section */}
      <div className="flex flex-row items-center gap-5">

        {/* Dark Mode */}
        <div>
          <Moon size={20} className="text-slate-600" />
        </div>

        {/* Notifications */}
        <div>
          <Bell size={20} className="text-slate-600" />
        </div>

        {/* User */}
        <div className="flex flex-row items-center gap-2 m-1">

          {/* User Icon */}
          <div className="h-10 w-10 overflow-hidden rounded-full bg-black pt-1">
            <img
              src="https://imgs.search.brave.com/2A6J6iIv22HGXRMPjpfzJ8gUH8t2UP69LP2hLjGwSXQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzcvOTQzLzM3My9zbWFs/bC9oYW5kc29tZS1i/dXNpbmVzc21hbi1h/dmF0YXItaW4tYmx1/ZS1zdWl0LXBvcnRy/YWl0LWlsbHVzdHJh/dGlvbi1wbmcucG5n"
              alt="Avatar"
              className=" w-10 object-cover"
            />
          </div>

          <p className="font-bold">Anuj Kumar</p>

        </div>

      </div>
    </div>
  );
}

export default Header;