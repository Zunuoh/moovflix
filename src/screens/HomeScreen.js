import React from 'react'
import { Row, Col} from 'react-bootstrap'
import SideScreen from './SideScreen'
import MainScreen from './MainScreen'


const HomeScreen = () => {
  return (
    <div>
        <Row>
            <Col sm={2}>
                <SideScreen/>
            </Col>
            <Col sm={8}>
                <MainScreen/>
            </Col>
        </Row>
    </div>
  )
}

export default HomeScreen;   