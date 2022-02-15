import React, { useEffect, useState } from 'react';
import HeaderScreen from './HeaderScreen';
import cartoon from '../../assets/cartoon2.png';
import { PlusCircle } from 'react-feather';
import {Card} from 'react-bootstrap';
import { Tooltip, IconButton, Rating } from '@mui/material';
import axios from 'axios';

// const api = axios.create({
//   baseURL : `https://movie-database-imdb-alternative.p.rapidapi.com/`
// })

const MainScreen = () => {   
  const [films, setFilms] = useState("");
  // const [loading, setLoading] = useState(false)

  const getFilms = async() =>{
    const response = await axios("https://ghibliapi.herokuapp.com/films", {
          params: {
            _limit: 3
           }
        })
    setFilms(response.data)
  }
  useEffect(()=>{
    getFilms();
  }, []);

return (
    <div>
       <HeaderScreen/>
       <div className='mainScreenContainer'>
      <div style={{marginTop:2, fontWeight:"bold",  fontFamily: 'Montserrat, sans-serif'}}>
        Recommended for you
      </div>
      <div style={{display:"flex", flexWrap:"wrap", }}>
      {films && films.map(film =>{
        return(
          <Card className='cardContainer'>
          <Card.Text style={{display:"flex", justifyContent:"center", alignItems:"center", fontWeight:"bold", fontFamily: 'Montserrat, sans-serif', fontSize:15}}>
            MOVIE RECOMMENDATION
          </Card.Text>
          <div className='cardImageContainer'>
          <Card.Img variant="top" src={cartoon} style={{width:250, height:270}}/>
          </div>
          <Card.Body>
            {/* <Card.Title >kjlk</Card.Title> */}
            <Card.Title style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:2}}>{film.original_title}</Card.Title>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            </div>
            <Card.Text className='elip'>
           {film.description}
            </Card.Text>
            <div style={{display:"flex",justifyContent:"flex-end"}}>
            <Tooltip title="View more">
              <IconButton>
                <PlusCircle/>
              </IconButton>
            </Tooltip>
              
            </div>
          </Card.Body>
        </Card>
        
        )
      })}
      </div>

      



      {/* <div style={{marginTop:40, fontWeight:"bold"}}>
        Only on Telly
      </div> */}

      {/* <div style={{display:"flex", flexWrap:"wrap", marginTop:10}}>
      <Card className='cardContainer'>
        <Card.Img variant="top" src={cartoon} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Card.Link href='#'>Go somewhere</Card.Link>
        </Card.Body>
      </Card>

      <Card className='cardContainer'>
        <Card.Img variant="top" src={cartoon} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Card.Link href='#'>Go somewhere</Card.Link>
        </Card.Body>
      </Card>

      <Card className='cardContainer'>
        <Card.Img variant="top" src={cartoon} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Card.Link href='#'>Go somewhere</Card.Link>
        </Card.Body>
      </Card>

      <Card className='cardContainer'>
        <Card.Img variant="top" src={cartoon} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Card.Link href='#'>Go somewhere</Card.Link>
        </Card.Body>
      </Card>
      </div> */}

      <div>
     


      </div>
    
     
    </div>
    </div>
    
  )
}

export default MainScreen;