import "./AddExpenses.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter as Router } from "react-router-dom";
import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";
import "mdbreact/dist/css/mdb.css";
import React from "react";
import { Form } from "react-bootstrap";


function EditExpenses() {
  return (
    <div className="App1">
      <div className="App-header">
        <div className="mb-3" id="user_icon">
          <FaUserAlt />
          <h3 className="title_add">Edit Expenses</h3>
        </div>
        <form>
          <div className="mb-3" id="empid">
            <Form.Control size="ng" type="text" placeholder="Emp id" />
          </div>
          <div className="mb-3" id="expenseid">
            <Form.Control size="ng" type="number" placeholder="Expense id" />
          </div>
          <div className="mb-3" id="billid">
            <Form.Control size="ng" type="number" placeholder="Bill id" />
          </div>
          <div className="mb-3" id="billcost">
            <Form.Control size="ng" type=" number" placeholder="Bill Cost" />
          </div>

          <div className="mb-3" id="description">
            <Form.Control size="ng" type="text" placeholder="Description" />
          </div>

          <div className="mb-3">
            <Form.Group controlId="dob">
              <Form.Control
                type="date"
                name="date"
                placeholder="Date of issue"
              />
            </Form.Group>
          </div>

          <div className="mb-3">
            <Form.Group controlId="fileUpload">
              <input
                type="file"
                name="Receipt"
                className="form-control-file"
                id="exampleFormControlFile1"
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
export default EditExpenses;
