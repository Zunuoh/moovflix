import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import MovieList from './components/movieList'
import LinkPage from './components/linkpage'
import FreeShows from './components/freeeShows'
import Arabic from './components/arabic'
import Comedy from './components/comedy'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const App =() =>{
  return(
    // <div>
    //   <Header/>
    //   {/* <MovieList/> */}
    // </div>
    <BrowserRouter>
      <Switch>
         <Route component ={Header} path="/" exact/>
         <Route component = {MovieList} path="/second" exact/>
         <Route component ={LinkPage} path="/third" exact/>
         <Route component ={Arabic} path="/forth" exact/>
         <Route component ={FreeShows} path="/fifth" exact/>
         <Route component ={Comedy} path="/sixth" exact/>
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(<App/>, document.querySelector('#root'))
