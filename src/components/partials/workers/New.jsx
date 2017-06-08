import React, { Component } from 'react';


class New extends Component {
	constructor(props) {
		super(props);
		this.state = 	{ workers : [] };
	};

	newWorker(event) {
		event.preventDefault();
		// var name = event.target;
		let that 				= 	this;
		let firstName 	= 	that.refs.firstName.value.trim();
		let lastName 		= 	that.refs.lastName.value.trim();
		let email 			= 	that.refs.email.value.trim();
		let phoneNumber = 	that.refs.phoneNumber.value.trim();
		let role 				= 	that.refs.role.value.trim();
		let hourRate 		= 	that.refs.hourRate.value.trim();
		let billedTime 	= 	0;
		let key 				=		firstName.substr(0,2) + lastName.substr(0,2) + Math.floor( (Math.random() * 100 ) + 1 );
		if (name !== '') {
		}
		let newWorker 		= [{key,firstName, lastName, email, phoneNumber, role, hourRate, billedTime}];
		let workersUpdated = that.props.workers.concat(newWorker);

		this.setState({workers : workersUpdated}, function() {
			this.props.onAddWorker(workersUpdated)
		})

		that.refs.firstName.value = '';
		that.refs.lastName.value = '';
		that.refs.email.value = '';
		that.refs.phoneNumber.value = '';
		that.refs.role.value = '';
		that.refs.hourRate.value = '';
	}

	render() {
		return (
			<div className="col-md-4">
				<div className="list card">
					<div className="card-header" data-background-color="blue">
						<h4 className="title"><span><i className="material-icons">add_box</i> New Worker</span></h4>
					</div>
					<div className="card-content">
						<form onSubmit={this.newWorker.bind(this)}>
							<div className="row">
								<div className="col-md-6">
									<div className="form-group label-floating">
										<label className="control-label">First Name</label>
										<input type="text" ref="firstName" className="form-control" required/>
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group label-floating">
										<label className="control-label">Last Name</label>
										<input type="text" ref="lastName" className="form-control" required/>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12">
									<div className="form-group label-floating">
										<label className="control-label">Email address</label>
										<input type="email" ref="email" className="form-control" required />
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-5">
									<div className="form-group label-floating">
										<label className="control-label">Phone number</label>
										<input type="number" ref="phoneNumber" className="form-control" required/>
									</div>
								</div>
									<div className="col-md-7">
										<div className="form-group label-floating">
											<label className="control-label">Role</label>
											<div className="input-field">
												<select className="selectpicker" ref="role" data-style="btn btn-primary " title="Select Role" data-size="7">
													<option defaultValue> Painter</option>
													<option value="Carpenter">Carpenter</option>
													<option value="Misc">Misc</option>
													<option value="Driver">Driver</option>
												</select>
											 </div>
										</div>
									</div>
							</div>
							<div className="row">
								<div className="col-md-6">
									<div className="form-group label-floating">
										<label className="control-label ">Hour Rate ($)</label>
										<input type="number" ref="hourRate" className="form-control " required/>
									</div>
								</div>
							</div>
							<button type="submit" className="btn btn-primary pull-right">Create Worker</button>
							<div className="clearfix"></div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default New;
