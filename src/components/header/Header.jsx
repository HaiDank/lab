import React, { useContext, useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import {
	AppBar,
	Box,
	Button,
	Stack,
	Switch,
	Toolbar,
	Typography,
} from '@mui/material';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import { ThemeContext } from '../../shared/ThemeContext';
import { AuthContext } from '../../shared/AuthContext';
import Profile from '../login/Profile';
function Header() {
	const { isDark, theme, toggleTheme } = useContext(ThemeContext);
	const userContext = useContext(AuthContext);

	const handleToggle = () => {
		toggleTheme();
	};

	const linkStyle = {
		margin: '1rem',
	};

	return (
		<>
			<AppBar
				position='static'
				sx={{
					boxShadow: 'none',
					marginBottom: '1rem',
				}}
			>
				<Toolbar
					className={theme}
					sx={{
						borderBottom: '1px solid',
					}}
				>
					<Button
						color='inherit'
						sx={{ justifyContent: 'start', textTransform: 'none' }}
					>
						<Link to='/'>
							<Typography
								variant='h4'
								display={{ xs: 'none', md: 'block' }}
							>
								Lab 7
							</Typography>
							<Typography
								variant='h4'
								display={{ xs: 'block', md: 'none' }}
							>
								L7
							</Typography>
						</Link>
					</Button>
					<Box sx={{ flexGrow: '1' }} />
					<Stack
						direction='row'
						justifyContent='center'
						alignItems='center'
						spacing={{ xs: 0, md: 5 }}
						sx={{ marginRight: 5 }}
					>
						<Link to='/about' style={linkStyle}>
							<Button color='inherit'>
								<InfoOutlinedIcon />
								<Typography
									variant='button'
									display={{ xs: 'none', md: 'block' }}
								>
									About
								</Typography>
							</Button>
						</Link>
						<Link to='/contact' style={linkStyle}>
							<Button color='inherit'>
								<ContactPageOutlinedIcon />
								<Typography
									variant='button'
									display={{ xs: 'none', md: 'block' }}
								>
									Contact
								</Typography>
							</Button>
						</Link>
						<Link to='/news' style={linkStyle}>
							<Button color='inherit'>
								<ArticleOutlinedIcon />
								<Typography
									variant='button'
									display={{ xs: 'none', md: 'block' }}
								>
									News
								</Typography>
							</Button>
						</Link>
						{userContext?.user?.email == 'dangvnhse170225@fpt.edu.vn' && (
							<Link to='/dashboard' style={linkStyle}>
								<Button color='inherit'>
									<SpaceDashboardIcon />
									<Typography
										variant='button'
										display={{ xs: 'none', md: 'block' }}
									>
										Dashboard
									</Typography>
								</Button>
							</Link>
						)}
						<Switch checked={isDark} onChange={handleToggle} />
						<Profile />
					</Stack>
				</Toolbar>
			</AppBar>
		</>
	);
}

export default Header;
