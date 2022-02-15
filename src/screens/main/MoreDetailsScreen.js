import React, {useState, useEffect} from 'react';
import {Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Rating} from '@mui/material';
import { ArrowLeft } from 'react-feather';
import cartoon from '../../assets/cartoon2.png';
import axios from 'axios'

const MoreDetailsScreen = () => {
    const [filmDetails, setFilmDetails] = useState("");

    const getFilmDetails = async() => {
        const response = await axios("https://ghibliapi.herokuapp.com/films", {
            params: {
                _limit : 1
            }
        })
    setFilmDetails(response.data)
    }
    useEffect(()=>{
        getFilmDetails();
    }, [])
  return (
    <div style={{padding:20, overflowY:"hidden"}}>
    <Link to="/">
    <ArrowLeft/>
    </Link>
    <Row>
    <Col sm={4}>
        <div style={{minHeight:"100vh", padding:20}}>
            <div  className='moreDetailsImageContainer'>
                <img src={cartoon} alt="" className='moreDetailsImage'/>
            </div>
        </div>
    </Col>
    <Col sm={8}>
        <div style={{minHeight:"100vh", display:"flex", justifyContent:"center"}}>
             <div  className='moreDetailsInformationContainer'>
               {filmDetails && filmDetails.map(filmDetail =>{
                return(
                <div >
                <div style={{fontSize:20}}>
                        {filmDetail.title}
                </div>
                <div className='movieDetailsDescription'>
                    {filmDetail.description}
                </div>
                
                <div style={{marginTop:20}}>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                </div>

                <div style={{marginTop:20}}> 
                <div style={{fontFamily: 'Montserrat, sans-serif', fontWeight:"bold"}}>Director:</div>
                <div style={{fontFamily: 'Montserrat, sans-serif'}}>{filmDetail.director}</div>
                <div style={{marginTop:20,fontFamily: 'Montserrat, sans-serif', fontWeight:"bold" }}>Producer:</div>
                <div style={{fontFamily: 'Montserrat, sans-serif'}}>{filmDetail.producer}</div>
                <div style={{marginTop:20, fontFamily: 'Montserrat, sans-serif', fontWeight:"bold"}}>Release Date:</div>
                <div style={{fontFamily: 'Montserrat, sans-serif'}}>{filmDetail.release_date}</div>
                <div style={{marginTop:20, fontFamily: 'Montserrat, sans-serif', fontWeight:"bold"}}>Run Time:</div>
                <div style={{fontFamily: 'Montserrat, sans-serif'}}>{filmDetail.running_time}</div>
                </div>

                </div>
                   )
               })}
            </div>
        </div>
    </Col>
  </Row>
    </div>
  )
}

export default MoreDetailsScreen