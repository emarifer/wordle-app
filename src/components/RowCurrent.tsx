import { Box } from '.';

import styles from './row.module.scss';

interface RowCurrentProps {
	word: string;
}

const { row } = styles;

export const RowCurrent = ({ word }: RowCurrentProps) => {
	const arr = Array.from(Array(5 - word.length)); // cajas todavia vacias

	return (
		<div className={row}>
			{word.split('').map((letter, i) => (
				<Box key={i} value={letter} status="edit" />
			))}

			{arr.map((_, i) => (
				<Box key={i} value={''} status="edit" />
			))}
		</div>
	);
};
