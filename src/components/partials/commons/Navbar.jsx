import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
		<nav className="navbar navbar-transparent navbar-absolute">
			<div className="container-fluid">
				<div className="navbar-header">
					<button type="button" className="navbar-toggle" data-toggle="collapse">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<Link to="/" className="navbar-brand" href="#">Final Touch</Link>
				</div>
				<div className="collapse navbar-collapse">
					<ul className="nav navbar-nav navbar-right">
						<li>
							<Link to="/" className="dropdown-toggle" data-toggle="dropdown">
								<i className="material-icons">dashboard</i>
								<p className="hidden-lg hidden-md">Dashboard</p>
							</Link>
						</li>
						<li className="dropdown">
							<a href="#" className="dropdown-toggle" data-toggle="dropdown">
								<i className="material-icons">notifications</i>
								<span className="notification">5</span>
								<p className="hidden-lg hidden-md">Notifications</p>
							</a>
							<ul className="dropdown-menu">
								<li><a href="#">Mike John responded to your email</a></li>
								<li><a href="#">You have 5 new tasks</a></li>
								<li><a href="#">Youre now friend with Andrew</a></li>
								<li><a href="#">Another Notification</a></li>
								<li><a href="#">Another One</a></li>
							</ul>
						</li>
						<li>
							<a href="#pablo" className="dropdown-toggle" data-toggle="dropdown">
 							   <i className="material-icons">person</i>
 							   <p className="hidden-lg hidden-md">Profile</p>
	 						</a>
						</li>
					</ul>

					<form className="navbar-form navbar-right" role="search">
						<div className="form-group  is-empty">
							<input type="text" className="form-control" placeholder="Search" />
							<span className="material-input"></span>
						</div>
						<button type="submit" className="btn btn-white btn-round btn-just-icon">
							<i className="material-icons">search</i><div className="ripple-container"></div>
						</button>
					</form>
				</div>
			</div>
		</nav>
    );
  }
}

export default Navbar;
