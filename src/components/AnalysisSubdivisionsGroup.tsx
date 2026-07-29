import React, {JSX, useEffect, useState} from 'react';
import axios from "axios";
import { baseURL } from '../baseURL'
import AnalysisSubdivision from './AnalysisSubdivision'
import '../Styles/subdivisionsGroup.scss'

export default function AnalysisSubdivisionsGroup() {
	const [subdivisions, setSubdivisions] = useState<string[] | string | null>(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(baseURL + "backend/analysisSubdivisionsGroup.php")
				const {data} = res
				const sorted = data
					.filter((item :string) => item !== "Дополнительные услуги")
					.concat("Дополнительные услуги")
				setSubdivisions(sorted)
			} catch (err) {
				setSubdivisions("Ошибка подключения к базе данных..:(")
			}
		}

		fetchData()
	}, [])

	return(
		<div className="subdivisionsGroup">
			<h1>Список всех анализов</h1>
			<div className="subdivisionsGroup__header">
				<div>Название исследования</div>
				<div>Срок выполнения (суток)</div>
				<div>Цена (руб.) </div>
			</div>
			<div className="subdivisionsGroup__tree">
				<Subdivisions />
			</div>
		</div>
	)

	function Subdivisions() :null | string | JSX.Element[]  {
		if (!subdivisions) return null
		if (typeof subdivisions === "string") return subdivisions
		return subdivisions.map((item: string) => <AnalysisSubdivision name={item} key={item}/>)
	}
}

