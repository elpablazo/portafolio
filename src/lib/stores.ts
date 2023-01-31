import { writable } from 'svelte/store';

export const contact = writable({
	phoneText: 4622641459,
	phoneFormatted: '(462) 264 1459',
	email: ''
});
