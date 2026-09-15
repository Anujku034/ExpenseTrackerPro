import {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Login from "./Pages/login.jsx";
import Register from "./Pages/Register.jsx";
import Header from "./Pages/Dashboard/Header.jsx";
import Sidebar from "./Pages/Dashboard/sidebar.jsx";
import Dashboard from "./Pages/Dashboard/dashboard.jsx";
import Card from "./Components/card.jsx";
import TransactionDetails from "./Pages/TransactionDetailPage.jsx";
import Settings from "./Pages/SettingsPage.jsx";
import Transactions from "./Pages/AllTransaction.jsx";
import   AddTransaction  from "./Pages/AddTransactionPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
