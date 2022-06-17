import React from 'react'
import './topblogs.scss'

export default function Topblogs(){
    return(
    <div className='topblogs'>  
     <div className='topblogstext'>
         Top Blogs
     </div>
     <div className='topblogers'>
     <table className='blogstable'>
  <tr className='tr'>
    <th className='th'>Bloger</th>
    <th className='th'>Amount of posts</th>
    <th className='th'>Amount of likes</th>
    <th className='th'>Amount of comments</th>
  </tr>
  <tr className='tr'>
    <td className='td1'> @FallenStar</td>
    <td className='td1'>16</td>
    <td className='td1'>35.1k</td>
    <td className='td1'>5.3k</td>
  </tr>
  <tr className='tr'>
    <td className='td'> @Cookie</td>
    <td className='td'>14</td>
    <td className='td'>28.9k</td>
    <td className='td'>3.3k</td>
  </tr>
  <tr className='tr'>
    <td className='td'> @Srtanger</td>
    <td className='td'>14</td>
    <td className='td'>25.3k</td>
    <td className='td'>3.0k</td>
  </tr>
  <tr className='tr'>
    <td className='td'> @Petro</td>
    <td className='td'>12</td>
    <td className='td'>23.2k</td>
    <td className='td'>2.9k</td>
  </tr>
  <tr className='tr'>
    <td className='td'> @Nestor</td>
    <td className='td'>13</td>
    <td className='td'>16.5k</td>
    <td className='td'>2.5k</td>
  </tr>
  <tr className='tr'>
    <td className='td'> @Cobra</td>
    <td className='td'>11</td>
    <td className='td'>18.3k</td>
    <td className='td'>2.7k</td>
  </tr>
  <tr className='tr'>
    <td className='td'> @ABC</td>
    <td className='td'>8</td>
    <td className='td'>14.1k</td>
    <td className='td'>2.1k</td>
  </tr>
  <tr className='tr'>
    <td className='td'> @Pirate</td>
    <td className='td'>7</td>
    <td className='td'>13.7k</td>
    <td className='td'>1.6k</td>
  </tr>
  <tr className='tr'>
    <td className='td'> @Aquamen</td>
    <td className='td'>7</td>
    <td className='td'>13.2k</td>
    <td className='td'>1.0k</td>
  </tr>
  <tr className='tr'>
    <td className='tdl'> @Ironmen</td>
    <td className='tdl'>7</td>
    <td className='tdl'>12.9k</td>
    <td className='tdl'>0.9k</td>
  </tr>

</table>
     </div>
    </div>    
    )
} 