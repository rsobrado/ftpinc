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

  onAddClient(clientUpdate){
    this.setState({clients : clientUpdate});
  }

  onDeleteClient(clientKey){
    let clients = this.state.clients;
    let index = clients.findIndex(x => x.key === clientKey);
    clients.splice(index,1);
    this.setState({clients : clients});
  }

  render() {
	return (
		<div className="container-fluid">
			<div className="row">
				<New workers={this.state.clients} onAddClient={this.onAddClient.bind(this)}/>
				<List clients={this.state.clients} onDeleteClient={this.onDeleteClient.bind(this)}/>
			</div>
		</div>
	);
  }
}

export default Clients;
