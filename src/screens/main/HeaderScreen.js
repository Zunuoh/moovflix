import React from 'react'
import { ChevronLeft, ChevronRight, Search, Bell } from 'react-feather'
import {Link} from 'react-router-dom';
import profileImage from '../../assets/zu.jpeg'

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
    <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
      <img src={profileImage} style={{width:60, height:60, borderRadius:30}}/>
    </div>
    </div>
    <div style={{marginLeft:20}}>
    <div>Lucinda McCarthy</div>
    <Link to="/profile" style={{textDecoration:"none"}}>
        <div style={{fontSize:15, cursor:"pointer", color:"#098193"}}>Manage Account</div>
    </Link>
    </div>
    
  
    </div>
           
           
         
           




  
        
    </div>
  )
}

export default HeaderScreen;