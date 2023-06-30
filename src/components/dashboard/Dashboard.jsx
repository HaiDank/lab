import React, { useEffect, useState } from 'react';
import DataTable from './DataTable';
import {
	Paper,
	IconButton,
	Avatar,
	Tooltip,
	Button,
	Modal,
} from '@mui/material';
import { useFetch } from '../../shared/useFetch';
import TableAction from './TableAction';
import AddIcon from '@mui/icons-material/Add';
import CreateFilm from './CreateFilm';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilms } from '../../shared/FilmReducer';

const columns = [
	{ field: 'id', headerName: 'ID', width: 50 },
	{
		field: 'img',
		headerName: '',
		width: 40,
		sortable: false,
		filterable: false,
		renderCell: (params) => <Avatar src={params.row.img} />,
	},
	{
		field: 'title',
		headerName: 'Title',
		width: 250,
	},

	{ field: 'nation', headerName: 'Nation', width: 80 },
	{ field: 'year', headerName: 'Year', width: 80 },
	{ field: 'actors', headerName: 'Actors', width: 250 },
	{ field: 'directors', headerName: 'Directors', width: 190 },
	{ field: 'description', headerName: 'Description', width: 250 },
	{
		field: 'none',
		headerName: 'Action',
		width: 80,
		sortable: false,
		filterable: false,
		renderCell: (params) => <TableAction film={params.row} />,
	},
];

function Dashboard() {
	const [openCreate, setOpenCreate] = useState(false);
	const dispatch = useDispatch();
	const state = useSelector((state) => state);

	useEffect(() => {
		dispatch(fetchFilms());
	}, []);

	const handleClick = () => {
		setOpenCreate(true);
	};
	const handleClose = () => {
		setOpenCreate(false);
		dispatch(fetchFilms());
	};

	return (
		<>
			<Paper
				elevation={1}
				sx={{
					padding: 2,
					ml: 5,
					mr: 5,
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<Tooltip title='Create new film'>
					<Button
						sx={{ mb: 2, alignSelf: 'end' }}
						variant='outlined'
						startIcon={<AddIcon />}
						onClick={handleClick}
					>
						{' '}
						Create New Film{' '}
					</Button>
				</Tooltip>

				<DataTable columns={columns} rows={state.films.data} />
			</Paper>

			<CreateFilm open={openCreate} onClose={handleClose} />
		</>
	);
}

export default Dashboard;
