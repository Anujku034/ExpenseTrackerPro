import React from "react";
import { useState } from "react";
import RegisterPageBgImg from "../assets/RegisterPageBgImg.png";
import {useNavigate} from "react-router-dom";
function Register() {
  // useState
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [Isticked, setIsticked] = useState(false);
  const [errors, seterrors] = useState({});
  const [registered,setregistered] = useState("");

  const navigate = useNavigate();
  // handleClick
  const handleClick = () => {
    const newErrors = {};
    

    // Username validation
    if (!username.trim()) {
      newErrors.username = "This field can't be empty";
    } else if (!/^[A-Za-z]+(?: [A-Za-z]+)*$/.test(username.trim())) {
      newErrors.username = "Invalid Fullname";
    }

    // Email validation
    if (!email.trim()) {
      newErrors.email = "This field can't be empty";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = "Invalid Email format";
    }

    // Password validation
    if (!password) {
      newErrors.password = "This field can't be empty";
    } else if (
      !/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password)
    ) {
      newErrors.password =
        "Use at least 8 characters, including uppercase, lowercase, a number, and a special character (e.g. Anuj@123)";
    }

    // Confirm password validation
    if (!confirmpassword) {
      newErrors.confirmpassword = "This field can't be empty";
    } else if (password !== confirmpassword) {
      newErrors.confirmpassword = "Passwords do not match";
    }

    // Terms validation
    if (!Isticked) {
      newErrors.terms =
        "Please agree to the Terms of Service and Privacy Policy to continue.";
    }

    seterrors(newErrors);

    // If there is any error, stop here
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    const userRegisteredData = {
      username,
      email,
      password,
    };

    localStorage.setItem(
      "userRegistered",
      JSON.stringify(userRegisteredData)
    );
    setregistered("✅Registration Successfull!")
    setTimeout(() => {
      navigate("/")
    },2000);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={RegisterPageBgImg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Register Page */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-6 sm:px-6 sm:py-8 lg:px-8">

        {/* Register Card */}
        <div className="w-full max-w-[430px] rounded-2xl bg-white p-5 shadow-2xl sm:p-7 md:p-8">

          {/* Header */}
          <div className="mb-5 sm:mb-6">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
              Join Expense Tracker Pro
            </h2>

            <p className="mt-1 text-xs leading-relaxed text-slate-500 sm:text-sm">
              Create your account and take control
              <br />
              of your finances.
            </p>
          </div>

          {/* Full Name */}
          <div className="mb-4">
            <label
              htmlFor="fullname"
              className="mb-1.5 block text-xs font-semibold text-slate-800 sm:text-sm"
            >
              Full Name
            </label>

            <input
              type="text"
              id="fullname"
              placeholder="Anuj Kumar"
              value={username}
              onChange={(e) => {
                const value = e.target.value;

                setusername(value);
                setregistered("");
                // Remove previous username error when user starts typing
                seterrors((prev) => ({
                  ...prev,
                  username: "",
                }));
              }}
              className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:ring-2 sm:px-4 sm:py-3 ${
                errors.username
                  ? "border-red-500 focus:border-red-500 focus:ring-red-100"
                  : "border-slate-200 focus:border-indigo-500 focus:ring-indigo-100"
              }`}
            />

            {errors.username && (
              <p className="mt-1.5 text-sm text-red-500">
                {errors.username}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="emailaddress"
              className="mb-1.5 block text-xs font-semibold text-slate-800 sm:text-sm"
            >
              Email address
            </label>

            <input
              type="email"
              id="emailaddress"
              placeholder="you@example.com"
              value={email}
              required
              onChange={(e) => {
                setemail(e.target.value);

                seterrors((prev) => ({
                  ...prev,
                  email: "",
                }));
              }}
              className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:ring-2 sm:px-4 sm:py-3 ${
                errors.email
                  ? "border-red-500 focus:border-red-500 focus:ring-red-100"
                  : "border-slate-200 focus:border-indigo-500 focus:ring-indigo-100"
              }`}
            />

            {errors.email && (
              <p className="mt-1.5 text-sm text-red-500">
                {errors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="mb-1.5 block text-xs font-semibold text-slate-800 sm:text-sm"
            >
              Password
            </label>

            <input
              type="password"
              id="password"
              placeholder="Create a strong password"
              value={password}
              required
              onChange={(e) => {
                setpassword(e.target.value);

                seterrors((prev) => ({
                  ...prev,
                  password: "",
                }));
              }}
              className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:ring-2 sm:px-4 sm:py-3 ${
                errors.password
                  ? "border-red-500 focus:border-red-500 focus:ring-red-100"
                  : "border-slate-200 focus:border-indigo-500 focus:ring-indigo-100"
              }`}
            />

            {errors.password && (
              <p className="mt-1.5 text-sm text-red-500">
                {errors.password}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="mb-5">
            <label
              htmlFor="confirmpassword"
              className="mb-1.5 block text-xs font-semibold text-slate-800 sm:text-sm"
            >
              Confirm Password
            </label>

            <input
              type="password"
              id="confirmpassword"
              placeholder="Confirm your password"
              value={confirmpassword}
              required
              onChange={(e) => {
                setconfirmpassword(e.target.value);

                seterrors((prev) => ({
                  ...prev,
                  confirmpassword: "",
                }));
              }}
              className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:ring-2 sm:px-4 sm:py-3 ${
                errors.confirmpassword
                  ? "border-red-500 focus:border-red-500 focus:ring-red-100"
                  : "border-slate-200 focus:border-indigo-500 focus:ring-indigo-100"
              }`}
            />

            {errors.confirmpassword && (
              <p className="mt-1.5 text-sm text-red-500">
                {errors.confirmpassword}
              </p>
            )}
          </div>

          {/* Terms & Privacy */}
          <div className="mb-6">

            {/* Checkbox + Terms */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="terms"
                checked={Isticked}
                onChange={(e) => {
                  setIsticked(e.target.checked);

                  seterrors((prev) => ({
                    ...prev,
                    terms: "",
                  }));
                }}
                className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-indigo-600"
              />

              <label
                htmlFor="terms"
                className="text-[11px] leading-5 text-slate-500 sm:text-xs"
              >
                I agree to the{" "}
                <span className="font-medium text-indigo-600">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="font-medium text-indigo-600">
                  Privacy Policy
                </span>
              </label>
            </div>

            {/* Terms Error */}
            {errors.terms && (
              <p className="mt-1.5 pl-6 text-[11px] leading-5 text-red-500 sm:text-xs">
                {errors.terms}
              </p>
            )}

          </div>

          {/* Create Account Button */}
          <button
            type="button"
            className="w-full rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 py-2.5 text-sm font-semibold text-white shadow-md transition hover:from-indigo-600 hover:to-purple-700 sm:py-3"
            onClick={() => {
              handleClick();
            }}
          >
            Create Account →
          </button>
          {registered && (
            <p className="mt-4 text-center text-sm font-medium text-green-600">
              {registered}
            </p>
          )}
          {/* Sign In */}
          <div className="mt-5 text-center">
            <p className="text-[11px] text-slate-500 sm:text-xs">
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