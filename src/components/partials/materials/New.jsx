import React, { Component } from 'react';


class New extends Component {
	constructor(props) {
		super(props);
		this.state = 	{ materials : [props.materials] };
	};

	newMaterial(event) {
		event.preventDefault();
		// var name = event.target;
		let that 				= 	this;
		let name 				= 	that.refs.name.value.trim();
		let description = 	that.refs.description.value.trim();
		let cost 				= 	that.refs.cost.value.trim();
		let key 				=		name.substr(0,2) + Math.floor( (Math.random() * 100 ) + 1 );
		if (name !== '') {
		}
		let newMaterial 		= [{key,name,description,cost}];
		let materialsUpdated = that.props.materials.concat(newMaterial);

		this.setState({materials : materialsUpdated}, function() {
			this.props.onAddMaterial(materialsUpdated)
		})

		that.refs.name.value = '';
		that.refs.description.value = '';
		that.refs.cost.value = '';
	}

	render() {
		return (
			<div className="col-md-4">
				<div className="card">
					<div className="card-header" data-background-color="blue">
						<h4 className="title"><span><i className="material-icons">add_box</i> New Material</span></h4>
					</div>
					<div className="card-content">
						<form onSubmit={this.newMaterial.bind(this)}>
							<div className="row">
								<div className="col-md-12">
									<div className="form-group label-floating">
										<label className="control-label">Name</label>
										<input ref="name" type="text" className="form-control" required/>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12">
									<div className="form-group label-floating">
										<label className="control-label">Description</label>
										<input ref="description" type="text" className="form-control" />
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12">
									<div className="form-group label-floating">
										<label className="control-label">Cost</label>
										<input ref="cost" type="number" className="form-control" required/>
									</div>
								</div>
							</div>

							<button  className="btn btn-primary pull-right" type="submit" >Create Material</button>
							<div className="clearfix"></div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default New;
