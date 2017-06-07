import React, { Component } from 'react';
import New from './materials/New'
import List from './materials/List'

class Materials extends Component {
  constructor(props) {
		super(props);
		this.state = 	{ materials : [] };
	};

	componentWillMount() {
		this.loadData();
	}


	componentWillReceiveProps(nextProps){
		// this.setState({materials : nextProps.materials});
    this.setState((prevState, props) => {
      return {materials: props};
    });
	}

  loadData(){
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

  onAddMaterial(materialsUpdate){
    this.setState({materials : materialsUpdate});
  }

  render() {
  	return (
  		<div className="container-fluid">
  			<div className="row">
          <New materials={this.state.materials} onAddMaterial={this.onAddMaterial.bind(this)}/>
          <List materials={this.state.materials} />
  			</div>
  		</div>
  	);
  }
}

export default Materials;
