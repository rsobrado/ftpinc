import React, { Component } from 'react';
import New from './Materials/New'
import List from './Materials/List'

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
