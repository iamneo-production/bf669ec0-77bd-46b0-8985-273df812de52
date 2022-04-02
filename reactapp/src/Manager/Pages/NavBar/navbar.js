import React from "react";
import "./navbar.css";

const Sidebar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="nav-head">Tariff Manager</div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/manager/Hr_AddExpenses">
                Add Expenses
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/manager/Hr_ViewExpenses">
                All Expenses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/manager/Hr_ViewExpenses">
                My Expenses
              </a>
            </li>
            <li>
              <a className="nav-link" href="/">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
