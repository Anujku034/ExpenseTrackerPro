import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaApple, FaLock } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

import TrackYourExpenseImg from "../assets/TrackYourExpenseImg.png";
import AnalyseYourSpendingImg from "../assets/AnalyseYourSpendingImg.png";
import ReachYourFinancialGoalsImg from "../assets/ReachYourFinancialGoalsImg.png";
import ExpenseTrackerProImg from "../assets/ExpenseTrackerProImg.png";
import LoginPageBgImg from "../assets/LoginPageBgImg.png";

function Login() {
  const navigate = useNavigate();

  const [Emailaddress, setEmailaddress] = useState("");
  const [EmailError, setEmailError] = useState("");

  const [inputpassword, setinputpassword] = useState("");
  const [passwordError, setpasswordError] = useState("");

  const [Isticked, setIsticked] = useState(false);
  const [checkedError, setcheckedError] = useState("");

  const [wrongCredentials, setwrongCredentials] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  function IsValidUser() {
    setEmailError("");
    setpasswordError("");
    setcheckedError("");
    setwrongCredentials("");
    setLoginSuccess(false);

    let hasError = false;

    const email = Emailaddress.trim();
    const password = inputpassword;

    // Email validation
    if (!email) {
      setEmailError("This field can't be Empty");
      hasError = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Invalid format");
      hasError = true;
    }

    // Password validation
    if (!password.trim()) {
      setpasswordError("This field can't be Empty");
      hasError = true;
    } else if (
      !/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(
        password
      )
    ) {
      setpasswordError("Invalid format");
      hasError = true;
    }

    // Remember me validation
    if (!Isticked) {
      setcheckedError('Please select "Remember me" to continue.');
      hasError = true;
    }

    if (hasError) {
      return;
    }

    // Get registered users
    let storedUsers = localStorage.getItem("userRegisteredData");

    if (!storedUsers) {
      setwrongCredentials(
        "❌ No account found. Please create an account first."
      );
      return;
    }

    let users;

    try {
      users = JSON.parse(storedUsers);
    } catch (error) {
      setwrongCredentials(
        "❌ Something went wrong with your account data."
      );
      return;
    }

    // Support both array and single-object storage
    if (!Array.isArray(users)) {
      users = [users];
    }

    // Find matching user
    const user = users.find((registeredUser) => {
      if (!registeredUser) return false;

      const registeredEmail = String(
        registeredUser.email ||
        registeredUser.Emailaddress ||
        registeredUser.Email ||
        ""
      )
        .trim()
        .toLowerCase();

      const registeredPassword = String(
        registeredUser.password ||
        registeredUser.inputpassword ||
        registeredUser.Password ||
        ""
      );

      return (
        registeredEmail === email.toLowerCase() &&
        registeredPassword === password
      );
    });

    if (user) {
      // Save currently logged-in user
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify(user)
      );

      setLoginSuccess(true);

      setwrongCredentials(
        "✅ Login successful! Redirecting to your dashboard..."
      );

      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } else {
      setLoginSuccess(false);
      setwrongCredentials("❌ Invalid email or password.");
    }
  }

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center px-4 py-6 sm:px-6 sm:py-8 lg:px-8"
      style={{ backgroundImage: `url(${LoginPageBgImg})` }}
    >
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-7xl items-center justify-center gap-4">

        {/* LEFT SECTION */}
        <div className="hidden w-full max-w-[520px] lg:block">

          <div className="mb-10 flex items-center gap-3 xl:mb-14">
            <img
              src={ExpenseTrackerProImg}
              alt="Expense Tracker Pro"
              className="h-10 w-10 rounded-r-lg object-contain"
            />

            <p className="text-xl font-bold text-white">
              Expense Tracker Pro
            </p>
          </div>

          <div className="max-w-[520px]">
            <p className="text-4xl font-extrabold leading-tight text-white xl:text-5xl">
              A Smarter
              <br />
              Way to Manage
              <br />
              <span className="text-purple-400">
                Your Money
              </span>
            </p>

            <p className="mt-5 text-base font-medium text-white/90 xl:text-lg">
              Track. Save. Plan. Achieve.
            </p>

            <p className="mt-8 text-sm italic leading-relaxed text-white/80 xl:text-base">
              "Discipline today
              <br />
              creates freedom tomorrow."
            </p>
          </div>

          <div className="mt-8 space-y-4 xl:mt-10 xl:space-y-5">

            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/20 backdrop-blur-sm xl:h-11 xl:w-11">
                <img
                  src={TrackYourExpenseImg}
                  alt=""
                  className="h-full w-full rounded-full object-cover"
                />
              </div>

              <p className="text-sm font-medium text-white xl:text-base">
                Track your expenses
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/20 backdrop-blur-sm xl:h-11 xl:w-11">
                <img
                  src={AnalyseYourSpendingImg}
                  alt=""
                  className="h-full w-full rounded-full object-cover"
                />
              </div>

              <p className="text-sm font-medium text-white xl:text-base">
                Analyse your spending
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/20 backdrop-blur-sm xl:h-11 xl:w-11">
                <img
                  src={ReachYourFinancialGoalsImg}
                  alt=""
                  className="h-full w-full rounded-full object-cover"
                />
              </div>

              <p className="text-sm font-medium text-white xl:text-base">
                Reach your financial goals
              </p>
            </div>

          </div>
        </div>

        {/* LOGIN CARD */}
        <div className="w-full max-w-[440px] rounded-2xl bg-white px-5 py-6 shadow-2xl sm:px-7 sm:py-7 md:px-8 md:py-8">

          {/* HEADER */}
          <div className="mb-6 sm:mb-7">
            <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Welcome Back 👋
            </h1>

            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
              Sign in to continue your journey
            </p>
          </div>

          {/* INPUTS */}
          <div className="space-y-4">

            {/* EMAIL */}
            <div>
              <div
                className={`flex items-center gap-3 rounded-lg border px-3.5 py-2.5 sm:px-4 sm:py-3 ${
                  EmailError
                    ? "border-red-400"
                    : "border-slate-200"
                }`}
              >
                <MdOutlineEmail
                  size={20}
                  className="shrink-0 text-slate-600"
                />

                <div className="min-w-0 flex-1">
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-slate-700"
                  >
                    Email address
                  </label>

                  <input
                    id="email"
                    type="email"
                    value={Emailaddress}
                    placeholder="you@gmail.com"
                    onChange={(e) => {
                      setEmailaddress(e.target.value);
                      setEmailError("");
                      setwrongCredentials("");
                    }}
                    className="mt-1 w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>

              {EmailError && (
                <p className="mt-1.5 text-xs leading-5 text-red-500">
                  {EmailError}
                </p>
              )}
            </div>

            {/* PASSWORD */}
            <div>
              <div
                className={`flex items-center gap-3 rounded-lg border px-3.5 py-2.5 sm:px-4 sm:py-3 ${
                  passwordError
                    ? "border-red-400"
                    : "border-slate-200"
                }`}
              >
                <FaLock
                  size={20}
                  className="shrink-0 text-slate-600"
                />

                <div className="min-w-0 flex-1">
                  <label
                    htmlFor="password"
                    className="block text-xs font-semibold text-slate-700"
                  >
                    Password
                  </label>

                  <input
                    id="password"
                    type="password"
                    value={inputpassword}
                    placeholder="Enter your password"
                    onChange={(e) => {
                      setinputpassword(e.target.value);
                      setpasswordError("");
                      setwrongCredentials("");
                    }}
                    className="mt-1 w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>

              {passwordError && (
                <p className="mt-1.5 text-xs leading-5 text-red-500">
                  {passwordError}
                </p>
              )}
            </div>

          </div>

          {/* REMEMBER ME */}
          <div className="mt-5 flex items-start justify-between gap-3">

            <div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="remember"
                  checked={Isticked}
                  onChange={(e) => {
                    setIsticked(e.target.checked);
                    setcheckedError("");
                  }}
                  className="h-4 w-4 shrink-0 accent-indigo-600"
                />

                <label
                  htmlFor="remember"
                  className="text-xs text-slate-600"
                >
                  Remember me
                </label>
              </div>

              {checkedError && (
                <p className="mt-1.5 pl-6 text-xs leading-5 text-red-500">
                  {checkedError}
                </p>
              )}
            </div>

            <button
              type="button"
              className="text-right text-xs font-semibold text-indigo-600 hover:text-indigo-700"
            >
              Forgot password?
            </button>

          </div>

          {/* SIGN IN */}
          <button
            type="button"
            onClick={IsValidUser}
            className="mt-6 w-full rounded-lg bg-indigo-600 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-indigo-700"
          >
            Sign In&nbsp; →
          </button>

          {/* LOGIN MESSAGE */}
          {wrongCredentials && (
            <p
              className={`mt-4 text-center text-sm ${
                loginSuccess
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {wrongCredentials}
            </p>
          )}

          {/* DIVIDER */}
          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-slate-200"></div>

            <p className="shrink-0 text-xs text-slate-400">
              or continue with
            </p>

            <div className="h-px flex-1 bg-slate-200"></div>
          </div>

          {/* SOCIAL LOGIN */}
          <div className="flex gap-3">

            <button
              type="button"
              className="flex flex-1 items-center justify-center rounded-lg border border-slate-200 py-3 transition hover:bg-slate-50"
            >
              <FcGoogle size={22} />
            </button>

            <button
              type="button"
              className="flex flex-1 items-center justify-center rounded-lg border border-slate-200 py-3 transition hover:bg-slate-50"
            >
              <FaGithub size={22} />
            </button>

            <button
              type="button"
              className="flex flex-1 items-center justify-center rounded-lg border border-slate-200 py-3 transition hover:bg-slate-50"
            >
              <FaApple size={22} />
            </button>

          </div>

          {/* REGISTER */}
          <div className="mt-7 flex justify-center gap-1 text-xs sm:mt-8">

            <p className="text-slate-500">
              Don't have an account?
            </p>

            <button
              type="button"
              className="font-semibold text-indigo-600 hover:text-indigo-700"
              onClick={() => navigate("/register")}
            >
              Create one
            </button>

          </div>

          <p className="mt-10 text-center text-[10px] italic text-slate-400 sm:mt-12">
            "Small steps make big financial changes."
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;