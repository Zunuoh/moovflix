import React from 'react';
import HeaderScreen from './HeaderScreen';
import {Card} from 'react-bootstrap';
import cartoon from '../assets/cartoon2.png'

const MainScreen = () => {    
return (
    <div>
       <HeaderScreen/>
       <div className='mainScreenContainer'>
      <div style={{marginTop:30, fontWeight:"bold"}}>
        Recommended for you
      </div>

      <div style={{marginTop:20, display:"flex", flexFlow:"wrap", overflow:"auto"}}>
        <div style={{backgroundColor:"red", width:"17%", height:290, borderColor:"black", border:"solid"}}>
          {/* jhjk */}
          <img src={cartoon}/>
        </div>
      
      </div>

      <div style={{marginTop:40, fontWeight:"bold"}}>
        Only on Telly
      </div>

      <div>
     


      </div>
    
     
    </div>
    </div>
    
  )
}

export default MainScreen;