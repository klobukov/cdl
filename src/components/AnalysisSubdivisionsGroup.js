import React from 'react';
import axios from "axios";
import { baseURL } from '../baseURL.js';
import AnalysisSubdivision from './AnalysisSubdivision.js';
import '../Styles/subdivisionsGroup.css';

export default class AnalysisSubdivisionsGroup extends React.Component{
	state = {
		subdivisions: null
	}

	componentDidMount(){
		this.buildSubdivisionsGroup();
	}

	buildSubdivisionsGroup(){
		axios.get(baseURL + "backend/analysisSubdivisionsGroup.php")
		.then(res => {
			const arr = res.data;
			const sortedArr = this.sortArr(arr);
			const group = sortedArr.map((item, index) => {
				return <AnalysisSubdivision name={item} key={index}/>
			});
			this.setState({
				subdivisions: group
			});
		})
		.catch(err => {
			this.setState({
				subdivisions: "Ошибка подключения к базе данных..:("
			});
		});		
	}

	sortArr(arr){
		const newArr = arr.slice(0);
		const additionServicesIndex = newArr.indexOf("Дополнительные услуги");
		newArr.push(newArr.splice(additionServicesIndex, 1)[0]);
		return newArr;
	}

	render(){
		return(
			<div className="subdivisionsGroup">
				<h1>Список всех анализов</h1>
				<div className="subdivisionsGroup__header">
					<div>Название исследования</div>
					<div>Срок выполнения (суток)</div>
					<div>Цена (руб.) </div>
				</div>
				<div className="subdivisionsGroup__tree">
					{this.state.subdivisions}
				</div>
			</div>
		)
	}
}

