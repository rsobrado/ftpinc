import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class List extends Component {
	constructor() {
		super();
		this.state = 	{ search : '' };
	};

	updateList( event ){
		this.setState( {search: event.target.value} )
	};
	deleteWorker(key){
			this.props.onDeleteWorker(key);
	}

	render() {
		let workers = this.props.workers.filter(
			(worker) => {
				var fullname = worker.firstName + ' ' + worker.lastName;
				return fullname.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
			}
		);

		return (
			<div className="col-md-8">
				<div className="list card">
					<div className="card-header" data-background-color="orange">
						<div className="title">
							<h4 className="title"><span><i className="material-icons">accessibility</i> Workers</span></h4>
							<div className="form-group label-floating">
								<label className="control-label"> <i className="material-icons">search</i></label>
								<input type="text" className="form-control" value={this.state.search} onChange={this.updateList.bind(this)}/>
							</div>
						</div>
					</div>
					<div className="card-content table-responsive">
						<table className="table table-striped table-hover">
							<thead className="text-primary">
								<tr>
									<th>Name</th>
									<th>Role</th>
									<th>Salary</th>
									<th><i className="material-icons">settings</i></th>
								</tr>
							</thead>
							<tbody>
								{ workers.map(worker =>
										<tr key={worker.key.toString()}>
											<td><Link to="/WorkerProfile">{worker.firstName} {worker.lastName}</Link></td>
											<td>{worker.role}</td>
											<td className="text-primary">${worker.hourRate * worker.billedTime}</td>
											<td>
												<Link className="text-success" to={'/WorkerProfile/:' + worker.key}><i className="material-icons ">edit</i></Link>
												<a href="#" onClick={this.deleteWorker.bind(this, worker.key)} ><i className="material-icons " >close</i></a>
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
