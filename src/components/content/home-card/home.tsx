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

interface IProps{
   films:IFilm[];
}

export default function Home(props:IProps){

  return(<div className='home'>
        <div className='Text'>
            MOST POPULAR POSTS
        </div>
      <div className='films_and_serials'>
        <div className='first-row'>
         {props.films.map((f)=>(
            <div className='film-card'>
            <Card>   
            <Link to={`/creationinfo/${f.ID}`}>
            <img src={f.image} alt="film" className='film' />
               <div className="container">
                 <h4>{f.name}</h4>
                <p>{f.Myopinion.author}</p>
               </div>
            </Link>  
            </Card>
            </div>
         ))} 
        
        </div>
      </div>
      <div className='end-Text'>
            THAT'S ALL FOR NOW :)
      </div>
  </div>
    ) 

}

