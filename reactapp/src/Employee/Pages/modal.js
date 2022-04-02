import React, { useState, useEffect } from "react";
import { Button, Modal, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function MydModalWithGrid(props) {
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
              <h4>Receipt</h4>
            </Col>
            <Col xs={2} md={6}>
              {/* <img
                src={
                  "data:image/png;base64," +
                  Buffer.from(data.billimage, "base64")
                } 
              />*/}
              {/* URL.createObjectURL({data.billimage}) */}
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Link to="/employee/AddExpenses">
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
