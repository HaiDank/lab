import React, { useContext, useEffect, useState } from 'react';

import jwtDecode from 'jwt-decode';
import { AuthContext } from '../../shared/AuthContext';
import {
	Avatar,
	IconButton,
	Menu,
	MenuItem,
	Switch,
	Tooltip,
} from '@mui/material';

function Profile() {
	const [anchorEl, setAnchorEl] = useState(null);
	const userContext = useContext(AuthContext);
	const open = Boolean(anchorEl);

	function handleCredentialResponse(response) {
		console.log('Encoded JWT ID token: ' + response.credential);
		var userObject = jwtDecode(response.credential);
		console.log('user::::', userObject);
		userContext.setUser(userObject);
		document.getElementById('signInDiv').hidden = true;
	}

	useEffect(() => {
		window.onload = function () {
			google.accounts.id.initialize({
				client_id:
					'989342016936-vt9b2a4l82fqj6aos9mi0hfpbm4vjv7s.apps.googleusercontent.com',
				callback: handleCredentialResponse,
			});

			google.accounts.id.renderButton(document.getElementById('signInDiv'), {
				theme: 'outline',
				size: 'large',
			});
			google.accounts.id.prompt();
		};
	}, []);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	function handleLogOut() {
		userContext.setUser(null);
		document.getElementById('signInDiv').hidden = false;
	}

	const handleItemClick = () => {
		handleLogOut(), handleClose();
	};

	return (
		<>
			<div id='signInDiv'></div>

			{userContext.user && (
				<>
					<Tooltip title='Profile'>
						<IconButton onClick={handleClick}>
							<Avatar src={userContext.user.picture}></Avatar>
						</IconButton>
					</Tooltip>
					<Menu
						onClose={handleClose}
						anchorEl={anchorEl}
						open={open}
						transformOrigin={{ horizontal: 'right', vertical: 'top' }}
						anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
					>
						<MenuItem onClick={handleItemClick}>Log out</MenuItem>
					</Menu>
				</>
			)}
		</>
	);
}

export default Profile;
