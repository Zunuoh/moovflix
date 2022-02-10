import React from 'react';
import HeaderScreen from './HeaderScreen';
import cartoon from '../../assets/cartoon2.png';
// import axios from 'axios';
import {Card} from 'react-bootstrap';

// const api = axios.create({
//   baseURL : `https://movie-database-imdb-alternative.p.rapidapi.com/`
// })

const MainScreen = () => {    

return (
    <div>
       <HeaderScreen/>
       <div className='mainScreenContainer'>
      <div style={{marginTop:10, fontWeight:"bold"}}>
        Recommended for you
      </div>

      <div style={{display:"flex", flexWrap:"wrap", }}>
      <Card style={{ width: '18rem', marginTop:10}}>
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

      <Card style={{ width: '18rem', marginLeft:20, marginTop:10}}>
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

      <Card style={{ width: '18rem', marginLeft:20, marginTop:10}}>
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

      <Card style={{ width: '18rem', marginLeft:20, marginTop:10}}>
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
      <Card style={{ width: '18rem'}}>
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

      <Card style={{ width: '18rem', marginLeft:20}}>
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

      <Card style={{ width: '18rem', marginLeft:20, marginTop:10}}>
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

      <Card style={{ width: '18rem', marginLeft:20, marginTop:10}}>
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