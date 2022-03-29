import React from "react";
import { Row, Col } from "react-bootstrap";
import SideScreen from "../main/SideScreen";
import MainScreen from "../main/MainScreen";

const HomeScreen = () => {
  return (
    <div>
      <Row>
        <Col
          sm={2}
          style={{ backgroundColor: "#098193" }}
          className="sideScreen"
        >
          <SideScreen />
        </Col>
        <Col sm={10} className="mainScreen">
          <MainScreen />
        </Col>
      </Row>
    </div>
  );
};

export default HomeScreen;
