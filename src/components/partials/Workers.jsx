import React, { Component } from 'react';
import New from './workers/New'
import List from './workers/List'

class Workers extends Component {
  constructor() {
		super();
		this.state = 	{ workers : [] };
	};

	componentDidMount() {
		var that = this;
		var url = '../data/workers.js?format=json'

		fetch(url)
		.then(function(response) {
			if (response.status >= 400) {
				throw new Error("Bad response from server");
			}
			return response.json();
		})
		.then(function(data) {
			that.setState({ workers: data });
		});
	}
  render() {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-12">
					<div className="panel-group" id="accordion">
						<New />
						<List workers={this.state.workers}/>
					</div>
				</div>
			</div>
		</div>
	);
  }
}

export default Workers;
