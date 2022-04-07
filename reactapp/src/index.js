import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import AddExpenses from "./home/AddExpenses";
// import ViewExpenses from "./home/ViewExpenses";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
// import Sidebar from "./NavBar/navbar";
// import Hr_ViewExpenses from "./home/manager_expenses/hr_ViewExpenses";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
