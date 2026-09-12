import React from "react";
import RegisterPageBgImg from "../assets/RegisterPageBgImg.png";

function Register() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${RegisterPageBgImg})` }}
      ></div>

      {/* Register Page - Center */}
      <div className="absolute inset-0 flex items-center justify-center translate-x-12">

        {/* Register Card */}
        <div className="w-[430px] rounded-2xl bg-white p-8 shadow-2xl">

          {/* Header */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900">
              Join Expense Tracker Pro
            </h2>

            <p className="mt-1 text-sm leading-relaxed text-slate-500">
              Create your account and take control
              <br />
              of your finances.
            </p>
          </div>


          {/* Full Name */}
          <div className="mb-4">
            <label
              htmlFor="fullname"
              className="mb-1.5 block text-sm font-semibold text-slate-800"
            >
              Full Name
            </label>

            <input
              type="text"
              id="fullname"
              placeholder="Anuj Kumar"
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>


          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="emailaddress"
              className="mb-1.5 block text-sm font-semibold text-slate-800"
            >
              Email address
            </label>

            <input
              type="email"
              id="emailaddress"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>


          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="mb-1.5 block text-sm font-semibold text-slate-800"
            >
              Password
            </label>

            <input
              type="password"
              id="password"
              placeholder="Create a strong password"
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>


          {/* Confirm Password */}
          <div className="mb-5">
            <label
              htmlFor="confirmpassword"
              className="mb-1.5 block text-sm font-semibold text-slate-800"
            >
              Confirm Password
            </label>

            <input
              type="password"
              id="confirmpassword"
              placeholder="Confirm your password"
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>


          {/* Terms & Privacy */}
          <div className="mb-6 flex items-start gap-2">

            <input
              type="checkbox"
              id="terms"
              className="mt-0.5 h-4 w-4 cursor-pointer accent-indigo-600"
            />

            <label
              htmlFor="terms"
              className="text-xs leading-5 text-slate-500"
            >
              I agree to the{" "}
              <span className="font-medium text-indigo-600">
                Terms of Service
              </span>{" "}
              and
              <br />
              <span className="font-medium text-indigo-600">
                Privacy Policy
              </span>
            </label>

          </div>


          {/* Create Account Button */}
          <button
            type="button"
            className="w-full rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 py-3 text-sm font-semibold text-white shadow-md transition hover:from-indigo-600 hover:to-purple-700"
          >
            Create Account →
          </button>


          {/* Sign In */}
          <div className="mt-5 text-center">
            <p className="text-xs text-slate-500">
              Already have an account?{" "}
              <span className="cursor-pointer font-semibold text-indigo-600">
                Sign in
              </span>
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Register;