import React, { Component } from 'react';
import New from './estimates/New'
import List from './estimates/List'

class Estimates extends Component {
  render() {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-12">
					<div className="panel-group" id="accordion">
						<New />
						<List />
					</div>
				</div>
			</div>
		</div>
	);
  }
}

export default Estimates;
