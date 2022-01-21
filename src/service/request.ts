import { WORDS_2 } from './words-2';

const getWords = () => WORDS_2;

const convertType = (d: Date) => (d as unknown) as number; // Conversion segura a number
// La funcion anterior solo tiene el objetivo de «castear» el tipo Date a Number
// sin usar el tipo any

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

const random = (seed: number): number => {
	const x = Math.sin(seed) * 10000;
	return x - Math.floor(x);
};

const generateRandomInt = (min: number, max: number, seed: number): number =>
	Math.floor((random(seed) * (max - min)) + min);

export const getWordOfTheDay = () => {
	const words = getWords();

	// console.log(generateRandomInt(0, 10835, getDayOfTheYear()));

	const wordOfTheDay = words[generateRandomInt(0, 10835, getDayOfTheYear())];

	return wordOfTheDay.toUpperCase();
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

// var seed = 1;
// 	function random() {
//     var x = Math.sin(seed++) * 10000;
//     return x - Math.floor(x);
// }

// function generateRandomInt(min,max){
//     return Math.floor((random() * (max-min)) +min);
// }
// generateRandomInt(0, 10835)

// https://qastack.mx/programming/521295/seeding-the-random-number-generator-in-javascript
// https://www.delftstack.com/es/howto/javascript/javascript-random-number-between/
