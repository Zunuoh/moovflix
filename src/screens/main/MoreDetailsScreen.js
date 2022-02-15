import React from 'react';
import {Row, Col} from 'react-bootstrap';
// import cartoon from '../../assets/cartoon2.png';
// import axios from 'axios'

const MoreDetailsScreen = () => {
    // const [filmDetails, setFilmDetails] = useState("");

    // const getFilmDetails = async() => {
    //     const response = await axios("https://ghibliapi.herokuapp.com/films", {
    //         params: {
    //             _limit : 1
    //         }
    //     })
    // setFilmDetails(response.data)
    // }
  return (
    <div>
    <Row>
    <Col sm={4}>
        <div style={{minHeight:"100vh"}}>
            <div  className='moreDetailsImageContainer'>
                dudhgd
            </div>
        </div>
    </Col>
    <Col sm={8}>
        <div style={{minHeight:"100vh"}}>
             <div  className='moreDetailsInformationContainer'>
               cjc
            </div>
        </div>
        
    </Col>
  </Row>
    </div>
  )
}

export default MoreDetailsScreen