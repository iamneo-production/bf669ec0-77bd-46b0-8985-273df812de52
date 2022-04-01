// eslint-disable-next-line 
import logo from "./logo.svg";
import "./App.css";
import React from "react";
// eslint-disable-next-line 
const json = {
  data: {
    available: {
      profileOne: {
        a: 14,
        b: 14,
        c: 0,
        d: 0,
        e: 18,
      },
      profileTwo: {
        a: 13,
        b: 9,
        c: 0,
        d: 0,
        e: 18,
      },
    },
  },
};
// eslint-disable-next-line 
const header = ["pro", "a", "b", "c", "d", "e"];
class App extends React.Component {
  render() {
    return (
      <div class="wrap">
        <div class="app-bar">
          <button class="submit">Submit</button>
        </div>
        <div class="content">
          <p class="title under">Admin : </p>
          <p class="title">Home : </p>

          <div class="main-content">
            <div class="table-cont">
              <div class="heading">
                <p class="t-cc">Tariff Manager</p>
                <div class="enclose">
                  <p class="c1">Home</p>
                  <p class="c1 col-1">Logout</p>
                </div>
              </div>

              <div class="filter-wrap">
                <input
                  type="text"
                  class="search"
                  placeholder="Type here to search"
                ></input>

                <button class="btn1">Search</button>

                <button class="btn1">Add</button>
              </div>

              <div class="table-wrap">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">S.NO <p class="border1"></p></th>
                      <th scope="col">Name <p class="border1"></p></th>
                      <th scope="col">Role <p class="border1"></p></th>
                      <th scope="col">Options</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>xyz@gmail.com</td>
                      <td><i class="fa fa-trash"></i><i class="fa fa-edit"></i></td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>xyz@gmail.com</td>
                      <td><i class="fa fa-trash"></i><i class="fa fa-edit"></i></td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>xyz@gmail.com</td>
                      <td><i class="fa fa-trash"></i><i class="fa fa-edit"></i></td>
                    </tr>
                  </tbody>
                </table>


                <div class="ecard">

            <p class="t-cc1">Add/Edit Detail</p>


            <input class="text-cc" placeholder="Name"></input>

            <input class="text-cc" placeholder="Email"></input>

            <input class="text-cc" placeholder="Password"></input>

            <input class="text-cc" placeholder="Experience"></input>

            <input class="text-cc" placeholder="Specialist"></input>


            <button class="s1">Update</button>






                </div>



              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
