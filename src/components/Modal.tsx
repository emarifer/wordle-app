import { ReactElement } from 'react';
import styles from './modal.module.scss';

interface ModalProps {
	type: 'won' | 'lost';
	completedWords: string[];
	solution: string;
}

interface SquareProps {
	word: string;
	solution: string;
}

export const Modal = ({ type, completedWords, solution }: ModalProps) => {
	const Square = ({ word, solution }: SquareProps) => {
		const checkLetter = (letter: string, pos: number): ReactElement => {
			if (solution.includes(letter)) {
				if (solution[pos] === letter) return <div className={styles.green}></div>;

				return <div className={styles.yellow}></div>;
			}

			return <div className={styles.black}></div>;
		};

		return (
			<div className={styles.puzzleWord}>
				{word.split('').map((letter, i) => (
					<div key={i}>{checkLetter(letter, i)}</div>
				))}
			</div>
		);
	};

	return (
		<div className={styles.modalViewContainer}>
			<div className={styles.modalContainer}>
				<h2>{type === 'won' ? 'Ganaste! 😃' : 'Perdiste! 😕'}</h2>

				<div className={styles.puzzle}>
					{completedWords.map((word, i) => (
						// Cuadrito
						<Square key={i} word={word} solution={solution} />
					))}
				</div>
			</div>
		</div>
	);
};
