import React from 'react';
import '../styles/style.css';
import {Card, Container, Row, Col} from 'react-bootstrap'
import {icon, Icon} from 'evergreen-ui';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';

// const lisOfMovies=[{"id":"0", "name":"A Fall From Grace", "category":"Drama"}, {"id":"1", "name":"A Fall From Grace", "category":"Drama"}, {"id":"2", "name":"A Fall From Grace", "category":"Drama"},
// {"id":"3", "name":"A Fall From Grace", "category":"Drama"}, {"id":"4", "name":"A Fall From Grace", "category":"Drama"}]


const LinkPage = ()=>{
     const[movies, setMovies] = useState(null);
     const[loading, setLoading] = useState(false);
     useEffect(()=>{
         setLoading(true)
         axios.get('https://api.themoviedb.org/3/discover/movie?api_key=09f64a19d8a1ead17fb1701f58cd805a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
         .then(function(response){
            setLoading(false);
             setMovies(response.data.results.slice(0,8));
            
             console.log(response.data.results);
         })
         .catch(function(error){
             console.log(error);
         })

     })

    return (
    <div>
<div>
<Row>
    <Col sm={2} className="ro">
        <div className="contain">
        <p style={{paddingTop:20, paddingLeft:60, color:"#C7CCD1"}}>Telly</p>
        </div>

        <div className="contain">
            <p style={{marginTop:20, fontSize:8, paddingLeft:40, color:"#707885"}}>BROWSE TELLY</p>
        </div>
        
      
        <div className="contain">
            <span style={{fontSize:8, paddingLeft:40, color:"#C7CCD1", fontWeight:"bold"}}>DISCOVER</span>
        </div>
        <div className="contain">
            <span style={{fontSize:8, marginTop:1, paddingLeft:40, color:"#1B8AAD", fontWeight:"bold", paddingTop:10}}>TV & MOVIES</span>
        </div>
        <div className="contain">
            <span style={{fontSize:8, marginTop:1, paddingLeft:40, color:"#C7CCD1", fontWeight:"bold", paddingTop:10}}>POPULAR CLIPS</span>
        </div>
        <div className="contain">
            <span style={{fontSize:8, marginTop:1, paddingLeft:40, color:"#C7CCD1", fontWeight:"bold", paddingTop:10}}>WATCH LATER</span>
        </div>
        

        <div className="contain">
            <span style={{marginTop:40, fontSize:8, paddingLeft:40, color:"#707885"}}>CATEGORIES</span>
        </div>
        <Link to="/third">
        <div className="contain">
            <span style={{fontSize:8, paddingLeft:40, paddingLeft:40, color:"#707885", paddingTop:5, fontWeight:"bold"}}>Kuwait TV</span>
        </div>
        </Link>
        <Link to="/forth">
        <div className="contain">
            <span style={{fontSize:8, paddingTop:-95, paddingLeft:40, color:"#707885", paddingTop:5, fontWeight:"bold"}}>Free Shows</span>
        </div>
        </Link>
        <Link to="/fifth">
        <div className="contain">
            <span style={{fontSize:8, marginTop:1, paddingLeft:40, color:"#707885", paddingTop:5, fontWeight:"bold"}}>Arabic</span>
        </div>
        </Link>
        <Link to="/sixth">
        <div className="contain">
            <span style={{fontSize:8, marginTop:1, paddingLeft:40, color:"#707885", paddingTop:5, fontWeight:"bold"}}>Action</span>
        </div>
        </Link>
        <Link to="/forth">
        <div className="contain">
            <span style={{fontSize:8, marginTop:1, paddingLeft:40, color:"#707885", paddingTop:5, fontWeight:"bold"}}>Comedy</span>
        </div>
        </Link>
        <Link to="/third">
        <div className="contain">
            <span style={{fontSize:8, marginTop:1, paddingLeft:40, color:"#707885", paddingTop:5, fontWeight:"bold"}}>Drama</span>
        </div>
        </Link>
        <Link to="/forth">
        <div className="contain">
            <span style={{fontSize:8, marginTop:1, paddingLeft:40, color:"#707885", paddingTop:5, fontWeight:"bold"}}>Horror</span>
        </div>
        </Link>
        <Link to="/third">
        <div className="contain">
            <span style={{fontSize:8, marginTop:1, paddingLeft:40, color:"#707885", paddingTop:5, fontWeight:"bold"}}>Kids</span>
        </div>
        </Link>
        <Link to="/fifth">
        <div className="contain">
            <span style={{fontSize:8, marginTop:1, paddingLeft:40, color:"#707885", paddingTop:5, fontWeight:"bold"}}>Musical</span>
        </div>
        </Link>
        <Link to="/sixth">
        <div className="contain">
            <span style={{fontSize:8, marginTop:1, paddingLeft:40, color:"#707885", paddingTop:5, fontWeight:"bold"}}>TV Shows</span>
        </div>
        </Link>
        <Link to="/fifth">
        <div className="contain">
            <span style={{fontSize:8, marginTop:1, paddingLeft:40, color:"#707885", paddingTop:5, fontWeight:"bold"}}>Triller</span>
        </div>
        </Link>
    </Col>


<Col sm={10} className="yh">
   <div>
       <div style={{paddingTop:30}}>
           <span>
            <Icon icon="chevron-left"
            color="#2A353B"
            />
            <Link to="/second">
            <Icon icon="chevron-right"
            color="#51595E"/>
            </Link>
          
            </span>
            <span style={{marginLeft:760}}>
            <Icon icon="search"
            color="#8F93AB"/>
            </span>
            <span style={{marginLeft:20}}>
            <Icon icon="notifications"
            color="#8F93AB"/>
            </span>

            <span style={{paddingLeft:20, color:"#8F93AB"}}>
            <img src="iphone6.jpg" style={{width:20, height:20, borderWidth:1, borderRadius:20, marginRight:7}}/> 
               Lucinda McCarthy
            </span>
           
       </div>

       <div style={{paddingTop:30, color:"white"}}>
           Recommended For You
       </div>

    
     <div style={{display:"flex", flexDirection:"row", flex:"wrap"}}>
         {movies ? movies.map(movie=>{
             return(
                <div style={{paddingTop:30, paddingLeft:30}}> 
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} style={{width:100, height:120}}/>
                <span style={{color:"white", fontSize:10}}>{movie.title}</span>
                </div>
    
             )
         }) :(<span style={{color:"white"}}>Loading movies.....</span>) }
   
     </div>

     <div style={{paddingTop:30, color:"white"}}>
           Only on Telly
       </div>

       <div style={{display:"flex", flexDirection:"row"}}>
       
         {movies ? movies.map(movie=>{
             return(
                <div style={{paddingTop:30, paddingLeft:30}}> 
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} style={{width:100, height:120}}/>
                <span style={{color:"white", fontSize:10}}>{movie.title}</span>
                </div>
    
             )
         }):(<span style={{color:"white"}}>Loading movies.....</span>)}
     </div>

   </div>
    </Col>
  </Row>
</div>
   </div>
    )
}

export default LinkPage;