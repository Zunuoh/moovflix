import React from 'react'
import { ChevronLeft, ChevronRight, Search, Bell } from 'react-feather'

const HeaderScreen = () => {
  return (
    <div style={{ padding:10, display:"flex", alignItems:"center" }}>

    <div style={{flex:15}}>
      <ChevronLeft/>
      <ChevronRight/>
    </div>

    <div style={{flex:1}}>
    <Search/>
    <Bell style={{marginLeft:10}}/>
    </div>
           

    <div style={{display:"flex", marginTop:5, marginLeft:50}}>
    <div style={{background:"red", width:60, height:60, borderRadius:30}}>
    <div ></div>
    </div>
    <div style={{marginLeft:20}}>
    <div>Lucinda McCarthhy</div>
    <div style={{fontSize:15}}>Manage Account</div>
    </div>
    
  
    </div>
           
           
         
           




  
        
    </div>
  )
}

export default HeaderScreen;