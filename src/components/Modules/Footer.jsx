import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
		<footer className="footer">
			<div className="container-fluid">
				<nav className="pull-left">
					<ul>
						<li>
							<Link to="/">Dashboard</Link>
						</li>
						<li>
							<Link to="Estimates">Estimates</Link>
						</li>
						<li>
							<Link to="Clients">Clients</Link>
						</li>
						<li>
							<Link to="Workers">Workers</Link>
						</li>
						<li>
							<Link to="Materials">Materials</Link>
						</li>
					</ul>
				</nav>
			</div>
		</footer>
    );
  }
}

export default Footer;
