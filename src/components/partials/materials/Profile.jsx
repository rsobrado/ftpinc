import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component {
	
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12">
						<ul className="breadcrumb">
						  <li className="breadcrumb-item"><Link to="/">Home</Link></li>
						  <li className="breadcrumb-item"><Link to="/Materials">Materials</Link></li>
						  <li className="breadcrumb-item active">Data</li>
						</ul>
					</div>
					<div className="col-md-12">
						<div className="card">
							<div className="card-header" data-background-color="purple">
								<h4 className="title">Material Profile</h4>
							</div>
							<div className="card-content">
								<form>
									<div className="row">
										<div className="col-md-2">
											<div className="form-group label-floating">
												<label className="control-label">ID</label>
												<input type="text" className="form-control" disabled />
											</div>
										</div>
										<div className="col-md-4">
											<div className="form-group label-floating">
												<label className="control-label">Name</label>
												<input type="text" className="form-control" />
											</div>
										</div>
										<div className="col-md-4">
											<div className="form-group label-floating">
												<label className="control-label">Description</label>
												<input type="text" className="form-control" />
											</div>
										</div>
										<div className="col-md-2">
											<div className="form-group label-floating">
												<label className="control-label">Cost</label>
												<input type="number" className="form-control" />
											</div>
										</div>
									</div>

									<button type="submit" className="btn btn-primary pull-right">Create Material</button>
									<div className="clearfix"></div>
								</form>
							</div>
						</div>
					</div>
				</div>	
			</div>
		);
	}
}

export default Profile;
