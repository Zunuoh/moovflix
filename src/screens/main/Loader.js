import React from "react";
import {Spinner} from 'react-bootstrap';

const Loader = () => {
  return (
    <div className="loader">
      <Spinner animation="grow" />
      <Spinner animation="grow" />
      <Spinner animation="grow" />
    </div>
  )
}
export default Loader;