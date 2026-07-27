export interface IOffice {
	id: string,
	header: string,
	address: string,
	workDays: string,
	samplingBioMaterialTime: string,
	resultsTime: string,
	phone: string,
	email?: string,
	locationForLink: string,
	locationForFrame: string
}

const mainOffice: IOffice = {
	id: "main",
	header: "Лаборатория",
	address: "Загородная балка,4",
	workDays: "Понедельник - Пятница",
	samplingBioMaterialTime: "08:30 - 14:00",
	resultsTime: "08:30 - 17:00",
	phone: "(8692)55-61-92",
	email: "crimealab@list.ru",
	locationForLink: "https://www.google.ru/maps/place/4+%D1%83%D0%BB.+%D0%97%D0%B0%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%BD%D0%B0%D1%8F+%D0%91%D0%B0%D0%BB%D0%BA%D0%B0,+%D0%A1%D0%B5%D0%B2%D0%B0%D1%81%D1%82%D0%BE%D0%BF%D0%BE%D0%BB%D1%8C/@44.6033038,33.5074904,17z/data=!3m1!4b1!4m5!3m4!1s0x409524b14b485081:0xdd5e40df71d13b04!8m2!3d44.6033!4d33.5096791",
	locationForFrame: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2840.693019715042!2d33.507490414858296!3d44.60330379849289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409524b14b485081%3A0xdd5e40df71d13b04!2zNCDRg9C7LiDQl9Cw0LPQvtGA0L7QtNC90LDRjyDQkdCw0LvQutCwLCDQodC10LLQsNGB0YLQvtC_0L7Qu9GM!5e0!3m2!1sru!2sru!4v1494596021847"
}
export { mainOffice }

const mk1: IOffice = {
	id: 'mk1',
	header: "Манипуляционный кабинет №1",
	address: "пл.Восставших,4 (Новый бульвар) Центральный корпус, 2 этаж, кабинет №211",
	workDays: "Понедельник - Пятница",
	samplingBioMaterialTime: "08:00 - 11:30",
	resultsTime: "12:00 - 16:00",
	phone: "+7(978)043-94-47",
	locationForLink: "https://www.google.ru/maps/place/4+%D0%BF%D0%BB.+%D0%92%D0%BE%D1%81%D1%81%D1%82%D0%B0%D0%B2%D1%88%D0%B8%D1%85,+%D0%A1%D0%B5%D0%B2%D0%B0%D1%81%D1%82%D0%BE%D0%BF%D0%BE%D0%BB%D1%8C/@44.6009303,33.5127546,17z/data=!3m1!4b1!4m5!3m4!1s0x409524b0a58fc373:0x7ddc6ede6fab73a!8m2!3d44.6009265!4d33.5149433",
	locationForFrame: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2840.8090757571795!2d33.51275461485824!3d44.600930298648926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409524b0a58fc373%3A0x7ddc6ede6fab73a!2zNCDQv9C7LiDQktC-0YHRgdGC0LDQstGI0LjRhSwg0KHQtdCy0LDRgdGC0L7Qv9C-0LvRjA!5e0!3m2!1sru!2sru!4v1494597021454"
}
export { mk1 }

export default [mainOffice, mk1]
