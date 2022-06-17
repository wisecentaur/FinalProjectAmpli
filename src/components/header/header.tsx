import React from 'react';
import './header.scss';
import { Routes } from "../../Route/SidebarRoutes"
import logo from "../../images/logo.png"
import Sidebar from '../Sidebar/Sidebar';
import { Link } from 'react-router-dom';




interface IProps {
    
}

interface IState {
   isopensidebar:boolean;
}


export default class Header extends React.Component<IProps, IState> {
	constructor(props: IProps){
		super(props)
		this.state={isopensidebar:false}
	}
	render() {

		return (<div className="header">
		<div className='Sidebar'>
			<input id="menu__toggle" type="checkbox" onClick={(event:any)=>{this.setState({isopensidebar:event.target.checked})}}/>
    <label className={`menu__btn ${this.state.isopensidebar?"menu__btn_checked":""}`} htmlFor="menu__toggle">
      <span></span>
    </label>
	  
	  <Sidebar></Sidebar>
		</div>
			<div className="nav-logo">
			<a href="/">
				<img src={logo} alt="logo" className='logo' />
			</a>	
			</div>
			<div className='Search'>
      <input className='Search-box' placeholder="Search..." />
	        </div>
		</div>)
	}
}


