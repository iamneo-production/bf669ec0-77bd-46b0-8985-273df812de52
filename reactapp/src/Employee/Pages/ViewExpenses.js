import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";
import { FaEdit } from "@react-icons/all-files/fa/FaEdit";
import { BiSearchAlt2 } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import { MDBCol, MDBInput, MDBIcon, MDBRow } from "mdbreact";
import Button_grid from "./modal";
import "./ViewExpenses.css";
import { useState, useEffect } from "react";
import Sidebar from "./NavBar/navbar";
import axios from "axios";

function Hr_ViewExpenses(props) {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8081/expense")
      .then((response) => {
        console.log(response.data);
        setItems(response.data)})
      .catch(console.error);
  }, []);

  useEffect(() => console.log(query), [query]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query) {
      axios
        .get(`http://localhost:8081/expense/${query}`)
        .then((res) => {
          setItems([res.data]);
        })
        .catch((e) => {
          console.error(e);
          setItems([]);
        });
    } else {
    }
  };

  return (
    <>
      <Sidebar />
      <div className="ViewExpenses_hr">
        <div className="title_expenses">
          Expenses
          <div className="search_text_hr">
            <form onSubmit={handleSubmit} className="search-form">
              <input
                className="search-input"
                onChange={(e) => setQuery(e.target.value)}
              />
              <i className="fa fa-search search-icon"></i>
            </form>
            {/* </MDBCol> */}
          </div>{" "}
        </div>
        <div className="ViewExp">
          {items.length === 0 && <div className="no_data">No data found </div>}

          {items.length >= 1 &&
            items.map((data, i) => (
              <div className="card1" id="grid+${i}">
                <div className="status">
                  <h5>{data.status}</h5>
                </div>

                <h4 className="user_name">
                  <i>Expense Id: {data.expenseid}</i>
                </h4>
                {/* <h6>{data.userid}</h6> */}

                <Button_grid
                  data={data}
                  clickHandler={() => {
                    items[i].status = "paid";
                    setItems([...items]);
                  }}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Hr_ViewExpenses;
