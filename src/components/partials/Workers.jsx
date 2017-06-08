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
		var url = '/data/workers.js?format=json'

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

  onAddWorker(workersUpdate){
    console.log(workersUpdate);
    this.setState({workers : workersUpdate});
  }

  onDeleteWorker(workerKey){
    console.log(workerKey);
    let workers = this.state.workers;
    let index = workers.findIndex(x => x.key === workerKey);
    workers.splice(index,1);
    this.setState({workers : workers});
  }

  render() {
	return (
		<div className="container-fluid">
			<div className="row">
				<New workers={this.state.workers} onAddWorker={this.onAddWorker.bind(this)}/>
				<List workers={this.state.workers} onDeleteWorker={this.onDeleteWorker.bind(this)}/>
			</div>
		</div>
	);
  }
}

export default Workers;
