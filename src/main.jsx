import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Theme } from './shared/ThemeContext.jsx';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './shared/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Theme>
				<AuthContextProvider>
					<App />
				</AuthContextProvider>
			</Theme>
		</BrowserRouter>
	</React.StrictMode>
);
