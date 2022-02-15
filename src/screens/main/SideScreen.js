import React, {useState} from 'react'

const browseList = [{id:"0", name:"Discover"}, {id:"1", name:"Tv & Movies"}, {id:"2", name:"Popular Clips"}, {id:"3", name:"Watch Later"}];

const categoryList = [{id:"0", name:"Kuwait TV"}, {id:"1", name:"Free Shows"}, {id:"2", name:"Arabic"}, {id:"3", name:"Action"}, {id:"4", name:"Comedy"}, {id:"5", name:"Drama"},
{id:"6", name:"Horror"}, {id:"7", name:"Kids"}, {id:"8", name:"Musical"}, {id:"9", name:"TV Shows"}, {id:"10", name:"Thriller"}]


const SideScreen = () => {
    const [browsers] = useState(browseList);
    const [categories] = useState(categoryList);
  return (
    <div className = 'sideScreenContainer'>

        <div className = 'siteTitle'>
            <h1 style={{color:"white", fontFamily: 'Redressed, cursive'}}>Telly</h1>
        </div>

        <div>
            <div className='sideScreenHeaders'>BROWSE TELLY</div>
            {browsers && browsers.map(browser =>{
                return(
                    <div className='browserText'>
                        {browser.name}
                    </div>
                  
                )
            })}
        </div>

        <div>
            <div className='sideScreenHeaders'>CATEGORIES</div>
            {categories && categories.map(category =>{
                return(
                    <div className='browserText'>
                        {category.name}
                    </div>
                )
            })}
        </div>
        
    </div>
  )
}

export default SideScreen;