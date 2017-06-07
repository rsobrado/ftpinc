import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class List extends Component {
	constructor(props){
		super(props);
		this.state = 	{
			materials : [props.materials],
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
			<div className="col-md-8">
			<div className="list card">
				<div className="card-header" data-background-color="orange">
					<div className="title">
						<h4 className="title"><span><i className="material-icons">format_paint</i> Materials</span></h4>
						<div className="form-group label-floating">
							<label className="control-label"> <i className="material-icons">search</i></label>
							<input type="text" className="form-control" value={this.state.search} onChange={this.updateList.bind(this)}/>
						</div>

					</div>
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
												<td><Link to={'/MaterialProfile/:'+material.key}><i className="material-icons">visibility</i></Link></td>
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
		);
	}
}

export default List;
