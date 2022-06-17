import React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../../Route/SidebarRoutes';


import './sidebar.scss';


interface IProps {

}

interface IState {

}

export default class Sidebar extends React.Component<IProps, IState> {

	render() {
		return (
			
	<ul className="menu__box">
           <li><a className="menu__item" href='/'  >Home</a></li>
           <li><a className="menu__item" href="/my account">My Account</a></li>
           <li><a className="menu__item" href="/top blogs">Top Blogs</a></li>
           <li><a className="menu__item" href="/ratings">Ratings</a></li>
           <li><a className="menu__item" href="/news">News</a></li>
		   <li><a className="menu__item" target="_blank" href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=uacritics@gmail.com" >Contact Us</a></li>
		 <div className='Sidebar-End'>
		    Copyright © 2022 UA:Critics. All rights reserved.
		 </div>
    </ul>
		)
	}
}