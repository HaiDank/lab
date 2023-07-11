import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteFilm, removeFilm } from '../../shared/FilmReducer';

function RemoveFilm(props) {
	const { open, onClose, id } = props;
	const dispatch = useDispatch();

	function handleClose() {
		if (onClose) {
			onClose();
		}
	}

	function handleClick() {
		dispatch(deleteFilm(id));
		handleClose();
	}

	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle id='alert-dialog-title'>
				{'Are you sure you want to delete this film detail?'}
			</DialogTitle>
			<DialogContent>
				<DialogContentText id='alert-dialog-description'>
					You are about to delete a detail
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} autoFocus>
					Cancel
				</Button>
				<Button onClick={handleClick}>Delete</Button>
			</DialogActions>
		</Dialog>
	);
}

export default RemoveFilm;
