import React from 'react';
import axios from "axios";
import { baseURL } from '../baseURL.js';
import '../Styles/subdivision.css';

export default class AnalysisSubdivision extends React.Component{
	state = {
		tree: null,
		show: false
	}

	componentDidMount(){
		this.buildSubdivision();
	}

	buildSubdivision(){
		axios.get(baseURL + "backend/analysisSubdivision.php", {
			params: {
				name: this.props.name
			}
		})
		.then(res => {
			const arr = res.data;
			const tree = arr.map((item, index) => {
				return(
					<div key={index}>
						<div>{item[0]}</div>
						<div>{item[1]}</div>
						<div>{item[2]}</div>
					</div>
				);
			});
			this.setState({
				tree: tree
			});
		})
		.catch(err => {
			const errorMessage = <div>Ошибка подключения к базе данных..:(</div>;
			this.setState({
				tree: errorMessage
			});
		});
	}

	render(){
		return(
			<div className="subdivision">
				<div onClick={() => this.setState({show: !this.state.show})} className="subdivision__name">{this.props.name}</div>
				<div className="subdivision__analyzes">
					{this.state.show ? this.state.tree : null}
				</div>
			</div>
		)
	}
}
