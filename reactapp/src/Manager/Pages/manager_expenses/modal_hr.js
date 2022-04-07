import React, { useState } from "react";
import { Button, Modal, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";
import { FaEdit } from "@react-icons/all-files/fa/FaEdit";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
// import { Link } from "gatsby";
import axios from "axios";
import "./modal.css";

function MydModalWithGrid(props) {
  const [clicked, setClicked] = useState(false);
  const [query, setQuery] = useState("");

  const data = props.data;
  const clickHandler = props.clickHandler;

  const updateExpense = (expenses, e) => {
    const updated_data = {
      status: "paid",
      userid: expenses.userid,
      expenseid: expenses.expenseid,
      billcost: expenses.billcost,
      billimage: expenses.billimage,
      billnumber: expenses.billnumber,
      remark: expenses.remark,
      date_str: expenses.datedon,
      datedon: expenses.datedon,
    };
    axios
      .put(`http://localhost:8081/expense/${data.expenseid}`, updated_data)
      .then((res) => {
        console.log(res);
        console.log(res.data);

        // const posts = this.state.posts.filter(item => item.id !== id);
        // this.setState({ posts });
      });
  };

  const deleteExpense = (id, e) => {
    axios.delete(`http://localhost:8081/expense/${id}`).then((res) => {
      console.log(res);
      console.log(res.data);

      // const posts = this.state.posts.filter(item => item.id !== id);
      // this.setState({ posts });
    });
  };
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton className="modal_details">
        <Modal.Title id="contained-modal-title-vcenter">
          Expense Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          {/* <div className="logo_user">
            <FaRegUserCircle />
          </div> */}

          <Row>
            <Col xs={1} md={6}>
              <h4>Employee Id</h4>
            </Col>
            <Col xs={2} md={6}>
              {data.userid}
            </Col>
          </Row>

          <Row>
            <Col xs={7} md={6}>
              <h4>Expense Id</h4>
            </Col>
            <Col xs={2} md={6}>
              {data.expenseid}
            </Col>
          </Row>

          <Row>
            <Col xs={7} md={6}>
              <h4>Bill Number</h4>
            </Col>
            <Col xs={2} md={6}>
              {data.billnumber}
            </Col>
          </Row>

          <Row>
            <Col xs={7} md={6}>
              <h4>Bill Cost</h4>
            </Col>
            <Col xs={2} md={6}>
              {data.billcost}
            </Col>
          </Row>
          <Row>
            <Col xs={7} md={6}>
              <h4>Dated on</h4>
            </Col>
            <Col xs={2} md={6}>
              {data.datedon}
            </Col>
          </Row>
          <Row>
            <Col xs={7} md={6}>
              <h4>Status</h4>
            </Col>
            <Col xs={2} md={6}>
              {data.status}
            </Col>
          </Row>

          <Row>
            <Col xs={7} md={6}>
              <h4>Receipt</h4>
            </Col>
            <Col xs={2} md={6}>
            <img src={data.billimage} />
            </Col>
          </Row>
          {/* <div className="Icon_edit">
            <FaEdit onClick={"./AddExpenses.js"} />
          </div> */}
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Link to="/manager/AddExpenses">
          <Button onClick={props.onHide} variant="primary">
            Edit
          </Button>
        </Link>
        <Button
          // variant={clicked ? "secondary" : "primary"}
          className="paid_btn"
          variant="purple"
          onClick={((e) => updateExpense(data, e), () => setClicked(true))}
          // disabled={data.status === "paid" || "Paid"}
          disabled={clicked}

          // onClick={clickHandler}
        >
          Paid
        </Button>
        <Button
          onClick={(e) => {
            console.log("del");
            deleteExpense(data.expenseid, e)}}
          // onChange={(e) => setQuery(e.target.value)}
          variant="danger"
        >
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function Button_grid(props) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button
        className="btn_view"
        variant=" rgb(110, 20, 133)"
        onClick={() => setModalShow(true)}
      >
        View
      </Button>

      <MydModalWithGrid
        data={props.data}
        clickHandler={props.clickHandler}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Button_grid;

// vhasbhjcas
