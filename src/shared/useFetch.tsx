import React, { useEffect, useState } from 'react';

function useFetch() {
	const BASEURL =
		'https://649be96a0480757192371ca9.mockapi.io/api/v1/films/film';
	const METHOD = {
		method: 'GET',
		headers: { 'content-type': 'application/json' },
	};

	const [FilmDetails, setFilmDetails] = useState([]);

	useEffect(() => {
		async function getFilmData() {
			const data = await fetch(BASEURL, METHOD)
				.then((response) => {
					if (response.ok) {
						return response.json();
					}
					throw new Error(`HTTP Status: ${response.status}`);
				})
				.then((apiData) => {
					setFilmDetails(apiData);
				})
				.catch((error) => {
					console.log('adadsd', error.message);
				});
		}
		getFilmData();
	}, []);

	return FilmDetails;
}

export default useFetch;
