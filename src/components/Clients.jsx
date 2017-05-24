import React, { Component } from 'react';
import New from './Clients/New'
import List from './Clients/List'

class Clients extends Component {
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

export default Clients;
