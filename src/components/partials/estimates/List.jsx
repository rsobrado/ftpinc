import React, { Component } from 'react';


class List extends Component {
	
  render() {
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<h4 className="panel-title">
						<a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
							<i className="material-icons">view_list</i>
							<span className="">Estimates List</span>
						</a>
					</h4>
				</div>
				<div id="collapseTwo" className="panel-collapse collapse in">
					<div className="panel-body">
						<div className="col-md-12">
							<div className="card">
								<div className="card-header" data-background-color="orange">
									<h4 className="title">Estimates List</h4>
								</div>
								<div className="card-content table-responsive">
									<table className="table table-striped table-hover">
										<thead className="text-primary">
											<tr>
												<th><i className="material-icons">settings</i></th>
												<th>Client</th>
												<th>Address</th>
												<th>Contact</th>
												<th>Quota</th>
											</tr>
										</thead>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
  }
}

export default List;
