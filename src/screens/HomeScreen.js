import React from 'react'
import { Row, Col} from 'react-bootstrap'
import SideScreen from './SideScreen'
import MainScreen from './MainScreen'


const HomeScreen = () => {
  return (
    <div>
        <Row>
            <Col sm={2} style={{backgroundColor:"#098193"}}>
                <SideScreen/>
            </Col>
            <Col sm={10}>
                <MainScreen/>
            </Col>
        </Row>
    </div>
  )
}

export default HomeScreen;   