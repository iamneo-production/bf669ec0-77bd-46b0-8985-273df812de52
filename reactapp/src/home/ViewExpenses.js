import "./ViewExpenses.css";
import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";
import { FaEdit } from "@react-icons/all-files/fa/FaEdit";
import { BiSearchAlt2 } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import { MDBCol, MDBInput, MDBIcon, MDBRow } from "mdbreact";
import Button_grid from "./manager_expenses/modal";
import { useState } from "react";
function ViewExpenses() {
  const [details, setDetails] = useState([
    { name: "Geetha Kumar", id: 1, ExpenseId: 10, Status: "Unpaid" },
    { name: "Gaunisha", id: 2, ExpenseId: 20, Status: "Unpaid" },
    { name: "Harish", id: 3, ExpenseId: 30, Status: "Unpaid" },
    { name: "Harsh Agarwal", id: 4, ExpenseId: 40, Status: "Unpaid" },
    { name: "Geetha palanisamy", id: 5, ExpenseId: 10, Status: "Unpaid" },
    { name: "Harsshanth", id: 6, ExpenseId: 20, Status: "Unpaid" },
    { name: "Karnika Sivani", id: 7, ExpenseId: 30, Status: "Unpaid" },
    { name: "Jaswanth solai", id: 8, ExpenseId: 40, Status: "Unpaid" },
  ]);
  return (
    <div className="ViewExpenses">
      <div className="title_expenses">
        Expenses
        {/* <div className="search_text"> */}
        {/* <MDBRow md="5"> */}
        {/* <div className="icon_search">
            <BiSearchAlt2 />
          </div> */}
        {/* <MDBInput hint="Search" type="text" containerClass="mt-0" /> */}
        {/* </MDBRow> */}
        {/* </div> */}
      </div>
      <div className="ViewExp">
        {details.map((data, i) => (
          <div className="card1">
            <div className="status">
              <h5>{data.Status}</h5>
            </div>
          \
            <h4 className="user_name">
              <i>{data.name}</i>
            </h4>
            <h6>{data.ExpenseId}</h6>

            <Button_grid
              data={data}
              clickHandler={() => {
                details[i].Status = "Paid";
                setDetails([...details]);
                // api call
                // true
                // false
                /*
                details[i].Status = "Unpaid";
                setDetails([...details]);
                */
              }}
            />
          </div>
        ))}
        ;
      </div>
    </div>
  );
}

export default ViewExpenses;
