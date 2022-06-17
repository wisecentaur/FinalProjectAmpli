import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './components/content/home-card/home';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Film from './components/content/film/film'
import Topblogs from './components/content/topblogs/topblogs';
import Ratings from './components/content/ratings/ratings';
import { getFilms } from './axios/films';
import News from './components/content/news/news';
import Myaccount from './components/content/myaccount/myaccount';

function App() {
const [films, setfilms] = React.useState<IFilm[]>([])
const [isloading, setloading] = React.useState(true)
const setfilmswithids=(filmsdata:IFilm[])=>{
 setfilms(filmsdata.map((f,i)=>{
  f.ID=i;
  return f;
 }))
}
useEffect(()=>{
  getFilms().then(answer=>{setfilmswithids(answer.data)}).finally(()=>setloading(false))
}, [])

if( isloading) return<div>Loading...</div>
  return (
   <>   
    <div><Header/></div>
    <BrowserRouter> 
    <Switch>
      <Route exact path="/">
    <div><Home films={films}/></div>
      </Route>
      <Route exact path ='/my account'>
        <div><Myaccount/></div>
      </Route>
      <Route exact path='/top blogs'>
        <div><Topblogs/></div>
      </Route>
      <Route exact path='/ratings'>
        <div><Ratings/></div>
      </Route>
      <Route exact path='/news'>
        <div><News/></div> 
      </Route>
      <Route path="/creationinfo/:id" component={()=>(
        <Film films={films}/>
      )}>

      </Route>
    </Switch> 
    </BrowserRouter>
    <div><Footer/></div>
   </> 
  )
}


export default App;

