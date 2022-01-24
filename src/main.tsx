import React from 'react';
import ReactDOM from 'react-dom';
import { Wordle } from './components';

import './index.css';
import { registerSW } from 'virtual:pwa-register';

ReactDOM.render(
	<React.StrictMode>
		<Wordle />
	</React.StrictMode>,
	document.getElementById('root'),
);

registerSW();

/**
 * USO CORRECTO DE typescript-plugin-css-modules PARA PRODUCCION (COMANDO npm run build). VER:
 * https://github.com/mrmckeb/typescript-plugin-css-modules
 *
 * Listado de todas las palabras de 5 letras (Hay 10836 palabras de cinco letras)
 * https://www.listasdepalabras.es/palabras5letras.htm
 */
