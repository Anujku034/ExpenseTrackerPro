import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import TrackYourExpenseImg from "../assets/TrackYourExpenseImg.png";
import AnalyseYourSpendingImg from "../assets/AnalyseYourSpendingImg.png";
import ReachYourFinancialGoalsImg from "../assets/ReachYourFinancialGoalsImg.png"
import ExpenseTrackerProImg from "../assets/ExpenseTrackerProImg.png"
import LoginPageBgImg from "../assets/LoginPageBgImg.png";
function Login() {
  return (
    <div 
       className="min-h-screen w-full bg-cover bg-center flex items-center justify-center px-6 py-8"
       style={{ backgroundImage: `url(${LoginPageBgImg})` }}
     
    >
        {/* #01 - Left Section */}
        <div>
            {/* #01 - Logo and App Name */}
            <div className="flex items-center gap-3
            mb-14 
            ">
            <img src={ExpenseTrackerProImg} alt="" className="w-10 h-10 object-contain rounded-r-lg"/>
            <p className="text-xl font-bold text-white" >Expense Tracker Pro</p>
            </div>

            {/* #02 - Tagline Section */}
            <div className="max-w-[520px]">
                <p className="text-5xl font-extrabold leading-tight text-white">A Smarter
                    <br />
                    Way to Manage 
                    <br />
                    <span  className="text-purple-400">
                        Your Money
                    </span>
                </p>
                <p className="mt-5 text-lg font-medium text-white/90">Track. Save. Plan. Achieve.</p>
                <p className="mt-8 text-base leading-relaxed text-white/80 italic">"Discipline today
                    <br />
                    creates freedom tomorrow."
                </p>
            </div>

            {/* #03 - Features Section */}
            <div className="mt-10 space-y-5">
                {/* Feature #01 */}
                <div  className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-500/20 backdrop-blur-sm">
                        <img src={TrackYourExpenseImg} alt=""className="h-full w-full object-cover rounded-full"  />
                        
                    </div>
                    <p className="text-base font-medium text-white">Track your expenses</p>
                </div>

                {/* Feature #02 */}
                <div  className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-500/20 backdrop-blur-sm">
                        <img src={AnalyseYourSpendingImg} alt="" className="h-full w-full object-cover rounded-full"/>
                        
                    </div>
                    <p className="text-base font-medium text-white">Analyse your spending</p>
                    
                    
                </div>

               {/* Feature #03 */}
                <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-500/20 backdrop-blur-sm">
                         <img src={ReachYourFinancialGoalsImg} alt="" className="h-full w-full object-cover rounded-full" />
                    </div>
                   
                    <p  className="text-base font-medium text-white">Reach your financial goals</p>
                </div>
            </div>
       </div>

      {/* #02 - Right Section */}
        <div className="w-full max-w-[440px] rounded-2xl bg-white px-8 py-8 shadow-2xl">
            <div className="mb-7">
                <h1 className="text-3xl font-bold text-slate-900">Welcome Back 👋</h1>
                <p className="mt-1 text-sm text-slate-500">Sign in to continue your journey</p>
            </div>
            {/*Input Section*/}
            <div className="space-y-4">
                
                <div className="flex items-center gap-3 rounded-lg border border-slate-200 px-4 py-3">
                    {/* Gmail Icon */}
                    <MdOutlineEmail size={20} className="text-slate-600" />
                    
                   <div  className="flex-1">
                       <label htmlFor="email" className="block text-xs font-semibold text-slate-700">Email address</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="you@gmail.com"
                            className="mt-1 w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                        />
                   </div>
                    
                </div>

                <div className="flex items-center gap-3 rounded-lg border border-slate-200 px-4 py-3">
                    {/* Password Icon */}
                    <FaLock size={20} className="text-slate-600" />
                    <div  className="flex-1">
                        <label htmlFor="password"className="block text-xs font-semibold text-slate-700" >Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            className="mt-1 w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                            
                        />
                    </div>
                        
                </div>
            </div>

            <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <input type="checkbox" id="remember" className="h-4 w-4 accent-indigo-600"/>
                    <label htmlFor="remember" className="text-xs text-slate-600">Remember me</label>
                </div>

                <button type ="button"
                 className="text-xs font-semibold text-indigo-600 hover:text-indigo-700"
                >
                Forgot password?
                </button>
            </div>
            <button
                type="submit"
                className="mt-6 w-full rounded-lg bg-indigo-600 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-indigo-700"
            >
            Sign In&nbsp; →
            </button>
            

            <div className="my-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-slate-200">
                <p className="text-xs text-slate-400">or continue with</p>
                </div>
            </div>
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
            <div className="mt-8 flex justify-center gap-1 text-xs">
                <p className="text-slate-500">Don't have an account?</p>
                <button
                type="button" className="font-semibold text-indigo-600 hover:text-indigo-700"
                >
                 Create one
                </button>
            </div>
            <p className="mt-12 text-center text-[10px] italic text-slate-400">"Small steps make big financial changes."</p>
        
        </div>
    </div>
  );
}

export default Login;