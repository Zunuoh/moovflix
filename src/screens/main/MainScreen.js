import React, { useState } from 'react';
import HeaderScreen from './HeaderScreen';
import cartoon from '../../assets/cartoon2.png';
// import axios from 'axios';
import {Card} from 'react-bootstrap';
import  Axios  from 'axios';

// const api = axios.create({
//   baseURL : `https://movie-database-imdb-alternative.p.rapidapi.com/`
// })

const MainScreen = () => {   
  const [films, setFilms] = useState("");
  // const [loading, setLoading] = useState(false)
  const getFilms = () => {
    Axios.get("https://ghibliapi.herokuapp.com/films", {
      params: {
        _limit: 10
       }
    }).then(
      (response) => {
        console.log(response)
        setFilms(response.data)
      }
    )
  }

return (
    <div>
       <HeaderScreen/>
       <div className='mainScreenContainer'>
      <div style={{marginTop:10, fontWeight:"bold"}}>
        Recommended for you
      </div>
      <button onClick={getFilms}>get film</button>

      {films && films.map(film =>{
        return(
          <div>{film.name}okayyy</div>
        )
      })}
      <div style={{display:"flex", flexWrap:"wrap", }}>
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

     
      </div>

      <div style={{marginTop:40, fontWeight:"bold"}}>
        Only on Telly
      </div>

      <div style={{display:"flex", flexWrap:"wrap", marginTop:10}}>
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
      </div>

      <div>
     


      </div>
    
     
    </div>
    </div>
    
  )
}

export default MainScreen;