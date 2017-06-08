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

  loadData(){
    var that = this;
    var url = '/data/materials.js?format=json'

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

  onDeleteMaterial(materialKey){
    console.log(materialKey);
    let materials = this.state.materials;
    let index = materials.findIndex(x => x.key === materialKey);
    materials.splice(index,1);
    this.setState({materials : materials});
  }

  render() {
  	return (
  		<div className="container-fluid">
  			<div className="row">
          <New materials={this.state.materials} onAddMaterial={this.onAddMaterial.bind(this)}/>
          <List materials={this.state.materials} onDeleteMaterial={this.onDeleteMaterial.bind(this)} />
  			</div>
  		</div>
  	);
  }
}

export default Materials;
