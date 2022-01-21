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

const black = { background: 'dimgray', width: '1.7rem', height: '1.7rem', margin: '0.3rem' };
const yellow = { background: 'goldenrod', width: '1.7rem', height: '1.7rem', margin: '0.3rem' };
const green = { background: 'limegreen', width: '1.7rem', height: '1.7rem', margin: '0.3rem' };

export const Modal = ({ type, completedWords, solution }: ModalProps) => {
	const Square = ({ word, solution }: SquareProps) => {
		const checkLetter = (letter: string, pos: number): ReactElement => {
			if (solution.includes(letter)) {
				if (solution[pos] === letter) return <div style={green}></div>;

				return <div style={yellow}></div>;
			}

			return <div style={black}></div>;
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
				<h2>You {type === 'won' ? 'Won! 😃' : 'Lost! 😕'}</h2>

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
