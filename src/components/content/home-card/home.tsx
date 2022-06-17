import Card from './cards/card'
import React, { useCallback, useEffect, useState } from 'react'
import './home.scss'
import f1 from '../../../images/f1.png'
import f2 from '../../../images/f2.png'
import f3 from '../../../images/f3.png'
import f4 from '../../../images/f4.png'
import f5 from '../../../images/f5.png'
import f6 from '../../../images/f6.png'
import f7 from '../../../images/f7.png'
import f8 from '../../../images/f8.png'
import f9 from '../../../images/f9.png'
import { Link, Route } from 'react-router-dom'



export default function Home(){

  return(<div className='home'>
        <div className='Text'>
            MOST POPULAR POSTS
        </div>
      <div className='films_and_serials'>
        <div className='first-row'> 
        <Card>   
        <Link to="/creationinfo/0">
        <img src={f1} alt="film" className='film' />
           <div className="container">
             <h4>Death On The Nile</h4>
            <p>@FallenStar</p>
           </div>
        </Link>  
        </Card>  
        <Card>
        <a href="film">
        <img src={f2} alt="film" className='film' />
           <div className="container">
             <h4>The Adam Project</h4>
            <p>@Loosetooth</p>
           </div>
        </a>
        </Card>
        <Card>
        <a href="film">
        <img src={f3} alt="film" className='film' />
           <div className="container">
             <h4>Uncharted</h4>
            <p>@Superman</p>
           </div>
        </a>
        </Card>
        </div>
        <div className='second-row'>
        <Card>
        <a href="film">
        <img src={f4} alt="film" className='film' />
           <div className="container">
             <h4>Moon Knight</h4>
            <p>@Shrek</p>
           </div>
        </a>
        </Card>
        <Card>
        <a href="film">
        <img src={f5} alt="film" className='film' />
           <div className="container">
             <h4>Don't Look Up</h4>
            <p>@Dessert</p>
           </div>
        </a>
        </Card>
        <Card>
        <a href="film">
        <img src={f6} alt="film" className='film' />
           <div className="container">
             <h4>Dolittle</h4>
            <p>@WiseCentaur</p>
           </div>
        </a>
        </Card>
        </div>
        <div className='third-row'>
        <Card>
        <a href="film">
        <img src={f7} alt="film" className='film' />
           <div className="container">
             <h4>Spider-Man: No Way Home</h4>
            <p>@Skittle</p>
           </div>
        </a>
        </Card>
        <Card>
        <a href="film">
        <img src={f8} alt="film" className='film'/>
           <div className="container">
             <h4>Finch</h4>
            <p>@ReynerGhost</p>
           </div>
        </a>
        </Card>
        <Card>
        <a href="film">
        <img src={f9} alt="film" className='film' />
           <div className="container">
             <h4>Sherlock Holmes</h4>
            <p>@StrangeOrange</p>
           </div>
        </a>
        </Card>
        </div>
      </div>
      <div className='end-Text'>
            THAT'S ALL FOR NOW :)
      </div>
  </div>
    ) 

}

