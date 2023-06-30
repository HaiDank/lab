import React, { useEffect, useState } from 'react';
import { Films } from '../../shared/ListOfFilms';
import FilmPresentation from './FilmPresentation';
import './content.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilms } from '../../shared/FilmReducer';

function Content() {
	const dispatch = useDispatch();
	const films = useSelector((state) => state.films.data);

	useEffect(() => {
		dispatch(fetchFilms());
	}, []);

	return <FilmPresentation films={films} />;
}

export default Content;
