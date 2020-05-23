import { readable } from 'svelte/store';

export const Countries = readable([], function start(set) {
	fetch('https://api.covid19api.com/summary')
    .then(response => response.json())
    .then(data => {
			const { Global } = data				
			set(data.Countries)
    })	

	return function stop() { }
});