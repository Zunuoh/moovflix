import React from 'react';
import { Col, Row} from 'react-bootstrap';
import SideScreen from '../main/SideScreen';
import HeaderScreen from '../main/HeaderScreen';
import { Home } from 'react-feather';

const ManageProfile = () => {
  return (
    <div>
    <Row>
        <Col sm={2} style={{backgroundColor:"#098193"}}>
            <SideScreen/>
        </Col>
        <Col sm={10} style={{padding:30}}>
        <Home/>
        <div style={{fontWeight:"bold", fontSize:25, marginTop:20}}>
                    Edit Profile
        </div>
        <div  style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", marginTop:-40}}>
                <div className='profileImage'>jddd</div>
                <div>ddddddddddddddddddddddddddddddddddddidih</div>
        </div>
       
        </Col>
    </Row>
</div>
  )
}

export default ManageProfile;