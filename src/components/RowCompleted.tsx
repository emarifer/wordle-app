import { Box } from '.';
import { BoxStatus } from './types';

import styles from './row.module.scss';

interface RowCompletedProps {
	word: string;
	solution: string;
}

const { row } = styles;

export const RowCompleted = ({ word, solution }: RowCompletedProps) => {
	const checkLetter = (letter: string, pos: number): BoxStatus => {
		if (solution.includes(letter)) {
			if (solution[pos] === letter) return 'correct';

			return 'present';
		}

		return 'absent';
	};

	const arr = Array.from(Array(5));

	return (
		<div className={row}>
			{arr.map((_, i) => (
				<Box key={i} value={word[i]} status={checkLetter(word[i], i)} />
			))}
		</div>
	);
};
