import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class List extends Component {
	constructor() {
		super();
		this.state = 	{ clients : [] };
	};

	componentDidMount() {    
		var that = this;
		var url = '../../data/clients.js?format=json'

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
		var clients = this.state.clients;
	return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<h4 className="panel-title">
						<a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
							<i className="material-icons">view_list</i>
							<span className="">Clients List</span>
						</a>
					</h4>
				</div>
				<div id="collapseTwo" className="panel-collapse collapse in">
					<div className="panel-body">
						<div className="col-md-12">
							<div className="card">
								<div className="card-header" data-background-color="orange">
									<h4 className="title">Clients List</h4>
								</div>
								<div className="card-content table-responsive">
									<table className="table table-striped table-hover">
										<thead className="text-primary">
											<tr>
												<th><i className="material-icons">settings</i></th>
												<th>Name</th>
												<th>Street</th>
												<th>City</th>
												<th>ZipCode</th>
											</tr>
										</thead>
										<tbody>
											{ clients.map(client => 
													<tr key={client.key}>
														<td><Link to="/ClientProfile"><i className="material-icons">visibility</i></Link></td>
														<td><Link to="/ClientProfile">{client.firstName} {client.lastName}</Link></td>
														<td>{client.street} </td>
														<td>{client.city} </td>
														<td>{client.zip} </td>
													</tr>
												) 
											}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default List;