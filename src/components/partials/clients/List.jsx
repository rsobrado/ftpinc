import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class List extends Component {
	constructor(){
		super();
		this.state = {
			search : ""
		};
	};

	updateList( event ){
		this.setState( {search: event.target.value} )
	};

	deleteClient(key){
		this.props.onDeleteClient(key);
	}

  render() {
		let clients = this.props.clients.filter(
			(client) => {
					var fullname = client.firstName + ' ' + client.lastName;
					return fullname.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
				}
		);
		return (
			<div className="col-md-7">
				<div className="list card">
					<div className="card-header" data-background-color="orange">
						<div className="title">
							<div className="col-md-3">
								<h4>Clients</h4>
							</div>
							<div className="col-md-3 col-sm-12">
								<div className="form-group label-floating">
								<label className="control-label"> <i className="material-icons">search</i></label>
								<input type="text" className="form-control" value={this.state.search} onChange={this.updateList.bind(this)}/>
								</div>
							</div>
						</div>
					</div>
					<div className="card-content table-responsive">
						<table className="table table-striped table-hover">
							<thead className="text-primary">
								<tr>
									<th>Name</th>
									<th>Street</th>
									<th>City</th>
									<th>ZipCode</th>
									<th><i className="material-icons">settings</i></th>
								</tr>
							</thead>
							<tbody>
								{
									clients.map(client =>
										<tr key={client.key}>
											<td><Link to="/ClientProfile">{client.firstName} {client.lastName}</Link></td>
											<td>{client.street} </td>
											<td>{client.city} </td>
											<td>{client.zip} </td>
											<td>
												<Link className="text-success" to={'/ClientProfile/:' + client.key}><i className="material-icons ">edit</i></Link>
												<a href="#" onClick={this.deleteClient.bind(this, client.key)} ><i className="material-icons " >close</i></a>
											</td>
										</tr>
									)
								}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}

export default List;
