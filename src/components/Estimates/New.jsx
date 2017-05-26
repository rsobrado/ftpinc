import React, { Component } from 'react';


class New extends Component {
	constructor() {
		super();
		this.state = {
			subtotal: 0,
			discount: 0,
			tax: 0,
			total: 0
		}
	};

	calculateDiscount(e) {
		const amount = e.target.value;
		var initialCost = parseInt(this.refs.cost.value);
		var discount = parseFloat(initialCost * (amount/100));
		var subTotal = parseFloat(initialCost - discount);
		var tax = parseFloat(subTotal * 0.0685).toFixed(2);
		var finalCost = subTotal + parseFloat(tax);

		this.updateValues(amount,subTotal,finalCost,tax);
	}

	estimateTotal(e) {
		const amount = e.target.value;
		var initialCost = parseInt(amount);
		var discount = parseFloat(initialCost * (this.refs.discount.value/100));
		var subTotal = parseFloat(initialCost - discount);
		var tax = parseFloat(subTotal * 0.0685).toFixed(2);
		var finalCost = subTotal + parseFloat(tax);
		
		if (amount==='') {
			tax = 0;
			finalCost = 0;
		}

		this.updateValues(amount,subTotal,finalCost,tax);
	};

	updateValues(amount,subtotal,finalcost,tax) {
		this.setState({subtotal: subtotal});
		this.setState({tax: tax});
		this.setState({total: finalcost.toFixed(2)});
	};
	
	render() {
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<h4 className="panel-title">
						<a data-toggle="collapse" data-parent="#accordion" href="#newEstimate">
							<i className="material-icons">note_add</i>
							<span className="">Create Estimate</span>
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
									<form >
										<div className="row">
											<div className="col-md-3">
												<div className="form-group label-floating">
													<label className="control-label">Estimate ID</label>
													<input type="text" className="form-control" disabled value="FT20170032" />
												</div>
											</div>
											<div className="col-md-5">
												<div className="form-group label-floating">
													<label className="control-label">Client Name</label>
													<input type="text" className="form-control" />
												</div>
											</div>
											<div className="col-md-4">
												<div className="form-group label-floating">

													<label className="control-label">Phone Number</label>
													<input type="number" className="form-control" />
												</div>
											</div>
										</div>

										<div className="row">
											<div className="col-md-6">
												<div className="">
													<div className="">
														<div className="form-group label-floating">
															<label className="control-label">Address</label>
															<input type="text" className="form-control" />
														</div>
													</div>
													<div className="col-md-6">
														<div className="form-group label-floating">
															<label className="control-label">City</label>
															<input type="text" className="form-control" />
														</div>
													</div>
													<div className="col-md-6">
														<div className="form-group label-floating">
															<label className="control-label">Postal Code</label>
															<input type="text" className="form-control" />
														</div>
													</div>
													<div className="col-md-12">
														<div className="form-group">
															<div className="form-group label-floating">
																<label className="control-label">Aditional Information</label>
																<textarea className="form-control" rows="5"></textarea>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-6">
												mapa
											</div>
										</div>

										<div className="row">
											<div className="col-md-12">
												<div className="card card-nav-tabs">
													<div className="card-header" data-background-color="green">
														<div className="nav-tabs-navigation">
															<div className="nav-tabs-wrapper">
																<ul className="nav nav-tabs" data-tabs="tabs">
																	<li className="active">
																		<a href="#exterior" data-toggle="tab">
																			<i className="material-icons">home</i>
																			Exterior
																			<div className="ripple-container"></div>
																		</a>
																	</li>
																	<li className="">
																		<a href="#interior" data-toggle="tab">
																			<i className="material-icons">open_in_browser</i>
																			Interior
																			<div className="ripple-container"></div>
																		</a>
																	</li>
																</ul>
															</div>
														</div>
													</div>
													<div className="card-content">
														<div className="tab-content">
															<div className="tab-pane active" id="exterior">
																<section id="working-areas">
																	<div className="row">
																		<div className="col-md-12">
																			<h6>Work Areas</h6>
																			<div className="col-md-4">
																				<ul>
																					<li>
																						<div className="checkbox">
																							<label>
																								<input type="checkbox" name="optionsCheckboxes" /> Siding
																							</label>
																						</div>
																					</li>
																					<li>
																						<div className="checkbox">
																							<label>
																								<input type="checkbox" name="optionsCheckboxes" /> Trim
																							</label>
																						</div>
																					</li>
																					<li>
																						<div className="checkbox">
																							<label>
																								<input type="checkbox" name="optionsCheckboxes" /> Stucco
																							</label>
																						</div>
																					</li>
																					<li>
																						<div className="checkbox">
																							<label>
																								<input type="checkbox" name="optionsCheckboxes" /> Foundation
																							</label>
																						</div>
																					</li>
																					<li>
																						<div className="checkbox">
																							<label>
																								<input type="checkbox" name="optionsCheckboxes" /> Shutters
																							</label>
																						</div>
																					</li>
																					<li>
																						<div className="checkbox">
																							<label>
																								<input type="checkbox" name="optionsCheckboxes" /> Railing
																							</label>
																						</div>
																					</li>
																					<li>
																						<div className="checkbox">
																							<label>
																								<input type="checkbox" name="optionsCheckboxes" /> Chimney
																							</label>
																						</div>
																					</li>
																				</ul>   
																			</div>
																			<div className="col-md-4">
																				<ul>
																					<li>
																						<div className="checkbox">
																							<label>
																								<input type="checkbox" name="optionsCheckboxes" /> Front Door
																							</label>
																						</div>
																					</li>
																					<li>
																						<div className="checkbox">
																							<label>
																								<input type="checkbox" name="optionsCheckboxes" /> Painted Doors
																							</label>
																						</div>
																					</li>
																					<li>
																						<div className="checkbox">
																							<label>
																								<input type="checkbox" name="optionsCheckboxes" /> Garage Doors
																							</label>
																						</div>
																					</li>
																					<li>
																						<div className="checkbox">
																							<label>
																								<input type="checkbox" name="optionsCheckboxes" /> Garage
																							</label>
																						</div>
																					</li>
																					<li>
																						<div className="checkbox">
																							<label>
																								<input type="checkbox" name="optionsCheckboxes" /> Deck
																							</label>
																						</div>
																					</li>
																					<li>
																						<div className="checkbox">
																							<label>
																								<input type="checkbox" name="optionsCheckboxes" /> Sheet
																							</label>
																						</div>
																					</li>
																					<li>
																						<div className="checkbox">
																							<label>
																								<input type="checkbox" name="optionsCheckboxes" /> Gutters / Leaders
																							</label>
																						</div>
																					</li>
																				</ul>   
																			</div>
																			<div className="col-md-4">
																				<ul>
																					<li>
																						<div className="checkbox">
																							<label>
																								<input type="checkbox" name="optionsCheckboxes" /> Vinyl Windows
																							</label>
																						</div>
																					</li>
																					<li>
																						<div className="checkbox">
																							<label>
																								<input type="checkbox" name="optionsCheckboxes" /> Expose Windows
																							</label>
																						</div>
																					</li>
																					<li>
																						<div className="checkbox">
																							<label>
																								<input type="checkbox" name="optionsCheckboxes" /> Basement Windows
																							</label>
																						</div>
																					</li>
																					<li>
																						<div className="checkbox">
																							<label>
																								<input type="checkbox" name="optionsCheckboxes" /> Paint Storm Windows *
																							</label>
																						</div>
																					</li>
																				</ul>   
																			</div>
																		</div>
																	</div>
																	<hr />
																</section>
																<section id="sanding-scraping">
																	<h6>sanding &amp; scraping</h6>
																	<div className="card card-plain">
																		<div className="card-content table-responsive">
																			<table  className="table table-hover sanding-scraping">
																				<thead>
																					<tr><th></th>
																						<th>All</th>
																						<th>Front</th>
																						<th>Right</th>
																						<th>Left</th>
																						<th>Rear</th>
																						<th>Garage</th>
																					</tr>
																				</thead>
																				<tbody>
																					<tr>
																						<td className="task"><b>Scrape:</b></td>
																						<td>
																							<div className="checkbox">
																								<label>
																									<input type="checkbox" name="optionsCheckboxes" />
																								</label>
																							</div>
																						</td>
																						<td>
																							<div className="checkbox">
																								<label>
																									<input type="checkbox" name="optionsCheckboxes" />
																								</label>
																							</div>
																						</td>
																						<td>
																							<div className="checkbox">
																								<label>
																									<input type="checkbox" name="optionsCheckboxes" />
																								</label>
																							</div>
																						</td>
																						<td>
																							<div className="checkbox">
																								<label>
																									<input type="checkbox" name="optionsCheckboxes" />
																								</label>
																							</div>
																						</td>
																						<td>
																							<div className="checkbox">
																								<label>
																									<input type="checkbox" name="optionsCheckboxes" />
																								</label>
																							</div>
																						</td>
																						<td>
																							<div className="checkbox">
																								<label>
																									<input type="checkbox" name="optionsCheckboxes" />
																								</label>
																							</div>
																						</td>
																					</tr>
																					<tr>
																						<td className="task"><b>Strip Flat Areas:<br/><small>(95% bare wood)</small></b></td>
																						<td>
																							<div className="checkbox">
																								<label>
																									<input type="checkbox" name="optionsCheckboxes" />
																								</label>
																							</div>
																						</td>
																						<td>
																							<div className="checkbox">
																								<label>
																									<input type="checkbox" name="optionsCheckboxes" />
																								</label>
																							</div>
																						</td>
																						<td>
																							<div className="checkbox">
																								<label>
																									<input type="checkbox" name="optionsCheckboxes" />
																								</label>
																							</div>
																						</td>
																						<td>
																							<div className="checkbox">
																								<label>
																									<input type="checkbox" name="optionsCheckboxes" />
																								</label>
																							</div>
																						</td>
																						<td>
																							<div className="checkbox">
																								<label>
																									<input type="checkbox" name="optionsCheckboxes" />
																								</label>
																							</div>
																						</td>
																						<td>
																							<div className="checkbox">
																								<label>
																									<input type="checkbox" name="optionsCheckboxes" />
																								</label>
																							</div>
																						</td>
																					</tr>
																					<tr>
																						<td className="task"><b>Finish hand sand:</b></td>
																						<td>
																							<div className="checkbox">
																								<label>
																									<input type="checkbox" name="optionsCheckboxes" />
																								</label>
																							</div>
																						</td>
																						<td>
																							<div className="checkbox">
																								<label>
																									<input type="checkbox" name="optionsCheckboxes" />
																								</label>
																							</div>
																						</td>
																						<td>
																							<div className="checkbox">
																								<label>
																									<input type="checkbox" name="optionsCheckboxes" />
																								</label>
																							</div>
																						</td>
																						<td>
																							<div className="checkbox">
																								<label>
																									<input type="checkbox" name="optionsCheckboxes" />
																								</label>
																							</div>
																						</td>
																						<td>
																							<div className="checkbox">
																								<label>
																									<input type="checkbox" name="optionsCheckboxes" />
																								</label>
																							</div>
																						</td>
																						<td>
																							<div className="checkbox">
																								<label>
																									<input type="checkbox" name="optionsCheckboxes" />
																								</label>
																							</div>
																						</td>
																					</tr>
																					<tr>
																						<td className="task"><b>Spot Sanding:</b></td>
																						<td>
																						</td>
																						<td>
																							<div className="form-group label-floating">
																								<label className="control-label form-label">%</label>
																								<input type="number" className="form-control text-success" min="0" max="100" />
																							</div>
																						</td>
																						<td>
																							<div className="form-group label-floating">
																								<label className="control-label form-label">%</label>
																								<input type="number" min="0" max="100" className="form-control text-success" />
																							</div>
																						</td>
																						<td>
																							<div className="form-group label-floating">
																								<label className="control-label form-label">%</label>
																								<input type="number" min="0" max="100" className="form-control text-success" />
																							</div>
																						</td>
																						<td>
																							<div className="form-group label-floating">
																								<label className="control-label form-label">%</label>
																								<input type="number" max="100" min="0" className="form-control text-success" />
																							</div>
																						</td>
																						<td>
																							<div className="form-group label-floating">
																								<label className="control-label form-label">%</label>
																								<input type="number" min="0" max="100" className="form-control text-success" />
																							</div>
																						</td>
																					</tr>
																				</tbody>
																			</table>
																		</div>
																	</div>
																	<hr />
																</section>
																<section id="cleaning-preparation">
																	<h6>Cleaning &amp; Preparation</h6>

																	<div className="row">
																		<div className="col-md-4">
																			<ul>
																				<li>
																					<div className="checkbox">
																						<label>
																							<input type="checkbox" name="optionsCheckboxes" /> Power Wash House
																						</label>
																					</div>
																				</li>
																				<li>
																					<div className="checkbox">
																						<label>
																							<input type="checkbox" name="optionsCheckboxes" /> Power Wash Patio
																						</label>
																					</div>
																				</li>
																				<li>
																					<div className="checkbox">
																						<label>
																							<input type="checkbox" name="optionsCheckboxes" /> Power Wash Deck
																						</label>
																					</div>
																				</li>
																			</ul>   
																		</div>
																		<div className="col-md-4">
																			<ul>
																				<li>
																					<div className="checkbox">
																						<label>
																							<input type="checkbox" name="optionsCheckboxes" /> Power Wash Walkaway
																						</label>
																					</div>
																				</li>
																				<li>
																					<div className="checkbox">
																						<label>
																							<input type="checkbox" name="optionsCheckboxes" /> Power Wash Steps
																						</label>
																					</div>
																				</li>
																				<li>
																					<div className="checkbox">
																						<label>
																							<input type="checkbox" name="optionsCheckboxes" /> Spot Prime knot holes
																						</label>
																					</div>
																				</li>
																			</ul>   
																		</div>
																		<div className="col-md-4">
																			<ul>
																				<li>
																					<div className="checkbox">
																						<label>
																							<input type="checkbox" name="optionsCheckboxes" /> Caulk seams and corners
																						</label>
																					</div>
																				</li>
																				<li>
																					<div className="checkbox">
																						<label>
																							<input type="checkbox" name="optionsCheckboxes" /> Fill nail holes and trim
																						</label>
																					</div>
																				</li>
																				<li>
																					<div className="checkbox">
																						<label>
																							<input type="checkbox" name="optionsCheckboxes" /> Tape exterior of windows
																						</label>
																					</div>
																				</li>
																			</ul>   
																		</div>
																	</div>
																	<hr />
																</section>
																<section id="cleaning-preparation">
																	<h6>Painting &amp; Priming</h6>

																	<div className="row">
																		<div className="col-md-4">
																			<h5>Work Areas</h5>
																			<ul>
																				<li>
																					<div className="checkbox">
																						<label>
																							<input type="checkbox" name="optionsCheckboxes" /> Siding
																						</label>
																					</div>
																				</li>
																				<li>
																					<div className="checkbox">
																						<label>
																							<input type="checkbox" name="optionsCheckboxes" /> Trim
																						</label>
																					</div>
																				</li>
																				<li>
																					<div className="checkbox">
																						<label>
																							<input type="checkbox" name="optionsCheckboxes" /> Windows
																						</label>
																					</div>
																				</li>
																				<li>
																					<div className="checkbox">
																						<label>
																							<input type="checkbox" name="optionsCheckboxes" /> Doors
																						</label>
																					</div>
																				</li>
																				<li>
																					<div className="checkbox">
																						<label>
																							<input type="checkbox" name="optionsCheckboxes" /> Shutters
																						</label>
																					</div>
																				</li>
																			</ul>   
																		</div>
																		<div className="col-md-4">
																			<h5>Priming</h5>
																			<ul>
																				<li>
																					<select className="selectpicker" data-style="btn btn-primary " title="Single Select" data-size="7">
																						<option defaultValue> Spot Prime</option>
																						<option value="1">Full Prime</option>
																					</select>
																				</li>
																				<li>
																					<select className="selectpicker" data-style="btn btn-primary " title="Single Select" data-size="7">
																						<option defaultValue> Spot Prime</option>
																						<option value="1">Full Prime</option>
																					</select>
																				</li>
																				<li>
																					<select className="selectpicker" data-style="btn btn-primary " title="Single Select" data-size="7">
																						<option defaultValue> Spot Prime</option>
																						<option value="1">Full Prime</option>
																					</select>
																				</li>
																				<li>
																					<select className="selectpicker" data-style="btn btn-primary " title="Single Select" data-size="7">
																						<option defaultValue> Spot Prime</option>
																						<option value="1">Full Prime</option>
																					</select>
																				</li>
																				<li>
																					<select className="selectpicker" data-style="btn btn-primary " title="Single Select" data-size="7">
																						<option defaultValue> Spot Prime</option>
																						<option value="1">Full Prime</option>
																					</select>
																				</li>
																			</ul>   
																		</div>
																		<div className="col-md-4">
																			<h5>Painting</h5>

																			<ul>
																				<li>
																					<select className="selectpicker" data-style="btn btn-primary " title="Single Select" data-size="7">
																						<option  defaultValue> Oil</option>
																						<option value="1">Latex</option>
																					</select>
																				</li>
																				<li>
																					<select className="selectpicker" data-style="btn btn-primary " title="Single Select" data-size="7">
																						<option  defaultValue> Oil</option>
																						<option value="1">Latex</option>
																					</select>
																				</li>
																				<li>
																					<select className="selectpicker" data-style="btn btn-primary " title="Single Select" data-size="7">
																						<option  defaultValue> Oil</option>
																						<option value="1">Latex</option>
																					</select>
																				</li>
																				<li>
																					<select className="selectpicker" data-style="btn btn-primary " title="Single Select" data-size="7">
																						<option  defaultValue> Oil</option>
																						<option value="1">Latex</option>
																					</select>
																				</li>
																				<li>
																					<select className="selectpicker" data-style="btn btn-primary " title="Single Select" data-size="7">
																						<option  defaultValue> Oil</option>
																						<option value="1">Latex</option>
																					</select>   
																				</li>
																			</ul>   
																		</div>
																	</div>
																	<hr />
																</section>
																<section id="extra-areas">
																	<h6>Extra Working Areas</h6>

																	<div className="row">
																		<div className="col-md-6">
																			<div className="form-group">
																				<div className="form-group label-floating">
																					<label className="control-label"> Deck</label>
																					<textarea className="form-control" rows="5"></textarea>
																				</div>
																			</div>
																		</div>
																		<div className="col-md-6">
																			<div className="form-group">
																				<div className="form-group label-floating">
																					<label className="control-label"> Aditional Windows tasks</label>
																					<textarea className="form-control" rows="5"></textarea>
																				</div>
																			</div>
																		</div>
																	</div>
																	<hr />
																</section>
																<section id="pricing-taxes">
																	<div className="row">
																		<div className="col-md-9">
																			<h3 id="price">All Labor and Materials</h3> 
																		</div>
																		<div className="col-md-3 ">
																			<div className="form-group label-floating">
																				<label className="control-label form-label">$</label>
																				<input type="number" ref="cost" className="form-control" onChange={(e)=>this.estimateTotal(e)}  min="0"  />
																			</div>
																		</div>
																	</div>
																	<div className="row">
																		<div className="col-md-9">
																			<h3 id="price">Discount</h3>  
																		</div>
																		<div className="col-md-3 ">
																			<div className="form-group label-floating">
																				<label className="control-label form-label">%</label>
																				<input type="number" ref="discount" className="form-control text-success" onChange={(e)=>this.calculateDiscount(e)} min="0" max="100" />
																			</div>
																		</div>
																	</div>
																	<div className="row">
																		<div className="col-md-9">
																			<h3 id="tax">Sales Tax <small>(6.85%)</small></h3>
																		</div>
																		<div className="col-md-3 ">
																			<div className="form-group label-floating">
																				<h3 className="text-warning pull-right">${this.state.tax}</h3>
																			</div>
																		</div>
																	</div>
																	<div className="row">
																		<div className="col-md-9">
																			<h2 id="tax">Total Amount</h2>
																		</div>
																		<div className="col-md-3 pull-right">
																			<div className="form-group label-floating">
																				<h2 className="text-danger pull-right">${this.state.total}</h2>
																			</div>
																		</div>
																	</div>
																	<hr />
																	<blockquote>
																		<h5>Notes</h5>
																		<ul>
																			<li><b>Hepa Vac Sanding Equipment</b> will be use at tume of stripping to minimize the amount of dust in the air. </li>
																			<li>Areas where a 5 inches sanding disc and Hepa Vac shroud can not fit will not be stripped.</li>
																			<li>Siding on New Additions, will not be stripped to bare wood if its is in good condition unless specifically noted.</li>
																			<li>
																				<b>Trim Preparation</b> 
																				<p>We can sand most flat. wide. vertical pieces of trim to bare wood if needed (windows frams, fascia etc) Cerved boards, railing, spindles, small areas and soffits will be lightly sanded and are not stimated to be stripped to bare wood in this estimates unless specifically noted. It is common to see level differences between old and new paint unless additional work is done.</p>
																			</li> 
																			<li>
																				<p ><b>* </b>Windows Behind Storms and screend are not Included. Separate Price.</p>
																			</li>
																		</ul>
																		<h5>Terms and Conditions</h5>
																		<ul>
																			<li><b>Painting &amp; Carpentry</b> </li>
																			<li>We Provide up to thee(3) test quarts of paint samples.</li>
																			<li>$20 will be charged per extra quart.</li>
																			<li>Stain samples only come in gallons and will be chargerd after firts gallon consumed.</li>
																			<li>Carpentry tasks will be charged separatly.</li>
																		</ul>
																		<ul>
																			<li><b>Payment &amp; Deposit</b> </li>
																			<li><b>$500</b> as deposit when contract is agreed.</li>
																			<li><b>30%</b> upon starting the project.</li>
																			<li><b>35%</b> progress payment.</li> 
																			<li>Balance due completition.</li>
																		</ul>
																	</blockquote> 
																</section>  
															</div>
															<div className="tab-pane" id="interior">
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
										</div>
										<button type="submit" className="btn btn-primary pull-right">Create Estimate</button>
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
