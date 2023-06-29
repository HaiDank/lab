import React from 'react';
import { useParams } from 'react-router-dom';

import { useEffect } from 'react';
function EditFilm() {
	const { id } = useParams();

	useEffect(() => {}, []);
	return (
		<>
			<div>{id}</div>
		</>
	);
}

export default EditFilm;
