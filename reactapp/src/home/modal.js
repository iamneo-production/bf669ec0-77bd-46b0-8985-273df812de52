import React, { useState } from "react";
import { Button, Modal, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

// import { Link } from "gatsby";
import "./manager_expenses/modal";

function MydModalWithGrid(props) {
  const [clicked, setClicked] = useState(false);
  const data = props.data;
  const clickHandler = props.clickHandler;
 
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
              .col-xs-6 .col-md-4
            </Col>
          </Row>

          <Row>
            <Col xs={1} md={6}>
              <h4>Employee Name</h4>
            </Col>
            <Col xs={2} md={6}>
              .col-xs-6 .col-md-4
            </Col>
          </Row>

          <Row>
            <Col xs={7} md={6}>
              <h4>Expense Id</h4>
            </Col>
            <Col xs={2} md={6}>
              .col-xs-6 .col-md-4
            </Col>
          </Row>

          <Row>
            <Col xs={7} md={6}>
              <h4>Bill Number</h4>
            </Col>
            <Col xs={2} md={6}>
              .col-xs-6 .col-md-4
            </Col>
          </Row>
          <Row>
            <Col xs={7} md={6}>
              <h4>Employee Id</h4>
            </Col>
            <Col xs={2} md={6}>
              .col-xs-6 .col-md-4
            </Col>
          </Row>

          <Row>
            <Col xs={7} md={6}>
              <h4>Bill Cost</h4>
            </Col>
            <Col xs={2} md={6}>
              .col-xs-6 .col-md-4
            </Col>
          </Row>
          <Row>
            <Col xs={7} md={6}>
              <h4>Dated on</h4>
            </Col>
            <Col xs={2} md={6}>
              .col-xs-6 .col-md-4
            </Col>
          </Row>

          <Row>
            <Col xs={7} md={6}>
              <h4>Receipt</h4>
            </Col>
            <Col xs={2} md={6}>
              .col-xs-6 .col-md-4
            </Col>
          </Row>
          {/* <div className="Icon_edit">
            <FaEdit onClick={"./AddExpenses.js"} />
          </div> */}
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Link to="/EditExpenses">
          <Button onClick={props.onHide} variant="primary">
            Edit
          </Button>
        </Link>
      
        <Button onClick={props.onHide} variant="danger">
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
        variant="rgb(110, 20, 133)"
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
