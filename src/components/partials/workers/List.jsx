import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class List extends Component {
	constructor() {
		super();
		this.state = 	{ workers : [] };
	};

	componentDidMount() {    
		var that = this;
		var url = '../../data/workers.js?format=json'

		fetch(url)
		.then(function(response) {
			if (response.status >= 400) {
				throw new Error("Bad response from server");
			}
			return response.json();
		})
		.then(function(data) {
			that.setState({ workers: data });
		});
	}

	render() {
		var workers = this.state.workers;
		
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<h4 className="panel-title">
						<a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
							<i className="material-icons">view_list</i>
							<span className="">Workers List</span>
						</a>
					</h4>
				</div>
				<div id="collapseTwo" className="panel-collapse collapse in">
					<div className="panel-body">
						<div className="col-md-12">
							<div className="card">
								<div className="card-header" data-background-color="orange">
									<h4 className="title">Workers List</h4>
								</div>
								<div className="card-content table-responsive">
									<table className="table table-striped table-hover">
										<thead className="text-primary">
											<tr>
												<th><i className="material-icons">settings</i></th>
												<th>Name</th>
												<th>Role</th>
												<th>Salary</th>
											</tr>
										</thead>
										<tbody>
											{ workers.map(worker => 
													<tr key={worker.key.toString()}>
														<td><Link to="/WorkerProfile"><i className="material-icons">visibility</i></Link></td>
														<td><Link to="/WorkerProfile">{worker.firstName} {worker.lastName}</Link></td>
														<td>{worker.role}</td>
														<td className="text-primary">${worker.hourRate * worker.billedTime}</td>
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
