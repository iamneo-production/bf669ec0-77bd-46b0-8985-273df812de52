import "./AddExpenses.css";
import FileBase from "react-file-base64";
import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter as Router } from "react-router-dom";
import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";
import "mdbreact/dist/css/mdb.css";
import { Form } from "react-bootstrap";
import Sidebar from "./NavBar/navbar";
import axios from "axios";
import React, { useState } from "react";
/*
npm install --save cdbreact
npm install react-router-dom@5.2.0
npm install @react-icons/all-files --save
npm i @fortawesome/react-fontawesome
npm i font-awesome
npm install mdbreact
npm i react-icons
npm i material-design-icons-iconfont
*/
function Hr_AddExpenses() {
  const [expenses, setExpenses] = useState({
    userid: "",
    expenseid: "",
    billnumber: "",
    billcost: "",
    billimage: null,
    date_str: "",
    status: "Unpaid",
    remark: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setExpenses({
      ...expenses,
      [e.target.name]: value,
    });
    console.log(typeof value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ExpenseData = {
      userid: expenses.userid,
      expenseid: expenses.expenseid,
      billcost: expenses.billcost,
      billimage: expenses.billimage,
      billnumber: expenses.billnumber,
      remark: expenses.remark,
      date_str: expenses.datedon,
      datedon: "2022-03-31",
    };

    axios
      .post("http://localhost:8081/expense", ExpenseData)
      .then((response) => {
        console.log(response.status);
        console.log(response.expenses);
      });
      setExpenses({
        userid: "",
        expenseid: "",
        billnumber: "",
        billcost: "",
        billimage: null,
        date_str: "",
        status: "Unpaid",
        remark: "",
      });
  };
  return (
    <div className="App1">
      <Sidebar />
      <div className="App-header">
        <div className="mb-3" id="user_icon">
          <FaUserAlt />
          <h3 className="title_add">Add Expenses</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3" id="empid">
            <Form.Control
              size="ng"
              type="text"
              name="userid"
              value={expenses.userid}
              onChange={handleChange}
              placeholder="Emp id"
            />
          </div>
          <div className="mb-3" id="expenseid">
            <Form.Control
              size="ng"
              type="text"
              name="expenseid"
              value={expenses.expenseid}
              onChange={handleChange}
              placeholder="Expense id"
            />
          </div>
          <div className="mb-3" id="billid">
            <Form.Control
              size="ng"
              type="number"
              name="billnumber"
              value={expenses.billnumber}
              onChange={handleChange}
              placeholder="Bill id"
            />
          </div>
          <div className="mb-3" id="billcost">
            <Form.Control
              size="ng"
              type=" number"
              name="billcost"
              value={expenses.billcost}
              onChange={handleChange}
              placeholder="Bill Cost"
            />
          </div>

          <div className="mb-3" id="description">
            <Form.Control
              size="ng"
              type="text"
              name="remark"
              value={expenses.remark}
              onChange={handleChange}
              placeholder="Description"
            />
          </div>

          <div className="mb-3">
            <Form.Group controlId="dob">
              <Form.Control
                type="date"
                name="datedon"
                value={expenses.datedon}
                onChange={handleChange}
                placeholder="Date of issue"
              />
            </Form.Group>
          </div>

          <div className="mb-3">
            <Form.Group controlId="fileUpload">
              <span className="upload">Upload Receipt</span>
              {/* <input
                type="file"
                name="billimage"
                value={expenses.billimage}
                onChange={handleChange}
                className="form-control-file"
                id="exampleFormControlFile1"
              /> */}
              <FileBase
              type="file"
              name="billimage"
              value={expenses.billimage}
              multiple={false}
              onDone={({ base64 }) =>
              setExpenses({
                ...expenses,
                billimage: base64,
              })
              }
            />
            </Form.Group>
          </div>
          <div className="mb-1">
            <button type="submit" className="btn btn-primary" id="submit_btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Hr_AddExpenses;
