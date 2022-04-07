import "./ViewExpenses.css";
import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";
import { FaEdit } from "@react-icons/all-files/fa/FaEdit";
import { BiSearchAlt2 } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import { MDBCol, MDBInput, MDBIcon, MDBRow } from "mdbreact";
import Button_grid from "./modal";
import { useState, useEffect } from "react";
import Sidebar from "../NavBar/navbar";
import axios from "axios";

function ViewExpenses(props) {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8081/expense")
      .then((response) => setItems(response.data))
      .catch(console.error);
  }, []);

  useEffect(() => console.log(query), [query]);

  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   setItems({
  //     ...items,
  //     [e.target.name]: value,
  //   });
  //   console.log(typeof value);
  // };

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
      <div className="ViewExpenses">
        <div className="title_expenses">
          Expenses
          <div className="search_text_hr">
            {/* <BiSearchAlt2 /> */}
            {/* <MDBInput
              icon="search"
              label="Search"
              type="text"
              // name="expenseid"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onInput={console.log}
              onIconClick={console.log}
              containerClass="mt-0"
            /> */}
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
          {items.map((data, i) => (
            <div className="card1" id="grid">
              <div className="status">
                <h5>{data.status}</h5>
              </div>

              <h4 className="user_name">
                <i>{data.userid}</i>
              </h4>
              <span>{data.expenseId}</span>

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

export default ViewExpenses;
