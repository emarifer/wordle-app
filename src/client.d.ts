/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'virtual:pwa-register' {
	export type RegisterSWOptions = {
		immediate?: boolean;
		onNeedRefresh?: () => void;
		onOfflineReady?: () => void;
		onRegistered?: (
			registration: ServiceWorkerRegistration | undefined,
		) => void;
		onRegisterError?: (error: any) => void;
	};

	export function registerSW(
		options?: RegisterSWOptions,
	): (reloadPage?: boolean) => Promise<void>;
}

declare module 'virtual:pwa-register/react' {
	// @ts-ignore ignore when react is not installed
	import { Dispatch, SetStateAction } from 'react';

	export type RegisterSWOptions = {
		immediate?: boolean;
		onNeedRefresh?: () => void;
		onOfflineReady?: () => void;
		onRegistered?: (
			registration: ServiceWorkerRegistration | undefined,
		) => void;
		onRegisterError?: (error: any) => void;
	};

	export function useRegisterSW(
		options?: RegisterSWOptions,
	): {
		needRefresh: [boolean, Dispatch<SetStateAction<boolean>>];
		offlineReady: [boolean, Dispatch<SetStateAction<boolean>>];
		updateServiceWorker: (reloadPage?: boolean) => Promise<void>;
	};
}
