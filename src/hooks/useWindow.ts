import { useEffect } from 'react';

export const useWindow = (
	eventName: keyof WindowEventMap,
	callback: unknown,
) => {
	useEffect(() => {
		window.addEventListener(eventName, callback as EventListener);

		return () => {
			window.removeEventListener(eventName, callback as EventListener);
		};
	});
};

/**
 * SOBRE EL HECHO DE QUE ESLINT DA WINDOWEVENTMAP COMO NO DEFINIDA:
 * ESLint - "window" is not defined. How to allow global variables in package.json. VER:
 * https://stackoverflow.com/questions/30398825/eslint-window-is-not-defined-how-to-allow-global-variables-in-package-json
 */
