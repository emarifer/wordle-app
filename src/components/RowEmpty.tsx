import { Box } from './Box';
import styles from './row.module.scss';

const { row } = styles;

export const RowEmpty = () => {
	const arr = Array.from(Array(5));

	return (
		<div className={row}>
			{arr.map((_, i) => (
				<Box key={i} value="" status="empty" />
			))}
		</div>
	);
};
