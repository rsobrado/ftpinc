import React, { Component } from 'react';
import New from './materials/New'
import List from './materials/List'

class Materials extends Component {
  constructor() {
		super();
		this.state = 	{ materials : [] };
	};

	componentDidMount() {
		var that = this;
		var url = '../data/materials.js?format=json'

		fetch(url)
		.then(function(response) {
			if (response.status >= 400) {
				throw new Error("Bad response from server");
			}
			return response.json();
		})
		.then(function(data) {
			that.setState({ materials: data });
		});
	}

  render() {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-12">
					<div className="panel-group" id="accordion">
						<New />
						<List materials={this.state.materials}/>
					</div>
				</div>
			</div>
		</div>
	);
  }
}

export default Materials;
