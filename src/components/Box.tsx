import { BoxStatus } from './types';
import styles from './box.module.scss';
import classNames from 'classnames/bind';

const classes = classNames.bind(styles);

interface BoxProps {
	value: string;
	status: BoxStatus;
}

export const Box = ({ value, status }: BoxProps) => {
	const boxStatus = classes({
		[styles.absent]: status === 'absent',
		[styles.correct]: status === 'correct',
		[styles.edit]: status === 'edit',
		[styles.empty]: status === 'empty',
		[styles.present]: status === 'present',
	});

	return <div className={boxStatus}>{value}</div>;
};

/**
 * USO CORRECTO DE typescript-plugin-css-modules PARA PRODUCCION (COMANDO npm run build). VER:
 * https://github.com/mrmckeb/typescript-plugin-css-modules
 */
