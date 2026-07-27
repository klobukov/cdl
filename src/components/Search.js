import React from 'react';
import axios from "axios";
import { baseURL } from '../baseURL.js';
import '../Styles/search.css';


export default class Search extends React.Component{
	state = {
		inputVal: "",
		found: null,
		fastFound: null
	}
	errorMessage = "Ошибка подключения к базе данных..:(";
	noResultsMessage = "no results"; //from backend

	search(e, item){
		e.preventDefault();
		const val = item || this.state.inputVal;
		if(val.trim() === "") return;
		axios.get(baseURL + "backend/search.php", {
				params: {
					search: val
				}
			})
		.then(res => {
			this.setState({
				inputVal: "",
				found: res.data,
				fastFound: null
			})
		})
		.catch(err => {
			this.setState({
				inputVal: "",
				found: this.errorMessage,
				fastFound: null
			})
		});
	}

	showResults(){
		const closeButton = <button onClick={() => this.setState({found: null})}>Закрыть</button>
		const headerMessage = <div>Результаты поиска: </div>

		if(this.state.found === this.noResultsMessage){
			return(
				<div className="search__results">
					<div className="search__results-header">
						{headerMessage}
						{closeButton}
					</div>
					<h3>К сожалению, по Вашему запросу ничего не найдено</h3>
				</div>
			)
		}

		if(this.state.found === this.errorMessage){
			return(
				<div>{this.errorMessage}</div>
			)
		}

		const tree = this.state.found.map((item, index) => {
			return(
				<tr key={index}>
					<td>{item[0]}</td>
					<td>{item[1]}</td>
					<td>{item[2]}</td>
				</tr>
			)
		});
		return(
			<div className="search__results">
				<div className="search__results-header">
					{headerMessage}
					{closeButton}
				</div>
				<table>
					<thead>
						<tr>
							<th>Название исследования</th>
							<th>Срок выполнения (суток)</th>
							<th>Цена (руб.)</th>
						</tr>
					</thead>
					<tbody>
						{tree}
					</tbody>
				</table>
			</div>
		)
	}

	onInputChange(e){
		this.setState({
			inputVal: e.target.value
		});
		this.fastSearch(e);
	}

	fastSearch(e){
		if(e.target.value.trim() === "") return;
		const tempVal = e.target.value;
		setTimeout(() => {
			if(tempVal === this.state.inputVal) query(tempVal);
		}, 500);

		const query = val => {
			axios.get(baseURL + "backend/fastSearch.php", {
				params: {
					search: val
				}
			})
			.then(res => {
				this.setState({
					fastFound: res.data
				});
			})
			.catch(err => {
				this.setState({
					fastFound: this.noResultsMessage //в случае ошибки просто не отображаем компонент
				});
			});
		}
	}

	showFastResults(){
		if(this.state.fastFound === this.noResultsMessage) return;
		const fastTree = this.state.fastFound.map((item, index) => {
			return(
				<li key={index} onClick={(e) => this.search(e, item)} className="search__fast__elem">{item}</li>
			)
		});
		return (
			<ul className="search__fast">{fastTree}</ul>
		)
	}

	componentDidMount(){
		document.body.addEventListener('click', this.fastFoundRemove)
	}

	componentWillUnmount(){
		document.body.removeEventListener('click', this.fastFoundRemove)
	}

	fastFoundRemove = (e) => {
		if(e.target.classList.contains("search__fast__elem")) return;
		this.setState({fastFound: null});
	}

	render(){
		return(
			<div className="search">
				<form>
					<input value={this.state.inputVal} type='text' placeholder="Введите запрос" autoComplete='off' onChange={(e) => this.onInputChange(e)}/>
					<button onClick={(e) => this.search(e)}>Поиск</button>
				</form>
				{this.state.fastFound ? this.showFastResults() : null}
				{this.state.found ? this.showResults() : null}
			</div>
		)
	}
}

