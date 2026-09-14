import React from 'react'
import Login from "./Pages/login.jsx";
import Register from "./Pages/Register.jsx";
import Header from "./Pages/Dashboard/Header.jsx";
import Sidebar from "./Pages/Dashboard/Sidebar.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import Card from "./Components/card.jsx";
import TransactionDetails from "./Pages/TransactionDetailPage.jsx";
import Settings from "./Pages/SettingsPage.jsx";
import Transactions from "./Pages/AllTransaction.jsx";
import   AddTransaction  from "./Pages/AddTransactionPage";
function App() {
  return (
    <div  className="h-screen bg-slate-200" >
       {/*add transaction*/}
       <AddTransaction/>
    </div>
  )
}

export default App
