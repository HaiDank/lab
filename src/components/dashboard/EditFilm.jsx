import {
	Alert,
	AppBar,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	IconButton,
	Slide,
	Snackbar,
	TextField,
	Toolbar,
	Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import React, { useEffect, useState } from 'react';
import { Close } from '@mui/icons-material';

import { useDispatch, useSelector } from 'react-redux';
import { editFilm } from '../../shared/FilmReducer';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='up' ref={ref} {...props} />;
});

const BASEURL = 'https://649be96a0480757192371ca9.mockapi.io/api/v1/films/film';
const METHOD_GET = {
	method: 'GET',
	headers: { 'content-type': 'application/json' },
};

function EditFilm(props) {
	const { open, onClose, id } = props;
	const [openAlert, setOpenAlert] = useState(false);
	const dispatch = useDispatch();
	const films = useSelector((state) => state.films.data);

	useEffect(() => {
		const getSelected = async () => {
			if (id) {
				formik.setFieldValue('id', id);
				const data = films.find((film) => film.id === id);
				formik.setFieldValue('title', data.title);
				formik.setFieldValue('year', data.year);
				formik.setFieldValue('nation', data.nation);
				formik.setFieldValue('duration', data.duration);
				formik.setFieldValue('actors', data.actors);
				formik.setFieldValue('directors', data.directors);
				formik.setFieldValue('description', data.description);
				formik.setFieldValue('img', data.img);
				formik.setFieldValue('trailer', data.trailer);
				
			}
		};
		getSelected();
	}, [id]);

	const formik = useFormik({
		initialValues: {
			id: '',
			img: '',
			title: '',
			year: '',
			nation: '',
			duration: '',
			actors: '',
			directors: '',
			description: '',
			trailer: '',
			
			
		},
		onSubmit: (values) => {
			// fetch(BASEURL + '/' + id, {
			// 	method: 'PUT',
			// 	body: JSON.stringify(values),
			// 	headers: { 'content-type': 'application/json' },
			// 	credentials: 'same-origin',
			// })
			// 	.then((response) => {
			// 		if (!response.ok) {
			// 			throw new Error(`HTTP Status: ${response.status}`);
			// 		}
			// 		return response.json;
			// 	})
			// 	.then((data) => handleSave())
			// 	.catch((error) => console.log(error.message));

			handleSave(values);
		},
		validationSchema: Yup.object({
			title: Yup.string()
				.required('Required')
				.min(2, 'Must be 2 characters or more'),
			year: Yup.number()
				.integer()
				.typeError('Please type a number')
				.moreThan(0, 'the year must be more than 0')
				.lessThan(2050, 'The year must the recent'),
			nation: Yup.string()
				.required('Required.')
				.min(2, 'Must be 2 characters or more'),
			duration: Yup.string()
				.required('Required.')
				.min(2, 'Must be 2 characters or more'),
			actors: Yup.string()
				.required('Required.')
				.min(2, 'Must be 2 characters or more'),
			directors: Yup.string()
				.required('Required.')
				.min(2, 'Must be 2 characters or more'),
			description: Yup.string()
				.required('Required.')
				.min(10, 'Must be 10 characters or more'),
			trailer: Yup.string().url().required('Please enter website'),
			img: Yup.string().url().required('Please enter website'),
		}),
	});

	function handleClose() {
		if (onClose) {
			onClose();
		}
	}

	function handleCloseAlert() {
		setOpenAlert(false);
	}

	function handleSave(values) {
		handleClose();
		setOpenAlert(true);
		dispatch(editFilm(values));
	}

	return (
		<>
			<Dialog
				fullScreen
				open={open}
				onClose={handleClose}
				TransitionComponent={Transition}
			>
				<AppBar sx={{ position: 'relative' }}>
					<Toolbar>
						<Typography
							sx={{ ml: 2, flex: 1 }}
							variant='h6'
							component='div'
						>
							Create New Film
						</Typography>
						<IconButton
							edge='start'
							color='inherit'
							onClick={handleClose}
							aria-label='close'
						>
							<Close />
						</IconButton>
					</Toolbar>
				</AppBar>

				<DialogContent>
					<form onSubmit={formik.handleSubmit}>
						<TextField
							autoFocus
							margin='dense'
							label='Title'
							fullWidth
							variant='standard'
							type='text'
							onChange={formik.handleChange}
							value={formik.values.title}
							name='title'
						/>
						{formik.errors.title && (
							<Typography variant='caption' color='red'>
								{formik.errors.title}
							</Typography>
						)}
						<TextField
							margin='dense'
							label='Year'
							fullWidth
							variant='standard'
							type='text'
							onChange={formik.handleChange}
							value={formik.values.year}
							name='year'
						/>
						{formik.errors.year && (
							<Typography variant='caption' color='red'>
								{formik.errors.year}
							</Typography>
						)}
						<TextField
							margin='dense'
							label='Nation'
							fullWidth
							variant='standard'
							type='text'
							onChange={formik.handleChange}
							value={formik.values.nation}
							name='nation'
						/>
						{formik.errors.nation && (
							<Typography variant='caption' color='red'>
								{formik.errors.nation}
							</Typography>
						)}
						<TextField
							margin='dense'
							label='Duration'
							fullWidth
							variant='standard'
							type='text'
							onChange={formik.handleChange}
							value={formik.values.duration}
							name='duration'
						/>
						{formik.errors.duration && (
							<Typography variant='caption' color='red'>
								{formik.errors.duration}
							</Typography>
						)}
						<TextField
							margin='dense'
							label='Actors'
							fullWidth
							variant='standard'
							type='text'
							onChange={formik.handleChange}
							value={formik.values.actors}
							name='actors'
						/>
						{formik.errors.actors && (
							<Typography variant='caption' color='red'>
								{formik.errors.actors}
							</Typography>
						)}
						<TextField
							margin='dense'
							label='Directors'
							fullWidth
							variant='standard'
							type='text'
							onChange={formik.handleChange}
							value={formik.values.directors}
							name='directors'
						/>
						{formik.errors.directors && (
							<Typography variant='caption' color='red'>
								{formik.errors.directors}
							</Typography>
						)}
						<TextField
							margin='dense'
							label='Descriptions'
							fullWidth
							variant='standard'
							type='text'
							multiline
							rows={2}
							onChange={formik.handleChange}
							value={formik.values.description}
							name='description'
						/>
						{formik.errors.description && (
							<Typography variant='caption' color='red'>
								{formik.errors.description}
							</Typography>
						)}
						<TextField
							margin='dense'
							label='Trailer Url'
							fullWidth
							variant='standard'
							type='text'
							onChange={formik.handleChange}
							value={formik.values.trailer}
							name='trailer'
						/>
						{formik.errors.trailer && (
							<Typography variant='caption' color='red'>
								{formik.errors.trailer}
							</Typography>
						)}
						<TextField
							margin='dense'
							label='Image Url'
							fullWidth
							variant='standard'
							type='text'
							onChange={formik.handleChange}
							value={formik.values.img}
							name='img'
						/>
						{formik.errors.img && (
							<Typography variant='caption' color='red'>
								{formik.errors.img}
							</Typography>
						)}
						<DialogActions>
							<Button color='error' onClick={handleClose}>
								Cancel
							</Button>
							<Button type='submit'>Save</Button>
						</DialogActions>
					</form>
				</DialogContent>
			</Dialog>
			<Snackbar
				open={openAlert}
				autoHideDuration={3000}
				onClose={handleCloseAlert}
			>
				<Alert
					onClose={handleCloseAlert}
					severity='success'
					sx={{ width: '100%' }}
				>
					Film edited!
				</Alert>
			</Snackbar>
		</>
	);
}

export default EditFilm;
