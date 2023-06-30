import { configureStore } from '@reduxjs/toolkit';
import FilmReducer from './FilmReducer.jsx';

export const store = configureStore({
	reducer: {
		films: FilmReducer,
	},
});