import
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./login.css";
import axios from "axios";
import React, { useState } from "react";

function Signup() {
  const [users, setUsers] = useState({
    userid: "",
    emailid: "",
    username: "",
    password: "",
    mobilenumber: "",
    role: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setUsers({
      ...users,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      userid: users.userid,
      emailid: users.emailid,
      username: users.username,
      password: users.password,
      mobilenumber: users.mobilenumber,
      active: 1,
      role: users.role,
    };

    axios.post("http://localhost:8000/users", userData).then((response) => {
      console.log(response.status);
      console.log(response.users);
    });
    // .then(response => setUserId(response.data.id));
  };

  return (
    <div className="myStyle">
      <div style={{ display: "flex", height: "100vh" }}>
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "45%",
          }}
        >
          <p className="title">
            <h1 style={{ color: "white", fontSize: "60px" }}>
              <strong>Tariff Manager</strong>
            </h1>
          </p>
        </div>
        <center
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
          }}
        >
          <div
            className="colors2"
            style={{
              display: "flex",
              flexDirection: "column",
              padding: " 20px 50px",
              borderRadius: "70px",
            }}
          >  <span></span>
                <label>Enter Email</label>
              </div>
              <div className="txt_field" name="username">
                <input
                  type="text"
                  name="username"
                  value={users.username}
                  onChange={handleChange}
                  required
                ></input>
                <span></span>
                <label>Enter Username</label>
              </div>
              <div className="txt_field" name="userid">
                <input
                  type="text"
                  name="userid"
                  value={users.userid}
                  onChange={handleChange}
                  required
                ></input>
                <span></span>
                <label>Enter User ID</label>
              </div>
              <div className="txt_field" name="mobilenumber">
                <input
                  type="number"
                  name="mobilenumber"
                  value={users.mobilenumber}
                  onChange={handleChange}
                  required
                ></input>
                <span></span>
                <label>Enter Mobilenumber</label>
              </div>
              <div className="txt_field" name="password">
                <input
                  type="password"
                  name="password"
                  value={users.password}
                  onChange={handleChange}
                  required
                ></input>
                <span></span>
                <label>password</label>
              </div>
              <div className="txt_field" id="Confirm Password">
                <input type="password" required></input>
                <span></span>
                <label>Confirm Password</label>
              </div>

              <div className="dropdown">
                <label for="role">Role:</label>
                <select id="role" name="role">
                  <option value="employee" name="role">
                    {" "}
                    Employee
                  </option>
                  <option value="hr" name="role">
                    HR
                  </option>
                </select>
              </div>
              {/* <div className="dropdown-menu" aria-labelledby="actions">
                  <a className="dropdown-item" href="#">
                    Employee
                  </a>
                  <a className="dropdown-item" href="#">
                    HR
                  </a>
                </div> */}
              {/* </div> */}
              <input type="submit" value="Sign up"></input>
              <div className="signup_link">
                Have an account?
                <a>
                  <Link to="/">sign in </Link>
                </a>
              </div>
            </form>
          </div>
        </center>
      </div>
    </div>
  );
}

// const myStyle = {
//   backgroundImage:
//     "url('https://drive.google.com/uc?export=download&id=1uKvZY6-os_GEjvrWVEr4h0D4AtN2r1LB')",
//   backgroundSize: "cover",
//   backgroundRepeat: "no-repeat",
// };

export default Signup;

