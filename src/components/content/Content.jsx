import React from 'react';
import { Films } from '../../shared/ListOfFilms';
import FilmPresentation from './FilmPresentation';
import './content.css';
import useFetch from '../../shared/useFetch';

function Content() {
	const films = useFetch();

	return <FilmPresentation films={films} />;
}

export default Content;
