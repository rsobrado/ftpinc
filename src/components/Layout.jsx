import React from 'react';
import Footer from './partials/commons/Footer';
import Navbar from './partials/commons/Navbar';
import Sidebar from './partials/commons/Sidebar';

import Clients from './partials/Clients';
import Dashboard from './partials/Dashboard';
import Estimates from './partials/Estimates';
import Materials from './partials/Materials';
import Workers from './partials/Workers';
import ClientProfile from './partials/clients/Profile';
import MaterialProfile from './partials/materials/Profile';
import WorkerProfile from './partials/workers/Profile';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';


const Layout = () =>
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


export default Layout;
