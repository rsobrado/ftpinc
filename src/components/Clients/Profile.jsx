import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Profile extends Component {
	
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12">
						<ul className="breadcrumb">
						  <li className="breadcrumb-item"><Link to="/">Home</Link></li>
						  <li className="breadcrumb-item"><Link to="/Clients">Clients</Link></li>
						  <li className="breadcrumb-item active">Profile</li>
						</ul>
					</div>
					<div className="col-md-8">
						<div className="card">
							<div className="card-header" data-background-color="purple">
								<h4 className="title">Client Profile</h4>
							</div>
							<div className="card-content">
                                <form>
                                    <div className="row">
                                        <div className="col-md-3">
											<div className="form-group label-floating">
												<label className="control-label">Company (disabled)</label>
												<input typeName="text" className="form-control" disabled />
											</div>
                                        </div>
                                        <div className="col-md-4">
											<div className="form-group label-floating">
												<label className="control-label">Phone number</label>
												<input typeName="text" className="form-control" />
											</div>
                                        </div>
                                        <div className="col-md-5">
											<div className="form-group label-floating">
												<label className="control-label">Email address</label>
												<input typeName="email" className="form-control" />
											</div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
											<div className="form-group label-floating">
												<label className="control-label">Fist Name</label>
												<input typeName="text" className="form-control" />
											</div>
                                        </div>
                                        <div className="col-md-6">
											<div className="form-group label-floating">
												<label className="control-label">Last Name</label>
												<input typeName="text" className="form-control" />
											</div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
											<div className="form-group label-floating">
												<label className="control-label">Adress</label>
												<input typeName="text" className="form-control" />
											</div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-4">
											<div className="form-group label-floating">
												<label className="control-label">City</label>
												<input typeName="text" className="form-control" />
											</div>
                                        </div>
                                        <div className="col-md-4">
											<div className="form-group label-floating">
												<label className="control-label">Country</label>
												<input typeName="text" className="form-control" />
											</div>
                                        </div>
                                        <div className="col-md-4">
											<div className="form-group label-floating">
												<label className="control-label">Postal Code</label>
												<input typeName="text" className="form-control" />
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

                                    <button typeName="submit" className="btn btn-primary pull-right">Create Client</button>
                                    <div className="clearfix"></div>
                                </form>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="card card-profile">
							<div className="card-avatar">
								<a href="#pablo">
									<img className="img" src="../assets/img/faces/marc.jpg" />
								</a>
							</div>
							<div className="content">
								<h6 className="category text-gray">CEO / Co-Founder</h6>
								<h4 className="card-title">Alec Thompson</h4>
								<ul className="">
								<li><Link to="#">project #1</Link></li>
								<li><Link to="#">project #2</Link></li>
								<li><Link to="#">project #3</Link></li>
								</ul>
								<h6 >Current Project <span className="text-primary"><Link to="#">#ProjectN</Link></span></h6>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Profile;
