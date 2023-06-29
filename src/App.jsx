import { useContext, useEffect, useState } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Content from './components/content/Content';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import { AuthContext } from './shared/AuthContext';
import Contact from './components/content/Contact';
import { ThemeContext } from './shared/ThemeContext';
import News from './components/content/News';
import About from './components/content/About';
import { ThemeProvider, createTheme } from '@mui/material';
import NewsDetail from './components/content/NewsDetail';
import Dashboard from './components/dashboard/Dashboard';
import Error from './error/Error';
import EditFilm from './components/dashboard/EditFilm';

function App() {
	const { theme, isDark } = useContext(ThemeContext);
	const userContext = useContext(AuthContext);
	const darkTheme = createTheme({
		palette: {
			mode: 'dark',
		},
	});

	const lightTheme = createTheme({
		palette: {
			mode: 'light',
		},
	});

	return (
		<ThemeProvider theme={isDark ? darkTheme : lightTheme}>
			<div className={'body ' + theme}>
				<Header />
				<Routes>
					<Route path='/' element={<Content />}></Route>
					<Route path='/contact' element={<Contact />}></Route>
					<Route path='/news' element={<News />}></Route>
					<Route path='news/:id' element={<NewsDetail />}></Route>
					<Route path='/about' element={<About />}></Route>
					{userContext?.user?.email == 'dangvnhse170225@fpt.edu.vn' ? (
						<>
							<Route path='/dashboard' element={<Dashboard />}></Route>
							<Route path='/editFilm/:id' element={<EditFilm />}></Route>
						</>
					) : (
						<Route path='/dashboard' element={<Error />}></Route>
					)}
				</Routes>

				<Footer />
			</div>
		</ThemeProvider>
	);
}

export default App;
