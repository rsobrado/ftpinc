import React, { Component } from 'react';


class New extends Component {
	
	render() {
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<h4 className="panel-title">
						<a data-toggle="collapse" data-parent="#accordion" href="#newEstimate">
							<i className="material-icons">person_add</i>
							<span className="">Create a new Material</span>
						</a>
					</h4>
				</div>
				<div id="newEstimate" className="panel-collapse collapse ">
					<div className="panel-body">
						<div className="col-md-12">
							<div className="card">
								<div className="card-header" data-background-color="blue">
									<h4 className="title"><i className="material-icons">assignment</i> New Estimate</h4>
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
			</div>
		);
	}
}

export default New;
