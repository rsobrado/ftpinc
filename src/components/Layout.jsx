import React, { Component } from 'react';
import Sidebar from './Modules/Sidebar';
import Footer from './Modules/Footer';
import Navbar from './Modules/Navbar';

import Dashboard from './Dashboard';
import Estimates from './Estimates';
import Clients from './Clients';
import Workers from './Workers';
import Materials from './Materials';
import ClientProfile from './Clients/Profile';
import WorkerProfile from './Workers/Profile';
import MaterialProfile from './Materials/Profile';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';


class Layout extends Component {
  render() {
    return (
      <div className="Layout">
      	<div className="wrapper">
	    	<Router>
	    		<div>
		      		<Sidebar/>
		      	    <div className="main-panel">
		      			<Navbar />
		      			<div className="content">
		  					<Route exact path="/" component={Dashboard}/>
			   				<Route exact path="/Estimates" component={Estimates}/>
			   				<Route exact path="/Clients" component={Clients}/>
			   				<Route exact path="/Workers" component={Workers}/>
			   				<Route exact path="/Materials" component={Materials}/>
			   				<Route exact path="/ClientProfile" component={ClientProfile}/>
			   				<Route exact path="/WorkerProfile" component={WorkerProfile}/>
			   				<Route exact path="/MaterialProfile" component={MaterialProfile}/>
		  				</div>
		      			<Footer />
		      		</div>
	      		</div>
			</Router>
      	</div>
      </div>

    );
  }
}


export default Layout;
