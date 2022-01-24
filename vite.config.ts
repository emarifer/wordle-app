/* eslint-disable camelcase */
/* eslint-disable new-cap */
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default ({ mode }) => {
	const base = loadEnv(mode, process.cwd()).VITE_BASE_URL
		? `/${loadEnv(mode, process.cwd()).VITE_BASE_URL}/`
		: '/';

	return defineConfig({
		base,
		plugins: [
			react(),
			VitePWA({
				registerType: 'autoUpdate',
				includeAssets: [
					'img/favicon.ico',
					'robots.txt',
					'fonts/ubuntu.woff2',
					'icons/apple-touch-icon.png',
					'icons/android-chrome-192x192.png',
					'icons/android-chrome-512x512.png',
				],
				manifest: {
					name: 'Wordle | React+TS App',
					short_name: 'Mi Wordle',
					description: 'Wordle | React+TS App',
					theme_color: '#EC9549',
					background_color: '#EC9549',
					icons: [
						{
							src: 'icons/apple-touch-icon.png',
							sizes: '180x180',
							type: 'image/png',
						},
						{
							src: 'icons/android-chrome-192x192.png',
							sizes: '192x192',
							type: 'image/png',
						},
						{
							src: 'icons/android-chrome-512x512.png',
							sizes: '512x512',
							type: 'image/png',
						},
					],
					start_url: '.',
					// scope: 'https://emarifer.github.io/curriculum/',
					display: 'standalone',
				},
			}),
		],
	});
};
