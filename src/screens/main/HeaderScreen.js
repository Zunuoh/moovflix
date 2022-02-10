import React from 'react'
import { ChevronLeft, ChevronRight, Search, Bell } from 'react-feather'
import {Link} from 'react-router-dom';

const HeaderScreen = () => {
  return (
    <div style={{ padding:10, display:"flex", alignItems:"center" }}>

    <div style={{}} className='leftHeader'>
      <ChevronLeft/>
      <ChevronRight/>
    </div>

    <div style={{}} className = 'rightHeader'>
    <Search/>
    <Bell style={{marginLeft:10}}/>
    </div>
           

    <div style={{display:"flex", marginTop:5, marginLeft:50}}>
    <div style={{background:"red", width:60, height:60, borderRadius:30}}>
    <div ></div>
    </div>
    <div style={{marginLeft:20}}>
    <div>Lucinda McCarthhy</div>
    <Link to="/profile">
        <div style={{fontSize:15}}>Manage Account</div>
    </Link>
    </div>
    
  
    </div>
           
           
         
           




  
        
    </div>
  )
}

export default HeaderScreen;