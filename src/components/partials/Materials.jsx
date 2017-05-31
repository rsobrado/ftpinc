import React, { Component } from 'react';
import New from './materials/New'
import List from './materials/List'

class Materials extends Component {
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

export default Materials;
