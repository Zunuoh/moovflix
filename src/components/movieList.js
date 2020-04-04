import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import '../styles/style.css';
import {icon, Icon} from 'evergreen-ui';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';

const MovieList =()=>{
  const[listOfMovies, setListofMovies] = useState(null);
  const[loadingDate, setLoadingData] = useState(false);
  const[pictures, setPictures] = useState(null);
  useEffect(()=>{
    setLoadingData(true)
    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=09f64a19d8a1ead17fb1701f58cd805a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2')
    .then(function(response){
       setLoadingData(false);
        setListofMovies(response.data.results.slice(0,3));
        setPictures(response.data.results.slice(0,1))
       
        console.log(response.data.results);
    })
    .catch(function(error){
        console.log(error);
    })

})
    return(
    <Row>
    <Col>
    <div style={{paddingTop:30, marginLeft:70}}>
              <span>
                <Link to="/">
                <Icon icon="arrow-left"/>
                </Link>
             
              </span>
              <span style={{marginLeft:10}}>
                Back Home
               </span>
             
               <div style={{paddingTop:50}}>
              {pictures ? pictures.map(picture=>{
             return(
                <div style={{paddingTop:30, paddingLeft:30}}> 
                <img src={`https://image.tmdb.org/t/p/w500${picture.poster_path}`} style={{width:"80%", height:"80%"}}/>
                <span style={{color:"white", fontSize:10, padding:10, paddingTop:10}}>{picture.title}</span>
              
                </div>
    
             )
         }) :(<span>Loading movies</span>) }
              </div>
    </div>
    </Col>
    <Col xs={7}>
        <div style={{paddingTop:30, marginRight:90}}>
            <span style={{marginLeft:70}}>
             Film Selection
             </span>
             <span style={{paddingLeft:90}}>
                Movie Review
             </span>
             <span style={{paddingLeft:100}}>
                My Home
             </span>
        </div>

        {/* here   */}
        <div style={{padding:30}}>
        <div style={{paddingTop:50}} className="ghost">
            <span style={{fontSize:30, fontWeight:"bold"}}>Daughter of Darkness 2</span>
            <span style={{paddingLeft:"50%"}}>
            <Icon icon="heart"
            size={30}
            color="red"/>
            </span>
        </div>
        <div style={{paddingTop:5}}>
            <Icon icon="star" style={{paddingLeft:5, color:"#FBC91D"}}/>
            <Icon icon="star" style={{paddingLeft:5, color:"#FBC91D"}}/>
            <Icon icon="star" style={{paddingLeft:5, color:"#FBC91D"}}/>
            <Icon icon="star" style={{paddingLeft:5, color:"#FBC91D"}}/>
            <Icon icon="star-empty" style={{paddingLeft:5}}/>
            <span style={{paddingLeft:10, fontWeight:"bold"}}>8.6</span>
        </div>

        <div style={{paddingTop:20}}>
            <span style={{fontWeight:"bold"}}>
                Type: Action/Science Fiction/Crime
            </span>
        </div>
        <div>
            <span style={{fontWeight:"bold"}}>
                Producer Country/Region: USA
                <Button variant="outline-secondary" style={{marginLeft:260, marginBottom:5}}>
                  <Icon icon="plus"/>
                  <span style={{fontSize:10, fontStyle:"cursive"}}>Collection</span>
                </Button>
            </span>
        </div>

        <hr/>

        <div style={{paddingTop:60}}>
        <span style={{fontSize:10}}>
        {pictures ? pictures.map(picture=>{
             return(
                <div style={{paddingLeft:30}}> 
                {/* <img src={`https://image.tmdb.org/t/p/w500${picture.poster_path}`} style={{width:"80%", height:"80%"}}/> */}
                <span style={{color:"black", fontSize:10}}>{picture.overview}</span>
                
                </div>
    
             )
         }) :(<span>Loading discription</span>) }
           </span>
           
        </div>
        </div>
     
    </Col>
    <Col className="siderr">
        <div style={{paddingTop:70, borderBottomColor:"yellow", borderBottomWidth:1}}>
            <span style={{color:"white"}}>
            Movie Recommendation
            </span>
            <hr style={{backgroundColor:"#51595E", width:220}}/>
        </div>

<Row>
{listOfMovies ? listOfMovies.map(listOfMovie=>{
             return(
                <div style={{paddingTop:30, paddingLeft:30}}> 
                <img src={`https://image.tmdb.org/t/p/w500${listOfMovie.poster_path}`} style={{width:100, height:120}}/>
                <span style={{color:"white", fontSize:10, padding:10, paddingTop:10}}>{listOfMovie.title}</span>
{/*                
                <Icon icon="star" style={{paddingLeft:5, color:"#FBC91D"}}/>
            <Icon icon="star" style={{paddingLeft:5, color:"#FBC91D"}}/>
            <Icon icon="star" style={{paddingLeft:5, color:"#FBC91D"}}/>
            <Icon icon="star" style={{paddingLeft:5, color:"#FBC91D"}}/>
            <Icon icon="star-empty" style={{paddingLeft:5}}/> */}
            {/* <Button variant="outline-secondary" >Ticket</Button> */}
                
               
              
              
                </div>
    
             )
         }) :(<span style={{color:"white"}}>Loading movies...</span>) }

  </Row>
        
    </Col>
  </Row>
    );
}

export default MovieList;