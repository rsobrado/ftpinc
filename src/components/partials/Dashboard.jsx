import React from 'react';
import { Link } from 'react-router-dom';


const Dashboard = () =>
	<div className="container-fluid">
		<div className="row">
			<div className="col-lg-3 col-md-6 col-sm-6">
				<div className="dashboard-item card card-stats">
					<Link to="/Estimates">
						<div className="card-header" data-background-color="green">
							 <i className="material-icons">assignment</i>
						</div>
						<div className="card-content">
							Estimates
						</div>
				 </Link>
			 </div>
			</div>
				<div className="col-lg-3 col-md-6 col-sm-6">
					<Link to="/Clients">
						<div className="dashboard-item card card-stats">
							<div className="card-header" data-background-color="orange">
								<i className="material-icons">folder_shared</i>
							</div>
							<div className="card-content">
								Clients
							</div>
						</div>
					</Link>
				</div>
			<div className="col-lg-3 col-md-6 col-sm-6">
				<Link to="/Workers">
					<div className="dashboard-item card card-stats">
						<div className="card-header" data-background-color="purple">
							<i className="material-icons">accessibility</i>
						</div>
						<div className="card-content">
							Workers
						</div>
					</div>
				</Link>
			</div>

			<div className="col-lg-3 col-md-6 col-sm-6">
				<Link to="/Materials">
					<div className="dashboard-item card card-stats">
						<div className="card-header" data-background-color="blue">
							 <i className="material-icons">format_paint</i>
						</div>
						<div className="card-content">
							Materials
						</div>
					</div>
				</Link>
			</div>
		</div>

		<div className="row">
			<div className="col-md-4">
				<div className="card">
					<div className="card-header card-chart" data-background-color="green">
						<div className="ct-chart" id="dailySalesChart"></div>
					</div>
					<div className="card-content">
						<h4 className="title">Daily Sales</h4>
						<p className="category"><span className="text-success"><i className="fa fa-long-arrow-up"></i> 55%  </span> increase in today sales.</p>
					</div>
					<div className="card-footer">
						<div className="stats">
							<i className="material-icons">access_time</i> updated 4 minutes ago
						</div>
					</div>
				</div>
			</div>

			<div className="col-md-4">
				<div className="card">
					<div className="card-header card-chart" data-background-color="orange">
						<div className="ct-chart" id="emailsSubscriptionChart"></div>
					</div>
					<div className="card-content">
						<h4 className="title">Email Subscriptions</h4>
						<p className="category">Last Campaign Performance</p>
					</div>
					<div className="card-footer">
						<div className="stats">
							<i className="material-icons">access_time</i> campaign sent 2 days ago
						</div>
					</div>

				</div>
			</div>

			<div className="col-md-4">
				<div className="card">
					<div className="card-header card-chart" data-background-color="red">
						<div className="ct-chart" id="completedTasksChart"></div>
					</div>
					<div className="card-content">
						<h4 className="title">Completed Tasks</h4>
						<p className="category">Last Campaign Performance</p>
					</div>
					<div className="card-footer">
						<div className="stats">
							<i className="material-icons">access_time</i> campaign sent 2 days ago
						</div>
					</div>
				</div>
			</div>
		</div>

		<div className="row">
			<div className="col-lg-6 col-md-12">
				<div className="card card-nav-tabs">
					<div className="card-header" data-background-color="purple">
						<div className="nav-tabs-navigation">
							<div className="nav-tabs-wrapper">
								<span className="nav-tabs-title">Tasks:</span>
								<ul className="nav nav-tabs" data-tabs="tabs">
									<li className="active">
										<a href="#profile" data-toggle="tab">
											<i className="material-icons">bug_report</i>
											Bugs
										<div className="ripple-container"></div></a>
									</li>
									<li className="">
										<a href="#messages" data-toggle="tab">
											<i className="material-icons">code</i>
											Website
										<div className="ripple-container"></div></a>
									</li>
									<li className="">
										<a href="#settings" data-toggle="tab">
											<i className="material-icons">cloud</i>
											Server
										<div className="ripple-container"></div></a>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="card-content">
						<div className="tab-content">
							<div className="tab-pane active" id="profile">
								<table className="table">
									<tbody>
										<tr>
											<td>
												<div className="checkbox">
													<label>
														<input type="checkbox" name="optionsCheckboxes" defaultChecked />
													</label>
												</div>
											</td>
											<td>Sign contract for "What are conference organizers afraid of?"</td>
											<td className="td-actions text-right">
												<button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-simple btn-xs">
													<i className="material-icons">edit</i>
												</button>
												<button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
													<i className="material-icons">close</i>
												</button>
											</td>
										</tr>
										<tr>
											<td>
												<div className="checkbox">
													<label>
														<input type="checkbox" name="optionsCheckboxes" />
													</label>
												</div>
											</td>
											<td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
											<td className="td-actions text-right">
												<button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-simple btn-xs">
													<i className="material-icons">edit</i>
												</button>
												<button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
													<i className="material-icons">close</i>
												</button>
											</td>
										</tr>
										<tr>
											<td>
												<div className="checkbox">
													<label>
														<input type="checkbox" name="optionsCheckboxes" />
													</label>
												</div>
											</td>
											<td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
											</td>
											<td className="td-actions text-right">
												<button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-simple btn-xs">
													<i className="material-icons">edit</i>
												</button>
												<button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
													<i className="material-icons">close</i>
												</button>
											</td>
										</tr>
										<tr>
											<td>
												<div className="checkbox">
													<label>
														<input type="checkbox" name="optionsCheckboxes" defaultChecked />
													</label>
												</div>
											</td>
											<td>Create 4 Invisible User Experiences you Never Knew About</td>
											<td className="td-actions text-right">
												<button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-simple btn-xs">
													<i className="material-icons">edit</i>
												</button>
												<button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
													<i className="material-icons">close</i>
												</button>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="tab-pane" id="messages">
								<table className="table">
									<tbody>
										<tr>
											<td>
												<div className="checkbox">
													<label>
														<input type="checkbox" name="optionsCheckboxes" defaultChecked />
													</label>
												</div>
											</td>
											<td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
											</td>
											<td className="td-actions text-right">
												<button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-simple btn-xs">
													<i className="material-icons">edit</i>
												</button>
												<button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
													<i className="material-icons">close</i>
												</button>
											</td>
										</tr>
										<tr>
											<td>
												<div className="checkbox">
													<label>
														<input type="checkbox" name="optionsCheckboxes" />
													</label>
												</div>
											</td>
											<td>Sign contract for "What are conference organizers afraid of?"</td>
											<td className="td-actions text-right">
												<button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-simple btn-xs">
													<i className="material-icons">edit</i>
												</button>
												<button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
													<i className="material-icons">close</i>
												</button>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="tab-pane" id="settings">
								<table className="table">
									<tbody>
										<tr>
											<td>
												<div className="checkbox">
													<label>
														<input type="checkbox" name="optionsCheckboxes" />
													</label>
												</div>
											</td>
											<td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
											<td className="td-actions text-right">
												<button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-simple btn-xs">
													<i className="material-icons">edit</i>
												</button>
												<button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
													<i className="material-icons">close</i>
												</button>
											</td>
										</tr>
										<tr>
											<td>
												<div className="checkbox">
													<label>
														<input type="checkbox" name="optionsCheckboxes" defaultChecked />
													</label>
												</div>
											</td>
											<td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
											</td>
											<td className="td-actions text-right">
												<button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-simple btn-xs">
													<i className="material-icons">edit</i>
												</button>
												<button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
													<i className="material-icons">close</i>
												</button>
											</td>
										</tr>
										<tr>
											<td>
												<div className="checkbox">
													<label>
														<input type="checkbox" name="optionsCheckboxes" />
													</label>
												</div>
											</td>
											<td>Sign contract for "What are conference organizers afraid of?"</td>
											<td className="td-actions text-right">
												<button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-simple btn-xs">
													<i className="material-icons">edit</i>
												</button>
												<button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
													<i className="material-icons">close</i>
												</button>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="col-lg-6 col-md-12">
				<div className="card">
											<div className="card-header" data-background-color="orange">
													<h4 className="title">Employees Stats</h4>
													<p className="category">New employees on 15th September, 2016</p>
											</div>
											<div className="card-content table-responsive">
													<table className="table table-hover">
															<thead className="text-warning">
																<tr>
																		<th>ID</th>
																	<th>Name</th>
																	<th>Salary</th>
																	<th>Country</th>
																</tr>
															</thead>
															<tbody>
																	<tr>
																		<td>1</td>
																		<td>Dakota Rice</td>
																		<td>$36,738</td>
																		<td>Niger</td>
																	</tr>
																	<tr>
																		<td>2</td>
																		<td>Minerva Hooper</td>
																		<td>$23,789</td>
																		<td>Curaçao</td>
																	</tr>
																	<tr>
																		<td>3</td>
																		<td>Sage Rodriguez</td>
																		<td>$56,142</td>
																		<td>Netherlands</td>
																	</tr>
																	<tr>
																		<td>4</td>
																		<td>Philip Chaney</td>
																		<td>$38,735</td>
																		<td>Korea, South</td>
																	</tr>
															</tbody>
													</table>
											</div>
									</div>
			</div>
		</div>
	</div>

export default Dashboard;
