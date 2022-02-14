import React from 'react';
import { Col, Row, Form, Button} from 'react-bootstrap';
import SideScreen from '../main/SideScreen';
import {Link} from 'react-router-dom';
import { Home } from 'react-feather';
import profileImage from '../../assets/zu.jpeg';

const ManageProfile = () => {
    return (
    <div>
    <Row>
        <Col sm={2} style={{backgroundColor:"#098193"}}>
            <SideScreen/>
        </Col>
        <Col sm={10} style={{padding:30}}>
        <Link to="/">
            <Home color='#098193'/>
        </Link>
        <div style={{fontWeight:"bold", fontSize:25, marginTop:20}}>
                    Edit Profile
        </div>
        <div  style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", marginTop:-60}}>
                <div className='profileImage'>
                <img src={profileImage} style={{width:100, height:100, borderRadius:80}} alt=''/>
                </div>

            <div>
            <Form>
                  <div style={{display:"flex", marginTop:30}}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail" style={{marginLeft:20}}>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last name" />
                    </Form.Group>
                  </div>
 

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Password" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control type="number" placeholder="Number" />
                </Form.Group>
    
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="Address" placeholder="Address" />
                </Form.Group>

                <div style={{display:"flex"}}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>City </Form.Label>
                        <Form.Control type="text" placeholder="Enter city" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail" style={{marginLeft:20}}>
                        <Form.Label>State</Form.Label>
                        <Form.Control type="text" placeholder="Enter state" />
                    </Form.Group>
                  </div>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

            
                <Button type="submit" style={{backgroundColor:"#098193", }}>
                    Submit
                </Button>
            </Form>
                  
            </div>
        </div>
       
        </Col>
    </Row>
</div>
  )
}

export default ManageProfile;