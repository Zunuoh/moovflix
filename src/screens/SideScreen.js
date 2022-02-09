import React, {useState} from 'react'

const browseList = [{id:"0", name:"DISCOVER"}, {id:"1", name:"TV & MOVIES"}, {id:"2", name:"POPULAR CLIPS"}, {id:"3", name:"WATCH LATER"}];

const categoryList = [{id:"0", name:"Kuwait TV"}, {id:"1", name:"Free Shows"}, {id:"2", name:"Arabic"}, {id:"3", name:"Action"}, {id:"4", name:"Comedy"}, {id:"5", name:"Drama"},
{id:"6", name:"Horror"}, {id:"7", name:"Kids"}, {id:"8", name:"Musical"}, {id:"9", name:"TV Shows"}, {id:"10", name:"Thriller"}]


const SideScreen = () => {
    const [browsers] = useState(browseList);
    const [categories] = useState(categoryList);
  return (
    <div className = 'sideScreenContainer'>

        <div className = 'siteTitle'>
            <h4 style={{color:"white"}}>Telly</h4>
        </div>

        <div className='movieBrowser'>
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