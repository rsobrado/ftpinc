import React, { Component } from 'react';


class New extends Component {

	constructor(props){
		super(props);
		this.state = {clients: []};
	}

	newClient(event) {
		event.preventDefault();
		// var name = event.target;
		let that 						= 	this;
		let firstName 			= 	that.refs.firstName.value.trim();
		let lastName 				= 	that.refs.lastName.value.trim();
		let email 					= 	that.refs.email.value.trim();
		let phoneNumber 		= 	that.refs.phoneNumber.value.trim();
		let street 					= 	that.refs.street.value.trim();
		let city 						= 	that.refs.city.value.trim();
		let state 					= 	that.refs.state.value.trim();
		let zipCode 				= 	that.refs.zipCode.value.trim();
		let additionalInfo	= 	that.refs.additionalInfo.value.trim();
		let projects 				= 	[];
		let key 						=		firstName.substr(0,2) + lastName.substr(0,2) + Math.floor( (Math.random() * 100 ) + 1 );

		let newClient 		= [{key,firstName, lastName, email, phoneNumber, street, city, state, zipCode, additionalInfo,projects}];
		let clientsUpdated = that.props.workers.concat(newClient);

		this.setState({clients : clientsUpdated}, function() {
			this.props.onAddClient(clientsUpdated);
			console.log(clientsUpdated);
		})

		this.refs.firstName.value = '';
		this.refs.lastName.value = '';
		this.refs.email.value = '';
		this.refs.phoneNumber.value = '';
		this.refs.street.value = '';
		this.refs.city.value = '';
		this.refs.state.value = '';
		this.refs.zipCode.value = '';
		this.refs.additionalInfo.value = '';

	}

	render() {
		return (
			<div className="col-md-5">
				<div className="list card">
					<div className="card-header" data-background-color="blue">
						<h4 className="title"><i className="material-icons">assignment</i> New Estimate</h4>
					</div>
					<div className="card-content">
						<form onSubmit={this.newClient.bind(this)}>

							<div className="row">
								<div className="col-md-6">
									<div className="form-group label-floating">
									<label className="control-label">Fist Name</label>
									<input type="text" ref="firstName" className="form-control" />
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group label-floating">
									<label className="control-label">Last Name</label>
									<input type="text" ref="lastName" className="form-control" />
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-md-4">
									<div className="form-group label-floating">
										<label className="control-label">Phone number</label>
										<input type="number" ref="phoneNumber" pattern="\d*" className="form-control" />
									</div>
								</div>
								<div className="col-md-8">
									<div className="form-group label-floating">
										<label className="control-label">Email address</label>
										<input type="email" ref="email" className="form-control" />
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-md-6">
									<div className="form-group label-floating">
										<label className="control-label">Street</label>
										<input type="text" ref="street" className="form-control" />
									</div>
								</div>
									<div className="col-md-6">
										<div className="form-group label-floating">
											<label className="control-label">City</label>
											<input type="text" ref="city" className="form-control" />
										</div>
									</div>
							</div>

							<div className="row">
								<div className="col-md-6">
									<div className="form-group label-floating">
										<label className="control-label">State</label>
										<input type="text" ref="state" className="form-control" />
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group label-floating">
										<label className="control-label">Zip Code</label>
										<input type="text" ref="zipCode" className="form-control" />
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-md-12">
									<div className="form-group label-floating">
										<label className="control-label"> Additional Information</label>
										<textarea className="form-control" ref="additionalInfo" rows="5"></textarea>
									</div>
								</div>
							</div>

							<button type="submit" className="btn btn-primary pull-right">Create Client</button>
							<div className="clearfix"></div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default New;
