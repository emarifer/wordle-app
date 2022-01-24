import { WORDS } from './words';

const getWords = () => WORDS;

const convertType = (d: Date) => (d as unknown) as number;

const getRandomInt = (min: number, max: number): string =>
	String(Math.floor(Math.random() * (max - min)) + min);

const getDayOfTheYear = () => { // Obtiene el numero del dia del año
	const now = new Date(); // Fecha completa del dia de hoy
	const start = new Date(now.getFullYear(), 0, 0); // Fecha del ultimo dia del año anterior (h, m)
	const diff
		= convertType(now)
		- convertType(start)
        + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000); // Compensacion de posibles cambios horarios
	const oneDay = 1000 * 60 * 60 * 24;
	return Math.floor(diff / oneDay);
};

const setWord = (randomValues: string[], v: string): string => {
	let value = v;
	while (randomValues.includes(value)) {
		value = getRandomInt(0, 10836);
	}

	randomValues.push(value);
	localStorage.setItem('randomValues', JSON.stringify(randomValues));
	return value;
};

export const getWordOfTheDay = (
	year: string | null,
	dayOfTheYear: string | null,
): string => {
	if (!year) {
		localStorage.setItem('year', String(new Date().getFullYear()));
		localStorage.setItem('day', String(getDayOfTheYear()));

		const randomValues: string[] = [];
		const value = getRandomInt(0, 10836);

		return WORDS[Number(setWord(randomValues, value))];
	}

	let randomValues: string[] = JSON.parse(
		localStorage.getItem('randomValues') as string,
	) as string[];

	if (String(getDayOfTheYear()) !== dayOfTheYear) {
		const value = getRandomInt(0, 10836);

		// Ha cambiado el año y el día
		if (year !== String(new Date().getFullYear())) {
			localStorage.setItem('year', String(new Date().getFullYear()));
			randomValues = [];

			localStorage.setItem('day', String(getDayOfTheYear()));
			return WORDS[Number(setWord(randomValues, value))];
		}

		// Seguimos en el mismo año, pero ha cambiado el día
		localStorage.setItem('day', String(getDayOfTheYear()));
		return WORDS[Number(setWord(randomValues, value))];
	}

	// No ha cambiado el año ni el día
	return WORDS[Number(randomValues.slice(-1))];
};

export const isValidWord = (word: string) => {
	// const URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + word;

	// try {
	// 	const response = await fetch(URL);
	// 	if (response.status !== 200) throw new Error('Request Failed');
	// 	const json = await response.json();

	// 	return json.length;
	// } catch (error) {
	// 	console.error(error);
	// 	return false;
	// }

	const words = getWords();

	return words.includes(word);
};

// https://qastack.mx/programming/521295/seeding-the-random-number-generator-in-javascript
// https://www.delftstack.com/es/howto/javascript/javascript-random-number-between/
