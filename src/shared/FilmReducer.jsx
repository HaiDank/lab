import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import React from 'react';

const BASEURL = 'https://649be96a0480757192371ca9.mockapi.io/api/v1/films/film';
const METHOD_GET = {
	method: 'GET',
	headers: { 'content-type': 'application/json' },
};
const METHOD_DELETE = {
	method: 'DELETE',
};
const METHOD_PUT = (value) => {
	return {
		method: 'PUT',
		body: JSON.stringify(value),
		headers: { 'content-type': 'application/json' },
		credentials: 'same-origin',
	};
};

export const fetchFilms = createAsyncThunk('fetchFilms', async () => {
	const response = await fetch(BASEURL, METHOD_GET);
	return response.json();
});

export const deleteFilm = createAsyncThunk('deleteFilm', async (id) => {
	const response = await fetch(BASEURL + '/' + id, METHOD_DELETE);
	return response.json();
});

export const editFilm = createAsyncThunk('editFilm', async (editedFilm) => {
	const response = await fetch(
		BASEURL + '/' + editedFilm.id,
		METHOD_PUT(editedFilm)
	);
	return response.json();
});

const filmSlice = createSlice({
	name: 'films',
	initialState: {
		isLoading: false,
		isError: false,
		data: [],
	},
	reducers: {
		// addFilm: (state, action) => {
		// 	state.data.push(action.payload);
		// },
		// editFilm: (state, action) => {
		// 	return state.data.map((film) => {
		// 		if (film.id == action.payload.id) {
		// 			return {
		// 				...action.payload,
		// 			};
		// 		}
		// 		return film;
		// 	});
		// },
		removeFilm: (state, action) => {
			return state.data.filter((film) => film.id !== action.payload);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchFilms.pending, (state, action) => {
			state.isLoading = true;
		});
		builder.addCase(fetchFilms.fulfilled, (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		});
		builder.addCase(fetchFilms.rejected, (state, action) => {
			state.isError = true;
			console.log('error: ', action.payload);
		});
		builder.addCase(deleteFilm.fulfilled, (state, action) => {
			state.data = state.data.filter(
				(film) => film.id !== action.payload.id
			);
			console.log('deleted', action.payload);
		});
		builder.addCase(editFilm.fulfilled, (state, action) => {
			state.data = state.data.map((film) => {
				if (film.id == action.payload.id) {
					return {
						...action.payload,
					};
				}
				return film;
			});
			console.log(action.payload);
		});
		builder.addCase(editFilm.rejected, (state, action) => {
			console.log(action.payload);
		});
	},
});
const { reducer } = filmSlice;

export const { removeFilm } = filmSlice.actions;
export default reducer;
