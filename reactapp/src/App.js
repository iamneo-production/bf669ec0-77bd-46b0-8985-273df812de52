import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddExpenses from "./Employee/Pages/AddExpenses";
import ViewExpenses from "./Employee/Pages/ViewExpenses";
import Hr_ViewExpenses from "./Manager/Pages/manager_expenses/hr_ViewExpenses";
import Hr_AddExpenses from "./Manager/Pages/AddExpenses";
import Login from "./login/login";
import Signup from "./login/signup";

export default function App() {
  return (
    <>
      {/* <Sidebar /> */}
      <Router>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/employee/Addexpenses" exact element={<AddExpenses />} />

          <Route
            path="/employee/ViewExpenses"
            exact
            element={<ViewExpenses />}
          />
          <Route
            path="manager/Hr_ViewExpenses"
            exact
            element={<Hr_ViewExpenses />}
          />
          <Route
            path="manager/Hr_AddExpenses"
            exact
            element={<Hr_AddExpenses />}
          />
        </Routes>
      </Router>
    </>
  );
}
