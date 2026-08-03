import React, {JSX, useEffect, useState} from 'react'
import axios from "axios"
import { baseURL } from '../baseURL'
import '../Styles/subdivision.scss'

export default function AnalysisSubdivision({name} :{name: string}){
	const [show, setShow] = useState<boolean>(false)
	const [data, setData] = useState<string[][] | null | string>(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(baseURL + "backend/analysisSubdivision.php",
					{params: {name}})
				setData(res.data)
			} catch(err) {
				setData("dataError")
			}
		}
		fetchData()
	}, [])

	return(
		<div className="subdivision">
			<div onClick={() :void => setShow(!show)} className="subdivision__name">{name}</div>
			<div className="subdivision__analyzes">
				{show && <AnalysisList />}
			</div>
		</div>
	)

	function AnalysisList() :null | JSX.Element | JSX.Element[] {
		if (!data) return null
		if (data === "errorMessage") return <div>Ошибка подключения к базе данных..:(</div>
		if (typeof data === "string") return null // ts data.map -_-

		return data.map((item :string[], index: number) => <div key={index}>
			<div>{item[0]}</div>
			<div>{item[1]}</div>
			<div>{item[2]}</div>
			<div>{item[3]}</div>
		</div>)
	}
}
