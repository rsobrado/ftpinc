import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Profile extends Component {
	
	render() {
		return (
				<div className="row">

					<div className="col-md-12">
						<ul className="breadcrumb">
						  <li className="breadcrumb-item"><Link to="/">Home</Link></li>
						  <li className="breadcrumb-item"><Link to="/Workers">Workers</Link></li>
						  <li className="breadcrumb-item active">Data</li>
						</ul>
					</div>

					<div className="col-md-8">
						<div className="card">
							<div className="card-header" data-background-color="purple">
								<h4 className="title">Worker Profile</h4>
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

										<div className="col-md-5">
											<div className="form-group label-floating">
												<label className="control-label">Fist Name</label>
												<input type="text" className="form-control" />
											</div>
										</div>
										<div className="col-md-5">
											<div className="form-group label-floating">
												<label className="control-label">Last Name</label>
												<input type="text" className="form-control" />
											</div>
										</div>
									</div>

									<div className="row">
										<div className="col-md-4">
											<div className="form-group label-floating">
												<label className="control-label">Phone number</label>
												<input type="text" className="form-control" />
											</div>
										</div>
										<div className="col-md-8">
											<div className="form-group label-floating">
												<label className="control-label">Email address</label>
												<input type="email" className="form-control" />
											</div>
										</div>
									</div>

									<div className="row">
										<div className="col-md-4">
											<div className="form-group label-floating">
												<label className="control-label ">Hour Rate ($)</label>
												<input type="number" className="form-control " />
											</div>
										</div>
										<div className="col-md-3">
											<div className="form-group label-floating">
												<label className="control-label">Role</label>
												<div className="input-field col s12">
												  <select className="selectpicker" data-style="btn btn-primary " title="Role" data-size="7">
												  	<option defaultValue> Painter</option>
												  	<option value="1">Carpenter</option>
												  	<option value="1">Misc</option>
												  	<option value="1">Driver</option>
												  </select>
												 </div>
											</div>
										</div>
									</div>
									<button type="submit" className="btn btn-primary pull-right">Create Worker</button>
									<div className="clearfix"></div>
								</form>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="card card-profile">
							<div className="card-avatar">
								<a href="#pablo">
									<img className="img" src="http://placekitten.com.s3.amazonaws.com/homepage-samples/408/287.jpg" alt="avatar"/>
								</a>
							</div>
							<div className="content">
								<h6 className="category text-gray">CEO / Co-Founder</h6>
								<h4 className="card-title">Alec Thompson</h4>
								<ul className="">
								<li><a href="#">project #1</a></li>
								<li><a href="#">project #2</a></li>
								<li><a href="#">project #3</a></li>
								</ul>
								<h5 >Week Salary <span className="text-primary">$542</span></h5>
							</div>
						</div>
					</div>
				</div>
			);
	}
}

export default Profile;
