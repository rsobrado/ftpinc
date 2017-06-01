import React, { Component } from 'react';
import {Link} from 'react-router-dom';

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

	render() {
		let materials = this.props.materials.filter(
			(material) => {
				return material.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
			}
		);

		return (
			<div className="panel panel-default">


				<div className="panel-heading">
					<h4 className="panel-title">
						<a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
							<i className="material-icons">view_list</i>
							<span className="">Materials List</span>
						</a>
					</h4>
				</div>
				<div id="collapseTwo" className="panel-collapse collapse in">
					<div className="panel-body">
						<div className="col-md-12">
							<div className="pull-right" >
								<div className="form-group label-floating">
									<label className="control-label"> <i className="material-icons">search</i></label>
									<input type="text" className="form-control" value={this.state.search} onChange={this.updateList.bind(this)}/>
								</div>
							</div>
							<div className="card">
								<div className="card-header" data-background-color="orange">
									<h4 className="title">Materials List</h4>
								</div>
								<div className="card-content table-responsive">
									<table className="table table-striped  table-hover">
										<thead className="text-primary">
											<tr>
												<th><i className="material-icons">settings</i></th>
												<th>Name</th>
												<th>Description</th>
												<th>Cost</th>
											</tr>
										</thead>
										<tbody>
											{
												materials.map((material) => {
														return (
															<tr key={material.key}>
															<td><Link to="/MaterialProfile"><i className="material-icons">visibility</i></Link></td>
															<td><Link to="/MaterialProfile">{material.name}</Link></td>
															<td>{material.description}</td>
															<td className="text-primary">${material.cost}</td>
															</tr>
														)
													}
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
