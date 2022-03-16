import React from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import SideScreen from "../main/SideScreen";
import { Link } from "react-router-dom";
import { Home } from "react-feather";
import profileImage from "../../assets/zu.jpeg";

const ManageProfile = () => {
  return (
    <div>
      <Row>
        <Col sm={2} style={{ backgroundColor: "#098193" }}>
          <SideScreen />
        </Col>
        <Col sm={10} style={{ padding: 30 }}>
          <Link to="/">
            <Home color="#098193" />
          </Link>
          <div
            style={{
              fontWeight: "bold",
              fontSize: 25,
              marginTop: 20,
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Edit Profile
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              marginTop: -60,
            }}
          >
            <div className="profileImage">
              <img
                src={profileImage}
                style={{ width: 100, height: 100, borderRadius: 80 }}
                alt=""
              />
            </div>

            <div>
              <Form>
                <div style={{ display: "flex", marginTop: 30 }}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="formText">First Name</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail"
                    style={{ marginLeft: 20 }}
                  >
                    <Form.Label className="formText">Last Name</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </div>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="formText">Email</Form.Label>
                  <Form.Control type="email" />
                  <Form.Text className="text-muted formText">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="formText">Contact Number</Form.Label>
                  <Form.Control type="number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="formText">Address</Form.Label>
                  <Form.Control type="Address" />
                </Form.Group>

                <div style={{ display: "flex" }}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="formText">City </Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail"
                    style={{ marginLeft: 20 }}
                  >
                    <Form.Label className="formText">State</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </div>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="formText">Password</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>

                <Button
                  type="submit"
                  style={{
                    backgroundColor: "#098193",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ManageProfile;
