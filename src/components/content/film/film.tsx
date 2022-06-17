import React from 'react'
import f1 from '../../../images/f1.png'
import './film.scss'
import likeimg from '../../../images/likeimg.png'
import dislikeimg from '../../../images/dislikeimg.png'
import { classicNameResolver } from 'typescript'

var likesclicked = false
var dislikesclicked = false



export default function Film(){
    {  
    const [likes, setlikes] = React.useState(2500)
    const [dislikes, setdislikes] = React.useState(56)
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
        <img src={f1} className='film-img'/>
      </div>
      <div className="top-right">
           <div className="name">
           DEATH ON THE NILE
           </div>
           <div className="film-info-top-right">
             <div className="el">
              <h3>Release Date: <b>February 11, 2022(United Kingdom)</b></h3>
             </div>
             <div className="el">
             <h3>Filming Locations: <b>Aswan, Egypt</b></h3>
             </div>
             <div className="el">
             <h3>Production Companies: <b>20th Century Studios and other</b></h3>
             </div>
             <div className="el">
             <h3>Budget: <b>$90,000,000</b></h3>
             </div>
             <div className="el">
             <h3>Box Office: <b>$137,043,574</b></h3>
             </div>
             <div className="el">
             <h3>Run Time: <b>2 hours 7 minutes</b></h3>
             </div>
             <div className="el">
             <h3>Genres: <b>Crime, Drama, Mystery</b></h3>
             </div>
             <div className="el">
             <h3>Motion Picture Raiting: <b>PG-13</b></h3>
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
              <h3>Director: <b>Kenneth Branagh</b></h3>
      </div>
      <div className="c">
              <h3>Writers: <b>Michael Green(screenplay by), Agatha Christie(based upon the novel by)</b></h3>
      </div>
      <div className="actors">
              <h3>Actors: <b>Kenneth Branagh(as Poirot), "Armie" Hammer(as Simon), Tom Bateman(as Bouc), Emma Mackey(as Jacqueline), Letitia Wright(as Rosalie), Ali Fazal(as Linnet's cousin), Gal Gadot(as Linnet), Russell Brand(as doctor), Sophie Okonedo(as jazz singer), Rose Leslie(as Linnet's personal maid) and other </b></h3>
      </div>
      </div>
      <div className="storyline">
        <div className="st-t">
          SHORT STORYLINE:
        </div>
        <div className="st">
         Belgian sleuth Hercule Poirot's vacation aboard a glamorous river steamer turns into a terrifying search for a murderer when a picture-perfect couple's idyllic honeymoon is tragically cut short. Set against an epic landscape of sweeping Egyptian desert vistas and the majestic Giza pyramids, this tale of unbridled passion and incapacitating jealousy features a cosmopolitan group of impeccably dressed travelers, and enough wicked twists and turns to leave audiences guessing until the final, shocking denouement.
        </div>
      </div>
      <div className="myop">
        <div className="mp">
          MY OPINION:
        </div>
       <div className="border">
        <div className="mp-t">
          <a  className="mp-t-a">Death on The Nile, finally sets sail, good film</a>

Was it worth the wait?
For the most part, I'd say yes, plenty of positives to focus on, first off, the visuals, Oscar worthy in my opinion, this was breathtakingly beautiful, landscapes, clothes, buildings, people of course, a real feast for the eyes.
The acting was fabulous, several names to make you raise an eyebrow for one reason and another. First off, Russell Brand, I honestly thought he was excellent here, as were Sophie Okonedo, Tom Bateman and Emma Mackey.
Branagh is terrific here, a superb performance, and dare I say more accomplished than in the first film.
A few elements I didn't like quite so much, some of the characters had perhaps wandered a little too far from the original source material, I say that not as an Agatha Christie purist, I just enjoy the eccentricities from the likes of Bowers, Salome Otterborne and van Schuyler.
The film's focus was a little frustrating at times, it could have perhaps gone a little heavier on the whodunnit element, rather than the drama of the relationships.
          
          <div className="mymark">My mark : 7/10</div>
           <div className="imdb">
           <span className="imdbRatingPlugin" data-user="ur129430881" data-title="tt7657566" data-style="p3"><a href="https://www.imdb.com/title/tt7657566/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_37x18.png" alt=" Смерть на Нілі
(2022) on IMDb" />
</a></span>  
          </div> 
          <div className="author">@FallenStar</div>      
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


