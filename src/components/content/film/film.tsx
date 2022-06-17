import React from 'react'
import f1 from '../../../images/f1.png'
import './film.scss'
import likeimg from '../../../images/likeimg.png'
import dislikeimg from '../../../images/dislikeimg.png'
import { classicNameResolver } from 'typescript'
import { useLocation, useParams } from 'react-router-dom'

var likesclicked = false
var dislikesclicked = false

interface IProps{
  films:IFilm[];
}

export default function Film(props:IProps){
    {  
      const {id} = useParams<any>();
    const film = props.films[Number(id)]
    const [likes, setlikes] = React.useState(film.likes)
    const [dislikes, setdislikes] = React.useState(film.dislikes)
    const like = ()=>{
      setlikes(likesclicked? likes-1:likes+1)
      likesclicked=!likesclicked
    }

    
  
    
    const dislike = ()=>{
      setdislikes(dislikesclicked? dislikes-1:dislikes+1)
      dislikesclicked=!dislikesclicked
    }
		return (
  <div className="film-component">
    <div className="film-top">
      <div className="fimage">
        <div className="watchlist">
          
        </div>
        <img src={film.image} className='film-img'/>
      </div>
      <div className="top-right">
           <div className="name">
           {film.name}
           </div>
           <div className="film-info-top-right">
             <div className="el">
              <h3>Release Date: <b>{film.Releasedate}</b></h3>
             </div>
             <div className="el">
             <h3>Filming Locations: <b>{film.Filminglocations}</b></h3>
             </div>
             <div className="el">
             <h3>Production Companies: <b>{film.Productioncompanies}</b></h3>
             </div>
             <div className="el">
             <h3>Budget: <b>{film.Budget}</b></h3>
             </div>
             <div className="el">
             <h3>Box Office: <b>{film.Boxoffice}</b></h3>
             </div>
             <div className="el">
             <h3>Run Time: <b>{film.Runtime}</b></h3>
             </div>
             <div className="el">
             <h3>Genres: <b>{film.Genres}</b></h3>
             </div>
             <div className="el">
             <h3>Motion Picture Raiting: <b>{film.MPR}</b></h3>
             </div>
           </div>
      </div>     
    </div>
    <div className="film-bottom">
      <div className="tc">
        TOP CAST:
      </div>
      <div className="cast">
      <div className="c">
              <h3>Director: <b>{film.Cast.Director}</b></h3>
      </div>
      <div className="c">
              <h3>Writers: <b>{film.Cast.Writers}</b></h3>
      </div>
      <div className="actors">
              <h3>Actors: <b>{film.Cast.Actors}</b></h3>
      </div>
      </div>
      <div className="storyline">
        <div className="st-t">
          SHORT STORYLINE:
        </div>
        <div className="st">
         {film.Storyline}
        </div>
      </div>
      <div className="myop">
        <div className="mp">
          MY OPINION:
        </div>
       <div className="border">
        <div className="mp-t">
          <a  className="mp-t-a">{film.Myopinion.title}</a>

{film.Myopinion.main}
          
          <div className="mymark">My mark : {film.Myopinion.mymark}</div>
           <div className="imdb"> 
          </div> 
          <div className="author">{film.Myopinion.author}</div>      
        </div>
      </div>
      </div>
      <div className="Reactions">
         <div className="r-t">
           Reactions
         </div>
<div className='allr'>      
 <div className="like-area">
     <span  onClick={like} className="like-click"><div className='likeimg'><img className='likeimgimg' src={likeimg}/></div><div className='likes'>{likes}</div></span>
    <a>
     <span onClick={dislike} className="dislike-click"><div className='dislikeimg'><img className='dislikeimgimg' src={dislikeimg}/></div><div className='dislikes'>{dislikes}</div></span>
    </a>
 </div>

 <div className='leaveacomment'>
              <div className='comment-input'>
                <textarea  placeholder='Write a comment...' className='cm-inp'/>
              </div>
              <div className='buttons'>
                <button className='send'>Send</button>
                <button type="reset" value="Reset" className='cancel'>Cancel</button>
              </div>
 </div>
</div>    
           <div className="comments">
           <div className="comment-section">
           <div className='comments-section'> 
           <div className="comment">
             <div className='comment-text'>
               <div className='comment-text-text'>If one were to compare the 2022 version with the 1978 evergreen classic of the same name then this latest one is an extreme and massive disappointment with terrible acting by everyone in the film including KB. However if one were to judge on its own then at best it's a below average movie with absolutely nothing praiseworthy at all.<p className='comment-text-p'>4/10</p>
               <div className='comment-text-date-author'>@Spaghettiman - 7 hours ago</div>
               </div>
               
             </div>
          </div>
           <div className="comment">
           <div className='comment-text'>
               <div className='comment-text-text'>Branagh's "Murder on the Orient Express" was crap. Thirty minutes into "Death on the Nile" and I could see that it was going to be just as bad. Opening scenes were pointless but I patiently waited for the meat of the film to begin and it was just as full of silliness as his previous attempt to do a Poirot movie. Perhaps someone should inform Branagh that bizarre doesn't always work, especially if it's not done well.<p className='comment-text-p'>3/10</p>
               <div className='comment-text-date-author'>@Petro - 6 hours ago</div>
               </div>
             </div>
            </div>
            <div className="comment">
            <div className='comment-text'>
               <div className='comment-text-text'>I'm dissapointed<p className='comment-text-p'>4/10</p>
               <div className='comment-text-date-author'>@Pirate - 6 hours ago</div>
               </div>
             </div>
            </div>
            <div className="comment">
            <div className='comment-text'>
               <div className='comment-text-text'>@Spaghettiman, in some points you're right<p className='comment-text-p'>(author)</p>
               <div className='comment-text-date-author'>@FallenStar - 6 hours ago</div>
               </div>
             </div>
            </div>
            <div className="comment">
            <div className='comment-text'>
               <div className='comment-text-text'>...<p className='comment-text-p'>1/10</p>
               <div className='comment-text-date-author'>@ABC - 5 hours ago</div>
               </div>
             </div>
            </div>
            <div className="comment">
            <div className='comment-text'>
               <div className='comment-text-text'>It's norm<p className='comment-text-p'>7/10</p>
                 <div className='comment-text-date-author'>@Shrek - 2 hours ago</div>
               </div>
             </div>
            </div>
        </div>
            </div>
           </div>
           </div>
         </div>   
    </div>
    )
}    }    


