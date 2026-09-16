import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/login.jsx";
import Register from "./Pages/Register.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import TransactionDetails from "./Pages/TransactionDetailPage.jsx";
import Settings from "./Pages/SettingsPage.jsx";
import Transactions from "./Pages/AllTransaction.jsx";
import   AddTransaction  from "./Pages/AddTransactionPage";
import DashboardLayout from "./Pages/DashboardLayout.jsx";
import Reports from "./Pages/Report.jsx";
import Categories from "./Pages/Categories.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element ={<DashboardLayout />}>
           
              <Route path = "/dashboard" element = {<Dashboard />} />
              <Route path = "/transactions" element = {<Transactions/>}/>
              <Route path = "/add-transaction" element = {<AddTransaction/>} />
              <Route path = "/settings" element ={<Settings/>} />
              <Route path = "/transaction/:id" element = {<TransactionDetails />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/reports" element={<Reports />} />

           
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
