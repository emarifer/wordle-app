import { GameStatus } from './types';
import { getWordOfTheDay, isValidWord } from '../service/request';
import { RowCompleted, RowCurrent, RowEmpty } from '.';
import { useWindow } from '../hooks/useWindow';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

import styles from './wordle.module.scss';
import 'sweetalert2/dist/sweetalert2.min.css';
import { Keyboard } from './Keyboard';
import { Modal } from './Modal';

const keys = [
	'Q',
	'W',
	'E',
	'R',
	'T',
	'Y',
	'U',
	'I',
	'O',
	'P',
	'A',
	'S',
	'D',
	'F',
	'G',
	'H',
	'J',
	'K',
	'L',
	'Ñ',
	'Z',
	'X',
	'C',
	'V',
	'B',
	'N',
	'M',
];

export const Wordle = () => {
	const [wordOfTheDay, setWordOfTheDay] = useState<string>('');
	const [turn, setTurn] = useState<number>(1);
	const [currentWord, setCurrentWord] = useState<string>('');
	const [completedWords, setCompletedWords] = useState<string[]>([]);
	const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.Playing);

	const onInput = (letter: string) => {
		const newWord = currentWord + letter;
		setCurrentWord(newWord);
	};

	const onEnter = async () => {
		if (currentWord === wordOfTheDay) {
			// Ganó el usuario
			setCompletedWords([...completedWords, currentWord]);
			setGameStatus(GameStatus.Won);
			return;
		}

		if (turn === 6) {
			// Perdió el usario
			setCompletedWords([...completedWords, currentWord]);
			setGameStatus(GameStatus.Lost);
			return;
		}

		// Validar si existe la palabra
		if (currentWord.length === 5 && !isValidWord(currentWord)) {
			Swal.fire({
				icon: 'error',
				title: 'Not a valid word 😕',
				showConfirmButton: false,
			});
			return;
		}

		setCompletedWords([...completedWords, currentWord]);
		setTurn(turn + 1); // o setTurn(prev => prev + 1)
		setCurrentWord('');
	};

	const onDelete = () => {
		const newWord = currentWord.slice(0, -1);
		setCurrentWord(newWord);
	};

	const onKeyPressed = (key: string) => {
		if (gameStatus !== GameStatus.Playing) return;

		if (key === 'BACKSPACE' && currentWord.length > 0) {
			onDelete();
			return;
		}

		if (key === 'ENTER' && currentWord.length === 5 && turn <= 6) {
			onEnter();
			return;
		}

		if (currentWord.length >= 5) return;

		// Ingresar la letra al estado
		if (keys.includes(key)) {
			onInput(key);
		}
	};

	const handleKeyDown = (event: KeyboardEvent) => {
		const key = event.key.toUpperCase();

		onKeyPressed(key);
	};

	useWindow('keydown', handleKeyDown);

	useEffect(() => {
		setWordOfTheDay(getWordOfTheDay());
	}, []);

	return (
		<div className={styles.wordle}>
			<h1>Juega con Mi Wordle</h1>
			{gameStatus === GameStatus.Won ? (
				<Modal
					type="won"
					completedWords={completedWords}
					solution={wordOfTheDay}
				/>
			) : gameStatus === GameStatus.Lost ? (
				<Modal
					type="lost"
					completedWords={completedWords}
					solution={wordOfTheDay}
				/>
			) : null}

			<div className={styles.mainContainer}>
				{completedWords.map((word, i) => (
					<RowCompleted key={i} word={word} solution={wordOfTheDay} />
				))}

				{gameStatus === GameStatus.Playing ? (
					<RowCurrent word={currentWord} />
				) : null}

				{Array.from(Array(6 - turn)).map((_, i) => (
					<RowEmpty key={i} />
				))}
			</div>

			<Keyboard keys={keys} onKeyPressed={onKeyPressed} />
		</div>
	);
};
