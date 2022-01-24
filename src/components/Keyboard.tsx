import { MouseEvent } from 'react';
import { BsArrowReturnLeft, BsBackspace } from 'react-icons/bs';
import styles from './keyboard.module.scss';

interface KeyboardProps {
	keys: string[];
	onKeyPressed: (key: string) => void;
}

export const Keyboard = ({ keys, onKeyPressed }: KeyboardProps) => {
	const handleInput = (e: MouseEvent<HTMLButtonElement>) => {
		onKeyPressed((e.target as HTMLButtonElement).textContent as string);
	};

	const handleEnter = () => onKeyPressed('ENTER');

	const handleDelete = () => onKeyPressed('BACKSPACE');

	return (
		<div className={styles.keyboardContainer}>
			{Array.from(Array(10)).map((_, i) => (
				<button key={i} className={styles.key} onMouseUp={handleInput}>
					{keys[i]}
				</button>
			))}

			{/* <div className={styles.emptyKey} /> */}

			{Array.from(Array(10)).map((_, i) => (
				<button key={i + 10} className={styles.key} onMouseUp={handleInput}>
					{keys[i + 10]}
				</button>
			))}

			<button className={styles.enterKey} onMouseUp={handleEnter}>
				<BsArrowReturnLeft />
			</button>

			{Array.from(Array(7)).map((_, i) => (
				<button key={i + 20} className={styles.key} onMouseUp={handleInput}>
					{keys[i + 20]}
				</button>
			))}

			<button className={styles.deleteKey} onMouseUp={handleDelete}>
				<BsBackspace />
			</button>
		</div>
	);
};

/**
 * SOBRE EL ERROR EVENT.TARGET. VER:
 * error TS2339: JavaScript to Typescript error:
 * https://stackoverflow.com/questions/49555784/error-ts2339-javascript-to-typescript-error
 */
