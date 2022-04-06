import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddExpenses from "./home/AddExpenses";
import ViewExpenses from "./home/ViewExpenses";
import EditExpenses from "./home/Editexpenses";
import Sidebar from "./NavBar/navbar";
import Hr_ViewExpenses from "./home/manager_expenses/hr_ViewExpenses";
import LoginPage from "./pages/LoginPage";

export default function App() {
  return (
    <>
      <Sidebar />
      <Router>
        <Routes>
          <Route exact path="/" component={LoginPage}/>
          <Route path="/LoginPage" exact element={<LoginPage />} />
          
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/signup" component={Signup}/>
          <Route path="/Addexpenses" exact element={<AddExpenses />} />
          <Route path="/EditExpenses" exact element={<EditExpenses />} />
          <Route path="/ViewExpenses" exact element={<ViewExpenses />} />
          <Route path="/" exact element={<Hr_ViewExpenses />} />
        </Routes>
      </Router>
    </>
  );
}
