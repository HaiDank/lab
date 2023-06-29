import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Delete } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton, Tooltip, Box } from '@mui/material';

function TableAction(props: any) {
	const navigate = useNavigate();

	const film = props.film;
	function handleClick(id: number) {
		navigate('/editFilm/' + id);
	}

	return (
		<Box>
			<Tooltip title='Edit film`s details'>
				<IconButton onClick={() => handleClick(film.id)}>
					<EditIcon />
				</IconButton>
			</Tooltip>
			<Tooltip title='Delete film'>
				<IconButton>
					<Delete />
				</IconButton>
			</Tooltip>
		</Box>
	);
}

export default TableAction;
