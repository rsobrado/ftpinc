import React, { Component } from 'react';


class New extends Component {
	
	render() {
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<h4 className="panel-title">
						<a data-toggle="collapse" data-parent="#accordion" href="#newEstimate">
							<i className="material-icons">person_add</i>
							<span className="">Create a new Client Profile</span>
						</a>
					</h4>
				</div>
				<div id="newEstimate" className="panel-collapse collapse">
					<div className="panel-body">
						<div className="col-md-12">
							<div className="card">
								<div className="card-header" data-background-color="blue">
									<h4 className="title"><i className="material-icons">assignment</i> New Estimate</h4>
								</div>
								<div className="card-content">
	                                <form>
	                                    <div className="row">
	                                        <div className="col-md-3">
												<div className="form-group label-floating">
													<label className="control-label">Company (disabled)</label>
													<input type="text" className="form-control" disabled />
												</div>
	                                        </div>
	                                        <div className="col-md-4">
												<div className="form-group label-floating">
													<label className="control-label">Phone number</label>
													<input type="number" pattern="\d*" className="form-control" />
												</div>
	                                        </div>
	                                        <div className="col-md-5">
												<div className="form-group label-floating">
													<label className="control-label">Email address</label>
													<input type="email" className="form-control" />
												</div>
	                                        </div>
	                                    </div>

	                                    <div className="row">
	                                        <div className="col-md-6">
												<div className="form-group label-floating">
													<label className="control-label">Fist Name</label>
													<input type="text" className="form-control" />
												</div>
	                                        </div>
	                                        <div className="col-md-6">
												<div className="form-group label-floating">
													<label className="control-label">Last Name</label>
													<input type="text" className="form-control" />
												</div>
	                                        </div>
	                                    </div>

	                                    <div className="row">
	                                        <div className="col-md-12">
												<div className="form-group label-floating">
													<label className="control-label">Adress</label>
													<input type="text" className="form-control" />
												</div>
	                                        </div>
	                                    </div>

	                                    <div className="row">
	                                        <div className="col-md-4">
												<div className="form-group label-floating">
													<label className="control-label">City</label>
													<input type="text" className="form-control" />
												</div>
	                                        </div>
	                                        <div className="col-md-4">
												<div className="form-group label-floating">
													<label className="control-label">Country</label>
													<input type="text" className="form-control" />
												</div>
	                                        </div>
	                                        <div className="col-md-4">
												<div className="form-group label-floating">
													<label className="control-label">Postal Code</label>
													<input type="text" className="form-control" />
												</div>
	                                        </div>
	                                    </div>

	                                    <div className="row">
	                                        <div className="col-md-6">
	                                            <div className="form-group">
	                                                <label>Aditional Information</label>
													<div className="form-group label-floating">
									    				<label className="control-label"> Colonial Style 3 Floor House, 5 Bedrooms, 3 Bathrooms</label>
								    					<textarea className="form-control" rows="5"></textarea>
		                        					</div>
	                                            </div>
	                                        </div>
	                                            <div className="col-md-6">
	                                            	<h3>map</h3>
	                                            	<div id="map"></div>
	                                            </div>
	                                    </div>

	                                    <button type="submit" className="btn btn-primary pull-right">Create Client</button>
	                                    <div className="clearfix"></div>
	                                </form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default New;
