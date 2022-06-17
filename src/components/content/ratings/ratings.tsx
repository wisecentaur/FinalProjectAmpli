import React from "react"
import './ratings.scss'

export default function Ratings(){
    return(
    <div className="ratings">
        <div className="ratings-text">
            Film Ratings (Top 10)
        </div>
   <div className='filmrate'>   
        <table className='ratingstable'>
  <tr className='tr'>
    <th className='th1'>Place</th>
    <th className='th2'>Film name</th>
    <th className='th3'>Amount of posts</th>
    <th className='th4'>Average mark</th>
  </tr>
  <tr className='tr'>
    <td className='td1'>1.</td>
    <td className='td1'>Spider-Man: No Way Home</td>
    <td className='td1'>11</td>
    <td className='td1'>8.4/10</td>
  </tr>
  <tr className='tr'>
    <td className='td'>2.</td>
    <td className='td'>ShawShank Redemption</td>
    <td className='td'>10</td>
    <td className='td'>9.3/10</td>
  </tr>
  <tr className='tr'>
    <td className='td'>3.</td>
    <td className='td'>Doctor Strange in the Multiverse of Madness</td>
    <td className='td'>11</td>
    <td className='td'>7.4/10</td>
  </tr>
  <tr className='tr'>
    <td className='td'>4.</td>
    <td className='td'>The Batman</td>
    <td className='td'>9</td>
    <td className='td'>7.9/10</td>
  </tr>
  <tr className='tr'>
    <td className='td'>5.</td>
    <td className='td'>Don't Look Up</td>
    <td className='td'>9</td>
    <td className='td'>7.2/10</td>
  </tr>
  <tr className='tr'>
    <td className='td'>6.</td>
    <td className='td'>The Matrix Resurrections</td>
    <td className='td'>7</td>
    <td className='td'>5.7/10</td>
  </tr>
  <tr className='tr'>
    <td className='td'>7.</td>
    <td className='td'>The King's Man</td>
    <td className='td'>5</td>
    <td className='td'>6.3/10</td>
  </tr>
  <tr className='tr'>
    <td className='td'>8.</td>
    <td className='td'>Fast & Furious Presents: Hobbs & Shaw</td>
    <td className='td'>4</td>
    <td className='td'>6.5/10</td>
  </tr>
  <tr className='tr'>
    <td className='td'>9.</td>
    <td className='td'>Finch</td>
    <td className='td'>3</td>
    <td className='td'>6.8/10</td>
  </tr>
  <tr className='tr'>
    <td className='tdl'>10.</td>
    <td className='tdl'>Minions</td>
    <td className='tdl'>3</td>
    <td className='tdl'>6.4/10</td>
  </tr>
</table>
</div>  
</div>
    )
}