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
import React, { useState } from 'react';
import { Close } from '@mui/icons-material';
import { TransitionProps } from '@mui/material/transitions';
import { useDispatch } from 'react-redux';

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement;
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction='up' ref={ref} {...props} />;
});

type CreateFilmProps = {
	open: boolean;
	onClose: Function;
};

const BASEURL = 'https://649be96a0480757192371ca9.mockapi.io/api/v1/films/film';

function CreateFilm(props: CreateFilmProps) {
	const dispatch = useDispatch();
	const formik = useFormik({
		initialValues: {
			title: '',
			year: '',
			nation: '',
			duration: '',
			actors: '',
			directors: '',
			description: '',
			trailer: '',
			img: '',
		},
		onSubmit: (values) => {
			fetch(BASEURL, {
				method: 'POST',
				body: JSON.stringify(values),
				headers: { 'content-type': 'application/json' },
				credentials: 'same-origin',
			})
				.then((response) => {
					if (!response.ok) {
						throw new Error(`HTTP Status: ${response.status}`);
					}
					return response.json;
				})
				.then((data) => handleSave())
				.catch((error) => console.log(error.message));
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

	const { open, onClose } = props;
	const [openAlert, setOpenAlert] = useState(false);

	function handleClose() {
		if (onClose) {
			onClose();
		}
	}

	function handleCloseAlert() {
		setOpenAlert(false);
	}

	function handleSave() {
		handleClose();
		setOpenAlert(true);
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
							<Button type='submit'>Create</Button>
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
					New film created!
				</Alert>
			</Snackbar>
		</>
	);
}

export default CreateFilm;
