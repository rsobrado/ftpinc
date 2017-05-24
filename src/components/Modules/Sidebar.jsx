import React, { Component } from 'react';
import logo from '../../images/FT-logo.png';
import sidebar from '../../images/sidebar-1.jpg';

import {
  BrowserRouter as Router,
  Route,
  NavLink,
} from 'react-router-dom';



class Sidebar extends Component {
  render() {
    return (

    	       	<div className="sidebar" data-color="red" data-image={sidebar}>
    	   			
    	   			<div className="logo">
    	   				<a href="index.html" className="simple-text">
    	   					<img src={logo}  alt="Final Touch Painting inc."/>
    	   				</a>
    	   			</div>

    	   			<div className="sidebar-wrapper">
    	   				<ul className="nav">
    	   					<li >
    	   						<NavLink
    	   						  to="/" activeClassName="active" exact>
    	   						  <i className="material-icons">dashboard</i>Dashboard
    	   						  </NavLink>
    	   					</li>
							<li >
								<NavLink to="Estimates" activeClassName="active" exact>
									<i className="material-icons">assignment</i>Estimates
								</NavLink>
							</li>
							<li>
								<NavLink to="Clients" activeClassName="active" exact>
									<i className="material-icons">folder_shared</i>Clients
								</NavLink>
							</li>
							<li>
								<NavLink to="Workers" activeClassName="active" exact>
									<i className="material-icons">accessibility</i>Workers
								</NavLink>
							</li>
							<li>
								<NavLink to="Materials" activeClassName="active" exact>
									<i className="material-icons">format_paint</i>Materials
								</NavLink>
							</li>
    	   				</ul>
    	   				
    	   			</div>
    	   		</div>
    );
  }
}

export default Sidebar;
