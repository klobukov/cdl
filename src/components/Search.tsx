import React, {JSX, useState, ChangeEvent, MouseEvent, useEffect} from 'react'
import axios from "axios"
import { baseURL } from '../baseURL'
import '../Styles/search.css'

export default function Search() :JSX.Element {
	const [inputVal, setInputVal] = useState('')
	const [searchResults, setSearchResults] = useState<string[] | string | null>(null)
	const [fastResults, setfastResults] = useState<string[] | null>(null)
	const errorMessage = "Ошибка подключения к базе данных..:("

	useEffect(() => {
		const removeFastResults = (e: Event) :void => {
			const target = e.target as HTMLElement;
			if (target.classList.contains('search__fast__elem')) return
			setfastResults(null)
		};

		document.body.addEventListener('click', removeFastResults)
		return () => document.body.removeEventListener('click', removeFastResults)
	}, [])

	return(
		<div className="search">
			<form>
				<input value={inputVal}
					   type='text' placeholder="Введите запрос" autoComplete='off'
					   onChange={(e) => onInputChange(e)}
				/>
				<button onClick={(e) => search(e)}>Поиск</button>
			</form>
			{fastResults && FastResults(fastResults)}
			{searchResults && SearchResults(searchResults)}
		</div>
	)

	function onInputChange(e: ChangeEvent<HTMLInputElement>) :void {
		let value = e.target.value
		setInputVal(value)
		if (value.trim() === "") return
		setTimeout(() => {
			if (value === inputVal) fastSearch(value)
		}, 500)
	}

	async function fastSearch(searchValue: string) :Promise<void> {
		try {
			console.log('1')
			const res = await axios.get(baseURL + "backend/fastSearch.php",
				{params: {search: searchValue}})
			setfastResults(res.data)
		} catch(err) {
			setfastResults(null)
		}
	}

	function FastResults(data: string[]) :JSX.Element | null {
		return <ul className="search__fast">
			{data.map((item: string, index: number) :JSX.Element => {
				return <li key={index}
				           onClick={(e) => search(e, item)}
				           className="search__fast__elem">{item}
				</li>
			})}
		</ul>
	}

	async function search(e: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLLIElement>, item?: string) :Promise<void> {
		e.preventDefault()
		const val = (item || inputVal).trim()
		if(val === "") return

		try {
			const res = await axios.get(baseURL + "backend/search.php", {params: {search: val}})
			console.log('search', res)
			setSearchResults(res.data)
		} catch(err) {
			setSearchResults(errorMessage)
		} finally {
			setInputVal("")
			setfastResults(null)
		}
	}

	function SearchResults(data: string[] | string) :JSX.Element {
		console.log('data', data)
		if (data.length === 0) {
			return(
				<div className="search__results">
					<div className="search__results-header">
						<HeaderMessage />
						<CloseButton />
					</div>
					<h3>К сожалению, по Вашему запросу ничего не найдено</h3>
				</div>
			)
		}

		if (data === errorMessage) return <div>{errorMessage}</div>

		return(
			<div className="search__results">
				<div className="search__results-header">
					<HeaderMessage />
					<CloseButton />
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
						{typeof data !== "string" && data.map((item: string, index: number) => {
							return (
								<tr key={index}>
									<td>{item[0]}</td>
									<td>{item[1]}</td>
									<td>{item[2]}</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		)
	}

	function CloseButton() :JSX.Element { return <button onClick={() => setSearchResults(null)}>Закрыть</button> }
	function HeaderMessage() :JSX.Element { return <div>Результаты поиска: </div> }
}

