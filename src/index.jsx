import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './state/store';

// Context API
import { ColorProvider } from './contexts/ColorContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ColorProvider>
				<App />
			</ColorProvider>
		</Provider>
	</React.StrictMode>
);
