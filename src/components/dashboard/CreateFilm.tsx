import {
	AppBar,
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	IconButton,
	Modal,
	Slide,
	TextField,
	Toolbar,
	Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import { Close } from '@mui/icons-material';
import { TransitionProps } from '@mui/material/transitions';

type CreateFilmProps = {
	open: boolean;
	onClose: Function;
};

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement;
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction='up' ref={ref} {...props} />;
});

function CreateFilm(props: CreateFilmProps) {
	const formik = useFormik({
		initialValues: {
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
		onSubmit: (values) => {},
		validationSchema: Yup.object({
			img: Yup.string()
				.required('Required.')
				.min(2, 'Must be 2 characters or more'),
			title: Yup.string()
				.required('Required.')
				.min(2, 'Must be 2 characters or more'),
			year: Yup.number()
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
			trailer: Yup.string()
				.required('Required.')
				.min(10, 'Must be 10 characters or more'),
		}),
	});

	const { open, onClose } = props;

	function handleClose() {
		if (onClose) {
			onClose();
		}
	}

	return (
		<Dialog
			fullScreen
			open={open}
			onClose={handleClose}
			TransitionComponent={Transition}
		>
			<AppBar sx={{ position: 'relative' }}>
				<Toolbar>
					<Typography sx={{ ml: 2, flex: 1 }} variant='h6' component='div'>
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
						label='Email Address'
						type='email'
						fullWidth
						variant='standard'
					/>
					<DialogActions>
						<Button onClick={handleClose}>Cancel</Button>
						<Button onClick={handleClose}>Subscribe</Button>
					</DialogActions>
				</form>
			</DialogContent>
		</Dialog>
	);
}

export default CreateFilm;
