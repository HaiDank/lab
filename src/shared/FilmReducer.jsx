import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import React from 'react';

const BASEURL = 'https://649be96a0480757192371ca9.mockapi.io/api/v1/films/film';
const METHOD_GET = {
	method: 'GET',
	headers: { 'content-type': 'application/json' },
};

export const fetchFilms = createAsyncThunk('fetchFilms', async () => {
	const response = await fetch(BASEURL, METHOD_GET);
	return response.json();
});

const filmSlice = createSlice({
	name: 'films',
	initialState: {
		isLoading: false,
		isError: false,
		data: [],
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
	},
});
const { reducer } = filmSlice;

export default reducer;
