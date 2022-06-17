import React from 'react';
import './footer.scss';
import telegram from '../../images/telegram.png'
import youtube from '../../images/youtube.png'
import instagram from '../../images/instagram.png'
import facebook from '../../images/facebook.png'

interface IProps {

}

interface IState {
  
}


export default class Header extends React.Component<IProps, IState>{

	render() {

		return (
        <div className='Footer'>
            <div className='column'>
                <div className='content'>
              <div className='element'>
                  Popularity of the post based on the amount of likes and comments, statistics updated every two weeks.
              </div>
              <div className='element'>
                  Have any questions, suggestions or complaints?  Write us on  <a className="gmail" href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=uacritics@gmail.com" target="_blank">uacritics@gmail.com</a>
              </div>
              <div className='element'>
                 We are in social networks :
              </div>
                </div>
              <div className='social_row'>
                 <a href="https://telegram.me/WiseCentaur"  target="_blank" ><img src={telegram} alt="telegram" className='nav'/></a>
                 <a href="https://youtube.com"  target="_blank" ><img src={youtube} alt="youtube" className='nav'/></a>
                 <a href="https://instagram.com/ostap_lav_ren_yuk"  target="_blank" ><img src={instagram} alt="instagram" className='nav'/></a>
                 <a href="https://www.facebook.com"  target="_blank" ><img src={facebook} alt="facebook" className='nav'/></a>
              </div>
            </div>
            <div className='right'>
		       Copyright © 2022 UA:Critics. All rights reserved.
		    </div>
        </div>
        )
    }
}        

            
