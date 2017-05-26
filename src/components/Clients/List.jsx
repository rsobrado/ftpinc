import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class List extends Component {
	render() {
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
											<th>Country</th>
											<th>City</th>
											<th>Salary</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><Link to="ClientProfile"><i className="material-icons">visibility</i></Link></td>
											<td><Link to="ClientProfile">Dakota Rice</Link></td>
											<td>Niger</td>
											<td>Oud-Turnhout</td>
											<td className="text-primary">$36,738</td>
										</tr>
										<tr>
											<td><Link to="ClientProfile"><i className="material-icons">visibility</i></Link></td>
											<td><Link to="ClientProfile">Minerva Hooper</Link></td>
											<td>Curaçao</td>
											<td>Sinaai-Waas</td>
											<td className="text-primary">$23,789</td>
										</tr>
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
