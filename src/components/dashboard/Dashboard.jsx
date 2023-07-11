import React, { useEffect, useState } from 'react';
import DataTable from './DataTable';
import {
	Paper,
	IconButton,
	Avatar,
	Tooltip,
	Button,
	Modal,
	Box,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CreateFilm from './CreateFilm';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilms } from '../../shared/FilmReducer';
import EditFilm from './EditFilm';
import RemoveFilm from './RemoveFilm';
import { Delete, Edit } from '@mui/icons-material';

function Dashboard() {
	const [openRemove, setOpenRemove] = useState(false);
	const [openEdit, setOpenEdit] = useState(false);
	const [openCreate, setOpenCreate] = useState(false);
	const [selectedFilm, setSelectedFilm] = useState(null);
	const dispatch = useDispatch();
	const state = useSelector((state) => state);

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
			width: 100,
			sortable: false,
			filterable: false,
			renderCell: (params) => (
				<>
					<Tooltip title='Edit film`s details'>
						<IconButton
							onClick={() => handleClick('edit', params.row.id)}
						>
							<Edit />
						</IconButton>
					</Tooltip>
					<Tooltip title='Delete film'>
						<IconButton
							onClick={() => handleClick('remove', params.row.id)}
						>
							<Delete />
						</IconButton>
					</Tooltip>
				</>
			),
		},
	];

	useEffect(() => {
		dispatch(fetchFilms());
	}, []);

	const handleClick = (args, id) => {
		if (args === 'create') {
			setOpenCreate(true);
		}
		if (args === 'edit') {
			setOpenEdit(true);
			setSelectedFilm(id);
		}
		if (args === 'remove') {
			setOpenRemove(true);
			setSelectedFilm(id);
		}
	};

	const handleCloseRemove = () => {
		setOpenRemove(false);
		setSelectedFilm(null);
	};

	const handleCloseCreate = () => {
		setOpenCreate(false);
	};
	const handleCloseEdit = () => {
		setOpenEdit(false);
		setSelectedFilm(null);
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
						onClick={() => handleClick('create')}
					>
						{' '}
						Create New Film{' '}
					</Button>
				</Tooltip>

				<DataTable columns={columns} rows={state.films.data} />
			</Paper>
			<RemoveFilm
				open={openRemove}
				onClose={handleCloseRemove}
				id={selectedFilm}
			/>
			<EditFilm
				open={openEdit}
				onClose={handleCloseEdit}
				id={selectedFilm}
			/>
			<CreateFilm open={openCreate} onClose={handleCloseCreate} />
		</>
	);
}

export default Dashboard;
