import React, { Component } from 'react';
import New from './clients/New'
import List from './clients/List'

class Clients extends Component {
  constructor() {
		super();
		this.state = 	{ clients : [] };
	};

	componentDidMount() {
		var that = this;
		var url = '../data/clients.js?format=json'

		fetch(url)
		.then(function(response) {
			if (response.status >= 400) {
				throw new Error("Bad response from server");
			}
			return response.json();
		})
		.then(function(data) {
			that.setState({ clients: data });
		});
	}
  render() {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-12">
					<div className="panel-group" id="accordion">
						<New />
						<List clients={this.state.clients}/>
					</div>
				</div>
			</div>
		</div>
	);
  }
}

export default Clients;
