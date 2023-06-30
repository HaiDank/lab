import React, { useEffect, useState } from 'react';

const BASEURL = 'https://649be96a0480757192371ca9.mockapi.io/api/v1/films/film';
const METHOD_GET = {
	method: 'GET',
	headers: { 'content-type': 'application/json' },
};

async function useFetch() {
	const response = await fetch(BASEURL, METHOD_GET);

	return response;
}

export { useFetch };
